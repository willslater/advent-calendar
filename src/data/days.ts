import type { DayContent } from "@/types/content";

export const DAYS: Record<number, DayContent> = {
  1: { type: "text", title: "Save the Date", body: "The Contra Vision Christmas Party is coming—don’t miss it!" },
  2: { type: "text", title: "Theme Reveal", body: "This year’s theme: Winter Wonderland. Dress code: festive chic." },
  3: { type: "image", title: "Throwback Pics", src: "https://images.unsplash.com/photo-1543589077-37f86a39f1f0?w=1200&q=80&auto=format&fit=crop", alt: "Throwback", caption: "Memories from parties past." },
  4: { type: "text", title: "Mini Quiz", body: "Quick trivia today. Winners get raffle entries at the party!", link: { href: "https://www.typeform.com/", label: "Enter the quiz" } },
  5: { type: "text", title: "Playlist Build", body: "Add your party must-plays to our shared playlist.", link: { href: "https://open.spotify.com/", label: "Add a song" } },
  6: { type: "text", title: "Menu Teaser", body: "Get a sneak peek at the festive food and signature mocktail." },
  7: { type: "text", title: "Secret Santa", body: "Reminder: Secret Santa exchange & budget guidelines." },
  8: { type: "text", title: "Team Challenge", body: "Festive selfie challenge: snap one with a shiny bauble!", link: { href: "https://www.dropbox.com/", label: "Upload your photo" } },
  9: { type: "text", title: "Prize Teaser", body: "One of the raffle prizes revealed today…" },
 10: { type: "text", title: "Dress Code Challenge", body: "Show us your outfit idea or vote for Best Dressed predictions.", link: { href: "https://www.notion.so/", label: "Share / vote" } },
 11: { type: "text", title: "The Final Clue", body: "A mysterious riddle hints at a surprise happening at the party…" },
 12: { type: "video", title: "Party Day Unlock", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
};

export function getDayContent(day: number): DayContent {
  return DAYS[day] ?? { type: "text", title: "Coming Soon", body: "Check back later!" };
}
