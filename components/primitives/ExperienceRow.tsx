import type { ExperienceEntry } from "@/types/content";
import { formatRange } from "@/lib/format";
import { Tag } from "./Tag";
import { DateLabel } from "./DateLabel";

interface ExperienceRowProps {
  entry: ExperienceEntry;
}

export function ExperienceRow({ entry }: ExperienceRowProps) {
  const isCurrent = entry.end === "present";
  const range = formatRange(entry.start, entry.end);

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-7 md:py-8 border-t border-line first:border-t-0">
      <div className="md:col-span-3">
        <DateLabel>
          {range}
          {isCurrent ? (
            <span className="ml-2 inline-flex items-center gap-1.5 text-neon">
              <span aria-hidden className="status-dot" />
              present
            </span>
          ) : null}
        </DateLabel>
        {entry.location ? (
          <p className="mt-1 text-sm text-ink-2">{entry.location}</p>
        ) : null}
      </div>

      <div className="md:col-span-9 flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-slab text-2xl md:text-3xl lg:text-4xl leading-[1.1] tracking-[-0.01em] text-ink">
            {entry.role}
          </h3>
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2 hover:text-ink"
            >
              ↗ {entry.company}
            </a>
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
              {entry.company}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-[var(--tracking-caps)] text-muted ml-auto">
            {entry.kind}
          </span>
        </div>

        <p className="text-base text-ink-2 leading-relaxed max-w-[var(--container-prose)]">
          {entry.summary}
        </p>

        {entry.highlights && entry.highlights.length > 0 ? (
          <ul className="flex flex-col gap-1.5 max-w-[var(--container-prose)]">
            {entry.highlights.map((h, i) => (
              <li
                key={i}
                className="text-sm text-ink-2 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-line"
              >
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {entry.stack && entry.stack.length > 0 ? (
          <ul className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
            {entry.stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}