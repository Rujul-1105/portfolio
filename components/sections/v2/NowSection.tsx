import { now } from "@/lib/content";
import { formatUpdatedLabel, formatWindow } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function NowSection() {
  const updatedLabel = formatUpdatedLabel(now.updated);
  const windowLabel = now.window ?? formatWindow(now.updated);

  return (
    <section id="now" className="relative py-20 md:py-28 lg:py-32 scroll-mt-24">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
                02
              </span>
              <span aria-hidden className="font-mono text-line">
                —
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                Now
              </span>
              <span className="ml-2 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-violet/40 bg-violet/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-violet">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-violet" />
                Current focus
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              {updatedLabel}
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
                {windowLabel}
              </p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[var(--tracking-display)] text-ink max-w-[var(--container-prose)]">
                {now.headline}
              </h2>
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-8 md:mt-10 divide-y divide-line border-t border-line">
          {now.blocks.map((b) => (
            <StaggerItem key={b.title}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-6 first:pt-6">
                <h3 className="md:col-span-3 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                  {b.title}
                </h3>
                <div className="md:col-span-9 flex flex-col gap-4 max-w-[var(--container-prose)]">
                  <p className="text-base text-ink leading-relaxed">{b.body}</p>
                  {b.items && b.items.length > 0 ? (
                    <ul className="flex flex-col gap-1.5">
                      {b.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-ink-2 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-violet"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}