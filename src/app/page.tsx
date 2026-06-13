"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { createRoom, joinRoom } from "@/lib/roomUtils";
import { joinRoom as fbJoinRoom, startPlayingPhase } from "@/lib/gameActions";
import { AVATAR_COLORS } from "@/lib/firebase";
import { useGameStore } from "@/store/gameStore";

type Mode = "home" | "create" | "join" | "demo";

export default function HomePage() {
  const router = useRouter();
  const { setPlayer, setIsHost } = useGameStore();
  const [mode, setMode] = useState<Mode>("home");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoLevel, setDemoLevel] = useState(2);

  async function handleCreate() {
    if (!name.trim()) return;
    setLoading(true); setError("");
    try {
      const id = uuidv4();
      setPlayer(id, name.trim()); setIsHost(true);
      const roomCode = await createRoom(id);
      router.push(`/lobby/${roomCode}`);
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Fout bij aanmaken."); }
    finally { setLoading(false); }
  }

  async function handleDemo() {
    setLoading(true);
    try {
      const hostId = uuidv4();
      const alexId = uuidv4();
      const level = demoLevel;
      setPlayer(hostId, "Jij"); setIsHost(true);
      const roomCode = await createRoom(hostId);
      const allTags = ["Kussen","Aanraken","Blinddoek","Spanking","Rollenspel","Dominantie","Submissie"];
      await fbJoinRoom(roomCode, { id: hostId, room_id: roomCode, name: "Jij", avatar_color: AVATAR_COLORS[0], consented_tags: allTags, hard_limits: [], veto_tokens: 2, status: "active", setup_complete: true });
      await fbJoinRoom(roomCode, { id: alexId, room_id: roomCode, name: "Alex", avatar_color: AVATAR_COLORS[1], consented_tags: ["Kussen","Aanraken","Blinddoek","Spanking"], hard_limits: [], veto_tokens: 2, status: "active", setup_complete: true });
      await fbJoinRoom(roomCode, { id: uuidv4(), room_id: roomCode, name: "Sam", avatar_color: AVATAR_COLORS[2], consented_tags: ["Kussen","Aanraken","Rollenspel","Dominantie"], hard_limits: [], veto_tokens: 2, status: "active", setup_complete: true });
      await startPlayingPhase(roomCode);
      await import("@/lib/gameActions").then(m => m.updateSexinessLevel(roomCode, level));

      // Desktop: split view with two phone frames
      if (window.innerWidth >= 768) {
        router.push(`/demo/${roomCode}?hostPid=${hostId}&playerPid=${alexId}&playerName=Alex`);
      } else {
        router.push(`/game/${roomCode}`);
      }
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Demo fout."); }
    finally { setLoading(false); }
  }

  async function handleJoin() {
    if (!name.trim() || code.length < 4) return;
    setLoading(true); setError("");
    try {
      const id = uuidv4();
      setPlayer(id, name.trim()); setIsHost(false);
      await joinRoom(code.trim(), name.trim(), id);
      router.push(`/lobby/${code.toUpperCase()}`);
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Fout bij joinen."); }
    finally { setLoading(false); }
  }

  const inputStyle = {
    backgroundColor: "#1A1A1A",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    color: "#fff",
    padding: "14px 16px",
    fontSize: 16,
    width: "100%",
    outline: "none",
  };

  const primaryBtn = {
    backgroundColor: "var(--red)",
    color: "#fff",
    borderRadius: 12,
    padding: "16px",
    width: "100%",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.05em",
    border: "none",
    cursor: "pointer",
    opacity: loading ? 0.5 : 1,
  };

  const secondaryBtn = {
    backgroundColor: "transparent",
    color: "var(--text-secondary)",
    borderRadius: 12,
    padding: "14px",
    width: "100%",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.05em",
    border: "1px solid rgba(255,255,255,0.1)",
    cursor: "pointer",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5" style={{ backgroundColor: "#0D0D0D" }}>
      <AnimatePresence mode="wait">
        {mode === "home" && (
          <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-10 w-full max-w-sm">
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-widest text-white mb-1">ROLOOHNO</h1>
              <div className="w-12 h-0.5 mx-auto mb-3" style={{ backgroundColor: "var(--red)" }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>Party Engine</p>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => setMode("create")} style={primaryBtn} className="transition-all active:scale-95">
                Room Aanmaken
              </button>
              <button onClick={() => setMode("join")} style={secondaryBtn} className="transition-all active:scale-95">
                Room Joinen
              </button>
              <button onClick={() => setMode("demo")} style={{ ...secondaryBtn, color: "#666" }} className="transition-all active:scale-95">
                ⚡ Demo — test zonder spelers
              </button>
            </div>
            <p className="text-center text-xs" style={{ color: "#444" }}>18+ • Alleen voor instemmende volwassenen</p>
          </motion.div>
        )}

        {mode === "create" && (
          <motion.div key="create" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="flex flex-col gap-5 w-full max-w-sm">
            <button onClick={() => setMode("home")} className="flex items-center gap-2 text-sm self-start" style={{ color: "var(--text-secondary)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Terug
            </button>
            <div>
              <h2 className="text-2xl font-black text-white mb-1">Room Aanmaken</h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Voer je naam in om te beginnen</p>
            </div>
            <input type="text" placeholder="Jouw naam..." value={name} onChange={(e) => setName(e.target.value)} maxLength={20} style={inputStyle} />
            {error && <p className="text-sm" style={{ color: "var(--red-light)" }}>{error}</p>}
            <button onClick={handleCreate} disabled={!name.trim() || loading} style={{ ...primaryBtn, opacity: !name.trim() || loading ? 0.4 : 1 }} className="transition-all active:scale-95">
              {loading ? "Aanmaken..." : "Room Aanmaken →"}
            </button>
          </motion.div>
        )}

        {mode === "join" && (
          <motion.div key="join" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="flex flex-col gap-5 w-full max-w-sm">
            <button onClick={() => setMode("home")} className="flex items-center gap-2 text-sm self-start" style={{ color: "var(--text-secondary)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Terug
            </button>
            <div>
              <h2 className="text-2xl font-black text-white mb-1">Room Joinen</h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Voer de code in van de host</p>
            </div>
            <input type="text" placeholder="Jouw naam..." value={name} onChange={(e) => setName(e.target.value)} maxLength={20} style={inputStyle} />
            <input type="text" placeholder="Room code (bijv. A7K2)..." value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} maxLength={4}
              style={{ ...inputStyle, letterSpacing: "0.3em", fontWeight: 700 }} />
            {error && <p className="text-sm" style={{ color: "var(--red-light)" }}>{error}</p>}
            <button onClick={handleJoin} disabled={!name.trim() || code.length < 4 || loading}
              style={{ ...primaryBtn, backgroundColor: "#8B4513", opacity: !name.trim() || code.length < 4 || loading ? 0.4 : 1 }} className="transition-all active:scale-95">
              {loading ? "Joinen..." : "Joinen →"}
            </button>
          </motion.div>
        )}

        {mode === "demo" && (
          <motion.div key="demo" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="flex flex-col gap-6 w-full max-w-sm">
            <button onClick={() => setMode("home")} className="flex items-center gap-2 text-sm self-start" style={{ color: "var(--text-secondary)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Terug
            </button>
            <div>
              <h2 className="text-2xl font-black text-white mb-1">Demo modus</h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Kies een intensiteitsniveau</p>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { level: 1, label: "ZACHT", desc: "Kussen, aanraken, romantisch" },
                { level: 2, label: "WARM", desc: "Wat explicieter, meer nabijheid" },
                { level: 3, label: "PITTIG", desc: "Direct, duidelijke opdrachten" },
                { level: 4, label: "RUW", desc: "Expliciet, weinig terughoudendheid" },
                { level: 5, label: "EXTREEM", desc: "Maximale intensiteit" },
              ].map(({ level, label, desc }) => (
                <button
                  key={level}
                  onClick={() => setDemoLevel(level)}
                  className="flex items-center justify-between px-4 py-3 text-left transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: demoLevel === level ? "rgba(192,57,43,0.15)" : "var(--card)",
                    borderRadius: 12,
                    border: demoLevel === level ? "1px solid var(--red-border)" : "1px solid transparent",
                  }}
                >
                  <div>
                    <span className="text-sm font-bold text-white">{level} — {label}</span>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                  {demoLevel === level && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {error && <p className="text-sm" style={{ color: "var(--red-light)" }}>{error}</p>}
            <button onClick={handleDemo} disabled={loading} style={{ ...primaryBtn, opacity: loading ? 0.5 : 1 }} className="transition-all active:scale-95">
              {loading ? "Starten..." : `⚡ Start Demo — Level ${demoLevel}`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
