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
    body: "Please use <b><a target=\"_blank\" href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=_X_nLPprckmi8f4WKOGSpCrUr7sY-m1BpPqKdtz-e_tURFo0VTIxTTI1SUREUEVQMkhZSFhOTFBCRC4u\">this form</a></b> to select starter, main and dessert. We need your choices by 1st November.<br /><br /> If you have any dietary requirements or allergies please let us know in the form. Gluten free menu is available on request.",
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
    title: "Venue Reveal",
    audioSrc: "/media/browns.mp3",
    body: `
      <p>This year’s <strong>Contra Vision Christmas Meal</strong> will be held at:<br />
        <a  target="_blank" href="https://www.browns-restaurants.co.uk/restaurants/northwest/manchester">Browns Manchester</a>, 
        1 York Street, Manchester, UK, M2 2AW.
      </p>
      <p><a target="_blank"href="https://www.browns-restaurants.co.uk/restaurants/northwest/manchester"><img src="https://www.tagvenue.com/resize/61/7c/widen-1680-noupsize;2366-browns-brasserie-bar-manchester-venue.jpg" alt="Browns Manchester" style="width:100%;max-width:400px;border-radius:8px;border:1px solid #ddd;margin-top:10px;" /></a></p>
      <p><strong><a target="_blank"href="https://www.browns-restaurants.co.uk/restaurants/northwest/manchester">Visit Website</a></strong></p>
      
      <br />
      <p>Here are the important details for the day:</p>
      <br />
      <p><strong>Date:</strong> Thursday 11th December<br />
      <strong>Finish work:</strong> 2pm (thanks Roger!)<br />
      <strong>Dinner:</strong> 5:00pm sharp 🍽️</p>
      <br />
      <p>Browns is located just behind <strong>Primark</strong>, only a short walk from 
        <strong>Manchester Piccadilly</strong> station and <strong>St Peter’s Square</strong> tram stop. Opposite Grand Pacific.<br />
        For those driving, nearby parking can be found at <strong>Q-Park Piazza</strong> and 
        <strong>NCP Chorlton Street</strong>.
      </p>
      <br />
      <p>If you haven’t chosen your festive feast yet, please do so ASAP so we can confirm numbers with the venue.<br />
        <br />👉 <strong><a href="https://advent-calendar-mu-nine.vercel.app/day/2">Select your menu choices here</a></strong>.
      </p>`,
  },

  4: {
    type: "text",
    title: "Dress Theme",
    audioSrc: "/media/sparkle.mp3",
    img: "/media/sparkle.png",
    body: "For this year's party, we're going with a 'White or Black Sparkle' theme! Dress to impress, but keep it comfortable — think smart-casual with a festive twist. Whether it’s a sparkly top, glittery shoes, or a touch of shimmer in your outfit, just make sure you shine!",
  },
  5: {
    type: "text",
    title: "Secret Santa",
    body: "<div><p>It’s that time of year again — Secret Santa is back! 🎅</p><br /><p>You’ve been invited to join our Secret Santa at Draw Names. Each person has been randomly assigned someone to buy for, with a budget of £15.</p><br /><p>👉 Check your inbox for an email invite from <a href='https://www.drawnames.co.uk'>drawnames.co.uk</a></p><br /><p>If you haven’t received one, please let me know so we can resend your invitation.</p></div>",
    audioSrc: "/media/Secret santa.mp3",
    img: "/media/adam santa.png",
    link: { 
      href: "https://www.drawnames.co.uk//", 
      label: "Go to Draw Names" 
    },
  },
  6: {
    type: "text",
    title: "Award Nominations",
    audioSrc: "/media/Nominations.mp3",
    body: "<p>We will be holding the traditional Christmas awards at this year&rsquo;s meal.</p><br /><p>Please help us by taking a moment to nominate a colleague and tell us why they deserve an award &mdash;whether it&rsquo;s for saving the day, spreading daily cheer, tackling chaos like a pro, or simply making work a little brighter (or funnier!).</p><br /><p>Your nomination can be heartfelt, humorous, or a mix of both &mdash; the more personality, the better!</p><br /><p>👉 <strong>Submit your nomination </strong><br><a href=\"https://forms.office.com/e/JPsKuHC4bR\">here</a></p><br /><p>Thanks for getting involved and helping us celebrate the brilliant (and brilliantly entertaining!) moments of the year.We can&rsquo;t wait to read your stories.</p>",
  },
  7: {
    type: "text",
    title: "After the Meal",
    audioSrc: "/media/After the Meal.mp3",
    body: "<p>We’re heading to Oast at 7pm after the meal.<br /><br />They don’t take bookings, but they said we’ll be fine. If it’s busy, we’ll just find somewhere else and keep the night going.<br /><br />A few drinks, a lot of laughs, and a perfect way to wind down the evening!</p>",
  },
  8: {
    type: "text",
    title: "Reminder",
    img: "/media/secret_santa.png",
    body: "<p>Sorry, no song on this one, just a quick reminder to remember to take your secret santa gift to the meal so we can swap them over the meal.</p>",
  },
  9: {
    type: "text",
    title: "Full Details",
    body: "<p>Hi everyone,<br><br>Here is an overview of <strong>tomorrow’s plan</strong> so you have everything you need in one place.<br><br>⸻<br><br><strong>🎄 Event Location</strong><br><br><strong>Browns Manchester</strong><br>1 York Street, Manchester, M2 2AW<br><a href="https://www.browns-restaurants.co.uk/restaurants/northwest/manchester">https://www.browns-restaurants.co.uk/restaurants/northwest/manchester</a><br><br>Browns is just behind <strong>Primark</strong>, a short walk from <strong>Manchester Piccadilly</strong> and <strong>St Peter’s Square tram stop</strong>, and directly opposite <strong>Grand Pacific</strong>.<br>Nearby parking: <strong>Q-Park Piazza</strong> and <strong>NCP Chorlton Street</strong>.<br><br>⸻<br><br><strong>📅 Plan for the Day</strong><br><br>• <strong>Date:</strong> Thursday 11th December<br>• <strong>Finish work:</strong> 2pm<br>• <strong>Dinner starts:</strong> 5:00pm sharp<br>• Please arrive in good time so we can be seated together.<br><br>⸻<br><br><strong>✨ Dress Code — White or Black Sparkle</strong><br><br>This year’s theme is <strong>White or Black Sparkle</strong>.<br>Think smart-casual with a festive twist — subtle shimmer, glittery shoes, sparkly tops, or accessories that help you shine. Go for comfort and style in equal measure.<br><br>If you don’t have anything sparkly, don’t worry — you’ll still look fab!<br><br>⸻<br><br><strong>🏆 Christmas Awards</strong><br><br>We’ll be holding our traditional Christmas awards at the meal.<br><br>⸻<br><br><strong>🎅 Secret Santa</strong><br><br>Please remember to <strong>bring your Secret Santa gift</strong> to the meal so we can swap them over dinner.<br><br>⸻<br><br><strong>🍻 After-Meal Drinks — Oast at 7pm</strong><br><br>After we leave Browns, we’ll head to <strong>Oast</strong> at around <strong>7pm</strong>.<br><br>They don’t take bookings, but they’ve confirmed we should be fine.<br>And if it’s busy, no problem — we’ll simply wander somewhere else and keep the evening going with drinks and laughs.</p>",
  },
  10: {
    type: "text",
    title: "",
    body: "",
  },
  11: {
    type: "text",
    title: "All songs album",
    body: "",
  },
  12: {
    type: "video",
    title: "Party Day Unlock",
    embedUrl: "",
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
