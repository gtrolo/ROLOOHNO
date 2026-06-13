import { supabase, GameState, DEFAULT_GAME_STATE, ConsentGateState, ActiveCommand } from "./supabase";
import { v4 as uuidv4 } from "uuid";

async function getRoomByCode(roomCode: string) {
  const { data } = await supabase
    .from("rooms")
    .select("*")
    .eq("room_code", roomCode.toUpperCase())
    .single();
  return data;
}

async function patchGameState(roomId: string, patch: Partial<GameState>) {
  const { data: room } = await supabase
    .from("rooms")
    .select("game_state")
    .eq("id", roomId)
    .single();

  if (!room) throw new Error("Room not found");

  const merged: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state, ...patch };
  const { error } = await supabase
    .from("rooms")
    .update({ game_state: merged })
    .eq("id", roomId);

  if (error) throw error;
  return merged;
}

export async function startSetupPhase(roomCode: string) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  return patchGameState(room.id, { phase: "setup", subphase: "idle" });
}

export async function startPlayingPhase(roomCode: string) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  return patchGameState(room.id, { phase: "playing", subphase: "idle" });
}

export async function updateSexinessLevel(roomCode: string, level: number) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  return patchGameState(room.id, { sexiness_level: level });
}

export async function openConsentGate(roomCode: string, gate: ConsentGateState) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  return patchGameState(room.id, {
    subphase: "consent_gate",
    consent_gate: gate,
  });
}

export async function recordConsent(
  roomCode: string,
  playerId: string,
  accepted: boolean
) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  const gs: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state };

  if (!gs.consent_gate) throw new Error("No consent gate active");

  const updatedGate: ConsentGateState = {
    ...gs.consent_gate,
    consented: { ...gs.consent_gate.consented, [playerId]: accepted },
  };

  if (!accepted) {
    // Veto: cancel, back to idle
    const { data: player } = await supabase
      .from("players")
      .select("veto_tokens")
      .eq("id", playerId)
      .single();
    if (player && player.veto_tokens > 0) {
      await supabase
        .from("players")
        .update({ veto_tokens: player.veto_tokens - 1 })
        .eq("id", playerId);
    }
    return patchGameState(room.id, {
      subphase: "idle",
      consent_gate: null,
    });
  }

  // Check if all required players have accepted
  const allAccepted = Object.values(updatedGate.consented).every(
    (v) => v === true
  );

  if (allAccepted) {
    return patchGameState(room.id, {
      subphase: "executing",
      consent_gate: updatedGate,
    });
  }

  return patchGameState(room.id, { consent_gate: updatedGate });
}

export async function startCommand(
  roomCode: string,
  command: string,
  targetPlayerIds: string[],
  targetNames: string[],
  category: string,
  level: number,
  durationSeconds: number | null
) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  const gs: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state };

  const activeCommand: ActiveCommand = {
    id: uuidv4(),
    command,
    target_player_ids: targetPlayerIds,
    target_names: targetNames,
    category,
    level,
    duration_seconds: durationSeconds,
    started_at: new Date().toISOString(),
    completed_by: [],
  };

  const newTension = Math.min(100, (gs.tension || 0) + level * 4);

  return patchGameState(room.id, {
    subphase: "executing",
    active_command: activeCommand,
    tension: newTension,
    round: (gs.round || 0) + 1,
    consent_gate: null,
  });
}

export async function completeCommand(roomCode: string, playerId: string) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  const gs: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state };

  if (!gs.active_command) return;

  const completedBy = [...new Set([...gs.active_command.completed_by, playerId])];
  const targetCount = gs.active_command.target_player_ids.length;
  const allDone = completedBy.length >= Math.max(1, targetCount);

  const updatedCommand: ActiveCommand = { ...gs.active_command, completed_by: completedBy };

  if (allDone) {
    return patchGameState(room.id, {
      subphase: "rating",
      active_command: updatedCommand,
      completed_command_ids: [
        ...gs.completed_command_ids,
        gs.active_command.id,
      ],
    });
  }

  return patchGameState(room.id, { active_command: updatedCommand });
}

export async function finishRating(roomCode: string) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  return patchGameState(room.id, {
    subphase: "idle",
    active_command: null,
  });
}

export async function pauseGame(roomCode: string) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");
  const gs: GameState = { ...DEFAULT_GAME_STATE, ...room.game_state };
  const wasPaused = gs.phase === "paused";
  return patchGameState(room.id, {
    phase: wasPaused ? "playing" : "paused",
  });
}

export async function sendSecretMission(
  roomCode: string,
  targetPlayerId: string,
  mission: string,
  durationSeconds: number = 300
) {
  const room = await getRoomByCode(roomCode);
  if (!room) throw new Error("Room not found");

  // Deliver via Supabase broadcast (channel-based, not DB)
  await supabase.channel(`room:${roomCode}`).send({
    type: "broadcast",
    event: "SECRET_MISSION",
    payload: {
      id: uuidv4(),
      target_player_id: targetPlayerId,
      mission,
      duration_seconds: durationSeconds,
      assigned_at: new Date().toISOString(),
    },
  });
}
