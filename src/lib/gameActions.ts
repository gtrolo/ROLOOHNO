import { db, ref, set, update, get, remove, DEFAULT_GAME_STATE } from "./firebase";
import type { ConsentGateState, GameState, Room, Player } from "./firebase";

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function getRoomByCode(code: string): Promise<Room | null> {
  const snap = await get(ref(db, `rooms/${code.toUpperCase()}`));
  return snap.exists() ? (snap.val() as Room) : null;
}

// Atomic shallow-merge: only the specified keys change, others are untouched.
// This prevents completed_command_ids from being reset by unrelated writes.
async function patchGameState(code: string, patch: Partial<GameState>) {
  const updates: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(patch)) {
    updates[`game_state/${key}`] = val ?? null;
  }
  await update(ref(db, `rooms/${code.toUpperCase()}`), updates);
}

// ─── Room / Player Creation ───────────────────────────────────────────────────

export async function createRoom(code: string, hostId: string): Promise<Room> {
  const room: Room = {
    id: code,
    room_code: code,
    host_id: hostId,
    game_state: DEFAULT_GAME_STATE,
    created_at: new Date().toISOString(),
    paused: false,
  };
  await set(ref(db, `rooms/${code}`), room);
  return room;
}

export async function joinRoom(code: string, player: Player): Promise<void> {
  await set(ref(db, `rooms/${code}/players/${player.id}`), player);
}

export async function updatePlayer(code: string, playerId: string, patch: Partial<Player>): Promise<void> {
  await update(ref(db, `rooms/${code}/players/${playerId}`), patch);
}

// ─── Phase Transitions ────────────────────────────────────────────────────────

export async function startSetupPhase(code: string): Promise<void> {
  await patchGameState(code, { phase: "setup", subphase: "idle" });
}

export async function startPlayingPhase(code: string): Promise<void> {
  await patchGameState(code, { phase: "playing", subphase: "idle" });
}

export async function updateSexinessLevel(code: string, level: number): Promise<void> {
  await patchGameState(code, { sexiness_level: level });
}

// ─── Consent Gate ─────────────────────────────────────────────────────────────

export async function openConsentGate(code: string, gate: ConsentGateState): Promise<void> {
  await patchGameState(code, {
    subphase: "consent_gate",
    consent_gate: gate,
    active_command: null,
  });
}

export async function recordConsent(code: string, playerId: string, accepted: boolean): Promise<void> {
  const room = await getRoomByCode(code);
  if (!room) return;
  const gs: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state };
  if (!gs.consent_gate) return;

  const updatedConsented = { ...gs.consent_gate.consented, [playerId]: accepted };

  if (!accepted) {
    const players = await getPlayers(code);
    const player = players.find((p) => p.id === playerId);
    if (player && player.veto_tokens > 0) {
      await updatePlayer(code, playerId, { veto_tokens: player.veto_tokens - 1 });
    }
    await patchGameState(code, {
      subphase: "idle",
      consent_gate: null,
      active_command: null,
    });
    return;
  }

  const newGate: ConsentGateState = { ...gs.consent_gate, consented: updatedConsented };
  const allAccepted = Object.values(updatedConsented).every((v) => v === true);

  if (allAccepted) {
    await patchGameState(code, { subphase: "executing", consent_gate: newGate });
  } else {
    await patchGameState(code, { consent_gate: newGate });
  }
}

// ─── Command Execution ────────────────────────────────────────────────────────

export async function startCommand(
  code: string,
  command: string,
  targetPlayerIds: string[],
  targetNames: string[],
  category: string,
  level: number,
  durationSeconds: number | null,
  commandId?: string
): Promise<void> {
  const cmdId = commandId ?? Date.now().toString(36);
  await patchGameState(code, {
    subphase: "executing",
    active_command: {
      id: cmdId,
      command,
      target_player_ids: targetPlayerIds,
      target_names: targetNames,
      category,
      level,
      duration_seconds: durationSeconds,
      started_at: new Date().toISOString(),
      completed_by: [],
    },
  });
}

function toArr<T>(v: T[] | null | undefined | Record<string, T>): T[] {
  if (Array.isArray(v)) return v;
  if (v && typeof v === "object") return Object.values(v) as T[];
  return [];
}

export async function completeCommand(code: string, playerId: string): Promise<void> {
  const room = await getRoomByCode(code);
  if (!room) return;
  const gs: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state };
  if (!gs.active_command) return;

  const completedBy = [...toArr(gs.active_command.completed_by), playerId];
  const allDone = toArr(gs.active_command.target_player_ids).every((id) => completedBy.includes(id));

  if (allDone) {
    const completedIds = [...toArr(gs.completed_command_ids), gs.active_command.id];
    await patchGameState(code, {
      subphase: "rating",
      active_command: { ...gs.active_command, completed_by: completedBy },
      completed_command_ids: completedIds,
      tension: Math.min(100, gs.tension + Math.floor(gs.sexiness_level * 4)),
    });
  } else {
    await patchGameState(code, {
      active_command: { ...gs.active_command, completed_by: completedBy },
    });
  }
}

export async function finishRating(code: string): Promise<void> {
  const room = await getRoomByCode(code);
  if (!room) return;
  const round = (room.game_state?.round ?? 0) + 1;
  await patchGameState(code, {
    subphase: "idle",
    active_command: null,
    consent_gate: null,
    round,
  });
}

// ─── Pause / Panic ────────────────────────────────────────────────────────────

export async function pauseGame(code: string): Promise<void> {
  await update(ref(db, `rooms/${code.toUpperCase()}`), { paused: true });
}

export async function resumeGame(code: string): Promise<void> {
  await update(ref(db, `rooms/${code.toUpperCase()}`), { paused: false });
}

// ─── Secret Mission ───────────────────────────────────────────────────────────

export async function sendSecretMission(
  code: string,
  targetPlayerId: string,
  mission: string,
  durationSeconds: number
): Promise<void> {
  await set(ref(db, `rooms/${code}/secret_missions/${targetPlayerId}`), {
    id: Date.now().toString(36),
    target_player_id: targetPlayerId,
    mission,
    duration_seconds: durationSeconds,
    assigned_at: new Date().toISOString(),
    completed: false,
  });
}

export async function clearSecretMission(code: string, targetPlayerId: string): Promise<void> {
  await remove(ref(db, `rooms/${code}/secret_missions/${targetPlayerId}`));
}

// ─── Util ─────────────────────────────────────────────────────────────────────

export async function getPlayers(code: string): Promise<Player[]> {
  const snap = await get(ref(db, `rooms/${code}/players`));
  if (!snap.exists()) return [];
  return Object.values(snap.val() as Record<string, Player>);
}
