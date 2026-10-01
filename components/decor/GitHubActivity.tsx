import type { ActivityData, ActivityCell } from "@/lib/activity";

interface GitHubActivityProps {
    data: ActivityData;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function colorFor(level: ActivityCell["level"]) {
    return `var(--color-act-${level})`;
}

export function GitHubActivity({ data }: GitHubActivityProps) {
    const cell = 18;
    const gap = 4;
    const stride = cell + gap;
    const cols = 53;
    const rows = 7;
    const labelGutter = 32;
    const width = cols * stride + labelGutter;
    const height = rows * stride + 22;

    // Month labels — emit at the first column of each new month, but only
    // when there's at least 2 weeks between labels so adjacent months
    // don't overlap (e.g. when a week spans Sep 30 → Oct 6).
    const monthLabels: { x: number; label: string }[] = [];
    let lastMonth = -1;
    let lastLabeledWeek = -2;
    for (let w = 0; w < cols; w++) {
        const cellDate = new Date(data.cells[w * 7].date);
        const m = cellDate.getUTCMonth();
        if (m !== lastMonth && w - lastLabeledWeek >= 2) {
            monthLabels.push({ x: w * stride + labelGutter, label: MONTHS[m] });
            lastMonth = m;
            lastLabeledWeek = w;
        } else if (m !== lastMonth) {
            // Month changed but no room to label — still update lastMonth so
            // we don't try to label it again next week.
            lastMonth = m;
        }
    }

    return (
        <div className="w-full">
            <div className="overflow-x-auto -mx-2 px-2 pb-2">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    width={width}
                    height={height}
                    role="img"
                    aria-label={`GitHub contributions for ${data.username}`}
                    className="block max-w-full h-auto"
                >
                    {/* Month labels */}
                    <g className="font-mono fill-current text-muted">
                        {monthLabels.map((m, i) => (
                            <text
                                key={i}
                                x={m.x}
                                y={10}
                                fontSize="10"
                                letterSpacing="0.04em"
                                style={{ textTransform: "uppercase" }}
                            >
                                {m.label}
                            </text>
                        ))}
                    </g>

                    {/* Day labels */}
                    <g className="font-mono fill-current text-muted">
                        {DAY_LABELS.map((d, i) =>
                            d ? (
                                <text
                                    key={i}
                                    x={0}
                                    y={22 + i * stride + 10}
                                    fontSize="10"
                                    letterSpacing="0.04em"
                                >
                                    {d}
                                </text>
                            ) : null
                        )}
                    </g>

                    {/* Cells */}
                    <g transform={`translate(${labelGutter}, 22)`}>
                        {data.cells.map((c, i) => {
                            const w = Math.floor(i / 7);
                            const d = i % 7;
                            return (
                                <rect
                                    key={c.date}
                                    x={w * stride}
                                    y={d * stride}
                                    width={cell}
                                    height={cell}
                                    rx={2.5}
                                    ry={2.5}
                                    fill={colorFor(c.level)}
                                >
                                    <title>
                                        {c.count} contribution{c.count === 1 ? "" : "s"} on {c.date}
                                    </title>
                                </rect>
                            );
                        })}
                    </g>
                </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
                <span className="font-mono uppercase tracking-[var(--tracking-caps)]">
                    {data.total.toLocaleString()} contributions in the last year
                </span>
                <span aria-hidden className="hidden sm:inline text-line">
                    ·
                </span>
                <span className="font-mono uppercase tracking-[var(--tracking-caps)]">
                    Current streak: {data.currentStreak}d
                </span>
                <span aria-hidden className="hidden sm:inline text-line">
                    ·
                </span>
                <span className="font-mono uppercase tracking-[var(--tracking-caps)]">
                    Longest: {data.longestStreak}d
                </span>
                <span className="ml-auto flex items-center gap-1.5 font-mono uppercase tracking-[var(--tracking-caps)]">
                    Less
                    {[0, 1, 2, 3, 4].map((l) => (
                        <span
                            key={l}
                            className="inline-block h-3.5 w-3.5 rounded-[2px] border border-line/40"
                            style={{ backgroundColor: `var(--color-act-${l})` }}
                            aria-hidden
                        />
                    ))}
                    More
                </span>
            </div>
        </div>
    );
}
