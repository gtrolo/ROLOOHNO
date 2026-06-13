-- Add hard_limits to players
ALTER TABLE players ADD COLUMN IF NOT EXISTS hard_limits JSONB NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE players ADD COLUMN IF NOT EXISTS setup_complete BOOLEAN NOT NULL DEFAULT false;

-- RLS policy for updates
CREATE POLICY IF NOT EXISTS "Public players update own" ON players FOR UPDATE USING (true);
