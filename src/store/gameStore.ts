import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Player, Room, SecretMission } from "@/lib/firebase";

type GameStore = {
  // Identity
  playerId: string | null;
  playerName: string | null;
  isHost: boolean;
  // Room
  room: Room | null;
  players: Player[];
  // UI
  isPaused: boolean;
  activeSecretMission: SecretMission | null;
  showFlash: string | null; // hex color or null
  // Actions
  setPlayer: (id: string, name: string) => void;
  setRoom: (room: Room) => void;
  setPlayers: (players: Player[]) => void;
  setIsHost: (v: boolean) => void;
  setPaused: (v: boolean) => void;
  setActiveSecretMission: (m: SecretMission | null) => void;
  triggerFlash: (color: string) => void;
  reset: () => void;
};

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      playerId: null,
      playerName: null,
      isHost: false,
      room: null,
      players: [],
      isPaused: false,
      activeSecretMission: null,
      showFlash: null,
      setPlayer: (id, name) => set({ playerId: id, playerName: name }),
      setRoom: (room) => set({ room }),
      setPlayers: (players) => set({ players }),
      setIsHost: (v) => set({ isHost: v }),
      setPaused: (v) => set({ isPaused: v }),
      setActiveSecretMission: (m) => set({ activeSecretMission: m }),
      triggerFlash: (color) => {
        set({ showFlash: color });
        setTimeout(() => set({ showFlash: null }), 300);
      },
      reset: () =>
        set({
          playerId: null,
          playerName: null,
          isHost: false,
          room: null,
          players: [],
          isPaused: false,
          activeSecretMission: null,
          showFlash: null,
        }),
    }),
    {
      name: "roloohno-game-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        playerId: state.playerId,
        playerName: state.playerName,
        isHost: state.isHost,
      }),
    }
  )
);
