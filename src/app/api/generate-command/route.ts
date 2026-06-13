import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getRandomCommand } from "@/lib/commands";

const RequestSchema = z.object({
  playerA: z.string(),
  playerB: z.string(),
  level: z.number().min(1).max(5),
  category: z.string().optional(),
  availableTags: z.array(z.string()).optional(),
  usedIds: z.array(z.string()).optional(),
});

const ResponseSchema = z.object({
  command: z.string(),
  duration_seconds: z.number().nullable(),
  requires_props: z.array(z.string()),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { playerA, playerB, level, availableTags = [], usedIds = [] } = parsed.data;

  // Try OpenRouter if key is set
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
          return NextResponse.json(
            ResponseSchema.parse({ command: text, duration_seconds: null, requires_props: [] })
          );
        }
      }
    } catch {
      // fall through to local fallback
    }
  }

  // Local fallback
  const cmd = getRandomCommand(level, usedIds, availableTags, 2);
  if (!cmd) {
    return NextResponse.json({ error: "No commands available" }, { status: 404 });
  }

  const resolvedCommand = cmd.command
    .replace(/{A}/g, playerA)
    .replace(/{B}/g, playerB);

  return NextResponse.json(
    ResponseSchema.parse({
      command: resolvedCommand,
      duration_seconds: cmd.duration_seconds,
      requires_props: cmd.requires_props,
    })
  );
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
