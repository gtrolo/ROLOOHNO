import { supabase } from "./supabase";

const AVATAR_COLORS = [
  "#FF007F", "#FFBF00", "#00FFBF", "#7F00FF", "#FF4500", "#00BFFF",
];

export function generateRoomCode(): string {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

export function randomAvatarColor(): string {
  return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
}

export async function createRoom(hostId: string): Promise<string> {
  const room_code = generateRoomCode();
  const { error } = await supabase.from("rooms").insert({
    room_code,
    host_id: hostId,
    game_state: {
      phase: "lobby",
      active_players: [],
      tension_level: 0,
    },
  });
  if (error) throw error;
  return room_code;
}

export async function joinRoom(
  roomCode: string,
  name: string,
  playerId: string
): Promise<string> {
  const { data: room, error: roomError } = await supabase
    .from("rooms")
    .select("id")
    .eq("room_code", roomCode.toUpperCase())
    .single();

  if (roomError || !room) throw new Error("Room niet gevonden.");

  const { error } = await supabase.from("players").insert({
    id: playerId,
    room_id: room.id,
    name,
    avatar_color: randomAvatarColor(),
    consented_tags: [],
    veto_tokens: 2,
    status: "waiting",
  });

  if (error) throw error;
  return room.id;
}
