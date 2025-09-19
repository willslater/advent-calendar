# Contra Vision — 12 Days to the Party (Next.js + TS + Tailwind)

- **12 doors** (1..12) with **hard-coded unlock dates** in `src/data/config.ts`
- **No `clsx` dependency**
- **Debug**: `?debug=N` pretends it’s Day N
- **Preview**: `?preview=1` unlocks everything
- Hydration-safe timezone subtitle

## Configure unlock dates
Edit `src/data/config.ts`:
```ts
export const UNLOCK_DATES: Record<number, string> = {
  1: "2025-12-13",
  ...
  12: "2025-12-24"
};
```
Dates are compared by local time (start of day).

## Run
```bash
yarn
yarn dev
```
Open http://localhost:3000/?preview=1

All external links use **full absolute URLs**.
