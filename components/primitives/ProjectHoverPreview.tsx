import Image from "next/image";
import type { Project } from "@/types/content";

interface ProjectHoverPreviewProps {
  project: Project;
  sizes?: string;
}

const ASPECT_CLASS: Record<string, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

/**
 * Cover image for a project card. Just a rounded container with a
 * drop shadow — no border.
 */
export function ProjectHoverPreview({
  project,
  sizes,
}: ProjectHoverPreviewProps) {
  const aspectClass =
    ASPECT_CLASS[project.cover.aspect] ?? "aspect-[3/2]";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-paper-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_50px_-12px_rgba(0,255,157,0.3)] transition-shadow duration-500 ${aspectClass}`}
    >
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes={sizes ?? "(min-width: 768px) 50vw, 100vw"}
        className="object-cover"
      />
    </div>
  );
}