"use client";

import { motion } from "framer-motion";
import { ConsentGateState, LEVEL_NAMES } from "@/lib/supabase";
import { SwipeCard } from "./SwipeCard";

type HostViewProps = {
  gate: ConsentGateState;
};

type PlayerViewProps = {
  gate: ConsentGateState;
  playerId: string;
  vetoTokens: number;
  onAccept: () => void;
  onVeto: () => void;
};

export function ConsentGateHostView({ gate }: HostViewProps) {
  const statuses = [gate.player_a_id, gate.player_b_id].map((id) => ({
    name: id === gate.player_a_id ? gate.player_a_name : gate.player_b_name,
    state: gate.consented[id],
  }));

  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff22" }}
      animate={{ backgroundColor: "#1A0000" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 gap-8"
    >
      <span className="text-xs font-black tracking-[0.3em] uppercase" style={{ color: "#FF2400" }}>
        OPDRACHT
      </span>

      <div className="text-center">
        <h1 className="font-black uppercase text-white" style={{ fontSize: 44, letterSpacing: "0.05em", lineHeight: 1.1 }}>
          {gate.player_a_name}
          <br />
          <span style={{ color: "rgba(255,255,255,0.3)" }}>&</span>
          <br />
          {gate.player_b_name}
        </h1>
      </div>

      <div className="w-16 h-px" style={{ backgroundColor: "#FF007F" }} />

      <div className="flex flex-col items-center gap-2">
        <span
          className="px-4 py-2 text-sm font-black tracking-widest uppercase"
          style={{ border: "1px solid #FF007F", color: "#FF007F" }}
        >
          {gate.category.toUpperCase()}
        </span>
        <span className="text-xs font-mono" style={{ color: "#FFBF00" }}>
          Level {gate.level} — {LEVEL_NAMES[gate.level]}
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xs tracking-widest uppercase animate-pulse" style={{ color: "rgba(255,255,255,0.4)" }}>
          Wachten op acceptatie...
        </p>
        <div className="flex gap-6">
          {statuses.map(({ name, state }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div
                className="w-4 h-4 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    state === true ? "#00FF88" : state === false ? "#FF2400" : "rgba(255,255,255,0.2)",
                  boxShadow: state === true ? "0 0 12px rgba(0,255,136,0.5)" : "none",
                }}
              />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ConsentGatePlayerView({ gate, playerId, vetoTokens, onAccept, onVeto }: PlayerViewProps) {
  const isInvolved = playerId === gate.player_a_id || playerId === gate.player_b_id;
  const myConsent = gate.consented[playerId];

  if (!isInvolved) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            OPDRACHT VOOR
          </p>
          <h2 className="font-black uppercase text-white text-3xl">
            {gate.player_a_name} & {gate.player_b_name}
          </h2>
        </div>
        <p className="text-xs animate-pulse" style={{ color: "rgba(255,255,255,0.25)" }}>
          Wacht op acceptatie...
        </p>
      </div>
    );
  }

  if (myConsent !== null && myConsent !== undefined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl"
        >
          {myConsent ? "✓" : "✗"}
        </motion.div>
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
          {myConsent ? "Geaccepteerd. Wachten op partner..." : "Geveto'd."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center min-h-screen px-6 gap-8">
      <div className="text-center">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#FF007F" }}>
          VOOR JOU
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Level {gate.level} · {gate.category.toUpperCase()}
        </p>
      </div>
      <SwipeCard
        category={gate.category}
        level={gate.level}
        vetoTokens={vetoTokens}
        onAccept={onAccept}
        onVeto={onVeto}
      />
    </div>
  );
}
