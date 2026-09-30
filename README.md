# Portfolio

Personal site — editorial minimal aesthetic. All content lives in JSON files.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- Motion (`motion/react`) for animation
- TypeScript
- Zod for content validation

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit
```

## Content

All editable content lives in [`data/`](./data). Each file is validated at build time against TypeScript interfaces in [`types/content.ts`](./types/content.ts).

### Add a project

1. Open `data/projects.json`.
2. Append an entry to the `projects` array, matching the `Project` interface.
3. Required fields: `slug`, `title`, `year`, `summary`, `description`, `stack`, `links`, `cover`.
4. Set `featured: true` to use the large card variant; `false` for compact rows.
5. Drop cover image(s) into `public/projects/<slug>/`.

### Update the "Now" section

1. Open `data/now.json`.
2. Update the `updated` field to the current ISO datetime — this drives the "Updated …" label.
3. Edit `blocks[]` freely.

### Add a social link

Edit `data/site.json` → `socials[]`. `icon` must be one of the supported platforms in `types/content.ts`.

### Update bio / role / location

`data/site.json` → `role`, `tagline`, `location`, `bio`.

## Theme

Light + dark with manual toggle (persisted in `localStorage`). Click the sun/moon in the top nav.

## Deploy

Vercel (recommended) — push to a Git repo, import the project, done.

## License

Code: MIT. Content: CC-BY-NC.