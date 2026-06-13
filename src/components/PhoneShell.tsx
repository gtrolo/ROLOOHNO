"use client";

import { usePathname } from "next/navigation";

export function PhoneShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith("/demo/");

  if (isDemo) {
    // Demo split page renders fullscreen — no phone wrapper
    return <>{children}</>;
  }

  return (
    <>
      {/* Mobile: render directly */}
      <div className="md:hidden min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
        {children}
      </div>

      {/* Desktop: phone frame */}
      <div className="hidden md:flex items-center justify-center min-h-screen">
        <div style={{
          width: 390,
          height: 844,
          borderRadius: 48,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 120px rgba(0,0,0,0.95), inset 0 0 0 1px rgba(255,255,255,0.04)",
          background: "#0D0D0D",
          flexShrink: 0,
        }}>
          {/* Notch */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: 120, height: 34, background: "#080808",
            borderRadius: "0 0 20px 20px", zIndex: 100,
          }} />
          <div style={{ width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden", paddingTop: 34, scrollbarWidth: "none" }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
