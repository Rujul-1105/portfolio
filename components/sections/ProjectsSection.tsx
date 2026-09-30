import { projectsSorted } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { ProjectCard } from "@/components/primitives/ProjectCard";
import { ProjectRow } from "@/components/primitives/ProjectRow";
import { Rule } from "@/components/primitives/Rule";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function ProjectsSection() {
  const featured = projectsSorted.find((p) => p.featured);
  const rest = projectsSorted.filter((p) => p.slug !== featured?.slug);

  return (
    <Section
      id="work"
      index="02"
      title="Selected Work"
      meta={`${projectsSorted.length} projects`}
    >
      {featured ? (
        <Reveal>
          <ProjectCard project={featured} />
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
    </Section>
  );
}