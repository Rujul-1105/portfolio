import type { Project, ProjectLink } from "@/types/content";
import { Tag } from "./Tag";
import { DateLabel } from "./DateLabel";
import { ProjectHoverPreview } from "./ProjectHoverPreview";

interface ProjectCardProps {
    project: Project;
}

const LINK_LABEL: Record<ProjectLink["kind"], string> = {
    live: "Live",
    github: "Source",
    writeup: "Writeup",
    video: "Video",
    docs: "Docs",
    thread: "Thread",
};

/**
 * Unified project card — every project uses this same layout, regardless
 * of importance. The hover preview (iframe if previewUrl, otherwise
 * cover image) is applied identically via ProjectHoverPreview so all
 * projects behave the same on hover.
 */
export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group flex flex-col gap-5">
            <a
                href={project.links[0]?.href ?? "#"}
                target={project.links[0]?.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="block"
                aria-label={`${project.title} — open ${LINK_LABEL[project.links[0]?.kind ?? "live"]}`}
            >
                <ProjectHoverPreview project={project} />
            </a>

            <div className="flex flex-col gap-3">
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

                <h3 className="font-display italic text-2xl md:text-3xl leading-[1.1] text-ink">
                    {project.title}
                </h3>

                {project.role ? (
                    <DateLabel>
                        <span className="text-ink-2">{project.role}</span>
                    </DateLabel>
                ) : null}

                <p className="text-base text-ink-2 leading-relaxed">{project.summary}</p>

                {/* <ul className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.stack.map((s) => (
                        <li key={s}>
                            <Tag>{s} |</Tag>
                        </li>
                    ))}
                </ul> */}

                {project.links.length > 0 ? (
                    <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-1">
                        {project.links.map((l, i) => (
                            // Index-disambiguated key — two links can share an href
                            // (e.g. rust-server's primary + secondary both pointing at
                            // the same GitHub repo). The href alone wouldn't be unique.
                            <li key={`${l.href}-${i}`}>
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
                ) : null}
            </div>
        </article>
    );
}
