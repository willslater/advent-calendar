import type { DayContent } from "@/types/content";

export const DAYS: Record<number, DayContent> = {
  1: {
    type: "text",
    title: "Save the Date - 11th December 2025",
    img: "/media/savedate.png",
    body: "The Contra Vision Christmas Party is coming.<br /><br /> We have made booking for 11th December based on the majority of confirmations. If you originally said you were not able to make that date but now can please let us know ASAP.",
    audioSrc: "/media/Contravision%20Christmas%20Save%20the%20Date.mp3",
  },

  2: {
    type: "menu",
    title: "Menu Reveal – Choose Your Courses",
    body: "Please use <b><a target=\"_blank\" href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=_X_nLPprckmi8f4WKOGSpCrUr7sY-m1BpPqKdtz-e_tURFo0VTIxTTI1SUREUEVQMkhZSFhOTFBCRC4u\">this form</a></b> to select starter, main and dessert. We need your choices by 1st November.<br /><br /> If you have any dietary requirements or allergies please let us know in the form.",
    audioSrc: "/media/menu.mp3",
    sections: [
      {
        title: "Starters",
        items: [
          {
            title: "Traditional Oak-Smoked Salmon",
            info: "orange-braised cranberries, rye bread",
          },
          {
            title: "Grilled Goats’ Cheese & Maple Fig Salad (v)",
            info: "fig & honey chutney, sherry vinegar dressing",
          },
          {
            title: "Classic Prawn Cocktail",
            info: "king prawns, cocktail sauce, toasted brioche",
          },
          {
            title: "Duck Liver Parfait*",
            info: "pickled grapes, Bramley apple & fig chutney, toasted brioche",
          },
          {
            title: "Roasted Butternut Squash Soup (v)",
            info: "pumpkin seeds, butternut squash crisps, toasted sourdough (ve option available)",
          },
        ],
      },
      {
        title: "Mains",
        items: [
          {
            title: "Festive Turkey",
            info: "cranberry stuffing, pig in blanket, garlic & thyme roast potatoes, maple-roasted carrots & parsnips, mulled wine red cabbage, shaved sprouts with chestnuts, red wine jus",
          },
          {
            title: "Braised Blade of Beef",
            info: "buttered mash, mulled wine red cabbage, roasted carrots & shallot, red wine jus",
          },
          {
            title: "Pan-Seared Rainbow Trout",
            info: "cauliflower velouté, sautéed baby potatoes, Tenderstem® broccoli, capers",
          },
          {
            title: "Maple & Cinnamon Glazed Pork Belly",
            info: "buttery mash, mulled wine red cabbage, candied apple purée, red wine jus, crackling",
          },
          {
            title: "Root Vegetable Nut Roast (ve)",
            info: "garlic & thyme roast potatoes, maple-roasted carrots & parsnips, mulled wine red cabbage, onion gravy",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            title: "Christmas Pudding (v)",
            info: "vanilla bean custard, brandy butter",
          },
          {
            title: "Dark Chocolate Torte (v)",
            info: "blackcurrant sorbet, Belgian chocolate crumb, blackberries",
          },
          {
            title: "Apple, Rhubarb & Cinnamon Crumble (v)",
            info: "ginger ice cream (ve option available)",
          },
          { title: "Lemon Meringue Tart (v)", info: "berry coulis, mint" },
          {
            title: "Salted Caramel Profiteroles (v)",
            info: "fresh berries, toffee sauce",
          },
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
