// src/app/page.tsx
"use client";
import Link from "next/link";
import Door from "@/components/Door";
import { canOpenDay, getTodayMeta, getDebugDay, isPreview } from "@/lib/date";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function HomePage() {
  const [now, setNow] = useState(new Date());
  const search = useSearchParams();
  const router = useRouter();

  // tick clock
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  // derive debug from URL each render
  const debugDay = useMemo(() => {
    const val = search.get("debug");
    return val ? Number(val) : null;
  }, [search]);

  const meta = useMemo(() => getTodayMeta(now), [now, search]); // meta also reflects preview/debug
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div>
      <section className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-cvBlue">
          Contra Vision Advent Calendar
        </h1>
        <p className="mt-2 text-slate-600">{meta.subtitle}</p>
        <p className="text-xs mt-1 text-slate-500">
          Tip: add <code>?preview=1</code> to unlock all doors, or{" "}
          <code>?debug=15</code> to pretend it’s Day 15.
        </p>

        {debugDay !== null && (
          <div className="mt-3">
            <label className="text-sm mr-2">Debug override:</label>
            <select
              className="border rounded px-2 py-1"
              value={debugDay}
              onChange={(e) => {
                const v = e.target.value;
                router.replace(`/?debug=${v}`);
              }}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  Day {d}
                </option>
              ))}
            </select>
          </div>
        )}
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 perf-bg p-4 rounded-2xl shadow-soft">
        {days.map((d) => {
          const open =
            isPreview() || (debugDay ? d <= debugDay : canOpenDay(d, now));
          return (
            <Link
              key={d}
              href={`/day/${d}${
                debugDay
                  ? `?debug=${debugDay}`
                  : isPreview()
                  ? `?preview=1`
                  : ""
              }`}
              className="block"
            >
              <Door day={d} open={open} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
