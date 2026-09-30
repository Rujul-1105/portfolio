"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project, ProjectLink } from "@/types/content";

interface ProjectHoverPreviewProps {
  project: Project;
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
 * Hover preview used by every project card. Same behavior across all
 * projects (uniformity):
 *
 * 1. Default render: the cover image fills the frame.
 * 3. Hover: if `previewUrl` is set, fade in an iframe that loads the
 *    destination page (with a sandbox to prevent the embedded site
 *    from navigating the parent). If iframe fails to load, fall back
 *    to the cover image.
 * 4. Always on hover: a dark gradient overlay fades in with the project
 *    title and a primary "Visit ↗" CTA plus secondary link chips.
 *
 * The whole card is the anchor — clicking anywhere navigates to the
 * project's primary link.
 */
export function ProjectHoverPreview({
  project,
  sizes,
}: ProjectHoverPreviewProps) {
  const [iframeFailed, setIframeFailed] = useState(false);
  const aspectClass =
    ASPECT_CLASS[project.cover.aspect] ?? "aspect-[3/2]";
  const primary = project.links[0];
  const previewUrl =
    (project as Project & { previewUrl?: string }).previewUrl;

  return (
    <div
      className={`relative w-full overflow-hidden border border-line bg-paper-2 ${aspectClass}`}
    >
      {/* Iframe preview (shown on hover when previewUrl is configured) */}
      {previewUrl && !iframeFailed ? (
        <iframe
          src={previewUrl}
          title={`${project.title} — live preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
          onError={() => setIframeFailed(true)}
          className="absolute inset-0 h-full w-full border-0 bg-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        />
      ) : null}

      {/* Cover image — always rendered, sits beneath the iframe.
          Slight zoom on hover. */}
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
        className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-40"
      />

      {/* Hover overlay — surfaces links and the destination */}
      <div
        aria-hidden
        className="absolute inset-0 flex flex-col justify-end p-5 md:p-7 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="terminal text-paper/70">
              {previewUrl ? "// hover · live preview" : "// hover · click to open"}
            </span>
            <span className="font-display italic text-xl md:text-2xl text-paper leading-tight">
              {project.title}
            </span>
          </div>

          <div className="flex flex-col items-end gap-2">
            {primary ? (
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-neon text-ink font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] px-3 py-2">
                Visit {LINK_LABEL[primary.kind]} ↗
              </span>
            ) : null}
            {project.links.length > 1 ? (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-end">
                {project.links.slice(1).map((l) => (
                  <span
                    key={l.href}
                    className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-paper/80"
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
  );
}