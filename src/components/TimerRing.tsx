"use client";

import { useEffect, useState } from "react";

type Props = {
  totalSeconds: number;
  onExpire?: () => void;
  size?: number;
};

export function TimerRing({ totalSeconds, onExpire, size = 80 }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);

  useEffect(() => {
    setRemaining(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (remaining <= 0) {
      onExpire?.();
      return;
    }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining, onExpire]);

  const pct = remaining / totalSeconds;
  const radius = (size - 8) / 2;
  const circ = 2 * Math.PI * radius;
  const dash = circ * pct;

  const color = remaining <= 5 ? "#FF2400" : remaining <= 10 ? "#FFBF00" : "#FF007F";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={4}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={4}
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="butt"
          style={{ transition: "stroke-dasharray 0.9s linear, stroke 0.3s" }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-mono font-bold"
        style={{ color, fontSize: size * 0.28 }}
      >
        {remaining}
      </div>
    </div>
  );
}
