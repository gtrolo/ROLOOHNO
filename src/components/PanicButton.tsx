"use client";

import { useGameStore } from "@/store/gameStore";
import { pauseGame, resumeGame } from "@/lib/gameActions";

export function PanicButton() {
  const { room, isPaused, setPaused } = useGameStore();

  async function handlePanic() {
    const code = room?.room_code;
    const next = !isPaused;
    setPaused(next);
    if (navigator.vibrate) navigator.vibrate(next ? [200, 100, 200] : [50]);
    if (code) {
      if (next) await pauseGame(code);
      else await resumeGame(code);
    }
  }

  return (
    <button
      onClick={handlePanic}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-widest uppercase transition-all active:scale-95"
      style={{
        border: "1px solid var(--red-border)",
        color: isPaused ? "#fff" : "var(--red-light)",
        backgroundColor: isPaused ? "var(--red)" : "transparent",
        borderRadius: 8,
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      PANIEK
    </button>
  );
}
