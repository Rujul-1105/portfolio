import type { ActivityData, ActivityCell } from "@/lib/activity";

interface GitHubActivityProps {
  data: ActivityData;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function colorFor(level: ActivityCell["level"]) {
  return `var(--color-act-${level})`;
}

export function GitHubActivity({ data }: GitHubActivityProps) {
  const cell = 11;
  const gap = 3;
  const stride = cell + gap;
  const cols = 53;
  const rows = 7;
  const width = cols * stride + 28; // padding for month labels
  const height = rows * stride + 18; // padding for day labels

  // Month labels — emit at the first column of each new month.
  const monthLabels: { x: number; label: string }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < cols; w++) {
    const cellDate = new Date(data.cells[w * 7].date);
    const m = cellDate.getUTCMonth();
    if (m !== lastMonth) {
      monthLabels.push({ x: w * stride + 28, label: MONTHS[m] });
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
                fontSize="9"
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
                  y={18 + i * stride + 8}
                  fontSize="9"
                  letterSpacing="0.04em"
                >
                  {d}
                </text>
              ) : null
            )}
          </g>

          {/* Cells */}
          <g transform="translate(28, 18)">
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
                  rx={2}
                  ry={2}
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
        <span aria-hidden className="hidden sm:inline text-line">·</span>
        <span className="font-mono uppercase tracking-[var(--tracking-caps)]">
          Current streak: {data.currentStreak}d
        </span>
        <span aria-hidden className="hidden sm:inline text-line">·</span>
        <span className="font-mono uppercase tracking-[var(--tracking-caps)]">
          Longest: {data.longestStreak}d
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono uppercase tracking-[var(--tracking-caps)]">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className="inline-block h-3 w-3 rounded-[2px] border border-line/40"
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