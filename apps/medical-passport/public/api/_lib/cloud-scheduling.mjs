// Scheduling is non-clinical: explicit patient-entered times, never inferred from a dose.
import { CloudHttpError as HttpError } from "./cloud-runtime.mjs";
const DAY = 86400000;
const formatters = new Map();
export function validZone(zone) {
  try {
    new Intl.DateTimeFormat("en", { timeZone: zone }).format();
    return typeof zone === "string" && zone.length <= 80;
  } catch {
    return false;
  }
}
export function localParts(ms, zone) {
  let f = formatters.get(zone);
  if (!f) {
    f = new Intl.DateTimeFormat("en-CA", {
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    if (formatters.size > 100) formatters.clear();
    formatters.set(zone, f);
  }
  return Object.fromEntries(
    f
      .formatToParts(new Date(ms))
      .filter((p) => p.type !== "literal")
      .map((p) => [p.type, p.value]),
  );
}
export function localDate(ms, zone) {
  const p = localParts(ms, zone);
  return `${p.year}-${p.month}-${p.day}`;
}
// Resolve a wall clock time using candidate offsets. Fall-back picks the first occurrence;
// nonexistent spring-forward times are skipped, never silently shifted or doubled.
export function wallTime(date, time, zone) {
  const target = Date.parse(date + "T" + time + ":00Z");
  const offsets = new Set(
    [-DAY, 0, DAY].map((d) => {
      const p = localParts(target + d, zone);
      return (
        Date.parse(`${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:00Z`) -
        (target + d)
      );
    }),
  );
  const candidates = [...offsets]
    .map((o) => target - o)
    .filter((ms) => {
      const p = localParts(ms, zone);
      return (
        `${p.year}-${p.month}-${p.day}` === date &&
        `${p.hour}:${p.minute}` === time
      );
    });
  return candidates.length ? Math.min(...candidates) : null;
}
const bad = () => {
  throw new HttpError(400, "INVALID_SCHEDULE");
};
export function validateSchedule(input) {
  if (!input || !validZone(input.timezone)) bad();
  if (
    input.anchor_local &&
    (typeof input.anchor_local !== "string" ||
      !/^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d$/.test(input.anchor_local) ||
      !Number.isFinite(Date.parse(input.anchor_local)))
  )
    bad();
  const c = {
    mode: input.mode,
    timezone: input.timezone,
    start: input.start,
    end: input.end || "",
    times: input.times ?? [],
    weekdays: input.weekdays ?? [0, 1, 2, 3, 4, 5, 6],
    interval_hours: Number(input.interval_hours || 24),
    anchor: input.anchor_local
      ? wallTime(
          String(input.anchor_local).slice(0, 10),
          String(input.anchor_local).slice(11, 16),
          input.timezone,
        )
      : Number(input.anchor || 0),
  };
  for (const d of [c.start, c.end].filter(Boolean))
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(d) ||
      !Number.isFinite(Date.parse(d)) ||
      new Date(d).toISOString().slice(0, 10) !== d
    )
      bad();
  if (!c.start || (c.end && c.end < c.start)) bad();
  if (!["daily", "interval"].includes(c.mode)) bad();
  if (
    !Array.isArray(c.weekdays) ||
    !c.weekdays.length ||
    c.weekdays.some((d) => !Number.isInteger(d) || d < 0 || d > 6) ||
    new Set(c.weekdays).size !== c.weekdays.length
  )
    bad();
  if (c.mode === "daily") {
    if (
      !Array.isArray(c.times) ||
      !c.times.length ||
      c.times.length > 12 ||
      c.times.some((t) => !/^([01]\d|2[0-3]):[0-5]\d$/.test(t)) ||
      new Set(c.times).size !== c.times.length
    )
      bad();
    c.times.sort();
  } else if (
    !Number.isInteger(c.interval_hours) ||
    c.interval_hours < 1 ||
    c.interval_hours > 168 ||
    !Number.isFinite(c.anchor) ||
    c.anchor <= 0
  )
    bad();
  return c;
}
export function slots(c, from, to) {
  const out = [];
  if (c.mode === "interval") {
    const step = c.interval_hours * 3600000;
    for (
      let ms =
        c.anchor + Math.max(0, Math.ceil((from - c.anchor) / step)) * step;
      ms <= to;
      ms += step
    ) {
      const d = localDate(ms, c.timezone);
      if (d >= c.start && (!c.end || d <= c.end))
        out.push({ slot: "utc:" + ms, at: ms });
    }
    return out;
  }
  let start = Date.parse(localDate(from, c.timezone) + "T00:00:00Z") - DAY;
  const stop = Date.parse(localDate(to, c.timezone) + "T00:00:00Z") + DAY;
  for (let day = start; day <= stop; day += DAY) {
    const date = new Date(day).toISOString().slice(0, 10);
    if (
      date < c.start ||
      (c.end && date > c.end) ||
      !c.weekdays.includes(new Date(day).getUTCDay())
    )
      continue;
    for (const time of c.times) {
      const at = wallTime(date, time, c.timezone);
      if (at !== null && at >= from && at <= to)
        out.push({ slot: date + "T" + time, at });
    }
  }
  return out.sort((a, b) => a.at - b.at);
}
export const notificationAdapters = {
  IN_APP: { implemented: true },
  BROWSER: {
    implemented: true,
    foregroundOnly: true,
    permission: "user-gesture",
    content: "generic",
  },
  PUSH: { implemented: false },
  EMAIL: { implemented: false },
  SMS: { implemented: false },
};
