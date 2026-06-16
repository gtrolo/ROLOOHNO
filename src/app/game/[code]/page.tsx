"use client";

import { useEffect, useCallback, useRef, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { db, ref, onValue, off, Player, Room, DEFAULT_GAME_STATE, LEVEL_NAMES, normalizeRoom, normalizePlayer } from "@/lib/firebase";
import { useGameStore } from "@/store/gameStore";
import { PanicButton } from "@/components/PanicButton";
import { PauseOverlay } from "@/components/PauseOverlay";
import { TensionMeter } from "@/components/TensionMeter";
import { ConsentGateHostView, ConsentGatePlayerView } from "@/components/ConsentGate";
import { CommandScreen } from "@/components/CommandScreen";
import { RatingScreen } from "@/components/RatingScreen";
import { SecretMissionOverlay } from "@/components/SecretMission";
import {
  openConsentGate, recordConsent, startCommand,
  completeCommand, finishRating, pauseGame, clearSecretMission,
} from "@/lib/gameActions";
import { findBestMatch } from "@/lib/matchmaker";

export default function GamePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0D0D0D" }}>
        <p className="text-sm animate-pulse" style={{ color: "var(--text-secondary)" }}>Laden...</p>
      </div>
    }>
      <GamePageInner />
    </Suspense>
  );
}

