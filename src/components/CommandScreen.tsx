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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>OPDRACHT</p>
          <div className="flex gap-2 mt-1">
            {command.target_names.map((name) => (
              <span key={name} className="text-xs font-semibold px-2 py-0.5" style={{ backgroundColor: "var(--red-dim)", color: "var(--red-light)", borderRadius: 6 }}>
                {name}
              </span>
            ))}
          </div>
        </div>
        {command.duration_seconds ? (
          <TimerRing totalSeconds={command.duration_seconds} size={64} onExpire={() => setTimerDone(true)} />
        ) : (
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--red)" }} />
        )}
      </div>

      {/* Command text */}
      <div className="flex-1 px-5 py-6">
        <div className="p-5 h-full" style={{ backgroundColor: "var(--card)", borderRadius: 16 }}>
          <p className="text-lg font-medium leading-relaxed text-white">
            {displayText}
            <span className="animate-pulse" style={{ color: "var(--red)" }}>|</span>
          </p>
          <div className="mt-4 flex gap-1 items-end">
            {[1,2,3,4,5].map((n) => (
              <div key={n} className="w-2 rounded-sm" style={{ height: 4 + n * 2, backgroundColor: n <= command.level ? "var(--red)" : "#333" }} />
            ))}
            <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Level {command.level}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 pb-8 flex flex-col gap-3">
        {(isTarget || timerDone) && !hasCompleted && (
          <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            onClick={() => { onComplete(); if (navigator.vibrate) navigator.vibrate([30, 10, 30]); }}
            className="w-full py-4 font-bold text-sm tracking-wide transition-all active:scale-95"
            style={{ backgroundColor: "var(--card)", color: "#fff", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)" }}>
            ✓ KLAAR
          </motion.button>
        )}
        {hasCompleted && (
          <div className="w-full py-4 text-center text-sm" style={{ color: "var(--text-secondary)" }}>Wachten op partner...</div>
        )}
        <div className="flex gap-3">
          <button onClick={onStop} className="flex-1 py-3 text-sm font-semibold transition-all active:scale-95"
            style={{ backgroundColor: "var(--red-dim)", color: "var(--red-light)", borderRadius: 12, border: "1px solid var(--red-border)" }}>
            STOP
          </button>
          {isHost && onSkip && (
            <button onClick={onSkip} className="px-5 py-3 text-sm font-medium transition-all active:scale-95"
              style={{ color: "var(--text-secondary)", backgroundColor: "var(--card)", borderRadius: 12 }}>
              Overslaan
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
