import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getRandomCommand } from "@/lib/commands";

const RequestSchema = z.object({
  level: z.number().min(1).max(5),
  players: z.array(z.object({ name: z.string(), tags: z.array(z.string()) })).optional(),
  // Legacy fields kept for compatibility
  playerA: z.string().optional(),
  playerB: z.string().optional(),
  availableTags: z.array(z.string()).optional(),
  usedIds: z.array(z.string()).optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { level, players = [], usedIds = [] } = parsed.data;
  const playerA = parsed.data.playerA ?? players[0]?.name ?? "Speler A";
  const playerB = parsed.data.playerB ?? players[1]?.name ?? "Speler B";
  const availableTags = parsed.data.availableTags ??
    [...new Set(players.flatMap((p) => p.tags))];

  // AI generation if key is configured
  if (process.env.OPENROUTER_API_KEY) {
    try {
      const prompt = buildPrompt(playerA, playerB, level, availableTags);
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
        },
        body: JSON.stringify({
          model: process.env.OPENROUTER_MODEL ?? "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.92,
          max_tokens: 200,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content?.trim() ?? "";
        if (text.length > 20) {
          return NextResponse.json({
            command: text,
            category: "AI",
            duration_seconds: null,
            source: "ai",
          });
        }
      }
    } catch {
      // fall through to local fallback
    }
  }

  // Local fallback — always works, no API key needed
  const cmd = getRandomCommand(level, usedIds, availableTags, 2);
  if (!cmd) {
    return NextResponse.json({ error: "No commands available" }, { status: 404 });
  }

  return NextResponse.json({
    command: cmd.command,
    category: cmd.category,
    duration_seconds: cmd.duration_seconds,
    source: "local",
  });
}

function buildPrompt(playerA: string, playerB: string, level: number, tags: string[]) {
  const levelDesc = ["zacht/romantisch", "warm/duidelijk", "pittig/direct", "ruw/expliciet", "extreem/anatomisch"][level - 1];
  return `Je bent de spelleider van een volwassen party game genaamd ROLOOHNO.
Genereer één concrete, uitvoerbare opdracht voor ${playerA} en ${playerB}.
Intensiteitsniveau: ${level}/5 (${levelDesc}).
Beschikbare categorieën: ${tags.join(", ") || "algemeen"}.

Regels:
- Gebruik bevelende wijs in het Nederlands
- Specificeer lichaamsdelen, tijdsduur en volgorde
- Geen metaforen of vage taal
- Maximaal 2 zinnen
- Geen moraliserende tekst

Geef alleen de opdracht, niets anders.`;
}
