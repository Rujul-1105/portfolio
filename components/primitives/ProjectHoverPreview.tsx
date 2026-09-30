"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project, ProjectLink } from "@/types/content";

interface ProjectHoverPreviewProps {
  project: Project;
  className?: string;
  sizes?: string;
}

const LINK_LABEL: Record<ProjectLink["kind"], string> = {
  live: "Live",
  github: "Source",
  writeup: "Writeup",
  video: "Video",
  docs: "Docs",
};

const ASPECT_CLASS: Record<string, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

/**
 * Featured project cover with a hover overlay that surfaces the
 * deployment / source / writeup links prominently.
 *
 * The iframe preview is opt-in via `previewUrl` on the project — many
 * sites block iframe embedding via X-Frame-Options, so we render a
 * graceful fallback (the cover image with the overlay) when the iframe
 * is not configured. To wire a real preview, add `"previewUrl": "https://…"`
 * to a project entry and update the data shape below.
 */
export function ProjectHoverPreview({
  project,
  className,
  sizes,
}: ProjectHoverPreviewProps) {
  const [iframeFailed, setIframeFailed] = useState(false);
  const aspectClass =
    ASPECT_CLASS[project.cover.aspect] ?? "aspect-[3/2]";
  const primary = project.links[0];
  const previewUrl =
    (project as Project & { previewUrl?: string }).previewUrl;

  return (
    <a
      href={primary?.href ?? "#"}
      target={primary?.href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer noopener"
      className={`group block relative overflow-hidden border border-line bg-paper-2 ${className ?? ""}`}
      aria-label={`${project.title} — open ${primary ? LINK_LABEL[primary.kind] : "project"}`}
    >
      <div className={`relative w-full ${aspectClass}`}>
        {/* Iframe preview when configured */}
        {previewUrl && !iframeFailed ? (
          <iframe
            src={previewUrl}
            title={`${project.title} preview`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            onError={() => setIframeFailed(true)}
            className="absolute inset-0 h-full w-full border-0 bg-paper"
          />
        ) : (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={sizes ?? "(min-width: 768px) 58vw, 100vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        )}

        {/* Hover overlay — surfaces links */}
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="terminal text-paper-2/80">
                {previewUrl ? "// live preview" : "// hover to preview"}
              </span>
              <span className="font-display italic text-xl md:text-2xl text-paper leading-tight">
                {project.title}
              </span>
            </div>

            <div className="flex flex-col items-end gap-2">
              {primary ? (
                <span className="inline-flex items-center gap-1.5 rounded-sm bg-paper text-ink font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] px-3 py-2">
                  Visit {LINK_LABEL[primary.kind]} ↗
                </span>
              ) : null}
              {project.links.length > 1 ? (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-end">
                  {project.links.slice(1).map((l) => (
                    <span
                      key={l.href}
                      className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-paper/85"
                    >
                      ↗ {l.label ?? LINK_LABEL[l.kind]}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}