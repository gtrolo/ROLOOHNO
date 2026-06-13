# ROLOOHNO — Design Prompt voor Claude

Gebruik deze prompt volledig, woord voor woord, in Claude's design interface.

---

## PROMPT

You are designing the complete UI/UX for **ROLOOHNO** — a real-time multiplayer adult party game PWA. This is not a wellness app. This is not a dating app. This is a high-arousal, night-mode, consent-driven party engine built for groups of adults at private parties. The design must feel like it belongs in a high-end underground club, not a startup.

Design ALL screens listed below. For each screen, produce a complete, pixel-ready mobile mockup (375px wide, full height). Do not skip screens. Do not produce generic placeholder UI.

---

### BRAND IDENTITY

**Name:** ROLOOHNO

**Personality:** Raw. Confident. Minimal. Dangerous. No softness, no pastels, no rounded corporate corners. Think: _Berghain meets high-end sextech meets brutalist typography._

**Color Palette — NON-NEGOTIABLE:**
- Background: `#000000` (true OLED black — saves battery, looks brutal)
- Surface / Cards: `#0D0D0D` and `#121212`
- Neon Primary: `#FF007F` (hot pink — used for CTAs, active states, accents)
- Amber / Warning: `#FFBF00` (used for timers, level indicators, host controls)
- Danger / Extreme: `#FF2400` (used only at Level 4-5, panic states)
- Text Primary: `#FFFFFF`
- Text Muted: `rgba(255,255,255,0.35)`
- Border / Divider: `rgba(255,255,255,0.07)`

**Typography:**
- Headings: **Inter Black** or **Space Grotesk Bold** — all caps, wide tracking (`letter-spacing: 0.2em`)
- Body: **Inter Regular** — tight, compact
- Code / Room Codes: **Roboto Mono** — large, spaced
- No serifs. No decorative fonts.

**Visual Style:**
- Zero border-radius on primary buttons (sharp edges signal authority)
- Subtle scanline texture overlay at 3% opacity on backgrounds (like an old monitor)
- Thin 1px neon borders (`#FF007F` at 30% opacity) on active/selected cards
- No drop shadows — use glow instead: `box-shadow: 0 0 20px rgba(255, 0, 127, 0.3)`
- Haptic moments (button presses, level changes, consent accepted) are represented visually by a brief full-screen flash at 10% opacity

---

### SCREENS TO DESIGN — ALL REQUIRED

---

#### SCREEN 01 — SPLASH / BOOT SCREEN

The first thing users see when they open the PWA.

- Full black screen
- Center: "ROLOOHNO" in massive all-caps Inter Black, letter-spacing 0.4em, white
- Below the name: a single thin horizontal line in `#FF007F`, 60px wide, animated (pulse)
- Below the line: "PARTY ENGINE" in 10px Roboto Mono, muted white, letter-spacing 0.3em
- No buttons. Auto-transitions to Home Screen after 1.5 seconds.
- Do NOT add a logo, icon, or illustration. Pure typographic.

---

#### SCREEN 02 — HOME SCREEN

Two choices. Nothing else.

- Top 30%: App name "ROLOOHNO" in large tracking typography, top-left aligned, with "v0.1" in muted text below it
- Center: Two full-width buttons stacked vertically with 16px gap:
  - **"ROOM AANMAKEN"** — filled `#FF007F`, black text, sharp corners, full width, 56px height
  - **"ROOM JOINEN"** — outlined with 1px `#FFFFFF` at 20% opacity, white text, same dimensions
- Bottom: "Voor volwassenen. Alleen met wederzijdse toestemming." in 10px muted text, centered
- Background: pure black with a very subtle radial gradient glow from center: `radial-gradient(ellipse at 50% 60%, rgba(255,0,127,0.04) 0%, #000 70%)`

---

#### SCREEN 03 — CREATE ROOM — NAME ENTRY

- Back arrow top-left (muted, minimal)
- Heading: "JOUW NAAM" all-caps, large
- Subtext: "Anderen zien dit tijdens het spel." muted, small
- Input field: borderless, bottom-border only in `#FF007F` when focused, large text (24px), white, placeholder in muted
- Character counter: "0/20" right-aligned below input, muted
- Below: Full-width pink CTA button "ROOM AANMAKEN →" — disabled state (30% opacity) when field is empty, full opacity when filled
- No other elements.

