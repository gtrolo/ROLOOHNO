"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, Player, DEFAULT_GAME_STATE, LEVEL_NAMES } from "@/lib/supabase";
import { useGameStore } from "@/store/gameStore";
import { PanicButton } from "@/components/PanicButton";
import { PlayerChip } from "@/components/PlayerChip";
import { SexinessSlider } from "@/components/SexinessSlider";
import { updateSexinessLevel, startSetupPhase } from "@/lib/gameActions";

export default function LobbyPage() {
  const { code } = useParams<{ code: string }>();
  const router = useRouter();
  const { playerId, isHost, room, players, setRoom, setPlayers, setPaused } = useGameStore();
  const [roomId, setRoomId] = useState<string | null>(null);
  const [localLevel, setLocalLevel] = useState(2);

  const gs = room ? { ...DEFAULT_GAME_STATE, ...room.game_state } : DEFAULT_GAME_STATE;

  // Sync local level with room state
  useEffect(() => {
    if (room?.game_state?.sexiness_level) {
      setLocalLevel(room.game_state.sexiness_level);
    }
  }, [room?.game_state?.sexiness_level]);

  // Bootstrap
  useEffect(() => {
    if (!code) return;

    async function bootstrap() {
      const { data: r } = await supabase
        .from("rooms")
        .select("*")
        .eq("room_code", code.toUpperCase())
        .single();
      if (!r) return;
      setRoom(r);
      setRoomId(r.id);
      const { data: ps } = await supabase
        .from("players")
        .select("*")
        .eq("room_id", r.id);
      setPlayers(ps ?? []);
    }

    bootstrap();
  }, [code, setRoom, setPlayers]);

  // Realtime
  useEffect(() => {
    if (!roomId) return;

    const ch = supabase
      .channel(`lobby:${code}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "players", filter: `room_id=eq.${roomId}` },
        async () => {
          const { data } = await supabase.from("players").select("*").eq("room_id", roomId);
          setPlayers(data ?? []);
        }
      )
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "rooms" },
        (payload) => {
          setRoom(payload.new as import("@/lib/supabase").Room);
          const newGs = payload.new?.game_state;
          if (newGs?.phase === "setup") {
            router.push(`/setup/${code}`);
          }
        }
      )
      .on("broadcast", { event: "PANIC" }, ({ payload }) => {
        setPaused(payload.paused);
      })
      .subscribe();

    return () => { supabase.removeChannel(ch); };
  }, [roomId, code, setPlayers, setRoom, setPaused, router]);

  async function handleLevelChange(level: number) {
    setLocalLevel(level);
    await updateSexinessLevel(code, level);
    // Haptic + flash for all clients via the rooms table update
    if (navigator.vibrate) navigator.vibrate(level >= 4 ? [60, 20, 60] : [30]);
  }

  async function handleStart() {
    if (!isHost || players.length < 2) return;
    await startSetupPhase(code);
    router.push(`/setup/${code}`);
  }

  const levelColor = localLevel >= 4 ? "#FF2400" : "#FF007F";

  return (
    <main className="min-h-screen bg-black flex flex-col px-6 py-10">
      <PanicButton />

      {/* Room code */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
          ROOM CODE
        </p>
        <h1
          className="font-mono font-black text-white"
          style={{ fontSize: 72, letterSpacing: "0.4em" }}
        >
          {code}
        </h1>
        {isHost && (
          <p className="text-xs tracking-widest uppercase mt-2" style={{ color: "#FFBF00" }}>
            JIJ BENT DE HOST
          </p>
        )}
        {!isHost && (
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Level</span>
            <span className="text-xs font-black" style={{ color: levelColor }}>
              {localLevel} — {LEVEL_NAMES[localLevel]}
            </span>
          </div>
        )}
      </div>

      {/* Players */}
      <div className="flex-1">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
          SPELERS ({players.length})
        </p>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {players.map((p: Player) => (
              <PlayerChip
                key={p.id}
                name={p.name}
                color={p.avatar_color}
                isSelf={p.id === playerId}
                isHost={p.id === room?.host_id}
              />
            ))}
          </AnimatePresence>
          {players.length === 0 && (
            <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.2)" }}>
              Wachten op spelers...
            </p>
          )}
        </div>
      </div>

      {/* Host controls */}
      {isHost && (
        <div className="flex flex-col gap-6 mt-8">
          <div
            className="p-5"
            style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <SexinessSlider value={localLevel} onChange={handleLevelChange} />
          </div>

          <AnimatePresence>
            {players.length >= 2 && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleStart}
                className="w-full py-5 font-black text-sm tracking-widest uppercase"
                style={{ backgroundColor: "#FF007F", color: "#000" }}
              >
                START HET SPEL →
              </motion.button>
            )}
          </AnimatePresence>

          {players.length < 2 && (
            <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              Minimaal 2 spelers nodig
            </p>
          )}
        </div>
      )}

      {/* Player waiting */}
      {!isHost && (
        <div className="mt-8 text-center">
          <p className="text-xs tracking-widest uppercase animate-pulse" style={{ color: "rgba(255,255,255,0.25)" }}>
            Wachten op de host om te starten...
          </p>
        </div>
      )}
    </main>
  );
}
