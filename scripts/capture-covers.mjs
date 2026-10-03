// scripts/capture-covers.mjs
//
// Walks data/projects.json, finds every project with a `live` link,
// and captures a screenshot of the deployed site. Saves it as
// public/projects/<slug>/cover.webp so it can be served as the
// project card cover image.
//
// Usage: `node scripts/capture-covers.mjs` from the repo root.
// (Re-runnable — overwrites existing screenshots.)

import { chromium } from "playwright";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DATA = join(ROOT, "data", "projects.json");
const PUBLIC = join(ROOT, "public");

// Capture viewport (rendered size of the screenshot). The card uses 16:9
// so a 1600x900 viewport produces a perfectly-shaped PNG that maps
// cleanly to the card at any responsive size.
const VIEWPORT = { width: 1600, height: 900 };
const DEVICE_SCALE = 1;
const TIMEOUT_MS = 30_000;

function findLiveLink(project) {
  return project.links?.find((l) => l.kind === "live");
}

async function main() {
  const raw = await readFile(DATA, "utf8");
  const { projects } = JSON.parse(raw);

  const targets = projects
    .map((p) => ({ project: p, live: findLiveLink(p) }))
    .filter(({ live }) => live);

  if (targets.length === 0) {
    console.log("No projects with a `live` link — nothing to capture.");
    return;
  }

  console.log(`Capturing ${targets.length} project${targets.length === 1 ? "" : "s"}…`);

  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: DEVICE_SCALE,
    });

    for (const { project, live } of targets) {
      console.log(`  ${project.slug.padEnd(20)} ${live.href}`);
      const page = await context.newPage();
      try {
        await page.goto(live.href, {
          waitUntil: "domcontentloaded",
          timeout: TIMEOUT_MS,
        });

        // Wait for the document to be visually complete — when
        // <body> has children and the layout has settled. SPAs
        // mount their UI asynchronously after hydration.
        await page.waitForFunction(
          () => document.body && document.body.children.length > 0,
          { timeout: TIMEOUT_MS }
        );
        // Give charts/3D/animation-heavy pages a beat to render.
        await page.waitForLoadState("load", { timeout: TIMEOUT_MS }).catch(() => {});
        await page.waitForTimeout(6000);

        const out = join(PUBLIC, "projects", project.slug, "cover.webp");
        await mkdir(dirname(out), { recursive: true });
        await page.screenshot({
          path: out,
          type: "webp",
          quality: 82,
          fullPage: false,
        });
        const { stat } = await import("node:fs/promises");
        const { size } = await stat(out);
        console.log(`    -> ${out} (${(size / 1024).toFixed(0)} KB)`);
      } catch (err) {
        console.error(`    ! ${project.slug} failed: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
