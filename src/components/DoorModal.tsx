"use client";
import Link from "next/link";
import type { DayContent } from "@/types/content";

export default function DoorModal({ day, content }: { day: number; content: DayContent }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-soft border border-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
          {"body" in content && <p className="text-slate-700 leading-relaxed">{content.body}</p>}
          {"embedUrl" in content && (
            <div className="aspect-video mt-3">
              <iframe
                className="w-full h-full rounded-lg border"
                src={content.embedUrl}
                title={content.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
          {"src" in content && content.src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={content.src!} alt={content.alt ?? content.title} className="rounded-lg border mt-3" />
          )}
          {"link" in content && content.link && (
            <a className="underline text-cvBlue mt-3 inline-block" href={content.link.href}>
              {content.link.label} →
            </a>
          )}
        </div>
        <Link className="text-sm underline shrink-0" href="/">
          Close
        </Link>
      </div>
    </div>
  );
}
