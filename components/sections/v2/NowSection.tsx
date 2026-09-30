import { now } from "@/lib/content";
import { formatUpdatedLabel, formatWindow } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function NowSection() {
  const updatedLabel = formatUpdatedLabel(now.updated);
  const windowLabel = now.window ?? formatWindow(now.updated);

  return (
    <section id="now" className="relative py-20 md:py-28 lg:py-32 scroll-mt-24">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
            <p className="md:col-span-3 terminal">{"// Now"}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] text-ink max-w-[var(--container-prose)]">
                {now.headline}
                <span className="dot-red" />
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 font-mono text-sm uppercase tracking-[var(--tracking-caps)] text-muted">
            {windowLabel} · {updatedLabel}
          </p>
        </Reveal>

        <Stagger className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12">
          {now.blocks.map((b) => (
            <StaggerItem key={b.title}>
              <article className="flex flex-col gap-3 border-t border-line pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-accent">
                  {b.title}
                </p>
                <p className="font-mono text-base leading-relaxed text-ink">
                  {b.body}
                </p>
                {b.items && b.items.length > 0 ? (
                  <ul className="flex flex-col gap-1.5 mt-2">
                    {b.items.map((item, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm text-ink-2 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}