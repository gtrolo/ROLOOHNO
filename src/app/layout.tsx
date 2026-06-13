import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PauseOverlay } from "@/components/PauseOverlay";

export const metadata: Metadata = {
  title: "ROLOOHNO",
  description: "Real-time multiplayer party engine",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ROLOOHNO",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased select-none" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <PauseOverlay />
        {children}
      </body>
    </html>
  );
}
