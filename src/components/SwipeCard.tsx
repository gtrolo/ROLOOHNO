"use client";

import { useState } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import { LEVEL_NAMES } from "@/lib/supabase";

type Props = {
  category: string;
  level: number;
  vetoTokens: number;
  onAccept: () => void;
  onVeto: () => void;
};

export function SwipeCard({ category, level, vetoTokens, onAccept, onVeto }: Props) {
  const controls = useAnimation();
  const [dragDir, setDragDir] = useState<"left" | "right" | null>(null);
  const [isDone, setIsDone] = useState(false);

  async function handleDragEnd(_: unknown, info: PanInfo) {
    const threshold = 100;
    if (info.offset.x > threshold) {
      setIsDone(true);
      await controls.start({ x: 400, opacity: 0, rotate: 20 });
      onAccept();
      if (navigator.vibrate) navigator.vibrate([40, 20, 40]);
    } else if (info.offset.x < -threshold) {
      if (vetoTokens <= 0) {
        await controls.start({ x: 0, rotate: 0 });
        return;
      }
      setIsDone(true);
      await controls.start({ x: -400, opacity: 0, rotate: -20 });
      onVeto();
      if (navigator.vibrate) navigator.vibrate([80]);
    } else {
      await controls.start({ x: 0, rotate: 0 });
      setDragDir(null);
    }
  }

  if (isDone) return null;

  const borderColor =
    dragDir === "right" ? "#00FF88" : dragDir === "left" ? "#FF2400" : "rgba(255,0,127,0.25)";

  return (
    <div className="relative w-full flex flex-col items-center gap-6">
      <motion.div
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
        animate={controls}
        onDrag={(_, info) => {
          setDragDir(info.offset.x > 20 ? "right" : info.offset.x < -20 ? "left" : null);
        }}
        onDragEnd={handleDragEnd}
        className="w-full p-6 flex flex-col gap-4 cursor-grab active:cursor-grabbing"
        style={{
          backgroundColor: "#0D0D0D",
          border: `1px solid ${borderColor}`,
          boxShadow: dragDir === "right"
            ? "0 0 24px rgba(0,255,136,0.2)"
            : dragDir === "left"
            ? "0 0 24px rgba(255,36,0,0.2)"
            : "0 0 20px rgba(255,0,127,0.1)",
          borderRadius: 2,
        }}
        whileDrag={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3">
          <span
            className="px-2 py-1 text-xs font-black tracking-widest uppercase"
            style={{ backgroundColor: "rgba(255,0,127,0.15)", color: "#FF007F", borderRadius: 2 }}
          >
            {category.toUpperCase()}
          </span>
          <span className="text-xs font-mono" style={{ color: "#FFBF00" }}>
            Level {level} — {LEVEL_NAMES[level]}
          </span>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Je hebt categorieën ingesteld die overeenkomen met deze opdracht.
          Swipe rechts om te accepteren, links om te skippen.
        </p>

        <div className="flex justify-between items-center pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-xs" style={{ color: "rgba(255,36,0,0.7)" }}>← VETO</span>
          <span className="text-xs" style={{ color: "#FF007F" }}>ACCEPTEREN →</span>
        </div>
      </motion.div>

      {/* Veto tokens */}
      <div className="flex items-center gap-2">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>veto's:</span>
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3"
            style={{
              backgroundColor: i < vetoTokens ? "#FF007F" : "rgba(255,255,255,0.1)",
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          />
        ))}
      </div>

      {/* Direction hints */}
      <div className="flex justify-between w-full px-4">
        <motion.div
          animate={{ opacity: dragDir === "left" ? 1 : 0.15 }}
          className="text-2xl"
        >
          ✗
        </motion.div>
        <motion.div
          animate={{ opacity: dragDir === "right" ? 1 : 0.15 }}
          style={{ color: "#FF007F" }}
          className="text-2xl"
        >
          ✓
        </motion.div>
      </div>
    </div>
  );
}
