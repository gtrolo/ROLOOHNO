"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { db, ref, onValue, off, Player, Room } from "@/lib/firebase";
import { useGameStore } from "@/store/gameStore";
import { PanicButton } from "@/components/PanicButton";
import { updateSexinessLevel, startSetupPhase } from "@/lib/gameActions";

const LEVEL_LABELS: Record<number, string> = { 1: "ZACHT", 2: "WARM", 3: "PITTIG", 4: "RUW", 5: "EXTREEM" };

export default function LobbyPage() {
  const { code } = useParams<{ code: string }>();
  const router = useRouter();
  const { playerId, isHost: storedIsHost, room, players, setRoom, setPlayers, setIsHost, setPaused } = useGameStore();
  const [localLevel, setLocalLevel] = useState(2);
  const [copied, setCopied] = useState(false);

  const isHost = useMemo(
    () => !!playerId && (storedIsHost || room?.host_id === playerId),
    [playerId, storedIsHost, room?.host_id]
  );

  useEffect(() => {
    if (!code) return;
    const upper = code.toUpperCase();
    const rRef = ref(db, `rooms/${upper}`);
    onValue(rRef, (snap) => {
      if (!snap.exists()) return;
      const data = snap.val() as Room;
      const currentDeviceIsHost = !!playerId && data.host_id === playerId;
      setRoom(data);
      if (data.game_state?.sexiness_level) setLocalLevel(data.game_state.sexiness_level);
      if (currentDeviceIsHost && !storedIsHost) setIsHost(true);
      setPaused(!!data.paused);
      if (data.game_state?.phase === "setup") {
        router.push(currentDeviceIsHost || storedIsHost ? `/game/${upper}` : `/setup/${upper}`);
      }
    });
    const pRef = ref(db, `rooms/${upper}/players`);
    onValue(pRef, (snap) => {
      setPlayers(snap.exists() ? Object.values(snap.val() as Record<string, Player>) : []);
    });
    return () => { off(rRef); off(pRef); };
  }, [code, playerId, storedIsHost, setRoom, setPlayers, setIsHost, setPaused, router]);

  async function handleLevelChange(level: number) {
    setLocalLevel(level);
    await updateSexinessLevel(code, level);
    if (navigator.vibrate) navigator.vibrate(level >= 4 ? [60, 20, 60] : [30]);
  }

  async function handleStart() {
    if (!isHost || players.length < 2) return;
    await startSetupPhase(code);
    router.push(`/setup/${code}`);
  }

  function copyCode() {
    navigator.clipboard?.writeText(code.toUpperCase()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-wide">LOBBY</h1>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>privé sessie</p>
        </div>
        <PanicButton />
      </div>

      <div className="flex flex-col gap-4 px-5 pb-8">
        {/* Room code card */}
        <div className="p-4" style={{ backgroundColor: "var(--card)", borderRadius: 16 }}>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--text-secondary)" }}>ROOM CODE</p>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-black tracking-widest" style={{ color: "var(--red)" }}>
              {code?.toUpperCase()}
            </span>
            <button
              onClick={copyCode}
              className="p-2.5 transition-all active:scale-90"
              style={{ backgroundColor: "#2A2A2A", borderRadius: 10 }}
            >
              {copied
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
              }
            </button>
          </div>
        </div>

        {/* Players card */}
        <div style={{ backgroundColor: "var(--card)", borderRadius: 16, overflow: "hidden" }}>
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>SPELERS</p>
            <p className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
              {players.length}/8
            </p>
          </div>
          <AnimatePresence>
            {players.map((p: Player, i) => {
              const isMe = p.id === playerId;
              const isRoomHost = p.id === room?.host_id;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 mx-2 mb-2"
                  style={{
                    backgroundColor: isMe ? "rgba(192,57,43,0.12)" : "transparent",
                    borderRadius: 12,
                    border: isMe ? "1px solid var(--red-border)" : "none",
                  }}
                >
                  {isRoomHost
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><path d="M3 17l3-8 5 5 5-5 3 8H3z" /><path d="M21 20H3" /></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  }
                  <span className="flex-1 font-medium text-white">{p.name}</span>
                  {isRoomHost && <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>Host</span>}
                  {isMe && (
                    <span className="flex items-center gap-1 text-xs font-medium" style={{ color: "var(--red-light)" }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "var(--red)" }} />
                      Dit apparaat
                    </span>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          {players.length === 0 && (
            <p className="px-4 pb-4 text-sm" style={{ color: "var(--text-secondary)" }}>Wachten op spelers...</p>
          )}
        </div>

        {/* Status / intensity */}
        {!isHost && (
          <div style={{ backgroundColor: "var(--card)", borderRadius: 16, padding: 16 }}>
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "var(--text-secondary)" }}>STATUS</p>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-sm text-white">Wacht op host...</span>
            </div>
          </div>
        )}

        {/* Intensity level */}
        <div style={{ backgroundColor: "var(--card)", borderRadius: 16, padding: 16 }}>
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "var(--text-secondary)" }}>
            HUIDIG INTENSITEITSNIVEAU
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-black text-white">LEVEL {localLevel}</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map((n) => (
                <div
                  key={n}
                  className="w-6 rounded-sm transition-all"
                  style={{
                    height: 8 + n * 3,
                    backgroundColor: n <= localLevel ? "var(--red)" : "#333",
                  }}
                />
              ))}
            </div>
          </div>
          {isHost && (
            <div>
              <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
                {LEVEL_LABELS[localLevel]}
              </p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((n) => (
                  <button
                    key={n}
                    onClick={() => handleLevelChange(n)}
                    className="flex-1 py-2 text-xs font-bold transition-all active:scale-95"
                    style={{
                      borderRadius: 8,
                      backgroundColor: n === localLevel ? "var(--red)" : "#2A2A2A",
                      color: n === localLevel ? "#fff" : "var(--text-secondary)",
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Host start button */}
        {isHost && (
          <AnimatePresence>
            {players.length >= 2 ? (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleStart}
                className="w-full py-4 font-bold text-sm tracking-wide transition-all active:scale-95"
                style={{ backgroundColor: "var(--red)", color: "#fff", borderRadius: 12 }}
              >
                START HET SPEL →
              </motion.button>
            ) : (
              <p className="text-center text-sm py-2" style={{ color: "var(--text-secondary)" }}>
                Minimaal 2 spelers nodig
              </p>
            )}
          </AnimatePresence>
        )}

        {/* Footer trust badges */}
        <div className="flex items-center justify-center gap-4 pt-2">
          {["🔒 Privé en versleuteld", "👁️ Geen opslag", "⏱️ Tijdelijke sessies"].map((t) => (
            <p key={t} className="text-xs" style={{ color: "var(--text-secondary)" }}>{t}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
