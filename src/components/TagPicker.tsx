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
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-base font-semibold text-white mb-1">Interesses</p>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          Kies wat je aantrekt of wilt verkennen.
        </p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            if (hardLimits.includes(tag)) return null;
            const on = selected.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all active:scale-95"
                style={{
                  borderRadius: 50,
                  backgroundColor: on ? "rgba(192,57,43,0.2)" : "#1E1E1E",
                  color: on ? "#fff" : "var(--text-secondary)",
                  border: on ? "1px solid var(--red)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {on && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-base font-semibold text-white mb-1">Harde grenzen</p>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          Kies wat absoluut niet oké is.
        </p>
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            if (selected.includes(tag)) return null;
            const on = hardLimits.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onToggleLimit(tag)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all active:scale-95"
                style={{
                  borderRadius: 50,
                  backgroundColor: on ? "rgba(192,57,43,0.2)" : "#1E1E1E",
                  color: on ? "#fff" : "var(--text-secondary)",
                  border: on ? "1px solid var(--red)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {on && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-start gap-3 px-4 py-3" style={{ backgroundColor: "#1A1A1A", borderRadius: 12 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" className="mt-0.5 shrink-0">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Je grenzen zijn privé en worden nooit gedeeld. Je kunt ze altijd aanpassen.
        </p>
      </div>
    </div>
  );
}
