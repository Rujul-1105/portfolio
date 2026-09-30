// Date formatting helpers — consistent across the site.

const MONTHS_SHORT = [
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

const MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "YYYY-MM" → "Jun 2024" */
export function formatMonthYear(iso: string): string {
  const [year, month] = iso.split("-");
  const m = Number.parseInt(month ?? "1", 10);
  if (!year || !Number.isFinite(m) || m < 1 || m > 12) return iso;
  return `${MONTHS_SHORT[m - 1]} ${year}`;
}

/** "Jun 2024 — Sep 2024" or "Jun 2024 — present" */
export function formatRange(
  start: string,
  end: string | "present"
): string {
  const startLabel = formatMonthYear(start);
  const endLabel = end === "present" ? "present" : formatMonthYear(end);
  return `${startLabel} — ${endLabel}`;
}

/** ISO datetime → "Updated 30 Sep 2026" */
export function formatUpdatedLabel(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return `Updated ${iso}`;
  const day = date.getUTCDate();
  const month = MONTHS_SHORT[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `Updated ${day} ${month} ${year}`;
}

/** "2025-09-30T14:00:00Z" → "September 2026" for the Now window */
export function formatWindow(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return `${MONTHS_LONG[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}