import { UNLOCK_DATES } from "@/data/config";

function getParam(name: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return new URL(window.location.href).searchParams.get(name);
  } catch {
    return null;
  }
}

export function isPreview(): boolean {
  return getParam("preview") === "1";
}
export function getDebugDay(): number | null {
  const v = getParam("debug");
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) && n >= 1 && n <= 12 ? n : null;
}

function startOfDayLocal(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function canOpenByCalendar(day: number, now: Date = new Date()): boolean {
  if (isPreview()) return true;
  const dbg = getDebugDay();
  if (dbg !== null) return day <= dbg;

  const iso = UNLOCK_DATES[day];
  if (!iso) return false;
  const unlock = startOfDayLocal(new Date(iso + "T00:00:00"));
  const today = startOfDayLocal(now);
  return today.getTime() >= unlock.getTime();
}

// --- Client-only subtitle to avoid hydration mismatches ---
function clientTZ(): string {
  if (typeof window === "undefined") return "UTC";
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function buildClientSubtitle(now: Date): string {
  const tz = clientTZ();
  if (isPreview()) return `Preview mode active. All doors unlocked (${tz}).`;
  const dbg = getDebugDay();
  if (dbg !== null) return `Debug mode: pretending it’s Day ${dbg} (${tz}).`;
  return `Unlocks are based on fixed calendar dates (${tz}).`;
}
