"use client";

import Link from "next/link";
import type { UrlObject } from "url";
import Door from "@/components/Door";
import { buildClientSubtitle, canOpenByCalendar, isPreview } from "@/lib/date";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { UNLOCK_DATES } from "@/data/config";
import { getDayContent } from "@/data/days";

export default function HomeClient() {
  const [now, setNow] = useState(new Date());
  const [subtitle, setSubtitle] = useState<string>("");
  const search = useSearchParams();
  const router = useRouter();

  // subtitle (client-only to avoid hydration mismatch)
  useEffect(() => {
    setSubtitle(buildClientSubtitle(now));
  }, []);
  useEffect(() => {
    const t = setInterval(() => {
      const n = new Date();
      setNow(n);
      setSubtitle(buildClientSubtitle(n));
    }, 60_000);
    return () => clearInterval(t);
  }, []);

  const debugDay = useMemo(() => {
    const val = search.get("debug");
    return val ? Number(val) : null;
  }, [search]);

  const preview = search.get("preview") === "1";
  const days = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      <section className="text-center pb-6">
        {/* <p className="text-xs mt-1 text-slate-500">
          Tip: <code>?preview=1</code> unlocks all doors • <code>?debug=6</code>{" "}
          pretends it’s Day 6.
        </p> */}

        {debugDay !== null && (
          <div className="mt-3">
            <label className="text-sm mr-2">Debug override:</label>
            <select
              className="border rounded px-2 py-1"
              value={debugDay}
              onChange={(e) => router.replace(`/?debug=${e.target.value}`)}
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
          const content = getDayContent(d);
          const open =
            preview || (debugDay ? d <= debugDay : canOpenByCalendar(d, now));
          const href: UrlObject =
            debugDay !== null
              ? { pathname: `/day/${d}`, query: { debug: String(debugDay) } }
              : preview
              ? { pathname: `/day/${d}`, query: { preview: "1" } }
              : { pathname: `/day/${d}` };

          return (
            <Link key={d} href={href} className="block">
              <Door day={d} open={open} title={content.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
