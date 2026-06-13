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
      className="fixed bottom-4 left-4 w-10 h-10 rounded-full z-50 opacity-20 hover:opacity-80 active:opacity-100 transition-opacity"
      style={{ backgroundColor: "#000", border: "1px solid rgba(255,255,255,0.12)" }}
      aria-label="Panic / Pause"
    />
  );
}
