"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, Player } from "@/lib/supabase";
import { useGameStore } from "@/store/gameStore";
import { PanicButton } from "@/components/PanicButton";

export default function LobbyPage() {
  const { code } = useParams<{ code: string }>();
  const { playerId, playerName, isHost, setRoom, setPaused } = useGameStore();
  const [players, setPlayers] = useState<Player[]>([]);
  const [roomId, setRoomId] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    async function bootstrap() {
      const { data: room } = await supabase
        .from("rooms")
        .select("*")
        .eq("room_code", code.toUpperCase())
        .single();

      if (!room) return;
      setRoom(room);
      setRoomId(room.id);

      const { data: existingPlayers } = await supabase
        .from("players")
        .select("*")
        .eq("room_id", room.id);

      setPlayers(existingPlayers ?? []);
    }

    bootstrap();
  }, [code, setRoom]);

  useEffect(() => {
    if (!roomId) return;

    const channel = supabase
      .channel(`lobby:${code}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "players",
          filter: `room_id=eq.${roomId}`,
        },
        async () => {
          const { data } = await supabase
            .from("players")
            .select("*")
            .eq("room_id", roomId);
          setPlayers(data ?? []);
        }
      )
      .on("broadcast", { event: "PANIC" }, ({ payload }) => {
        setPaused(payload.paused);
        if (payload.paused && navigator.vibrate) {
          navigator.vibrate([200, 100, 200]);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomId, code, setPaused]);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      <PanicButton />

      <div className="w-full max-w-sm flex flex-col gap-10">
        <div className="text-center">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-2">
            Room Code
          </p>
          <h1 className="text-6xl font-black tracking-[0.3em] text-white">
            {code}
          </h1>
          {isHost && (
            <p className="text-[#FFBF00] text-xs tracking-widest uppercase mt-2">
              Jij bent de Host
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            Spelers ({players.length})
          </p>
          <AnimatePresence>
            {players.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                className="flex items-center gap-3 py-3 border-b border-white/5"
              >
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.avatar_color }}
                />
                <span className="text-white font-medium tracking-wide">
                  {p.name}
                </span>
                {p.id === playerId && (
                  <span className="ml-auto text-white/30 text-xs">jij</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {players.length === 0 && (
            <p className="text-white/20 text-sm">Wachten op spelers...</p>
          )}
        </div>

        {isHost && players.length >= 2 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-4 bg-[#FF007F] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors"
            onClick={() => {/* Phase 2: start game */}}
          >
            Start het Spel →
          </motion.button>
        )}

        {!isHost && (
          <p className="text-white/20 text-xs text-center tracking-widest uppercase">
            Wachten op de host om te starten...
          </p>
        )}
      </div>
    </main>
  );
}
