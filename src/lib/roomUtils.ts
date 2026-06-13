import { db, ref, get, AVATAR_COLORS } from "./firebase";
import { createRoom as fbCreateRoom, joinRoom as fbJoinRoom } from "./gameActions";

export function generateRoomCode(): string {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

export function randomAvatarColor(): string {
  return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
}

export async function createRoom(hostId: string): Promise<string> {
  let code = generateRoomCode();
  // Ensure unique code
  let snap = await get(ref(db, `rooms/${code}`));
  while (snap.exists()) {
    code = generateRoomCode();
    snap = await get(ref(db, `rooms/${code}`));
  }
  await fbCreateRoom(code, hostId);
  return code;
}

export async function joinRoom(roomCode: string, name: string, playerId: string): Promise<void> {
  const code = roomCode.toUpperCase();
  const snap = await get(ref(db, `rooms/${code}`));
  if (!snap.exists()) throw new Error("Room niet gevonden.");

  await fbJoinRoom(code, {
    id: playerId,
    room_id: code,
    name,
    avatar_color: randomAvatarColor(),
    consented_tags: [],
    hard_limits: [],
    veto_tokens: 2,
    status: "waiting",
    setup_complete: false,
  });
}
