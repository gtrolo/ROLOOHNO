"use client";

import { motion } from "framer-motion";
import { ConsentGateState, LEVEL_NAMES } from "@/lib/firebase";

type HostViewProps = { gate: ConsentGateState };
type PlayerViewProps = {
  gate: ConsentGateState;
  playerId: string;
  vetoTokens: number;
  onAccept: () => void;
  onVeto: () => void;
};

export function ConsentGateHostView({ gate }: HostViewProps) {
  const players = [
    { id: gate.player_a_id, name: gate.player_a_name },
    { id: gate.player_b_id, name: gate.player_b_name },
  ];
  const consented = Object.values(gate.consented).filter(Boolean).length;
  const total = players.length;

  return (
    <div className="flex flex-col min-h-screen px-5 py-6" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-white">HOST BROADCAST</h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Alle deelnemers moeten akkoord gaan</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Selected players */}
        <div className="p-4 flex items-center justify-between" style={{ backgroundColor: "var(--card)", borderRadius: 16 }}>
          <div>
            <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>SELECTED PLAYERS</p>
            <p className="text-xl font-black text-white">{gate.player_a_name.toUpperCase()} + {gate.player_b_name.toUpperCase()}</p>
          </div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>

        {/* Category + intensity row */}
        <div className="flex gap-3">
          <div className="flex-1 p-4" style={{ backgroundColor: "var(--card)", borderRadius: 16 }}>
            <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>CATEGORY</p>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-white">{gate.category}</p>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
          </div>
          <div className="flex-1 p-4" style={{ backgroundColor: "var(--card)", borderRadius: 16 }}>
            <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-secondary)" }}>INTENSITY</p>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-white">Level {gate.level}</p>
              <div className="flex gap-0.5 items-end">
                {[1,2,3,4,5].map((n) => (
                  <div key={n} className="w-2 rounded-sm" style={{ height: 4 + n * 2, backgroundColor: n <= gate.level ? "var(--red)" : "#333" }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="p-4" style={{ backgroundColor: "var(--card)", borderRadius: 16 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: consented === total ? "rgba(76,175,80,0.2)" : "#2A2A2A" }}>
              {consented === total
                ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                : <span className="text-xs font-bold text-white">{consented}/{total}</span>
              }
            </div>
            <div className="flex-1 h-0.5" style={{ backgroundColor: "var(--red)" }} />
            <p className="text-sm font-medium text-white">{consented} / {total} akkoord</p>
          </div>
        </div>

        {/* Player status list */}
        <div style={{ backgroundColor: "var(--card)", borderRadius: 16, overflow: "hidden" }}>
          {players.map((p) => {
            const status = gate.consented[p.id];
            return (
              <div key={p.id} className="flex items-center gap-3 px-4 py-4" style={{ borderBottom: "1px solid var(--divider)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: "#2A2A2A" }}>
                  {p.name[0].toUpperCase()}
                </div>
                <span className="flex-1 font-medium text-white">{p.name}</span>
                {status === true && (
                  <div className="flex items-center gap-1.5" style={{ color: "#4CAF50" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-sm font-medium">Akkoord</span>
                  </div>
                )}
                {status === false && (
                  <div className="flex items-center gap-1.5" style={{ color: "var(--red)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    <span className="text-sm font-medium">Veto</span>
                  </div>
                )}
                {status === null && (
                  <span className="text-sm animate-pulse" style={{ color: "var(--text-secondary)" }}>Wacht...</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Status bar */}
        {consented === total && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 py-4"
            style={{ backgroundColor: "var(--red)", borderRadius: 16 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span className="font-bold text-white tracking-wide">GOEDGEKEURD</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function ConsentGatePlayerView({ gate, playerId, vetoTokens, onAccept, onVeto }: PlayerViewProps) {
  const isInvolved = playerId === gate.player_a_id || playerId === gate.player_b_id;
  const myStatus = gate.consented[playerId];

  if (!isInvolved) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--card)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-white text-center">Even wachten...</p>
        <p className="text-sm text-center" style={{ color: "var(--text-secondary)" }}>
          {gate.player_a_name} & {gate.player_b_name} beslissen nu
        </p>
      </div>
    );
  }

  if (myStatus !== null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-8" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: myStatus ? "rgba(76,175,80,0.15)" : "var(--red-dim)" }}>
          {myStatus
            ? <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            : <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          }
        </div>
        <p className="text-lg font-semibold text-white">{myStatus ? "Geaccepteerd" : "Geveto'd"}</p>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Wachten op de ander...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen px-5 py-6" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="mb-2">
        <h1 className="text-3xl font-black text-white">JOUW KEUZE</h1>
        <div className="w-8 h-0.5 mt-1" style={{ backgroundColor: "var(--red)" }} />
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Private</p>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full"
          style={{ backgroundColor: "var(--card)", borderRadius: 20, border: "1px solid var(--red-border)", overflow: "hidden" }}
        >
          <div className="flex flex-col items-center gap-4 py-10 px-6">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2A2A2A" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <rect x="9" y="12" width="6" height="5" rx="1" fill="var(--red)" stroke="none" />
                <path d="M12 10v2" stroke="var(--red)" strokeWidth="2" />
              </svg>
            </div>

            <p className="text-xl font-bold text-white text-center">
              Jij en {playerId === gate.player_a_id ? gate.player_b_name : gate.player_a_name} zijn geselecteerd
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Private challenge</p>

            <div className="flex items-center gap-2 px-4 py-2" style={{ border: "1px solid var(--red-border)", borderRadius: 20 }}>
              <div className="flex gap-0.5 items-end">
                {[1,2,3,4,5].map((n) => (
                  <div key={n} className="w-2 rounded-sm" style={{ height: 4 + n * 2, backgroundColor: n <= gate.level ? "var(--red)" : "#333" }} />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">Level {gate.level}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex border-t" style={{ borderColor: "var(--divider)" }}>
            <button
              onClick={onVeto}
              className="flex-1 flex items-center justify-center gap-2 py-5 font-bold text-sm tracking-wide transition-all active:scale-95"
              style={{ color: "var(--red-light)", borderRight: "1px solid var(--divider)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              VETO
            </button>
            <button
              onClick={onAccept}
              className="flex-1 flex items-center justify-center gap-2 py-5 font-bold text-sm tracking-wide transition-all active:scale-95"
              style={{ backgroundColor: "var(--red)", color: "#fff" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              ACCEPTEER
            </button>
          </div>
        </motion.div>
      </div>

      {/* Veto tokens */}
      <div className="flex items-center justify-center gap-2 pb-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Veto&apos;s over:{" "}
          <span className="font-bold" style={{ color: "var(--red-light)" }}>{vetoTokens}</span>
        </span>
      </div>
    </div>
  );
}
