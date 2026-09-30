# Roadmap

## Current — v1.2 (shipped, working)
Editorial-minimal portfolio with Swiss × Cybercore accents. JSON-driven content, light + dark theme, GitHub activity graph, hover-overlay project cards with opt-in iframe preview. Lives on `main` branch.

This is now the active working version — user feedback was that v2 (the black+red superteam.fun redesign) didn't resonate, so the v2.1 work is archived on its own branch and we'll iterate on v1 from here.

## Archived — v2 (black + red superteam.fun redesign)
Lives on the `v2` branch. The full v2.1 redesign (deep violet/lime → black/red, Inter + JetBrains Mono, TextRain background, BracketButton + SectionCorners, dotted name wordmark, etc.) is preserved at commit `3d9273c`. Available for reference or revival — not actively maintained.

## What we keep in v1 (the active direction)
- Next.js 15 + Tailwind v4 + Motion + TS stack
- JSON-driven content (`data/*.json` stays the same shape)
- Zod validation, types as single source of truth
- Light + dark toggle (light is the default, dark via `.dark` class)
- Fonts: Boldonse (hero), Fraunces (display serif), Inter Tight (body), JetBrains Mono (labels)
- Bohemian warm palette + cyber neon accent (`--color-neon`)
- Background depth: dot grid + drifting geometric outlines + SVG noise
- GitHub activity grid (mock data, real API ready to wire)
- Hover-overlay project cards (image preview + iframe opt-in)

## v1 — open iteration items
Next things we might want to address on this version, in rough order of payoff:

1. **Real content swap** — fill in `data/site.json`, `data/projects.json`, `data/experience.json`, `data/now.json` with the user's real data. JSON schema is documented in `docs/CONTENT.md`. This is the highest-impact next step.
2. **Avatar** — drop at `/public/avatar.jpg` and add `"avatar": "/avatar.jpg"` to `data/site.json`. Currently unused.
3. **OG image** — drop at `/public/og.png` and add `"ogImage": "/og.png"`. Currently static `themeColor` only.
4. **Real GitHub activity** — swap the loader in `lib/activity.ts` to fetch from `https://github-contributions-api.jogruber.de/v4/{username}` (no auth). The component already accepts `ActivityData`.
5. **Per-project detail routes** (`/projects/[slug]`) — schema supports them (`slug`, `description`, `gallery`) but home is currently the primary surface. Add when there's a project warranting a longer writeup.
6. **Aesthetic refinements** — anything that comes up in review:
   - Section vertical rhythm (currently `py-20/24/32`)
   - Geometric accent size/opacity in hero (currently 420–520px @ 40% opacity)
   - Display serif (Fraunces) vs other options — italic currently omitted due to next/font quirk
   - Bohemian palette tones — could deepen or warm further

---

## Backlog — anytime
- RSS feed at `/feed.xml`
- Sitemap entries per project
- Blog / writing section (MDX)
- prefers-reduced-motion audit (already respects it; verify each motion component)
- Lighthouse 95+ on all categories
- Vercel deploy with branch previews
- Custom domain + HTTPS