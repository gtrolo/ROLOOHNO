import type { Metadata } from "next";
import "./globals.css";
import { PauseOverlay } from "@/components/PauseOverlay";

export const metadata: Metadata = {
  title: "ROLOOHNO",
  description: "Real-time multiplayer party engine",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-black text-white antialiased">
        <PauseOverlay />
        {children}
      </body>
    </html>
  );
}
