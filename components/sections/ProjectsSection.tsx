import { projectsSorted } from "@/lib/content";
import { Section } from "@/components/primitives/Section";
import { ProjectCard } from "@/components/primitives/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

export function ProjectsSection() {
  return (
    <Section
      id="work"
      index="04"
      title="Selected Work"
      meta={`${projectsSorted.length} projects`}
    >
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projectsSorted.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}