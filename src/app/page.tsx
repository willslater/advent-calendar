"use client";
import Link from "next/link";
import Door from "@/components/Door";
import { canOpenDay, getTodayMeta } from "@/lib/date";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const meta = useMemo(() => getTodayMeta(now), [now]);
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div>
      <section className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-cvBlue">Contra Vision Advent Calendar</h1>
        <p className="mt-2 text-slate-600">{meta.subtitle}</p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 perf-bg p-4 rounded-2xl shadow-soft">
        {days.map((d) => {
          const open = canOpenDay(d, now);
          return (
            <Link key={d} href={`/day/${d}`} className="block">
              <Door day={d} open={open} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}