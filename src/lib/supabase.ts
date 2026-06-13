import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Room = {
  id: string;
  room_code: string;
  host_id: string;
  game_state: {
    phase: "lobby" | "setup" | "consent_gate" | "execution" | "paused";
    active_players: string[];
    tension_level: number;
  };
  created_at: string;
};

export type Player = {
  id: string;
  room_id: string;
  name: string;
  avatar_color: string;
  consented_tags: string[];
  veto_tokens: number;
  status: "waiting" | "active" | "vetoed";
};