---

#### SCREEN 04 — JOIN ROOM — NAME + CODE ENTRY

Same layout as Screen 03 but with two input fields stacked:

1. **Naam** input (same style)
2. **Room Code** input: Roboto Mono, huge letter-spacing, uppercase auto-transform, 4 characters max. When 4 chars entered, field border flashes amber `#FFBF00` once.

CTA button: "JOINEN →" in amber border/text (not pink — joining is a different energy than creating)

---

#### SCREEN 05 — HOST LOBBY

The host sees this while waiting for players to join.

**Top section:**
- "ROOM CODE" label in muted small caps
- The 4-char code (e.g. "A8F2") in massive Roboto Mono — 72px, white, letter-spacing 0.5em — centered, dominant
- Below the code: a thin QR code placeholder (actual QR in implementation) — minimal, white on dark

**Middle section:**
- "SPELERS (3)" label left-aligned
- Horizontal list of player chips: each chip is a small pill with a colored dot (avatar color) + player name. Max 2 rows. New players animate in from the right.
- Empty state: "Wachten op spelers..." in muted italic

**Bottom section:**
- **Sexiness Slider** — full-width:
  - Left icon: small heart emoji or 🌸 in muted
  - Right icon: 🔥 in `#FF007F`
  - Track: thin, dark gray
  - Active fill: gradient from `#FF007F` to `#FF2400`
  - Thumb: large (28px), white circle with current level number (1–5) inside in black bold
  - Below slider: current level name ("PITTIG", "RUW", etc.) in `#FF007F`, centered, tracked
- "START HET SPEL →" button — appears only when ≥2 players connected. Pink fill. Disabled/hidden otherwise.

---

#### SCREEN 06 — PLAYER LOBBY (non-host)

Same as Host Lobby but:
- Room code still visible at top (smaller, 40px)
- "JIJ" indicator appears next to own name in the player list
- No slider, no start button
- Bottom: "Wachten op de host om te starten..." muted, animated dot pulse (. .. ...)
- Small level indicator badge in top-right corner — updates when host moves the slider (flashes briefly)

---

#### SCREEN 07 — PLAYER SETUP — TAG SELECTION (Consent Profiling)

Appears after lobby, before the game starts. Private — only you see your own.

- Heading: "JOUW GRENZEN" — large, white
- Subtext: "Alleen jij ziet dit. De app matcht opdrachten op basis van je keuzes." — muted, small
- Grid of tag pills (3 columns):
  - Each tag is a rounded-rectangle pill (slight radius, 4px max)
  - Unselected: dark surface `#1A1A1A`, muted white text, thin muted border
  - Selected: `#FF007F` background, black text, no border
  - Tags: Kussen · Aanraken · Blinddoek · Bondage · Oraal (geven) · Oraal (ontvangen) · Spanking · Rollenspel · Exhibitionisme · Voyeurisme · Groepsspel · Dominantie · Submissie · Buitenspel
- Hard Limits section below (separate):
  - "HARD LIMITS — nooit" label in `#FF2400` small
  - Same pill UI but selecting turns pill red (`#FF2400` bg, white text) — these are NEVER options for you
- Bottom: "OPSLAAN & KLAAR →" pink button

---

#### SCREEN 08 — CONSENT GATE (Host screen — broadcast)

The most dramatic screen in the app. Triggered when the matchmaker finds a pair.

- Full screen flash: starts white, fades to deep red `#1A0000` background in 0.5 seconds
- Top: "OPDRACHT" in `#FF2400`, small caps, tracked
- Center, massive: "ALEX & SAM" — player names in huge white all-caps Inter Black, 48px
- Below names: thin pink divider line
- Below divider: Category pill — e.g. "ORAAL" in `#FF007F` bordered pill, 14px tracked caps
- Below category: "Level 3 — PITTIG" in amber, small
- Bottom section (full width): "Wachten op acceptatie..." pulsing text — each connected phone of Alex and Sam shows a swipe card (Screen 09). A small progress indicator shows two circles (one per player) — grey = waiting, green = accepted, red = vetoed.
- Panic button: bottom-left corner, 10px circle, near-invisible black, becomes slightly visible on hover/touch

