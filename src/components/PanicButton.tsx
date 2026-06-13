"use client";

import { supabase } from "@/lib/supabase";
import { useGameStore } from "@/store/gameStore";

export function PanicButton() {
  const { room, isPaused, setPaused } = useGameStore();

  async function handlePanic() {
    if (!room) return;
    await supabase.channel(`room:${room.room_code}`).send({
      type: "broadcast",
      event: "PANIC",
      payload: { paused: !isPaused },
    });
    setPaused(!isPaused);
  }

  return (
    <button
      onClick={handlePanic}
      className="fixed bottom-4 left-4 w-10 h-10 bg-black border border-white/10 rounded-full z-50 opacity-30 hover:opacity-100 transition-opacity"
      aria-label="Panic / Pause"
    />
  );
}
