import { Player } from "./firebase";
import { getRandomCommand, Command, CommandRatings } from "./commands";

export type MatchResult = {
  playerA: Player;
  playerB: Player;
  thirdPlayer?: Player;
  category: string;
  command: Command;
  overlappingTags: string[];
};

function toArr(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (v && typeof v === "object") return Object.values(v as Record<string, string>);
  return [];
}

function tagOverlap(a: Player, b: Player): string[] {
  const aTags = toArr(a.consented_tags);
  const bTags = toArr(b.consented_tags);
  const aLimits = toArr(a.hard_limits);
  const bLimits = toArr(b.hard_limits);
  return aTags.filter((t) => bTags.includes(t) && !aLimits.includes(t) && !bLimits.includes(t));
}

export function findBestMatch(
  players: Player[],
  sexinessLevel: number,
  usedCommandIds: string[],
  ratings?: CommandRatings
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
  const allAvailableTags = [...new Set([...toArr(playerA.consented_tags), ...toArr(playerB.consented_tags)])];

  const command = getRandomCommand(
    sexinessLevel,
    usedCommandIds,
    allAvailableTags,
    2,
    ratings
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
