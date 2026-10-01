// --------------------------------------------------------------------------
// GitHub GraphQL fetcher for the contribution calendar.
//
// Requires a fine-grained PAT with NO scopes (just the bearer token to
// identify you). Set GH_TOKEN in .env.local or as a Vercel env var.
//
// The query asks for the last 53 weeks of contribution data, which is what
// the GitHub profile graph shows. We don't request repos, emails, or
// anything else — the token can't be misused beyond reading public stats.
//
// Endpoint: https://api.github.com/graphql
// Docs: https://docs.github.com/en/graphql/reference/objects#contributioncalendar
// --------------------------------------------------------------------------

import type { ActivityCell, ActivityData } from "./activity";

const ENDPOINT = "https://api.github.com/graphql";

const CONTRIB_QUERY = /* GraphQL */ `
  query ContributionCalendar($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              weekday
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

interface GraphQLResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              weekday: number;
              date: string;
              contributionCount: number;
            }[];
          }[];
        };
      };
    } | null;
  } | null;
  errors?: { message: string }[];
}

function bucket(count: number): ActivityCell["level"] {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

/**
 * Fetch real GitHub contribution data for `login`. Falls back to null on
 * any error so the caller can decide what to render.
 */
export async function fetchGitHubContributions(
  login: string,
  token?: string,
): Promise<ActivityData | null> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        query: CONTRIB_QUERY,
        variables: { login },
      }),
      // ISR cache hint — Next will respect this and revalidate per
      // the `revalidate` export on the page that uses the data.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`[github] GraphQL returned ${res.status} for ${login}`);
      return null;
    }

    const json = (await res.json()) as GraphQLResponse;
    if (json.errors?.length) {
      console.warn(
        `[github] GraphQL errors: ${json.errors.map((e) => e.message).join("; ")}`,
      );
      return null;
    }

    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) return null;

    // Flatten weeks into the 371-cell array the grid component expects.
    const cells: ActivityCell[] = [];
    let total = 0;
    let longestStreak = 0;
    let runningStreak = 0;
    let currentStreak = 0;

    // The API returns weeks in chronological order. Walk day-by-day and
    // bucket + track streaks.
    for (const week of calendar.weeks) {
      for (const day of week.contributionDays) {
        const count = day.contributionCount;
        cells.push({
          date: day.date,
          count,
          level: bucket(count),
        });
        total += count;
        if (count > 0) runningStreak++;
        else runningStreak = 0;
        longestStreak = Math.max(longestStreak, runningStreak);
      }
    }

    // Current streak = trailing run of non-zero cells
    for (let i = cells.length - 1; i >= 0; i--) {
      if (cells[i].count > 0) currentStreak++;
      else break;
    }

    return {
      cells,
      total: calendar.totalContributions,
      longestStreak,
      currentStreak,
      username: login,
      href: `https://github.com/${login}`,
    };
  } catch (err) {
    console.warn(`[github] fetch failed for ${login}:`, err);
    return null;
  }
}
