"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SecretMission as SecretMissionType } from "@/lib/firebase";
import { TimerRing } from "./TimerRing";

type Props = {
  mission: SecretMissionType;
  onComplete: () => void;
  onFail: () => void;
};

export function SecretMissionOverlay({ mission, onComplete, onFail }: Props) {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 flex flex-col justify-end pb-8 px-6"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          <div
            className="w-full p-6 flex flex-col gap-5"
            style={{ backgroundColor: "#0D0D0D", border: "1px solid rgba(255,191,0,0.2)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: "#FFBF00" }}>
                GEHEIME MISSIE
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                alleen jij ziet dit
              </span>
            </div>

            <p className="text-white text-base leading-relaxed">
              {mission.mission}
            </p>

            <div className="flex items-center gap-3">
              <TimerRing totalSeconds={mission.duration_seconds} onExpire={() => { setVisible(false); onFail(); }} size={48} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>resterende tijd</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { setVisible(false); onComplete(); if (navigator.vibrate) navigator.vibrate([30, 10, 30]); }}
                className="flex-1 py-3 text-xs font-black tracking-widest uppercase"
                style={{ backgroundColor: "#FFBF00", color: "#000" }}
              >
                VOLTOOID ✓
              </button>
              <button
                onClick={() => { setVisible(false); onFail(); }}
                className="px-4 py-3 text-xs tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                MISLUKT ✗
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
