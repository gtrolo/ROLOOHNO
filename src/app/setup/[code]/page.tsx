"use client";

import { useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { Tag } from "@/lib/firebase";
import { updatePlayer } from "@/lib/gameActions";
import { useGameStore } from "@/store/gameStore";
import { TagPicker } from "@/components/TagPicker";
import { PanicButton } from "@/components/PanicButton";

export default function SetupPage() {
  const { code } = useParams<{ code: string }>();
  const router = useRouter();
  const { playerId } = useGameStore();
  const [selected, setSelected] = useState<string[]>([]);
  const [hardLimits, setHardLimits] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  const toggleTag = useCallback((tag: Tag) => {
    setSelected((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  }, []);

  const toggleLimit = useCallback((tag: Tag) => {
    setHardLimits((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  }, []);

  async function handleSave() {
    if (!playerId) return;
    setSaving(true);
    try {
      await updatePlayer(code, playerId, { consented_tags: selected, hard_limits: hardLimits, setup_complete: true });
      router.push(`/game/${code}`);
    } catch { setSaving(false); }
  }

  return (
    <main className="min-h-screen pb-28" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} style={{ color: "var(--text-secondary)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--red)" }}>
              ROLOOHNO
            </p>
          </div>
        </div>
        <PanicButton />
      </div>

      <div className="px-5 pt-2 pb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Jouw grenzen</h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Alleen jij ziet deze keuzes.</p>
      </div>

      <div className="px-5">
        <TagPicker
          selected={selected}
          hardLimits={hardLimits}
          onToggleTag={toggleTag}
          onToggleLimit={toggleLimit}
        />
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 px-5 pb-8 pt-4" style={{ backgroundColor: "#0D0D0D" }}>
        <p className="text-center text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
          18+ • Alleen voor instemmende volwassenen • Privé sessie
        </p>
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-4 font-bold text-sm tracking-wide transition-opacity disabled:opacity-40"
          style={{ backgroundColor: "var(--red)", color: "#fff", borderRadius: 12 }}
        >
          {saving ? "OPSLAAN..." : "OPSLAAN & KLAAR"}
        </button>
      </div>
    </main>
  );
}
