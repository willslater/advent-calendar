"use client";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { canOpenByCalendar, isPreview } from "@/lib/date";
import { useEffect, useMemo, useState } from "react";
import DoorModal from "@/components/DoorModal";
import { getDayContent } from "@/data/days";

export default function DayPage() {
  const params = useParams<{ id: string }>();
  const search = useSearchParams();
  const day = Number(params.id);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const debugDay = useMemo(() => {
    const val = search.get("debug");
    return val ? Number(val) : null;
  }, [search]);

  const preview = search.get("preview") === "1" || isPreview();
  const open = useMemo(() => {
    if (preview) return true;
    if (debugDay) return day <= debugDay;
    return canOpenByCalendar(day, now);
  }, [preview, debugDay, day, now]);

  const content = getDayContent(day);
  const backHref = debugDay ? `/?debug=${debugDay}` : preview ? "/?preview=1" : "/";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-cvBlue">Day {day}</h2>
        <Link className="text-sm underline" href={backHref}>Back to calendar</Link>
      </div>

      {!open ? (
        <div className="p-6 rounded-xl bg-white shadow-soft text-center">
          <p className="text-lg">This door is not unlocked yet.</p>
          <p className="text-sm text-slate-500 mt-2">Use <code>?preview=1</code> or <code>?debug={Math.max(1, day)}</code> for testing.</p>
        </div>
      ) : (
        <DoorModal day={day} content={content} />
      )}
    </div>
  );
}
