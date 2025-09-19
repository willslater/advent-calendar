"use client";
import { useEffect, useState } from "react";
import type { DayContent } from "@/types/content";
import Link from "next/link";

export default function DoorModal({
  day,
  content,
}: {
  day: number;
  content: DayContent;
}) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, [day]);

  return (
    <div className="p-6 rounded-xl bg-white shadow-soft border border-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
          {"body" in content && (
            <p className="text-slate-700 leading-relaxed">{content.body}</p>
          )}
        </div>
        <Link className="text-sm underline shrink-0" href="/">
          Close
        </Link>
      </div>
    </div>
  );
}
