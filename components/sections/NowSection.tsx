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
      index="03"
      title="Now"
      meta={updatedLabel}
    >
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-baseline">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted">
              <span className="text-neon">●</span>
              <span className="ml-2">{windowLabel}</span>
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-slab text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.015em] text-ink max-w-[var(--container-prose)]">
              {now.headline}
              <span className="text-neon">.</span>
            </h2>
          </div>
        </div>
      </Reveal>

      <Stagger className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-10">
        {now.blocks.map((b) => (
          <StaggerItem key={b.title}>
            <NowBlock block={b} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}