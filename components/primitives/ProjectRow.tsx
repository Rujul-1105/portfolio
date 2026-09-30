import type { Project } from "@/types/content";
import { Tag } from "./Tag";
import { DateLabel } from "./DateLabel";

interface ProjectRowProps {
  project: Project;
}

const LINK_LABEL: Record<string, string> = {
  live: "Live",
  github: "Source",
  writeup: "Writeup",
  video: "Video",
  docs: "Docs",
};

export function ProjectRow({ project }: ProjectRowProps) {
  const primary = project.links[0];

  return (
    <a
      href={primary?.href ?? "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 transition-colors hover:bg-paper-2/60 -mx-4 px-4"
    >
      {/* Hover accent line */}
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-px bg-neon scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"
      />

      <div className="md:col-span-2">
        <DateLabel>{project.year}</DateLabel>
      </div>

      <div className="md:col-span-7 flex flex-col gap-3">
        <h3 className="font-display italic text-2xl md:text-3xl leading-[1.1] text-ink group-hover:text-ink transition-colors">
          {project.title}
          <span className="inline-block ml-2 align-baseline text-neon opacity-0 group-hover:opacity-100 transition-opacity">
            ↗
          </span>
        </h3>
        <p className="text-base text-ink-2 leading-relaxed max-w-[var(--container-prose)]">
          {project.summary}
        </p>
      </div>

      <div className="md:col-span-3 flex md:flex-col md:items-end gap-3">
        <ul className="flex flex-wrap md:justify-end gap-x-3 gap-y-1">
          {project.stack.slice(0, 4).map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>
        {project.links.length > 0 ? (
          <div className="flex flex-wrap md:justify-end gap-x-3 gap-y-1">
            {project.links.map((l) => (
              <span
                key={l.href}
                className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted"
              >
                ↗ {l.label ?? LINK_LABEL[l.kind] ?? l.kind}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}