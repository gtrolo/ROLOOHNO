"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function DemoSplitPage() {
  const { code } = useParams<{ code: string }>();
  const searchParams = useSearchParams();
  const hostPid = searchParams.get("hostPid") ?? "";
  const playerPid = searchParams.get("playerPid") ?? "";
  const playerName = searchParams.get("playerName") ?? "Alex";
  const upper = code?.toUpperCase() ?? "";

  const hostUrl = `/game/${upper}?pid=${hostPid}&host=1&name=Jij`;
  const playerUrl = `/game/${upper}?pid=${playerPid}&host=0&name=${encodeURIComponent(playerName)}`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        minHeight: "100vh",
        backgroundColor: "#080808",
        padding: 32,
      }}
    >
      {/* Host phone */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <p style={{ color: "#8E8E93", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          HOST — Jij
        </p>
        <PhoneFrame src={hostUrl} />
      </div>

      {/* Player phone */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <p style={{ color: "#8E8E93", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          SPELER — {playerName}
        </p>
        <PhoneFrame src={playerUrl} />
      </div>
    </div>
  );
}

function PhoneFrame({ src }: { src: string }) {
  return (
    <div style={{
      width: 390,
      height: 844,
      borderRadius: 48,
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 120px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.04)",
      background: "#0D0D0D",
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 120, height: 34, background: "#080808",
        borderRadius: "0 0 20px 20px", zIndex: 100,
      }} />
      <iframe
        src={src}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          paddingTop: 34,
          backgroundColor: "#0D0D0D",
        }}
      />
    </div>
  );
}
