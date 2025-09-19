export function canOpenDay(day: number, now: Date = new Date()): boolean {
  const month = now.getMonth();
  const date = now.getDate();
  return month === 11 && date >= day; // December only
}

export function getTodayMeta(now: Date) {
  const month = now.getMonth();
  const date = now.getDate();
  if (month !== 11) return { subtitle: "It’s not December yet." };
  return { subtitle: `It’s December ${date}.` };
}