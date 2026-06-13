"use client";

import { useCallback, useRef } from "react";
import { LEVEL_NAMES } from "@/lib/supabase";

type Props = {
  value: number; // 1–5
  onChange: (v: number) => void;
  disabled?: boolean;
};

export function SexinessSlider({ value, onChange, disabled }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const level = Math.round(pct * 4) + 1;
      onChange(Math.max(1, Math.min(5, level)));
      if (navigator.vibrate) navigator.vibrate(30);
    },
    [disabled, onChange]
  );

  const pct = ((value - 1) / 4) * 100;

  return (
    <div className="w-full select-none">
      {/* Labels */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl">🌸</span>
        <div className="text-center">
          <span
            className="text-sm font-black tracking-widest uppercase"
            style={{ color: value >= 4 ? "#FF2400" : "#FF007F" }}
          >
            {LEVEL_NAMES[value]}
          </span>
        </div>
        <span className="text-xl">🔥</span>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        onClick={handleClick}
        className="relative h-2 rounded-none cursor-pointer"
        style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
      >
        {/* Fill */}
        <div
          className="absolute top-0 left-0 h-full transition-all duration-150"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(to right, #FF007F, #FF2400)",
          }}
        />
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-150 shadow-lg"
          style={{
            left: `${pct}%`,
            boxShadow: "0 0 16px rgba(255,0,127,0.5)",
          }}
        >
          <span className="text-black font-black text-sm">{value}</span>
        </div>
      </div>

      {/* Step dots */}
      <div className="flex justify-between mt-3 px-0">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => { onChange(n); if (navigator.vibrate) navigator.vibrate(30); }}
            disabled={disabled}
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className="w-1.5 h-1.5 rounded-full transition-colors"
              style={{ backgroundColor: n <= value ? "#FF007F" : "rgba(255,255,255,0.2)" }}
            />
            <span
              className="text-xs font-mono transition-colors"
              style={{ color: n === value ? "#FF007F" : "rgba(255,255,255,0.3)" }}
            >
              {n}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
