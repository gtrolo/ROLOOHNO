"use client";

import { useEffect, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { db, ref, onValue, off, Player, Room, DEFAULT_GAME_STATE, LEVEL_NAMES } from "@/lib/firebase";
import { useGameStore } from "@/store/gameStore";
import { PanicButton } from "@/components/PanicButton";
import { PauseOverlay } from "@/components/PauseOverlay";
import { TensionMeter } from "@/components/TensionMeter";
import { ConsentGateHostView, ConsentGatePlayerView } from "@/components/ConsentGate";
import { CommandScreen } from "@/components/CommandScreen";
import { RatingScreen } from "@/components/RatingScreen";
import { SecretMissionOverlay } from "@/components/SecretMission";
import {
  openConsentGate,
  recordConsent,
  startCommand,
  completeCommand,
  finishRating,
  pauseGame,
  clearSecretMission,
} from "@/lib/gameActions";
import { findBestMatch } from "@/lib/matchmaker";

export default function GamePage() {
  const { code } = useParams<{ code: string }>();
  const {
    playerId, room, players, isHost,
    setRoom, setPlayers, setPaused, activeSecretMission,
    setActiveSecretMission, triggerFlash, showFlash,
  } = useGameStore();

  const roomRef = useRef<Room | null>(null);
  roomRef.current = room;
  const playersRef = useRef<Player[]>([]);
  playersRef.current = players;

  // ─── Firebase subscriptions ────────────────────────────────────────────────
  useEffect(() => {
    if (!code) return;
    const upperCode = code.toUpperCase();

    const rRef = ref(db, `rooms/${upperCode}`);
    onValue(rRef, (snap) => {
      if (!snap.exists()) return;
      const data = snap.val() as Room;
      setRoom(data);
      setPaused(!!data.paused);
      const gs = data.game_state;
      if (gs.subphase === "consent_gate") triggerFlash("#FF2400");
      if (gs.subphase === "executing") triggerFlash("#FF007F");
      if (navigator.vibrate) {
        if (gs.subphase === "consent_gate") navigator.vibrate([100, 50, 100]);
        if (gs.subphase === "executing") navigator.vibrate([200]);
      }
    });

    const pRef = ref(db, `rooms/${upperCode}/players`);
    onValue(pRef, (snap) => {
      if (!snap.exists()) { setPlayers([]); return; }
      setPlayers(Object.values(snap.val() as Record<string, Player>));
    });

    // Secret missions for this player
    if (playerId) {
      const smRef = ref(db, `rooms/${upperCode}/secret_missions/${playerId}`);
      onValue(smRef, (snap) => {
        if (!snap.exists()) { setActiveSecretMission(null); return; }
        setActiveSecretMission(snap.val());
        if (navigator.vibrate) navigator.vibrate([50, 50, 50, 50, 50]);
      });
    }

    return () => {
      off(ref(db, `rooms/${upperCode}`));
      off(ref(db, `rooms/${upperCode}/players`));
      if (playerId) off(ref(db, `rooms/${upperCode}/secret_missions/${playerId}`));
    };
  }, [code, playerId, setRoom, setPlayers, setPaused, setActiveSecretMission, triggerFlash]);

  // ─── Host: generate next dare ──────────────────────────────────────────────
  const handleGenerate = useCallback(async () => {
    if (!room || !isHost) return;
    const gs = { ...DEFAULT_GAME_STATE, ...room.game_state };
    const readyPlayers = players.filter((p) => p.setup_complete);

    // Try AI if available, fall back to local commands
    let commandText: string | null = null;
    let commandCategory = "Algemeen";
    let commandDuration: number | null = null;

    try {
      const res = await fetch("/api/generate-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level: gs.sexiness_level,
          players: readyPlayers.map((p) => ({
            name: p.name,
            tags: p.consented_tags,
          })),
          usedIds: gs.completed_command_ids,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        commandText = data.command;
        commandCategory = data.category ?? "Algemeen";
        commandDuration = data.duration_seconds ?? null;
      }
    } catch {
      // AI unavailable — use local matchmaker below
    }

    // Local matchmaker fallback
    const match = findBestMatch(readyPlayers, gs.sexiness_level, gs.completed_command_ids);
    if (!match) return;

    const { playerA, playerB, command } = match;

    if (!commandText) {
      commandText = command.command
        .replace(/{A}/g, playerA.name)
        .replace(/{B}/g, playerB.name)
        .replace(/{C}/g, players[2]?.name ?? "de groep");
      commandCategory = command.category;
      commandDuration = command.duration_seconds;
    } else {
      // AI command: still inject player names for context
      commandText = commandText
        .replace(/{A}/g, playerA.name)
        .replace(/{B}/g, playerB.name);
    }

    const initConsented: Record<string, boolean | null> = {};
    [playerA.id, playerB.id].forEach((id) => { initConsented[id] = null; });

    await openConsentGate(code, {
      player_a_id: playerA.id,
      player_b_id: playerB.id,
      player_a_name: playerA.name,
      player_b_name: playerB.name,
      category: commandCategory,
      level: gs.sexiness_level,
      consented: initConsented,
    });

    // Store command text temporarily so host can reveal after consent
    // We embed it in the gate state via a side-channel write after consent
    (window as Window & { _pendingCommand?: { text: string; category: string; duration: number | null } })._pendingCommand = {
      text: commandText,
      category: commandCategory,
      duration: commandDuration,
    };
  }, [room, isHost, players, code]);

  // ─── After consent: reveal command ────────────────────────────────────────
  useEffect(() => {
    if (!isHost || !room) return;
    const gs = { ...DEFAULT_GAME_STATE, ...room.game_state };
    if (gs.subphase !== "executing" || !gs.consent_gate || gs.active_command) return;

    const gate = gs.consent_gate;
    const allAccepted = Object.values(gate.consented).every((v) => v === true);
    if (!allAccepted) return;

    const pending = (window as Window & { _pendingCommand?: { text: string; category: string; duration: number | null } })._pendingCommand;

    if (pending) {
      delete (window as Window & { _pendingCommand?: unknown })._pendingCommand;
      startCommand(
        code,
        pending.text,
        [gate.player_a_id, gate.player_b_id],
        [gate.player_a_name, gate.player_b_name],
        pending.category,
        gate.level,
        pending.duration
      );
    } else {
      // Fallback: re-run matchmaker
      const pA = players.find((p) => p.id === gate.player_a_id);
      const pB = players.find((p) => p.id === gate.player_b_id);
      if (!pA || !pB) return;
      const match = findBestMatch([pA, pB], gate.level, gs.completed_command_ids);
      if (!match) return;
      const cmd = match.command;
      const resolved = cmd.command
        .replace(/{A}/g, gate.player_a_name)
        .replace(/{B}/g, gate.player_b_name)
        .replace(/{C}/g, players[2]?.name ?? "de groep");
      startCommand(code, resolved, [gate.player_a_id, gate.player_b_id],
        [gate.player_a_name, gate.player_b_name], cmd.category, gate.level, cmd.duration_seconds);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.game_state?.subphase, room?.game_state?.consent_gate]);

  const me = players.find((p) => p.id === playerId);
  const gs = room ? { ...DEFAULT_GAME_STATE, ...room.game_state } : DEFAULT_GAME_STATE;

  if (!room) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-xs tracking-widest uppercase animate-pulse" style={{ color: "rgba(255,255,255,0.3)" }}>
          LADEN...
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PauseOverlay />
      <PanicButton />

      <AnimatePresence>
        {showFlash && (
          <motion.div
            key="flash"
            initial={{ opacity: 0.12 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pointer-events-none"
            style={{ backgroundColor: showFlash }}
          />
        )}
      </AnimatePresence>

      {activeSecretMission && (
        <SecretMissionOverlay
          mission={activeSecretMission}
          onComplete={() => clearSecretMission(code, playerId!)}
          onFail={() => clearSecretMission(code, playerId!)}
        />
      )}

      {gs.subphase === "consent_gate" && gs.consent_gate && (
        <>
          {isHost ? (
            <ConsentGateHostView gate={gs.consent_gate} />
          ) : (
            <ConsentGatePlayerView
              gate={gs.consent_gate}
              playerId={playerId!}
              vetoTokens={me?.veto_tokens ?? 2}
              onAccept={() => recordConsent(code, playerId!, true)}
              onVeto={() => recordConsent(code, playerId!, false)}
            />
          )}
        </>
      )}

      {gs.subphase === "executing" && gs.active_command && (
        <CommandScreen
          command={gs.active_command}
          playerId={playerId!}
          isHost={isHost}
          onComplete={() => completeCommand(code, playerId!)}
          onSkip={isHost ? () => finishRating(code) : undefined}
          onStop={() => pauseGame(code)}
        />
      )}

      {gs.subphase === "rating" && (
        <RatingScreen onDone={() => { if (isHost) finishRating(code); }} />
      )}

      {gs.subphase === "idle" && (
        <div className="flex flex-col min-h-screen px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                RONDE {gs.round}
              </p>
              <p className="text-xs mt-1" style={{ color: LEVEL_NAMES[gs.sexiness_level] === "EXTREEM" ? "#FF2400" : "#FFBF00" }}>
                Level {gs.sexiness_level} — {LEVEL_NAMES[gs.sexiness_level]}
              </p>
            </div>
            <div className="flex gap-2">
              {players.map((p) => (
                <div
                  key={p.id}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: p.avatar_color }}
                  title={p.name}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {isHost ? (
              <>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleGenerate}
                  className="w-full py-6 font-black text-lg tracking-widest uppercase"
                  style={{ backgroundColor: "#FF007F", color: "#000" }}
                >
                  GENEREER OPDRACHT →
                </motion.button>
                <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {players.filter((p) => p.setup_complete).length}/{players.length} spelers klaar
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="w-2 h-2 rounded-full mx-auto mb-4 animate-pulse" style={{ backgroundColor: "#FF007F" }} />
                <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Wachten op host...
                </p>
              </div>
            )}
          </div>

          <TensionMeter tension={gs.tension} />
        </div>
      )}
    </div>
  );
}
