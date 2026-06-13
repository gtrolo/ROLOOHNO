import { initializeApp, getApps } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  update,
  get,
  onValue,
  push,
  remove,
  off,
  type DatabaseReference,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "placeholder",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "placeholder",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL ?? "https://placeholder-default-rtdb.firebaseio.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "placeholder",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "placeholder",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "placeholder",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "placeholder",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getDatabase(app);

export { ref, set, update, get, onValue, push, remove, off };
export type { DatabaseReference };

// ─── Domain Types ─────────────────────────────────────────────────────────────

export type GamePhase = "lobby" | "setup" | "playing" | "paused";
export type GameSubphase = "idle" | "consent_gate" | "executing" | "rating";

export type ConsentGateState = {
  player_a_id: string;
  player_b_id: string;
  player_a_name: string;
  player_b_name: string;
  category: string;
  level: number;
  consented: Record<string, boolean | null>;
};

export type ActiveCommand = {
  id: string;
  command: string;
  target_player_ids: string[];
  target_names: string[];
  category: string;
  level: number;
  duration_seconds: number | null;
  started_at: string;
  completed_by: string[];
};

export type SecretMission = {
  id: string;
  target_player_id: string;
  mission: string;
  duration_seconds: number;
  assigned_at: string;
  completed: boolean;
};

export type GameState = {
  phase: GamePhase;
  subphase: GameSubphase;
  sexiness_level: number;
  tension: number;
  active_players: string[];
  consent_gate: ConsentGateState | null;
  active_command: ActiveCommand | null;
  secret_missions: SecretMission[];
  completed_command_ids: string[];
  round: number;
};

export const DEFAULT_GAME_STATE: GameState = {
  phase: "lobby",
  subphase: "idle",
  sexiness_level: 2,
  tension: 0,
  active_players: [],
  consent_gate: null,
  active_command: null,
  secret_missions: [],
  completed_command_ids: [],
  round: 0,
};

export type Room = {
  id: string;
  room_code: string;
  host_id: string;
  game_state: GameState;
  created_at: string;
  paused?: boolean;
};

export type Player = {
  id: string;
  room_id: string;
  name: string;
  avatar_color: string;
  consented_tags: string[];
  hard_limits: string[];
  veto_tokens: number;
  status: "waiting" | "active" | "vetoed";
  setup_complete: boolean;
};

// ─── Tag Definitions ──────────────────────────────────────────────────────────

export const ALL_TAGS = [
  "Kussen",
  "Aanraken",
  "Blinddoek",
  "Bondage",
  "Oraal (geven)",
  "Oraal (ontvangen)",
  "Spanking",
  "Rollenspel",
  "Exhibitionisme",
  "Voyeurisme",
  "Groepsspel",
  "Dominantie",
  "Submissie",
  "Buitenspel",
] as const;

export type Tag = (typeof ALL_TAGS)[number];

export const LEVEL_NAMES: Record<number, string> = {
  1: "ZACHT",
  2: "WARM",
  3: "PITTIG",
  4: "RUW",
  5: "EXTREEM",
};

export const AVATAR_COLORS = [
  "#FF007F",
  "#FFBF00",
  "#00FFBF",
  "#7F00FF",
  "#FF4500",
  "#00BFFF",
  "#FF69B4",
  "#7FFF00",
];
