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
 * Cover image for a project card. Clicking it opens the project's
 * primary link (set by the parent anchor). No hover overlay, no iframe
 * preview — the image is a static thumbnail.
 */
export function ProjectHoverPreview({
  project,
  sizes,
}: ProjectHoverPreviewProps) {
  const aspectClass =
    ASPECT_CLASS[project.cover.aspect] ?? "aspect-[3/2]";

  return (
    <div
      className={`relative w-full overflow-hidden border border-line bg-paper-2 ${aspectClass}`}
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