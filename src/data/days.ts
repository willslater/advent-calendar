import type { DayContent } from "@/types/content";

export const DAYS: Record<number, DayContent> = {
  1: {
    type: "text",
    title: "Save the Date",
    body: "The Contra Vision Christmas Party is coming. We have made booking for 11th December based on the majority of confirmations. If you originally said you were not able to make that date but now can please let us know ASAP.",
    audioSrc: "/media/Contravision%20Christmas%20Save%20the%20Date.mp3",
  },

  2: {
    type: "menu",
    title: "Menu Reveal – Choose Your Courses",
    sections: [
      {
        title: "Starters",
        items: [
          "Traditional Oak-Smoked Salmon – orange-braised cranberries, rye bread",
          "Grilled Goats’ Cheese & Maple Fig Salad (v) – fig & honey chutney, sherry vinegar dressing",
          "Classic Prawn Cocktail – king prawns, cocktail sauce, toasted brioche",
          "Duck Liver Parfait* – pickled grapes, Bramley apple & fig chutney, toasted brioche",
          "Roasted Butternut Squash Soup (v) – pumpkin seeds, butternut squash crisps, toasted sourdough (vegan option available)",
        ],
      },
      {
        title: "Mains",
        items: [
          "Festive Turkey – cranberry stuffing, pig in blanket, garlic & thyme roast potatoes, maple-roasted carrots & parsnips, mulled wine red cabbage, shaved Brussels sprouts with chestnuts, red wine jus",
          "Braised Blade of Beef – buttered mash, mulled wine red cabbage, roasted carrots & shallot, red wine jus",
          "Pan-Seared Rainbow Trout – cauliflower velouté, sautéed baby potatoes, Tenderstem® broccoli, capers",
          "Maple & Cinnamon Glazed Pork Belly – buttery mash, mulled wine red cabbage, candied apple purée, red wine jus, crackling",
          "Root Vegetable Nut Roast (ve) – garlic & thyme roast potatoes, maple-roasted carrots & parsnips, mulled wine red cabbage, onion gravy",
        ],
      },
      {
        title: "Desserts",
        items: [
          "Christmas Pudding (v) – vanilla bean custard, brandy butter",
          "Dark Chocolate Torte (v) – blackcurrant sorbet, Belgian chocolate crumb, blackberries",
          "Apple, Rhubarb & Cinnamon Crumble (v) – ginger ice cream (vegan option available)",
          "Lemon Meringue Tart (v) – berry coulis, mint",
          "Salted Caramel Profiteroles (v) – fresh berries, toffee sauce",
        ],
      },
    ],
  },

  3: {
    type: "text",
    title: "Theme Reveal",
    body: "This year’s theme: Winter Wonderland. Dress code: festive chic.",
  },
  4: {
    type: "image",
    title: "Throwback Pics",
    src: "https://images.unsplash.com/photo-1543589077-37f86a39f1f0?w=1200&q=80&auto=format&fit=crop",
    alt: "Throwback",
    caption: "Memories from parties past.",
  },
  5: {
    type: "text",
    title: "Mini Quiz",
    body: "Quick trivia today. Winners get raffle entries at the party!",
    link: { href: "https://www.typeform.com/", label: "Enter the quiz" },
  },
  6: {
    type: "text",
    title: "Playlist Build",
    body: "Add your party must-plays to our shared playlist.",
    link: { href: "https://open.spotify.com/", label: "Add a song" },
  },
  7: {
    type: "text",
    title: "Menu Teaser",
    body: "Get a sneak peek at the festive food and signature mocktail.",
  },
  8: {
    type: "text",
    title: "Secret Santa",
    body: "Reminder: Secret Santa exchange & budget guidelines.",
  },
  9: {
    type: "text",
    title: "Team Challenge",
    body: "Festive selfie challenge: snap one with a shiny bauble!",
    link: { href: "https://www.dropbox.com/", label: "Upload your photo" },
  },
  10: {
    type: "text",
    title: "Dress Code Challenge",
    body: "Show us your outfit idea or vote for Best Dressed predictions.",
    link: { href: "https://www.notion.so/", label: "Share / vote" },
  },
  11: {
    type: "text",
    title: "The Final Clue",
    body: "A mysterious riddle hints at a surprise happening at the party…",
  },
  12: {
    type: "video",
    title: "Party Day Unlock",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
};

export function getDayContent(day: number): DayContent {
  return (
    DAYS[day] ?? {
      type: "text",
      title: "Coming Soon",
      body: "Check back later!",
    }
  );
}
