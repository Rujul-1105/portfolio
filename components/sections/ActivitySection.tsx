import { site } from "@/lib/content";
import { buildMockActivity } from "@/lib/activity";
import { fetchGitHubContributions } from "@/lib/github";
import { Section } from "@/components/primitives/Section";
import { GitHubActivity } from "@/components/decor/GitHubActivity";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Activity section. Server-rendered. Tries the real GitHub GraphQL
 * API first (when GH_TOKEN is set in the environment), falls back to
 * a deterministic mock if not — so the page never breaks.
 *
 * `export const revalidate = 3600` makes this an ISR page that
 * regenerates once an hour. Activity numbers stay roughly current
 * without hammering the API.
 */
export const revalidate = 3600;

export async function ActivitySection() {
  const username = site.github
    ? new URL(site.github).pathname.replace(/^\//, "")
    : "yourhandle";
  const href = site.github ?? `https://github.com/${username}`;

  const real = await fetchGitHubContributions(username, process.env.GH_TOKEN);
  const data = real ?? buildMockActivity(username, href);
  const isMock = real === null;

  return (
    <Section
      id="activity"
      index="06"
      title="Activity"
      meta="Last 365 days"
    >
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline mb-8 md:mb-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
              GitHub · @
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline ml-1 text-ink-2 hover:text-neon"
              >
                {username}
              </a>
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[var(--tracking-display)] text-ink max-w-[var(--container-prose)]">
              {data.total.toLocaleString()} contributions, mostly small ones.
            </h2>
            <p className="mt-6 text-base text-ink-2 leading-relaxed max-w-[var(--container-prose)]">
              {isMock ? (
                <>
                  A quiet, steady year of building. Real data hooks in here
                  when you set <code className="font-mono text-ink">GH_TOKEN</code>{" "}
                  in your environment.
                </>
              ) : (
                <>
                  Pulled live from GitHub via GraphQL — regenerated on every
                  deploy and at most once an hour.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="rounded-sm bg-paper-2/40 border border-line p-4 md:p-6">
          <GitHubActivity data={data} />
        </div>
      </Reveal>
    </Section>
  );
}