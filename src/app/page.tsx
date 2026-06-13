"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { createRoom, joinRoom } from "@/lib/roomUtils";
import { joinRoom as fbJoinRoom, startPlayingPhase, updatePlayer } from "@/lib/gameActions";
import { AVATAR_COLORS } from "@/lib/firebase";
import { useGameStore } from "@/store/gameStore";

type Mode = "home" | "create" | "join";

export default function HomePage() {
  const router = useRouter();
  const { setPlayer, setIsHost } = useGameStore();
  const [mode, setMode] = useState<Mode>("home");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!name.trim()) return;
    setLoading(true);
    setError("");
    try {
      const id = uuidv4();
      setPlayer(id, name.trim());
      setIsHost(true);
      const roomCode = await createRoom(id);
      router.push(`/lobby/${roomCode}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Fout bij aanmaken.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDemo() {
    setLoading(true);
    try {
      const hostId = uuidv4();
      setPlayer(hostId, "Jij");
      setIsHost(true);
      const roomCode = await createRoom(hostId);

      const allTags = ["Kussen","Aanraken","Blinddoek","Spanking","Rollenspel","Dominantie","Submissie"];
      const demoPlayers = [
        { name: "Alex", tags: ["Kussen","Aanraken","Blinddoek","Spanking"] },
        { name: "Sam",  tags: ["Kussen","Aanraken","Rollenspel","Dominantie","Submissie"] },
      ];

      // Add host as player
      await fbJoinRoom(roomCode, {
        id: hostId, room_id: roomCode, name: "Jij",
        avatar_color: AVATAR_COLORS[0], consented_tags: allTags,
        hard_limits: [], veto_tokens: 2, status: "active", setup_complete: true,
      });

      // Add demo bots
      for (let i = 0; i < demoPlayers.length; i++) {
        const p = demoPlayers[i];
        const pid = uuidv4();
        await fbJoinRoom(roomCode, {
          id: pid, room_id: roomCode, name: p.name,
          avatar_color: AVATAR_COLORS[i + 1], consented_tags: p.tags,
          hard_limits: [], veto_tokens: 2, status: "active", setup_complete: true,
        });
      }

      await startPlayingPhase(roomCode);
      router.push(`/game/${roomCode}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Demo fout.");
    } finally {
      setLoading(false);
    }
  }

  async function handleJoin() {
    if (!name.trim() || code.length < 4) return;
    setLoading(true);
    setError("");
    try {
      const id = uuidv4();
      setPlayer(id, name.trim());
      setIsHost(false);
      await joinRoom(code.trim(), name.trim(), id);
      router.push(`/lobby/${code.toUpperCase()}`);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Fout bij joinen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <AnimatePresence mode="wait">
        {mode === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="flex flex-col items-center gap-12 w-full max-w-sm"
          >
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-widest text-white mb-2">
                ROLOOHNO
              </h1>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase">
                Party Engine
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <button
                onClick={() => setMode("create")}
                className="w-full py-4 bg-[#FF007F] text-black font-bold text-sm tracking-widest uppercase rounded-none hover:bg-white transition-colors"
              >
                Room Aanmaken
              </button>
              <button
                onClick={() => setMode("join")}
                className="w-full py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-none hover:border-[#FF007F] hover:text-[#FF007F] transition-colors"
              >
                Room Joinen
              </button>

              <button
                onClick={handleDemo}
                disabled={loading}
                className="w-full py-3 text-white/30 font-bold text-xs tracking-widest uppercase rounded-none hover:text-[#FFBF00] hover:border-[#FFBF00] border border-white/10 transition-colors disabled:opacity-30"
              >
                {loading ? "Laden..." : "⚡ Demo — test zonder spelers"}
              </button>
            </div>
          </motion.div>
        )}

        {mode === "create" && (
          <motion.div
            key="create"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="flex flex-col gap-6 w-full max-w-sm"
          >
            <button
              onClick={() => setMode("home")}
              className="text-white/30 text-xs tracking-widest uppercase self-start hover:text-white transition-colors"
            >
              ← Terug
            </button>
            <h2 className="text-2xl font-black tracking-widest text-white uppercase">
              Jouw Naam
            </h2>
            <input
              type="text"
              placeholder="Naam..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              className="bg-[#121212] border-b border-white/20 text-white text-lg py-3 px-0 outline-none focus:border-[#FF007F] transition-colors w-full"
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              onClick={handleCreate}
              disabled={!name.trim() || loading}
              className="w-full py-4 bg-[#FF007F] text-black font-bold text-sm tracking-widest uppercase disabled:opacity-30 hover:bg-white transition-colors"
            >
              {loading ? "Aanmaken..." : "Room Aanmaken"}
            </button>
          </motion.div>
        )}

        {mode === "join" && (
          <motion.div
            key="join"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="flex flex-col gap-6 w-full max-w-sm"
          >
            <button
              onClick={() => setMode("home")}
              className="text-white/30 text-xs tracking-widest uppercase self-start hover:text-white transition-colors"
            >
              ← Terug
            </button>
            <h2 className="text-2xl font-black tracking-widest text-white uppercase">
              Room Joinen
            </h2>
            <input
              type="text"
              placeholder="Naam..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              className="bg-[#121212] border-b border-white/20 text-white text-lg py-3 px-0 outline-none focus:border-[#FF007F] transition-colors w-full"
            />
            <input
              type="text"
              placeholder="Room Code (bijv. A8F2)..."
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              maxLength={4}
              className="bg-[#121212] border-b border-white/20 text-white text-lg py-3 px-0 outline-none focus:border-[#FFBF00] transition-colors w-full tracking-widest"
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              onClick={handleJoin}
              disabled={!name.trim() || code.length < 4 || loading}
              className="w-full py-4 border border-[#FFBF00] text-[#FFBF00] font-bold text-sm tracking-widest uppercase disabled:opacity-30 hover:bg-[#FFBF00] hover:text-black transition-colors"
            >
              {loading ? "Joinen..." : "Joinen"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
