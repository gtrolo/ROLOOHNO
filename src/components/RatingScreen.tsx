"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RATINGS = [
  { emoji: "🥶", label: "Koud" },
  { emoji: "😐", label: "Oké" },
  { emoji: "🙂", label: "Leuk" },
  { emoji: "🔥", label: "Heet" },
  { emoji: "💀", label: "Wauw" },
];

type Props = { onDone: (rating: number | null) => void; autoAdvanceSeconds?: number };

export function RatingScreen({ onDone, autoAdvanceSeconds = 10 }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [countdown, setCountdown] = useState(autoAdvanceSeconds);

  useEffect(() => {
    if (countdown <= 0) { onDone(null); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, onDone]);

  function pick(i: number) {
    setSelected(i);
    if (navigator.vibrate) navigator.vibrate(40);
    setTimeout(() => onDone(i), 700);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-screen px-5 gap-8" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="text-center">
        <p className="text-2xl font-black text-white mb-1">Hoe was het?</p>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Geef een waardering</p>
      </div>

      <div className="flex gap-3 w-full justify-center">
        {RATINGS.map(({ emoji, label }, i) => (
          <button key={i} onClick={() => pick(i)}
            className="flex flex-col items-center gap-2 py-4 flex-1 transition-all active:scale-90"
            style={{
              backgroundColor: selected === i ? "var(--red-dim)" : "var(--card)",
              borderRadius: 16,
              border: selected === i ? "1px solid var(--red-border)" : "1px solid transparent",
            }}>
            <span className="text-2xl">{emoji}</span>
            <span className="text-xs font-medium" style={{ color: selected === i ? "var(--red-light)" : "var(--text-secondary)" }}>{label}</span>
          </button>
        ))}
      </div>

      <button onClick={() => onDone(null)} className="text-sm transition-all active:scale-95" style={{ color: "var(--text-secondary)" }}>
        Volgende opdracht → ({countdown})
      </button>
    </motion.div>
  );
}
