import { site } from "@/lib/content";
import { buildMockActivity } from "@/lib/activity";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";
import { GitHubActivity } from "@/components/decor/GitHubActivity";

export function ActivitySection() {
  const username = site.github
    ? new URL(site.github).pathname.replace(/^\//, "")
    : "yourhandle";
  const href = site.github ?? `https://github.com/${username}`;
  const data = buildMockActivity(username, href);

  return (
    <section
      id="activity"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
            <p className="md:col-span-3 terminal">{"// Activity"}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] text-ink max-w-[var(--container-prose)]">
                {data.total.toLocaleString()} commits
                <br />
                last year<span className="dot-red" />
              </h2>
              <p className="mt-6 font-mono text-sm uppercase tracking-[var(--tracking-caps)] text-muted">
                GitHub · @
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline ml-1 hover:text-accent"
                >
                  {username}
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 md:mt-16 border border-line p-4 md:p-8 bg-paper-2">
            <GitHubActivity data={data} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}