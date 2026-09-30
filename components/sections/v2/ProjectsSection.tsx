import { projectsSorted } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionCorners } from "@/components/decor/SectionCorners";
import { ProjectCard } from "@/components/primitives/ProjectCard";
import { ProjectRow } from "@/components/primitives/ProjectRow";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ProjectsSection() {
  const featured = projectsSorted.find((p) => p.featured);
  const rest = projectsSorted.filter((p) => p.slug !== featured?.slug);

  return (
    <section
      id="work"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <SectionCorners />

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 items-baseline">
            <p className="md:col-span-3 terminal">{"// Selected work"}</p>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] text-ink max-w-[var(--container-prose)]">
                Things that
                <br />
                shipped<span className="dot-red" />
              </h2>
              <p className="mt-6 font-mono text-sm uppercase tracking-[var(--tracking-caps)] text-muted">
                {projectsSorted.length} projects · most recent first
              </p>
            </div>
          </div>
        </Reveal>

        {featured ? (
          <Reveal>
            <div className="mt-12 md:mt-16">
              <ProjectCard project={featured} />
            </div>
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <Stagger className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            {rest.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectRow project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}
      </div>
    </section>
  );
}