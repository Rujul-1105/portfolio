import { projectsSorted } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Rule } from "@/components/primitives/Rule";
import { ProjectCard } from "@/components/primitives/ProjectCard";
import { ProjectRow } from "@/components/primitives/ProjectRow";

export function ProjectsSection() {
  const featured = projectsSorted.find((p) => p.featured);
  const rest = projectsSorted.filter((p) => p.slug !== featured?.slug);

  return (
    <section id="work" className="relative py-20 md:py-28 lg:py-32 scroll-mt-24">
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <header className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-baseline border-t border-line pt-6">
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-base md:text-lg tracking-[var(--tracking-mono)] text-ink hover-glow cursor-default">
                03
              </span>
              <span aria-hidden className="font-mono text-line">
                —
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
                Selected Work
              </span>
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-muted lg:justify-self-end">
              {projectsSorted.length} projects
            </p>
          </header>
        </Reveal>

        {featured ? (
          <Reveal>
            <div className="mt-10 md:mt-12">
              <ProjectCard project={featured} />
            </div>
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-10 md:mt-12">
            <Rule />
            <Stagger>
              {rest.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectRow project={p} />
                </StaggerItem>
              ))}
            </Stagger>
            <Rule />
          </div>
        ) : null}
      </div>
    </section>
  );
}