---

#### SCREEN 09 — SWIPE CARD (Player screen — Alex or Sam)

The individual player's consent gate. Appears on their phone simultaneously with Screen 08.

- Top: "VOOR JOU" in `#FF007F`, small
- Below: "Level 3 · ORAAL" — category and level, white, centered
- Center: A large physical card (the swipeable element):
  - Background: `#121212` with subtle `#FF007F` border glow
  - Inside card: the category description — "Je hebt 'Oraal (geven)' aangevinkt. Dit is een opdracht in die categorie. Swipe rechts om te accepteren." — white body text
  - Bottom of card: two micro-labels: "← VETO" left in muted / "ACCEPTEREN →" right in `#FF007F`
- Below card: Veto token indicator — "2 veto's resterend" with two pink diamond icons. When a veto is used, one diamond grays out permanently.
- Physics: card has visible tilt when dragging. Left drag turns card border red. Right drag turns border green. Snap animation on release.

---

#### SCREEN 10 — COMMAND SCREEN (All screens — post-acceptance)

The moment of execution. Shown on ALL connected devices simultaneously.

- Background: pure black
- Top: Timer ring (circular progress) in `#FF007F` — large, 80px diameter, center top. Number inside (seconds countdown). When timer hits 10 seconds: color shifts to `#FFBF00`. At 5 seconds: `#FF2400` + haptic.
- Center, dominant: The generated command text — white, Inter Regular, 20px, line-height 1.6, left-aligned with generous horizontal padding (32px). Max ~120 words. Text appears word-by-word (typewriter effect, 40ms per word).
- Player tags: two small colored pills at top of text block — e.g. `● Alex` `● Sam` — their avatar colors
- Bottom: Two action buttons side by side:
  - "KLAAR ✓" — outlined white, half width. When both players tap: screen transitions.
  - "STOP 🛑" — small, `#FF2400` text, minimal. Any player can tap. Triggers Screen 12.
- Host-only: a small "SKIP →" text link in muted, top-right corner

---

#### SCREEN 11 — POST-COMMAND RATING

Brief. 10 seconds max before auto-skipping.

- "HOE WAS HET?" — centered, muted, small
- Five icons in a row (not stars — use custom: 🥶 😐 🙂 🔥 💀) — tap to select
- Selected icon enlarges with a pink glow ring
- Below: "VOLGENDE OPDRACHT →" button (auto-triggers after 10s if no input)
- This data feeds the AI intensity calibration.

---

#### SCREEN 12 — SCENE PAUSED (Panic State)

Triggered by Panic Button. Overlays ALL screens instantly.

- Full black background — no transparency, no blur, pure `#000000`
- Center: "SCENE PAUSED" in white, Inter Black, 32px, tracked
- Below: a thin horizontal line in white at 20% opacity
- Below line: "Druk nogmaals om te hervatten." muted, 12px
- One centered button: "HERVATTEN" — outlined white, minimal. Requires ALL players to tap before game resumes (or host-only depending on settings).
- NO other elements. No animations. Maximum stillness.

---

#### SCREEN 13 — SECRET MISSION (Private — single player)

Delivered silently via push/local notification to ONE player's phone.

- Background: `#0D0D0D` — slightly lighter than black (signals: this is just for you)
- Top: "GEHEIME MISSIE" in `#FFBF00`, small caps
- Subtext: "Niemand anders ziet dit." muted, italic
- Center: Mission text — e.g. "Zorg dat Sam binnen 10 minuten haar topje uittrekt. Zonder dat Sam weet dat dit een missie is." — white, generous line-height
- Timer: countdown pill in amber, bottom of text block: "⏱ 8:42"
- Two buttons:
  - "VOLTOOID ✓" in amber fill — marks mission as complete, triggers a secret point bonus
  - "MISLUKT ✗" in muted — penalizes lightly
- The screen auto-dismisses from the notification shade — it should look like a private message, not a game screen.

---

#### SCREEN 14 — TENSION METER (Background UI element)

Not a standalone screen — this overlays the bottom of the Host's game screen as a persistent HUD element.

