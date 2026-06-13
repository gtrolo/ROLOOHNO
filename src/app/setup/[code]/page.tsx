"use client";

import { useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase, Tag } from "@/lib/supabase";
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
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const toggleLimit = useCallback((tag: Tag) => {
    setHardLimits((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  async function handleSave() {
    if (!playerId) return;
    setSaving(true);
    try {
      await supabase
        .from("players")
        .update({
          consented_tags: selected,
          hard_limits: hardLimits,
          setup_complete: true,
        })
        .eq("id", playerId);

      router.push(`/game/${code}`);
    } catch {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 pb-32">
      <PanicButton />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-8 max-w-sm mx-auto"
      >
        {/* Header */}
        <div>
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#FF007F" }}>
            PRIVÉ — ALLEEN JIJ ZIET DIT
          </p>
          <h1 className="text-3xl font-black uppercase text-white tracking-wide">
            JOUW GRENZEN
          </h1>
          <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            De app matcht opdrachten op basis van jouw keuzes.
            Niets wordt gedeeld met andere spelers.
          </p>
        </div>

        <TagPicker
          selected={selected}
          hardLimits={hardLimits}
          onToggleTag={toggleTag}
          onToggleLimit={toggleLimit}
        />

        <div
          className="p-4 text-xs leading-relaxed"
          style={{ backgroundColor: "rgba(255,36,0,0.06)", border: "1px solid rgba(255,36,0,0.15)" }}
        >
          <span style={{ color: "#FF2400" }}>Let op:</span>{" "}
          <span style={{ color: "rgba(255,255,255,0.4)" }}>
            Je kunt altijd stoppen via de Panic Button of je Veto-tokens gebruiken.
            Consent is permanent en continu.
          </span>
        </div>
      </motion.div>

      {/* Sticky save button */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4" style={{ backgroundColor: "#000" }}>
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-4 font-black text-sm tracking-widest uppercase disabled:opacity-40 transition-opacity"
          style={{ backgroundColor: "#FF007F", color: "#000" }}
        >
          {saving ? "OPSLAAN..." : "OPSLAAN & KLAAR →"}
        </button>
      </div>
    </main>
  );
}
