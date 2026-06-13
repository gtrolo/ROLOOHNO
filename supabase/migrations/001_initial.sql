-- Ephemeral rooms table
create table if not exists rooms (
  id uuid primary key default gen_random_uuid(),
  room_code text not null unique,
  host_id uuid not null,
  game_state jsonb not null default '{
    "phase": "lobby",
    "active_players": [],
    "tension_level": 0
  }'::jsonb,
  created_at timestamptz not null default now()
);

-- Ephemeral players table
create table if not exists players (
  id uuid primary key,
  room_id uuid not null references rooms(id) on delete cascade,
  name text not null,
  avatar_color text not null default '#FF007F',
  consented_tags jsonb not null default '[]'::jsonb,
  veto_tokens integer not null default 2,
  status text not null default 'waiting' check (status in ('waiting', 'active', 'vetoed'))
);

-- Auto-delete rooms older than 24 hours (run via pg_cron or Supabase Edge Functions)
-- For now enable RLS with open policies (adjust for production)
alter table rooms enable row level security;
alter table players enable row level security;

create policy "Public rooms read" on rooms for select using (true);
create policy "Public rooms insert" on rooms for insert with check (true);
create policy "Public players read" on players for select using (true);
create policy "Public players insert" on players for insert with check (true);
create policy "Public players update" on players for update using (true);

-- Enable realtime for both tables
alter publication supabase_realtime add table rooms;
alter publication supabase_realtime add table players;