- Full-width thin progress bar at the very bottom of the screen (8px height)
- Fill: gradient from `#FF007F` (left) to `#FF2400` (right)
- Current fill % reflects tension level (increases as rounds progress, decreases if veto tokens are used)
- At 100%: the bar pulses, the word "PURGE" appears above it in red for 3 seconds, then the next generated command is automatically at Level 5 regardless of slider
- Label above bar (left): "SPANNING" muted small
- Label above bar (right): current % in `#FF007F` small mono

---

#### SCREEN 15 — SETTINGS SCREEN (Host only)

Accessible via gear icon in lobby.

- Header: "INSTELLINGEN" large, white
- Sections separated by thin dividers:

**SPEL INSTELLINGEN**
- Sexiness Level: same slider as lobby (repeat, editable here)
- Max Spelers: stepper (2–12)
- Sessieduur: dropdown — "Geen limiet / 1 uur / 2 uur / 3 uur"
- Asynchrone Missies: toggle (on/off) — amber when active
- De Mol: toggle — one player is secretly tasked with chaos

**VEILIGHEID**
- Veto Tokens per Speler: stepper (0–5)
- Panic Button: toggle (can be disabled if group agrees)
- Safe Word Reminder: toggle — shows "STOP = ALLES STOPT" before each round

**CONTENT**
- Taal: NL / EN toggle
- Expliciete Taal: toggle — only visible at level 3+
- Anatomische Termen: toggle — only visible at level 4+
- Degradatie (met consent): toggle — only at level 4+

Each toggle: custom pill toggle — off state is dark gray, on state is `#FF007F` track with white thumb.

---

### DESIGN CONSTRAINTS

1. **Mobile-first, portrait only.** 375×812px base. No landscape mode.
2. **All interactive elements minimum 44px touch target.** No tiny buttons.
3. **Maximum 2 typefaces.** Inter + Roboto Mono. Nothing else.
4. **No illustrations, no icons except functional UI icons.** Absolutely no generic icon libraries. Use text, symbols, and color as the primary visual language.
5. **No gradients on text.** Gradients only on progress bars and the tension meter.
6. **Dark mode only.** There is no light mode. There will never be a light mode.
7. **No modals/popups except Panic Screen.** Everything is a full screen transition.
8. **Spacing system:** 4px base unit. Use multiples: 8, 16, 24, 32, 48, 64.
9. **Every screen must show the Panic Button.** Bottom-left corner, 32×32px, `#000000` with a 1px `rgba(255,255,255,0.1)` border. Nearly invisible at rest.

---

### MOTION & INTERACTION NOTES (for handoff)

- **Screen transitions:** Vertical slide (new screen slides up from bottom) for forward navigation. Fade for triggered events (consent gate, panic).
- **Swipe card:** Framer Motion `drag="x"` with `dragConstraints`. Card rotates ±12° at max drag. Left drag: red border glow. Right drag: green glow.
- **Tension meter fill:** Animated via CSS transition, 1-second ease. Pulses at 100%.
- **Command text reveal:** Typewriter effect — characters appear left to right, 40ms interval.
- **Level change:** All screens briefly flash a color (pink at 1-3, amber at 4, red at 5) for 200ms + haptic.
- **Player join in lobby:** Card slides in from right with spring physics.
- **Timer ring:** SVG stroke-dashoffset animation, smooth, 1s tick.

---

### DELIVERABLES EXPECTED

For each of the 15 screens:
1. Full-resolution mobile mockup (375px wide)
2. Annotated component labels (font size, color hex, spacing)
3. State variations where applicable (empty state, filled state, loading state, error state)
4. A brief interaction note per screen (what triggers it, what it transitions to)

After all screens: produce a **Screen Flow Diagram** showing how all 15 screens connect — which screen leads to which, under what conditions.

---

### CONTEXT FOR THE AI

This app is used in the following scenario: 6–12 consenting adults at a private party, all holding their own phones, with one larger screen (tablet/TV) acting as the host display. The experience must feel premium, private, and intentional — like a Berghain wristband check, not a game show. Every design decision should heighten anticipation, not reduce friction to zero. Some friction is the product. The wait before a command is revealed is part of the experience.

The target user has been to sex-positive events, uses apps like Feeld and Pure, owns dark-mode everything, and would immediately close an app that looks like it was made with a Bootstrap template.

Build for that person.
