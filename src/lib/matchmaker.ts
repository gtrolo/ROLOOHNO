import { Player } from "./supabase";
import { getRandomCommand, Command } from "./commands";

export type MatchResult = {
  playerA: Player;
  playerB: Player;
  thirdPlayer?: Player;
  category: string;
  command: Command;
  overlappingTags: string[];
};

function tagOverlap(a: Player, b: Player): string[] {
  return a.consented_tags.filter(
    (t) => b.consented_tags.includes(t) && !a.hard_limits.includes(t) && !b.hard_limits.includes(t)
  );
}

export function findBestMatch(
  players: Player[],
  sexinessLevel: number,
  usedCommandIds: string[]
): MatchResult | null {
  if (players.length < 2) return null;

  let bestPair: [Player, Player] | null = null;
  let bestOverlap: string[] = [];

  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      const overlap = tagOverlap(players[i], players[j]);
      if (overlap.length > bestOverlap.length) {
        bestOverlap = overlap;
        bestPair = [players[i], players[j]];
      }
    }
  }

  // fallback: any two players even without overlap
  if (!bestPair) {
    bestPair = [players[0], players[1]];
    bestOverlap = [];
  }

  const [playerA, playerB] = bestPair;
  const allAvailableTags = [...new Set([...playerA.consented_tags, ...playerB.consented_tags])];

  const command = getRandomCommand(
    sexinessLevel,
    usedCommandIds,
    allAvailableTags,
    2
  );

  if (!command) return null;

  return {
    playerA,
    playerB,
    category: command.category,
    command,
    overlappingTags: bestOverlap,
  };
}
