# Changelog

Format: `[YYYY-MM-DD] — version — summary`

| Date | Version | Change |
|---|---|---|
| 2026-09-30 | v1.0 | Initial build. Next.js 15 + Tailwind v4 + Motion + TS. Sections: Hero / Now / Selected Work / Experience. Editorial-minimal aesthetic with Instrument Serif / Inter Tight / JetBrains Mono. JSON-driven content via `data/*.json`, Zod-validated at build time. Light + dark theme toggle persisted in localStorage. |
| 2026-09-30 | v1.1 | Aesthetic upgrade to "Swiss × Cybercore". Added `decor/` components (`GridPattern`, `GeometricAccent`, `TerminalCursor`, `NoiseOverlay`). New tokens (`--color-neon`, glow, terminal). Hero redesigned with status line, drifting geometric ring + arc, dot grid backdrop. Section labels upgraded (bigger numbers, hover-glow). Project titles, Now headline, Experience role, Footer bio switched to italic display. |
| 2026-09-30 | v1.1a | Light theme warmed to bohemian palette (`#efe5d2` paper, terracotta accent, sage/rose secondary tones). Dark theme adjusted to match. Navbar handle now links to Twitter. Added `twitter` + `github` fields to `SiteConfig`. |
| 2026-09-30 | v1.1b | Added GitHub Activity section (`04 — Activity`). 53×7 contribution grid with 5 intensity levels, deterministic mock data seeded per username. Palette tokens `--color-act-0..4` tuned per theme. Real API integration path documented in `lib/activity.ts`. |
| 2026-09-30 | v1.1c | Tightened vertical rhythm across all sections (`Section`, `NowSection`, `NowBlock`, `ProjectRow`, `ExperienceRow`, `ActivitySection`, `ProjectsSection`). Hero geometric accents reduced in size and opacity (`text-line/40`, 420–520px instead of 640–820px). Section outer padding reduced from `py-24..40` to `py-20..32`. |
| 2026-09-30 | v1.2 | Added `ProjectHoverPreview` primitive — featured project cover gets a hover overlay with title + "Visit Live ↗" CTA + secondary link chips. Opt-in iframe preview via new `previewUrl` field on Project. Compact rows get a left neon accent line on hover + visible ↗ + background tint. |
| 2026-09-30 | v1.2.1 | Switched display font from Newsreader → Fraunces (variable serif with optical sizing). Dropped italic weight on Fraunces to work around a next/font quirk. `docs/` directory created with this changelog, `DECISIONS.md`, `CONTENT.md`, `ROADMAP.md`. Git repository initialized, v1.0+ snapshot committed. |