import { now } from "@/lib/content";
import { formatUpdatedLabel, formatWindow } from "@/lib/format";
import { Section } from "@/components/primitives/Section";
import { NowBlock } from "@/components/primitives/NowBlock";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function NowSection() {
  const updatedLabel = formatUpdatedLabel(now.updated);
  const windowLabel = now.window ?? formatWindow(now.updated);

  return (
    <Section
      id="now"
      index="02"
      title="Now"
      meta={updatedLabel}
    >
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
              {windowLabel}
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-[var(--tracking-display)] text-ink max-w-[var(--container-prose)]">
              {now.headline}
            </h2>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-8 md:mt-10 divide-y divide-line border-t border-line">
        {now.blocks.map((b) => (
          <StaggerItem key={b.title}>
            <NowBlock block={b} />
          </StaggerItem>
        ))}
      </Stagger>

      {now.links && now.links.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {now.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2 hover:text-neon"
            >
              ↗ {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </Section>
  );
}