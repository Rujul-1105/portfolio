// --------------------------------------------------------------------------
// GitHub activity mock data.
//
// In production, swap this for a real fetch from
// https://github-contributions-api.jogruber.de/v4/{username}?y=last
// inside a Server Component and pass the result into <GitHubActivity />.
//
// For now: deterministic pseudo-random pattern that reads as "real work
// happening" — weekdays more active than weekends, with some clusters and
// occasional quiet weeks.
// --------------------------------------------------------------------------

export interface ActivityCell {
  date: string; // YYYY-MM-DD
  count: number; // 0+
  level: 0 | 1 | 2 | 3 | 4; // bucket
}

export interface ActivityData {
  cells: ActivityCell[]; // length 371, oldest first
  total: number;
  longestStreak: number;
  currentStreak: number;
  username: string;
  href: string;
}

/** Seeded PRNG — same output every render so the layout is stable. */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

function bucket(count: number): ActivityCell["level"] {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

export function buildMockActivity(username: string, href: string): ActivityData {
  const weeks = 53;
  const today = new Date();
  // Anchor at the most recent Sunday so the grid ends on a complete week.
  const lastSunday = new Date(today);
  lastSunday.setUTCDate(today.getUTCDate() - today.getUTCDay());

  const rand = rng(0xa11ce ^ username.length);

  const cells: ActivityCell[] = [];
  let total = 0;
  let longestStreak = 0;
  let currentStreak = 0;
  let runningStreak = 0;

  // Walk forward from the earliest cell so the rolling-streak math is right.
  const startDate = new Date(lastSunday);
  startDate.setUTCDate(startDate.getUTCDate() - (weeks - 1) * 7);

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const idx = w * 7 + d;
      const cellDate = new Date(startDate);
      cellDate.setUTCDate(startDate.getUTCDate() + idx);
      const dow = cellDate.getUTCDay(); // 0 = Sun
      const inFuture = cellDate.getTime() > today.getTime();

      let count = 0;
      if (!inFuture) {
        // Weekday bias (Mon-Fri more active), with clusters every few weeks.
        const baseActivity = dow === 0 || dow === 6 ? 0.18 : 0.62;
        const clusterBoost = Math.sin(w / 3.2) * 0.25 + 0.25; // waves
        const r = rand();
        if (r < baseActivity + clusterBoost) {
          // 0..14 events, biased low
          count = Math.floor(rand() * 6 + rand() * 9);
        }
        // Quiet weeks occasionally
        if (rand() < 0.06) count = 0;
      }

      const level = bucket(count);
      const iso = cellDate.toISOString().slice(0, 10);
      cells.push({ date: iso, count, level });

      total += count;
      if (count > 0) runningStreak++;
      else runningStreak = 0;
      longestStreak = Math.max(longestStreak, runningStreak);
    }
  }

  // Current streak = trailing run of non-zero cells
  currentStreak = 0;
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].count > 0) currentStreak++;
    else break;
  }

  return {
    cells,
    total,
    longestStreak,
    currentStreak,
    username,
    href,
  };
}