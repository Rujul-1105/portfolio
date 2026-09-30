# Content Checklist — What the User Needs to Provide

All editable content lives in `data/*.json`. Update the JSON, the site re-renders. Zod validation in `lib/content.ts` will fail the build on any drift from `types/content.ts`.

---

## `data/site.json`

```jsonc
{
  "name":         "Your Name",                    // hero display
  "handle":       "@twitterhandle",                // shown next to name, links to Twitter
  "twitter":      "https://x.com/yourhandle",      // navbar handle link
  "github":       "https://github.com/yourhandle", // powers Activity grid
  "tagline":      "One-line tagline, ~6–10 words",
  "role":         "Software engineer, designer, ...",
  "location":     "City, Country",                 // optional
  "email":        "you@domain.com",
  "bio":          "2–4 sentence bio for the footer",
  "avatar":       "/avatar.jpg",                   // optional — drop file in /public
  "ogImage":      "/og.png",                       // optional — drop file in /public
  "socials": [
    { "label": "GitHub",  "href": "https://github.com/yourhandle",  "icon": "github"  },
    { "label": "X",       "href": "https://x.com/yourhandle",       "icon": "x"       },
    { "label": "Read.cv", "href": "https://read.cv/yourhandle",     "icon": "readcv"  },
    { "label": "Email",   "href": "mailto:you@example.com",         "icon": "email"   }
  ],
  "nav": [
    { "label": "Now",        "href": "#now"        },
    { "label": "Work",       "href": "#work"       },
    { "label": "Experience", "href": "#experience" },
    { "label": "Activity",   "href": "#activity"   }
  ],
  "meta": {
    "titleTemplate": "%s — Portfolio",
    "description":   "Personal site of ...",
    "themeColor":    "#efe5d2"
  }
}
```

Supported `icon` values: `github`, `x`, `linkedin`, `readcv`, `email`, `website`, `are.na`, `spotify`.

---

## `data/projects.json`

One entry per project. 3–6 total.

```jsonc
{
  "slug":        "scout",                                  // url-safe id, also the cover folder
  "title":       "Scout",
  "year":        "2025",
  "summary":     "1–2 sentences, ~20–30 words",
  "description": "2–4 sentences for the expanded view",
  "role":        "Solo build",                             // optional
  "stack":       ["TypeScript", "Rust", "Postgres"],
  "links": [
    { "kind": "live",    "href": "https://example.com/scout" },
    { "kind": "github",  "href": "https://github.com/you/scout" },
    { "kind": "writeup", "href": "https://example.com/notes", "label": "Read the notes" }
  ],
  "cover": {
    "src":    "/projects/scout/cover.webp",
    "alt":    "Brief description for screen readers",
    "width":  1600,
    "height": 1067,
    "aspect": "3/2"
  },
  "featured":  true,
  "status":    "shipped",
  "previewUrl": "https://example.com/scout"                // optional — enables iframe hover preview
}
```

Cover image goes at `public/projects/<slug>/cover.webp`. Aspect options: `16/9`, `4/3`, `3/2`, `1/1`, `21/9`. Status options: `shipped`, `in-progress`, `archived`. One project should be `featured: true` for the large card layout.

---

## `data/experience.json`

3–5 entries, sorted newest first (sort happens automatically).

```jsonc
{
  "experience": [
    {
      "company":    "Acme Inc.",
      "role":       "Senior software engineer",
      "url":        "https://acme.com",
      "start":      "2022-07",
      "end":        "2025-02",
      "location":   "San Francisco, CA",
      "summary":    "1–3 sentences on what you shipped",
      "highlights": ["Achievement one", "Achievement two"],
      "stack":      ["TypeScript", "React", "Postgres"],
      "kind":       "work"
    }
  ]
}
```

Use `"end": "present"` for the current role. `kind` options: `work`, `internship`, `freelance`, `research`, `teaching`.

---

## `data/now.json`

```jsonc
{
  "updated":  "2026-09-30T14:00:00Z",
  "window":   "September 2026",
  "headline": "One-line summary of what you're focused on",
  "blocks": [
    { "title": "Building", "body": "1–3 sentences", "items": ["Bullet one", "Bullet two"] },
    { "title": "Learning", "body": "1–3 sentences" },
    { "title": "Reading",  "body": "1–3 sentences", "items": ["Book one", "Book two"] },
    { "title": "Outside",  "body": "1–3 sentences" }
  ],
  "links": [{ "label": "Subscribe by RSS", "href": "/feed.xml" }]
}
```

Bump `updated` weekly — that's the freshness signal.

---

## Optional / future

- `public/avatar.jpg` — set `"avatar"` in site.json when ready
- `public/og.png` — set `"ogImage"` in site.json when ready
- Real GitHub activity — swap the loader in `lib/activity.ts`:
  ```ts
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
  const data = await res.json();
  // shape to ActivityData and pass into <GitHubActivity data={...} />
  ```