"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RATINGS = ["🥶", "😐", "🙂", "🔥", "💀"];

type Props = {
  onDone: () => void;
  autoAdvanceSeconds?: number;
};

export function RatingScreen({ onDone, autoAdvanceSeconds = 10 }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(autoAdvanceSeconds);

  useEffect(() => {
    if (countdown <= 0) { onDone(); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, onDone]);

  function pick(i: number) {
    setSelected(i);
    if (navigator.vibrate) navigator.vibrate(40);
    setTimeout(onDone, 600);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center gap-8 py-12"
    >
      <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
        HOE WAS HET?
      </p>
      <div className="flex gap-4">
        {RATINGS.map((emoji, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className="text-3xl transition-all duration-200"
            style={{
              transform: selected === i ? "scale(1.5)" : "scale(1)",
              filter: selected === i ? "drop-shadow(0 0 12px rgba(255,0,127,0.8))" : "none",
            }}
          >
            {emoji}
          </button>
        ))}
      </div>
      <button
        onClick={onDone}
        className="text-xs tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        VOLGENDE OPDRACHT → ({countdown})
      </button>
    </motion.div>
  );
}
