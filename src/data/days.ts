import type { DayContent } from "@/types/content";

const map: Record<number, DayContent> = {
  1: { type: "text", title: "Welcome", body: "Happy December from Contra Vision!" },
  2: { type: "text", title: "Joke", body: "Why did Santa go to music school? To improve his wrapping skills!" }
};

export function getDayContent(day: number): DayContent {
  return map[day] ?? { type: "text", title: "Coming Soon", body: "Check back later!" };
}