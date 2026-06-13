"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  color: string;
  isSelf?: boolean;
  isHost?: boolean;
};

export function PlayerChip({ name, color, isSelf, isHost }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="text-sm text-white font-medium tracking-wide">{name}</span>
      {isSelf && (
        <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,0.3)" }}>jij</span>
      )}
      {isHost && (
        <span className="text-xs ml-1" style={{ color: "#FFBF00" }}>host</span>
      )}
    </motion.div>
  );
}
