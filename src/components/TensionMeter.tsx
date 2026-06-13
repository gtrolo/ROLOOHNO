"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Props = { tension: number };

export function TensionMeter({ tension }: Props) {
  const [showPurge, setShowPurge] = useState(false);
  useEffect(() => {
    if (tension >= 100) {
      setShowPurge(true);
      const t = setTimeout(() => setShowPurge(false), 3000);
      return () => clearTimeout(t);
    }
  }, [tension]);

  return (
    <div className="px-5 pb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>SPANNING</span>
        <AnimatePresence mode="wait">
          {showPurge
            ? <motion.span key="purge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs font-black tracking-widest" style={{ color: "var(--red-light)" }}>PURGE</motion.span>
            : <motion.span key="pct" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs font-mono" style={{ color: "var(--red-light)" }}>{tension}%</motion.span>
          }
        </AnimatePresence>
      </div>
      <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: "#1E1E1E" }}>
        <motion.div className="h-full rounded-full" animate={{ width: `${tension}%` }} transition={{ duration: 1, ease: "easeOut" }}
          style={{ background: "linear-gradient(to right, var(--red), var(--red-light))" }} />
      </div>
    </div>
  );
}
