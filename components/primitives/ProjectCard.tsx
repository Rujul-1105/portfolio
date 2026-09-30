import type { Project } from "@/types/content";
import { Tag } from "./Tag";
import { DateLabel } from "./DateLabel";
import { ProjectHoverPreview } from "./ProjectHoverPreview";

interface ProjectCardProps {
  project: Project;
}

const LINK_LABEL: Record<string, string> = {
  live: "Live",
  github: "Source",
  writeup: "Writeup",
  video: "Video",
  docs: "Docs",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
      <div className="md:col-span-7">
        <ProjectHoverPreview
          project={project}
          sizes="(min-width: 768px) 58vw, 100vw"
        />
      </div>

      <div className="md:col-span-5 flex flex-col gap-6">
        <div className="flex items-baseline justify-between gap-4">
          <DateLabel>{project.year}</DateLabel>
          {project.status ? (
            <DateLabel>
              {project.status === "in-progress" ? (
                <span className="inline-flex items-center gap-1.5 text-neon">
                  <span aria-hidden className="status-dot" />
                  in progress
                </span>
              ) : (
                <span className="text-ink-2">
                  {project.status.replace("-", " ")}
                </span>
              )}
            </DateLabel>
          ) : null}
        </div>

        <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-ink">
          {project.title}
        </h3>

        {project.role ? (
          <DateLabel>
            <span className="text-ink-2">{project.role}</span>
          </DateLabel>
        ) : null}

        <p className="text-base text-ink-2 max-w-[var(--container-prose)] leading-relaxed">
          {project.summary}
        </p>

        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-2">
          {project.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2 hover:text-neon"
              >
                ↗ {l.label ?? LINK_LABEL[l.kind] ?? l.kind}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}