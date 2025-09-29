"use client";
import Link from "next/link";
import type { DayContent } from "@/types/content";

export default function DoorModal({
  day,
  content,
}: {
  day: number;
  content: DayContent;
}) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-soft border border-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{content.title}</h3>

          {content.type === "text" && (
            <>
              <p className="text-slate-700 leading-relaxed">{content.body}</p>
              {"audioSrc" in content && content.audioSrc && (
                <audio className="mt-3 w-full" controls src={content.audioSrc}>
                  Your browser does not support the audio element.
                </audio>
              )}
            </>
          )}

          {content.type === "video" && (
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

          {content.type === "image" && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.src}
                alt={content.alt ?? content.title}
                className="rounded-lg border mt-3"
              />
              {"caption" in content && content.caption && (
                <p className="mt-2 text-sm text-slate-600">{content.caption}</p>
              )}
            </>
          )}

          {content.type === "menu" && (
            <div className="space-y-6">
              {content.sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-semibold text-cvBlue mb-2">
                    {section.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {content.type === "audio" && (
            <audio className="mt-3 w-full" controls src={content.src}>
              Your browser does not support the audio element.
            </audio>
          )}

          {"link" in content && (content as any).link && (
            <a
              className="underline text-cvBlue mt-3 inline-block"
              href={(content as any).link.href}
            >
              {(content as any).link.label} →
            </a>
          )}
        </div>

        <Link className="text-sm underline shrink-0" href={{ pathname: "/" }}>
          Back
        </Link>
      </div>
    </div>
  );
}
