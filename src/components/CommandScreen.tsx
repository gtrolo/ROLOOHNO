"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ActiveCommand } from "@/lib/firebase";
import { TimerRing } from "./TimerRing";

type Props = {
  command: ActiveCommand;
  playerId: string;
  isHost: boolean;
  onComplete: () => void;
  onSkip?: () => void;
  onStop: () => void;
};

export function CommandScreen({ command, playerId, isHost, onComplete, onSkip, onStop }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [timerDone, setTimerDone] = useState(false);
  const indexRef = useRef(0);

  const isTarget = command.target_player_ids.includes(playerId);
  const hasCompleted = command.completed_by.includes(playerId);

  // Typewriter effect
  useEffect(() => {
    indexRef.current = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      indexRef.current++;
      setDisplayText(command.command.slice(0, indexRef.current));
      if (indexRef.current >= command.command.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [command.command]);

  const levelColor = command.level >= 4 ? "#FF2400" : command.level === 3 ? "#FFBF00" : "#FF007F";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen px-8 py-10 gap-8"
      style={{ backgroundColor: "#000" }}
    >
      {/* Timer + level */}
      <div className="flex items-center justify-between">
        {command.duration_seconds ? (
          <TimerRing
            totalSeconds={command.duration_seconds}
            size={80}
            onExpire={() => setTimerDone(true)}
          />
        ) : (
          <div className="w-20 h-20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: levelColor }} />
          </div>
        )}

        <div className="flex flex-col items-end gap-1">
          {command.target_names.map((name) => (
            <span
              key={name}
              className="px-2 py-0.5 text-xs font-medium tracking-wide"
              style={{ backgroundColor: "rgba(255,0,127,0.12)", color: "#FF007F", borderRadius: 2 }}
            >
              ● {name}
            </span>
          ))}
        </div>
      </div>

      {/* Command text */}
      <div className="flex-1">
        <p
          className="text-xl font-medium leading-relaxed text-white"
          style={{ minHeight: 120 }}
        >
          {displayText}
          <span className="animate-pulse" style={{ color: levelColor }}>|</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        {(isTarget || timerDone) && !hasCompleted && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => { onComplete(); if (navigator.vibrate) navigator.vibrate([30, 10, 30]); }}
            className="w-full py-4 text-sm font-black tracking-widest uppercase"
            style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}
          >
            KLAAR ✓
          </motion.button>
        )}

        {hasCompleted && (
          <div className="w-full py-4 text-center text-sm tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
            Wachten op partner...
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onStop}
            className="flex-1 py-3 text-xs tracking-widest uppercase"
            style={{ color: "#FF2400", border: "1px solid rgba(255,36,0,0.3)" }}
          >
            STOP 🛑
          </button>
          {isHost && (
            <button
              onClick={onSkip}
              className="px-4 py-3 text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              SKIP →
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
