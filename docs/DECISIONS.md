# Design Decisions

Format: `[YYYY-MM-DD] — decision — rationale`

## Stack

- **2026-09-30** — Next.js 15 (App Router) over Vite/Astro — picked for the ecosystem (next/font, next/image), future ISR if blog added, and Vercel deploys as the assumed target.
- **2026-09-30** — Tailwind v4 (`@theme` in `globals.css`) over v3 (`tailwind.config.ts`) — fewer files, faster HMR, modern syntax. Pair with `@custom-variant dark` for class-based theming.
- **2026-09-30** — Motion (`motion/react`) over Framer Motion v11 import alias + CSS-only — `useReducedMotion` is first-class, and stagger orchestration is trivial vs hand-rolling with `delay`.
- **2026-09-30** — Zod schemas mirror every TypeScript interface in `types/content.ts` and run at module load in `lib/content.ts`. JSON drift fails the build, not the runtime.

## Content strategy

- **2026-09-30** — All content lives in `data/*.json`. No CMS. Trade-off accepted: editing requires a rebuild. Mitigated by `npm run dev` HMR which is instant for JSON.
- **2026-09-30** — Per-project detail routes (`/projects/[slug]`) deferred — schema supports them (`slug`, `description`, `gallery`) but home page is the primary surface.

## Aesthetic — v1.0
- **2026-09-30** — **Editorial minimal** as initial direction. Magazine-spread feel, serif display + clean sans, generous whitespace.
- **2026-09-30** — Initial font stack: Instrument Serif (display) / Inter Tight (body) / JetBrains Mono (labels).

## Aesthetic — v1.1 (current)
- **2026-09-30** — **Swiss × Cybercore** after user feedback ("low effort one prompt vibe"). Strong Swiss grid + cyber accents (terminal labels, neon status, glow on hover, drifting geometric outlines).
- **2026-09-30** — Boldonse added for hero name — chunky display face with neon period. Confirmed available on Google Fonts (note: requires `weight: ['400']` and `adjustFontFallback: false` to avoid the override-metrics warning).
- **2026-09-30** — Newsreader dropped, swapped to Fraunces (variable serif with optical sizing) for display. **Note**: italic weight must be omitted — next/font throws `Cannot read properties of null (reading '1')` otherwise. Possible future workaround: load italic as a separate `Fraunces({ style: ['italic'] })` import.
- **2026-09-30** — Background depth via three layered SVGs: animated dot grid (radial fade mask), drifting geometric outlines (ring + arc, 80s rotation, 9s vertical drift), SVG turbulence noise at 4% opacity. None are essential — easy to disable individually.
- **2026-09-30** — Cyber accent color: warm forest green `#2f7a3a` in light, electric `#4dff8c` in dark. Chosen over cyan/purple because it pairs with the bohemian palette without clashing.

## Aesthetic — v1.1a (bohemian palette)
- **2026-09-30** — Light theme warmed after user feedback ("light theme is too white"). Paper moved from `#faf8f5` to `#efe5d2`, ink from `#1a1714` to `#2a1f17`, line from `#e6e1d8` to `#cdbf9f`. Added secondary palette tones (clay, sage, rose) for future use.

## Section additions — v1.1b
- **2026-09-30** — GitHub Activity added as section `04` (after Experience, before footer). Grid uses 53×7 cells with 5 intensity levels. Mock data is seeded by username length so it doesn't reshuffle per render. Real API integration path is `https://github-contributions-api.jogruber.de/v4/{username}` (no auth).

## Spacing — v1.1c
- **2026-09-30** — Vertical rhythm tightened across the board after user feedback ("spacing is not right"). Specific changes:
  - `Section` header→content: `mt-16/20` → `mt-10/12`
  - `Section` outer padding: `py-24/32/40` → `py-20/24/32`
  - `NowBlock` padding: `py-8` → `py-6`
  - `ProjectRow` / `ExperienceRow` padding: `py-8/10` → `py-6/8` and `py-10` → `py-7/8`
  - `ActivitySection` header→grid margin: `mb-12/16` → `mb-8/10`
  - Hero geometric accents: 640–820px → 420–520px @ 40% opacity

## Hover preview — v1.2
- **2026-09-30** — `ProjectHoverPreview` adds a hover overlay to the featured card. Decision: render a dark gradient overlay with title + CTA instead of an iframe by default — many production sites set `X-Frame-Options: DENY` which would just show a blank box. Iframe is opt-in via new `previewUrl` field.
- **2026-09-30** — Compact rows get a left neon accent line on hover (scale-y origin top, 300ms) + visible ↗ + subtle background tint. Reads as "row is alive" without competing with the featured card.

