"use client";

import { ALL_TAGS, Tag } from "@/lib/firebase";

type Props = {
  selected: string[];
  hardLimits: string[];
  onToggleTag: (tag: Tag) => void;
  onToggleLimit: (tag: Tag) => void;
};

export function TagPicker({ selected, hardLimits, onToggleTag, onToggleLimit }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {/* Green-lit tags */}
      <div>
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
          Ik sta open voor
        </p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            const isSelected = selected.includes(tag);
            const isLimit = hardLimits.includes(tag);
            if (isLimit) return null;
            return (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className="px-3 py-1.5 text-sm font-medium tracking-wide transition-all"
                style={{
                  borderRadius: 4,
                  backgroundColor: isSelected ? "#FF007F" : "#1A1A1A",
                  color: isSelected ? "#000" : "rgba(255,255,255,0.6)",
                  border: isSelected ? "none" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hard limits */}
      <div>
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#FF2400" }}>
          Hard limits — nooit
        </p>
        <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
          De app genereert nooit opdrachten met deze tags voor jou.
        </p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            const isLimit = hardLimits.includes(tag);
            const isSelected = selected.includes(tag);
            if (isSelected) return null;
            return (
              <button
                key={tag}
                onClick={() => onToggleLimit(tag)}
                className="px-3 py-1.5 text-sm font-medium tracking-wide transition-all"
                style={{
                  borderRadius: 4,
                  backgroundColor: isLimit ? "#FF2400" : "#1A1A1A",
                  color: isLimit ? "#fff" : "rgba(255,255,255,0.4)",
                  border: isLimit ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
