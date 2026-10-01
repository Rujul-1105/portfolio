import type { Social } from "@/types/content";

interface SocialListProps {
    socials: Social[];
    className?: string;
    separator?: boolean;
}

export function SocialList({ socials, className, separator = true }: SocialListProps) {
    return (
        <ul
            className={`flex flex-nowrap items-baseline gap-x-1 whitespace-nowrap ${className ?? ""}`}
        >
            {socials.map((s, i) => (
                <li
                    key={s.href}
                    className="inline-flex items-baseline gap-x-1 font-mono text-[12px] uppercase tracking-[var(--tracking-caps)]"
                >
                    <a
                        href={s.href}
                        target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={s.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                        className="link-underline text-ink-9 hover:text-ink"
                    >
                        {s.label}
                    </a>
                    {separator && i < socials.length - 1 ? (
                        <span aria-hidden className="text-muted">
                            ·
                        </span>
                    ) : null}
                </li>
            ))}
        </ul>
    );
}