## Aesthetic — v2.0-rc (cut on `v2` branch)
- **2026-09-30** — **Deep Violet + Lime** palette replaces bohemian cream. Dark default (paper `#11091f`, ink `#f5edff`), violet accent `#a855f7`, lime secondary `#a3e635`. Light mode available via `.light` class flip.
- **2026-09-30** — Glassmorphism introduced — `glass` utility sets `backdrop-filter: blur(18px) saturate(140%)` + tinted glass fill + violet-tinted border. Used on TopNav, ProfileCard, project cards, GitHub activity, CTABanner.
- **2026-09-30** — Hero redesigned as **ProfileCard** (avatar + identity in a glass container) on top of an animated **GradientMesh** (3 radial-gradient blobs drifting over a 48px grid). Replaces the centered-name hero of v1.
- **2026-09-30** — Two new sections added: **About** (bio + skill chips) and **How I work** (4-step horizontal process: Listen / Sketch / Build / Ship) and a closing **CTABanner** before the footer.
- **2026-09-30** — `--color-neon` aliased to `--color-lime` in v2 globals.css so primitives shared with v1 (ProjectRow hover arrow, ExperienceRow present indicator) work in both versions without duplication.
- **2026-09-30** — v1 home moved to `/v1` route group (`app/v1/page.tsx` + `app/v1/globals.css` + `app/v1/layout.tsx`). v1 retains its bohemian palette on that path; v2 is the new default at `/`.
- **2026-09-30** — Default theme flipped to dark (was light in v1). `themeScript` now adds `.light` for light mode instead of `.dark` for dark — `.light` class opt-in means "no class" = dark, which matches the v2 default.

## Aesthetic — v2.1 (this iteration, after "your v2 is trash")
- **2026-10-01** — **Major rework** of v2 because the v2.0 design was generic and didn't match the actual superteam.fun aesthetic. Decisions made after studying the real reference:
  - **Palette**: dropped violet/lime entirely. New palette is pure black `#000000` paper with electric red `#ff3a1f` accent. Black + red is the entire visual identity — no gradients on backgrounds, no glassmorphism, no purple tints.
  - **Fonts**: dropped Boldonse (display) and Fraunces (serif). Now only two fonts — **Inter** for headlines (display sans, geometric) and **JetBrains Mono** for everything else (body, labels, eyebrows, subheads, CTAs). Mono-everywhere is the superteam signature.
  - **Body font default**: `body { font-family: var(--font-mono) }` — the page reads as a developer product, not a magazine.
  - **Hero**: completely redesigned. Centered massive headline (clamp 3.5rem–9rem), `// Powered by · {role}` eyebrow above, mono subhead below, two `BracketButton` CTAs side by side. Background is `TextRain` — 14 vertical columns of red Asian characters (katakana + kanji + portfolio-relevant English words) tilted -3°, slowly drifting via `rain-on` keyframes, with a radial vignette over the middle so the headline stays legible.
  - **`.dot-red` utility**: every section headline ends with a literal red period. This is the single most distinctive visual element of the reference and is now used everywhere.
  - **`bracket-corners` utility + `<BracketButton>`**: corner-bracket pseudo-elements on buttons and section frames — rendered via CSS so any element gets them for free.
  - **`<SectionCorners>`**: crosshair `+` markers at the four corners of every section. Sits as an absolute-positioned overlay, purely decorative.
  - **About → "What I do"**: 4-feature grid (Build / Design / Lead / Ship) with `gap-px bg-line` to give a tight grid feel; one card highlighted in red.
  - **Process flow**: was 4 cards in a grid, now a horizontal flow with `→` arrows between steps, each step has a `bracket-corners` icon container.
  - **Footer**: 3-column grid (Site / Find me / Subscribe — subscribe is a `mailto:` link with corner brackets instead of a real form, to avoid the Server-Component-onSubmit issue). Massive dotted name wordmark at the bottom using `background-image: radial-gradient(circle, red 1.2px, transparent 1.6px); background-size: 6px 6px; -webkit-background-clip: text` — renders the name in red dot pattern.
  - **`--color-neon` aliased to `--color-accent` (red)** so shared primitives (ProjectRow hover arrow, ExperienceRow present indicator) pick up red instead of lime.
  - **Section eyebrow**: every section starts with `// Section Name` in red mono caps — direct lift from the reference.
  - **Hero copy**: changed from "Your Name" placeholder to "The quiet layer of software" — generic enough for placeholder, evocative enough to show off the typographic moment.