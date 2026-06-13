import { create } from "zustand";
import { Player, Room } from "@/lib/supabase";

type GameStore = {
  playerId: string | null;
  playerName: string | null;
  room: Room | null;
  players: Player[];
  isHost: boolean;
  isPaused: boolean;
  setPlayer: (id: string, name: string) => void;
  setRoom: (room: Room) => void;
  setPlayers: (players: Player[]) => void;
  setIsHost: (v: boolean) => void;
  setPaused: (v: boolean) => void;
  reset: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  playerId: null,
  playerName: null,
  room: null,
  players: [],
  isHost: false,
  isPaused: false,
  setPlayer: (id, name) => set({ playerId: id, playerName: name }),
  setRoom: (room) => set({ room }),
  setPlayers: (players) => set({ players }),
  setIsHost: (v) => set({ isHost: v }),
  setPaused: (v) => set({ isPaused: v }),
  reset: () =>
    set({
      playerId: null,
      playerName: null,
      room: null,
      players: [],
      isHost: false,
      isPaused: false,
    }),
}));
