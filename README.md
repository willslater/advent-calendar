# Contra Vision Advent Calendar

A simple, festive Advent site for 24 days of December.

## Quick start (CodeSandbox)
1. Open **https://codesandbox.io/** and create a **Next.js (App Router) + TypeScript** sandbox.
2. Add **Tailwind** (or use a Tailwind + Next template). Paste the files above into matching paths.
3. Run with `yarn dev` (CodeSandbox runs automatically).

## Local
```bash
yarn
yarn dev
```

Visit http://localhost:3000

## Editing Content
- Update `src/data/days.ts` entries (video/text/image/quiz).
- For testing, append `?preview=1` to the URL to unlock all doors.

## Notes
- Unlock logic: Doors open on Dec N in the user’s local timezone.
- Progress and quiz score are saved in `localStorage`.
- All external `<a href>` links use full URLs as requested.
