import { site } from "@/lib/content";
import { buildMockActivity } from "@/lib/activity";
import { Reveal } from "@/components/motion/Reveal";
import { GitHubActivity } from "@/components/decor/GitHubActivity";

export function ActivitySection() {
  const username = site.github
    ? new URL(site.github).pathname.replace(/^\//, "")
    : "yourhandle";
  const href = site.github ?? `https://github.com/${username}`;
  const data = buildMockActivity(username, href);

  return (
    <section id="activity" className="relative py-20 md:py-28 lg:py-32 scroll-mt-24">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
                06
              </span>
              <span aria-hidden className="font-mono text-line">
                —
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                Activity
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              Last 365 days
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline mb-8 md:mb-10">
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
                GitHub · @
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline ml-1 text-ink-2 hover:text-violet"
                >
                  {username}
                </a>
              </p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[var(--tracking-display)] text-ink max-w-[var(--container-prose)]">
                {data.total.toLocaleString()} contributions, mostly small ones.
              </h2>
              <p className="mt-6 text-base text-ink-2 leading-relaxed max-w-[var(--container-prose)]">
                A quiet, steady year of building. Real data hooks in here when
                you point <code className="font-mono text-ink">site.github</code>{" "}
                at your profile — for now this is a representative pattern.
              </p>
            </div>
          </div>

          <div className="rounded-[var(--radius-card)] glass border border-line p-4 md:p-6">
            <GitHubActivity data={data} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}