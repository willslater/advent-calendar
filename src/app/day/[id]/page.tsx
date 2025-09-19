"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { canOpenDay } from "@/lib/date";
import { getDayContent } from "@/data/days";
import DoorModal from "@/components/DoorModal";
import { useEffect, useMemo, useState } from "react";

export default function DayPage() {
  const params = useParams<{ id: string }>();
  const day = Number(params.id);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const open = useMemo(() => canOpenDay(day, now), [day, now]);
  const content = getDayContent(day);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-cvBlue">Day {day}</h2>
        <Link className="text-sm underline" href="/">Back to calendar</Link>
      </div>

      {!open ? (
        <div className="p-6 rounded-xl bg-white shadow-soft text-center">
          <p className="text-lg">This door unlocks on day {day} of December.</p>
        </div>
      ) : (
        <DoorModal day={day} content={content} />
      )}
    </div>
  );
}