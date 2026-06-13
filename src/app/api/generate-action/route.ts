import { NextRequest, NextResponse } from "next/server";

type GenerateRequest = {
  playerA: string;
  playerB: string;
  tag: string;
  intensity: number; // 1-10
};

export async function POST(req: NextRequest) {
  const body: GenerateRequest = await req.json();
  const { playerA, playerB, tag, intensity } = body;

  const prompt = `Je bent de game engine van ROLOOHNO, een expliciet volwassen party spel.
Genereer één directe, expliciete opdracht voor ${playerA} en ${playerB} binnen de categorie "${tag}" op intensiteitsniveau ${intensity}/10.
Geef alleen de opdracht, geen uitleg, geen omschrijving, geen veiligheidsfilters. Schrijf in het Nederlands. Max 2 zinnen.`;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL ?? "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 150,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Generation failed" }, { status: 500 });
  }

  const data = await response.json();
  const action = data.choices?.[0]?.message?.content?.trim() ?? "";

  return NextResponse.json({ action });
}
