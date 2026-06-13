"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          SPANNING
        </span>
        <AnimatePresence>
          {showPurge ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs font-black tracking-widest"
              style={{ color: "#FF2400" }}
            >
              PURGE
            </motion.span>
          ) : (
            <span className="text-xs font-mono" style={{ color: "#FF007F" }}>
              {tension}%
            </span>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full h-1.5" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full"
          animate={{ width: `${tension}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ background: "linear-gradient(to right, #FF007F, #FF2400)" }}
        />
      </div>
    </div>
  );
}
