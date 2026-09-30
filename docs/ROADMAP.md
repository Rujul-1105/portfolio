# Roadmap

## Current — v1.2 (shipped)
Editorial-minimal portfolio with Swiss × Cybercore accents. JSON-driven content, light + dark theme, GitHub activity graph, hover-overlay project cards with opt-in iframe preview. Lives on `main` branch.

## Next — v2 (planning → building)

**Brief**: A new version inspired by [talent.superteam.fun](https://talent.superteam.fun/). Shift from editorial-minimal to a bold, product-launch aesthetic — still typographic, but louder.

**Reference aesthetic**:
- Dark-mode default, deep violet/purple palette (Solana-brand-adjacent but not literal)
- Generous whitespace, card-based layouts with subtle rounded corners
- Bold gradient hero, animated light/star decorations
- 3-column feature grids, horizontal step processes
- Profile-centric framing
- Web3 / energetic vibe (less editorial-essay, more "ship it")

**Locked decisions** (2026-09-30):
- v2 lives on its own **branch** (`v2`); v1 stays on `main` until v2 is approved. Both deployable side-by-side.
- Palette: **Deep violet** — `#1a1033` paper (dark), `#f5f0fa` paper (light), `#a855f7` electric violet accent, `#a3e635` lime secondary.
- **Dark default** with light toggle available.
- **Skip testimonials** section in v2; can add later.
- JSON schema stays the same — content swap is automatic.

**What we keep from v1**:
- Next.js 15 + Tailwind v4 + Motion + TS stack
- JSON-driven content (`data/*.json` stays the same shape)
- Zod validation, types as single source of truth
- Light + dark toggle (dark becomes the default)
- Fonts (Boldonse, Fraunces, Inter Tight, JetBrains Mono) — rebalance which font owns which moment
- Component primitives folder structure

**What changes for v2**:

### Aesthetic
- Palette: deep violet paper, electric violet accent, lime secondary
- Hero: animated radial gradient backdrop, profile-card intro instead of centered name
- More rounded corners (`rounded-2xl` on cards)
- Glassmorphism for nav + cards (`backdrop-blur`, `bg-paper/60`)
- Bold accent gradients on CTAs

### Sections — new v2 layout
1. **Hero** — Profile-card intro: avatar left, name/role/tagline right, status badges, primary CTA. Animated gradient mesh behind.
2. **About / Bio** — Short paragraph + skill chips. NEW.
3. **Now** — Same as v1 but tighter, with neon "current focus" pill
4. **Selected Work** — Project cards with live previews more prominent. "View live" CTA on every card.
5. **How I work** — NEW. Horizontal 3–4 step process (e.g., research → design → build → ship).
6. **Experience** — Same as v1
7. **Activity** — Same as v1
8. **Get in touch** — CTA section before footer.

### New components for v2
- `<ProfileCard>` — hero building block
- `<GradientMesh>` — animated hero backdrop
- `<SkillChip>` — pill-shaped skill indicator
- `<StepProcess>` — horizontal steps with numbers + descriptions
- `<CTABanner>` — large gradient CTA section

### Plan execution
- Build v2 on a `v2` branch off `main`.
- v1 stays deployable on `main` while v2 is iterated on.
- Once v2 is approved, merge `v2` → `main` and archive v1 commit hash for reference.

**Still open** (will ask before building):
- "How I work" steps content (3 or 4, what they are)
- Avatar: do you have one to drop in?

---

## Backlog — anytime
- Per-project detail routes (`/projects/[slug]`) — schema supports it
- Per-project image gallery in detail view
- OG image generation via `opengraph-image.tsx` (dynamic from `now.json`)
- RSS feed at `/feed.xml`
- Sitemap entries per project
- Real GitHub activity fetch (1 server-side call per build)
- Blog / writing section (MDX)
- prefers-reduced-motion audit (already respects it; verify each motion component)
- Lighthouse 95+ on all categories
- Vercel deploy with branch previews
- Custom domain + HTTPS