function GamePageInner() {
  const { code } = useParams<{ code: string }>();
  const searchParams = useSearchParams();
  const {
    playerId: storedPlayerId, room, players, isHost: storedIsHost,
    setRoom, setPlayers, setPaused, setPlayer, setIsHost,
    activeSecretMission, setActiveSecretMission, triggerFlash, showFlash,
  } = useGameStore();

  // Allow iframes to init identity from URL params (demo split view)
  const urlPid = searchParams.get("pid");
  const urlHost = searchParams.get("host") === "1";
  const urlName = searchParams.get("name") ?? "Speler";
  useEffect(() => {
    if (urlPid && !storedPlayerId) {
      setPlayer(urlPid, urlName);
      setIsHost(urlHost);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlPid]);

  const playerId = storedPlayerId ?? urlPid ?? null;
  const isHost = storedPlayerId ? storedIsHost : urlHost;

  const roomRef = useRef<Room | null>(null);
  roomRef.current = room;
  const playersRef = useRef<Player[]>([]);
  playersRef.current = players;

  useEffect(() => {
    if (!code) return;
    const upper = code.toUpperCase();
    const rRef = ref(db, `rooms/${upper}`);
    onValue(rRef, (snap) => {
      if (!snap.exists()) return;
      const data = normalizeRoom(snap.val());
      setRoom(data);
      setPaused(!!data.paused);
      const gs = data.game_state;
      if (gs.subphase === "consent_gate") triggerFlash("rgba(192,57,43,0.15)");
      if (gs.subphase === "executing") triggerFlash("rgba(192,57,43,0.1)");
      if (navigator.vibrate) {
        if (gs.subphase === "consent_gate") navigator.vibrate([100, 50, 100]);
        if (gs.subphase === "executing") navigator.vibrate([200]);
      }
    });
    const pRef = ref(db, `rooms/${upper}/players`);
    onValue(pRef, (snap) => {
      setPlayers(snap.exists() ? Object.values(snap.val() as Record<string, unknown>).map(normalizePlayer) : []);
    });
    if (playerId) {
      const smRef = ref(db, `rooms/${upper}/secret_missions/${playerId}`);
      onValue(smRef, (snap) => {
        setActiveSecretMission(snap.exists() ? snap.val() : null);
        if (snap.exists() && navigator.vibrate) navigator.vibrate([50, 50, 50, 50, 50]);
      });
    }
    return () => {
      off(ref(db, `rooms/${upper}`));
      off(ref(db, `rooms/${upper}/players`));
      if (playerId) off(ref(db, `rooms/${upper}/secret_missions/${playerId}`));
    };
  }, [code, playerId, setRoom, setPlayers, setPaused, setActiveSecretMission, triggerFlash]);

  const handleGenerate = useCallback(async () => {
    if (!room || !isHost) return;
    const gsRaw = { ...DEFAULT_GAME_STATE, ...room.game_state };
    const gs = {
      ...gsRaw,
      completed_command_ids: Array.isArray(gsRaw.completed_command_ids) ? gsRaw.completed_command_ids : [],
    };
    const ready = players.filter((p) => p.setup_complete);

    let commandText: string | null = null;
    let commandCategory = "Algemeen";
    let commandDuration: number | null = null;

    try {
      const res = await fetch("/api/generate-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: gs.sexiness_level, players: ready.map((p) => ({ name: p.name, tags: p.consented_tags })), usedIds: gs.completed_command_ids }),
      });
      if (res.ok) {
        const data = await res.json();
        commandText = data.command; commandCategory = data.category ?? "Algemeen"; commandDuration = data.duration_seconds ?? null;
      }
    } catch { /* use local fallback */ }

    const match = findBestMatch(ready, gs.sexiness_level, gs.completed_command_ids);
    if (!match) return;
    const { playerA, playerB, command } = match;

    if (!commandText) {
      commandText = command.command.replace(/{A}/g, playerA.name).replace(/{B}/g, playerB.name).replace(/{C}/g, players[2]?.name ?? "de groep");
      commandCategory = command.category; commandDuration = command.duration_seconds;
    } else {
      commandText = commandText.replace(/{A}/g, playerA.name).replace(/{B}/g, playerB.name);
    }

    const isDemoMode = players.every((p) => p.id === playerId || ["Alex","Sam","Kim","Jesse","Jij"].includes(p.name));
    (window as Window & { _pendingCommand?: { text: string; category: string; duration: number | null } })._pendingCommand = { text: commandText, category: commandCategory, duration: commandDuration };

    if (isDemoMode) {
      await startCommand(code, commandText, [playerA.id, playerB.id], [playerA.name, playerB.name], commandCategory, gs.sexiness_level, commandDuration, command.id);
      return;
    }

    const initConsented: Record<string, boolean | null> = {};
    [playerA.id, playerB.id].forEach((id) => { initConsented[id] = null; });
    await openConsentGate(code, { player_a_id: playerA.id, player_b_id: playerB.id, player_a_name: playerA.name, player_b_name: playerB.name, category: commandCategory, level: gs.sexiness_level, consented: initConsented });
  }, [room, isHost, players, code, playerId]);

  useEffect(() => {
    if (!isHost || !room) return;
    const gsRaw2 = { ...DEFAULT_GAME_STATE, ...room.game_state };
    const gs = { ...gsRaw2, completed_command_ids: Array.isArray(gsRaw2.completed_command_ids) ? gsRaw2.completed_command_ids : [] };
    if (gs.subphase !== "executing" || !gs.consent_gate || gs.active_command) return;
    const gate = gs.consent_gate;
    if (!Object.values(gate.consented).every((v) => v === true)) return;
    const pending = (window as Window & { _pendingCommand?: { text: string; category: string; duration: number | null } })._pendingCommand;
    if (pending) {
      delete (window as Window & { _pendingCommand?: unknown })._pendingCommand;
      startCommand(code, pending.text, [gate.player_a_id, gate.player_b_id], [gate.player_a_name, gate.player_b_name], pending.category, gate.level, pending.duration);
    } else {
      const pA = players.find((p) => p.id === gate.player_a_id);
      const pB = players.find((p) => p.id === gate.player_b_id);
      if (!pA || !pB) return;
      const match = findBestMatch([pA, pB], gate.level, gs.completed_command_ids);
      if (!match) return;
      const cmd = match.command;
      startCommand(code, cmd.command.replace(/{A}/g, gate.player_a_name).replace(/{B}/g, gate.player_b_name).replace(/{C}/g, players[2]?.name ?? "de groep"), [gate.player_a_id, gate.player_b_id], [gate.player_a_name, gate.player_b_name], cmd.category, gate.level, cmd.duration_seconds, cmd.id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.game_state?.subphase, room?.game_state?.consent_gate]);

  const me = players.find((p) => p.id === playerId);
  const gsRaw3 = room ? { ...DEFAULT_GAME_STATE, ...room.game_state } : DEFAULT_GAME_STATE;
  const gs = { ...gsRaw3, completed_command_ids: Array.isArray(gsRaw3.completed_command_ids) ? gsRaw3.completed_command_ids : [] };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0D0D0D" }}>
        <p className="text-sm animate-pulse" style={{ color: "var(--text-secondary)" }}>Laden...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
      <PauseOverlay />

      <AnimatePresence>
        {showFlash && (
          <motion.div key="flash" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 pointer-events-none" style={{ backgroundColor: showFlash }} />
        )}
      </AnimatePresence>

      {activeSecretMission && (
        <SecretMissionOverlay mission={activeSecretMission}
          onComplete={() => clearSecretMission(code, playerId!)}
          onFail={() => clearSecretMission(code, playerId!)} />
      )}

      {gs.subphase === "consent_gate" && gs.consent_gate && (
        isHost
          ? <ConsentGateHostView gate={gs.consent_gate} />
          : <ConsentGatePlayerView gate={gs.consent_gate} playerId={playerId!} vetoTokens={me?.veto_tokens ?? 2}
              onAccept={() => recordConsent(code, playerId!, true)} onVeto={() => recordConsent(code, playerId!, false)} />
      )}

      {gs.subphase === "executing" && gs.active_command && (
        <CommandScreen command={gs.active_command} playerId={playerId!} isHost={isHost}
          onComplete={() => completeCommand(code, playerId!)}
          onSkip={isHost ? () => finishRating(code) : undefined}
          onStop={() => pauseGame(code)} />
      )}

      {gs.subphase === "rating" && (
        <RatingScreen onDone={() => { if (isHost) finishRating(code); }} />
      )}

      {gs.subphase === "idle" && (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-medium" style={{ color: "var(--text-secondary)" }}>
                RONDE {gs.round}
              </p>
              <p className="text-sm font-semibold text-white mt-0.5">
                Level {gs.sexiness_level} — <span style={{ color: "var(--red-light)" }}>{LEVEL_NAMES[gs.sexiness_level]}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {players.map((p) => (
                  <div key={p.id} className="w-2 h-2 rounded-full" style={{ backgroundColor: p.avatar_color }} title={p.name} />
                ))}
              </div>
              <PanicButton />
            </div>
          </div>

          {/* Main */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-5">
            {isHost ? (
              <>
                <div className="w-full" style={{ backgroundColor: "var(--card)", borderRadius: 20, overflow: "hidden" }}>
                  <div className="px-6 py-8 text-center">
                    <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "var(--red-dim)", border: "1px solid var(--red-border)" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-1">Klaar voor de volgende opdracht?</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {players.filter((p) => p.setup_complete).length}/{players.length} spelers klaar
                    </p>
                  </div>
                  <button
                    onClick={handleGenerate}
                    className="w-full py-4 font-bold text-sm tracking-wide transition-all active:scale-[0.98]"
                    style={{ backgroundColor: "var(--red)", color: "#fff" }}
                  >
                    GENEREER OPDRACHT →
                  </button>
                </div>

                {/* Intensity bars */}
                <div className="flex gap-1 items-end">
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="w-6 rounded-sm transition-all" style={{ height: 8 + n * 4, backgroundColor: n <= gs.sexiness_level ? "var(--red)" : "#222" }} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: "var(--card)" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--red)" }} />
                </div>
                <p className="text-sm font-medium text-white">Wachten op host...</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>De host genereert de volgende opdracht</p>
              </div>
            )}
          </div>

          {/* Tension meter */}
          <TensionMeter tension={gs.tension} />
        </div>
      )}
    </div>
  );
}
