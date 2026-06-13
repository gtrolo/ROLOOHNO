"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/gameStore";

export function PauseOverlay() {
  const isPaused = useGameStore((s) => s.isPaused);

  return (
    <AnimatePresence>
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
        >
          <p className="text-white text-2xl tracking-[0.3em] font-light uppercase">
            Scene Paused
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
