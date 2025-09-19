// src/lib/date.ts
function getUrlParam(name: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return new URL(window.location.href).searchParams.get(name);
  } catch {
    return null;
  }
}

export function isPreview(): boolean {
  return getUrlParam("preview") === "1";
}

export function getDebugDay(): number | null {
  const val = getUrlParam("debug");
  if (!val) return null;
  const n = Number(val);
  return Number.isFinite(n) && n >= 1 && n <= 24 ? n : null;
}

/** Doors unlock on December Nth (1..24) in user's tz, unless preview/debug override. */
export function canOpenDay(day: number, now: Date = new Date()): boolean {
  if (isPreview()) return true;
  const dbg = getDebugDay();
  if (dbg !== null) return day <= dbg;

  const isDecember = now.getMonth() === 11; // 11 = Dec
  if (!isDecember) return false;
  return now.getDate() >= day;
}

export function getTodayMeta(now: Date) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (isPreview())
    return { subtitle: `Preview mode active. All doors unlocked (${tz}).` };

  const dbg = getDebugDay();
  if (dbg !== null) {
    return { subtitle: `Debug mode: pretending it’s Day ${dbg} (${tz}).` };
  }

  if (now.getMonth() !== 11) {
    return {
      subtitle: `It’s not December yet. Doors unlock daily from Dec 1st.`,
    };
  }
  return {
    subtitle: `It’s December ${now.getDate()}. New door unlocks at midnight (${tz}).`,
  };
}
