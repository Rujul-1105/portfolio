import type { NowBlock as NowBlockData } from "@/types/content";

interface NowBlockProps {
  block: NowBlockData;
}

export function NowBlock({ block }: NowBlockProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-6 first:pt-6">
      <h3 className="md:col-span-3 font-mono text-[11px] uppercase tracking-[var(--tracking-caps)] text-ink-2">
        {block.title}
      </h3>
      <div className="md:col-span-9 flex flex-col gap-4 max-w-[var(--container-prose)]">
        <p className="text-base text-ink leading-relaxed">{block.body}</p>
        {block.items && block.items.length > 0 ? (
          <ul className="flex flex-col gap-1.5">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="text-sm text-ink-2 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-line"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}