"use client";

import { useEffect, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, Player, Room, DEFAULT_GAME_STATE, LEVEL_NAMES } from "@/lib/supabase";
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
} from "@/lib/gameActions";
import { findBestMatch } from "@/lib/matchmaker";

export default function GamePage() {
  const { code } = useParams<{ code: string }>();
  const {
    playerId, room, players, isHost,
    setRoom, setPlayers, setPaused, activeSecretMission,
    setActiveSecretMission, triggerFlash,
  } = useGameStore();

  const roomRef = useRef<Room | null>(null);
  roomRef.current = room;
  const playersRef = useRef<Player[]>([]);
  playersRef.current = players;

  // ─── Supabase subscription ─────────────────────────────────────────────────
  useEffect(() => {
    if (!code) return;
    let roomId: string;

    async function bootstrap() {
      const { data: r } = await supabase
        .from("rooms")
        .select("*")
        .eq("room_code", code.toUpperCase())
        .single();
      if (!r) return;
      setRoom(r);
      roomId = r.id;

      const { data: ps } = await supabase
        .from("players")
        .select("*")
        .eq("room_id", r.id);
      setPlayers(ps ?? []);
    }

    bootstrap();

    const ch = supabase
      .channel(`game:${code}`)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "rooms" },
        (payload) => {
          const updated = payload.new as Room;
          setRoom(updated);
          const gs = updated.game_state;
          // Flash on phase transitions
          if (gs.subphase === "consent_gate") triggerFlash("#FF2400");
          if (gs.subphase === "executing") triggerFlash("#FF007F");
          // Haptics
          if (navigator.vibrate) {
            if (gs.subphase === "consent_gate") navigator.vibrate([100, 50, 100]);
            if (gs.subphase === "executing") navigator.vibrate([200]);
          }
        }
      )
      .on("postgres_changes", { event: "*", schema: "public", table: "players" },
        async () => {
          if (!roomId) return;
          const { data } = await supabase.from("players").select("*").eq("room_id", roomId);
          setPlayers(data ?? []);
        }
      )
      .on("broadcast", { event: "PANIC" }, ({ payload }) => {
        setPaused(payload.paused);
        if (payload.paused && navigator.vibrate) navigator.vibrate([200, 100, 200]);
      })
      .on("broadcast", { event: "SECRET_MISSION" }, ({ payload }) => {
        if (payload.target_player_id === playerId) {
          setActiveSecretMission(payload);
          if (navigator.vibrate) navigator.vibrate([50, 50, 50, 50, 50]);
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, [code, playerId, setRoom, setPlayers, setPaused, setActiveSecretMission, triggerFlash]);

  // ─── Host: generate next dare ──────────────────────────────────────────────
  const handleGenerate = useCallback(async () => {
    if (!room || !isHost) return;
    const gs = { ...DEFAULT_GAME_STATE, ...room.game_state };
    const match = findBestMatch(
      players.filter((p) => p.setup_complete),
      gs.sexiness_level,
      gs.completed_command_ids
    );
    if (!match) return;

    const { playerA, playerB, command } = match;
    const consentedPlayers = [playerA.id, playerB.id];
    const initConsented: Record<string, boolean | null> = {};
    consentedPlayers.forEach((id) => { initConsented[id] = null; });

    await openConsentGate(code, {
      player_a_id: playerA.id,
      player_b_id: playerB.id,
      player_a_name: playerA.name,
      player_b_name: playerB.name,
      category: command.category,
      level: gs.sexiness_level,
      consented: initConsented,
    });
  }, [room, isHost, players, code]);

  // ─── After consent: start execution ───────────────────────────────────────
  useEffect(() => {
    if (!isHost || !room) return;
    const gs = { ...DEFAULT_GAME_STATE, ...room.game_state };
    if (gs.subphase !== "executing" || !gs.consent_gate || gs.active_command) return;

    const gate = gs.consent_gate;
    const allAccepted = Object.values(gate.consented).every((v) => v === true);
    if (!allAccepted) return;

    // Get the actual command from matchmaker (re-run with gate data)
    const pA = players.find((p) => p.id === gate.player_a_id);
    const pB = players.find((p) => p.id === gate.player_b_id);
    if (!pA || !pB) return;

    const match = findBestMatch(
      [pA, pB],
      gate.level,
      gs.completed_command_ids
    );
    if (!match) return;

    const cmd = match.command;
    const resolvedCommand = cmd.command
      .replace(/{A}/g, gate.player_a_name)
      .replace(/{B}/g, gate.player_b_name)
      .replace(/{C}/g, players[2]?.name ?? "de groep");

    startCommand(
      code,
      resolvedCommand,
      [gate.player_a_id, gate.player_b_id],
      [gate.player_a_name, gate.player_b_name],
      cmd.category,
      gate.level,
      cmd.duration_seconds
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.game_state?.subphase, room?.game_state?.consent_gate]);

  // ─── My player data ────────────────────────────────────────────────────────
  const me = players.find((p) => p.id === playerId);
  const gs = room ? { ...DEFAULT_GAME_STATE, ...room.game_state } : DEFAULT_GAME_STATE;

  // ─── Flash overlay ─────────────────────────────────────────────────────────
  const { showFlash } = useGameStore();

  // ─── Render ────────────────────────────────────────────────────────────────
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

      {/* Flash overlay */}
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

      {/* Secret mission overlay */}
      {activeSecretMission && (
        <SecretMissionOverlay
          mission={activeSecretMission}
          onComplete={() => setActiveSecretMission(null)}
          onFail={() => setActiveSecretMission(null)}
        />
      )}

      {/* ── CONSENT GATE ── */}
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

      {/* ── EXECUTING ── */}
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

      {/* ── RATING ── */}
      {gs.subphase === "rating" && (
        <RatingScreen onDone={() => { if (isHost) finishRating(code); }} />
      )}

      {/* ── IDLE ── */}
      {gs.subphase === "idle" && (
        <div className="flex flex-col min-h-screen px-6 py-10">
          {/* Header */}
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

          {/* Main content */}
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

          {/* Tension meter at bottom */}
          <TensionMeter tension={gs.tension} />
        </div>
      )}
    </div>
  );
}
