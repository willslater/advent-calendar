import { UNLOCK_DATES } from "@/data/config";

export default function Door({ day, open }: { day: number; open: boolean }) {
  const unlockDate = UNLOCK_DATES[day]; // e.g. "2025-12-13"

  return (
    <div
      className={
        "door relative h-28 md:h-32 rounded-xl overflow-hidden bg-white shadow-soft border border-slate-200" +
        (open ? " door-open" : "")
      }
    >
      {/* Day number in the middle */}
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-800">
        {day}
      </div>

      {/* Decorative overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cvBlue/10 to-cvRed/10" />
      <div className="absolute inset-0 perf-bg opacity-60" />

      {/* Unlock date label at top-left */}
      {unlockDate && (
        <div className="absolute top-2 left-2 text-[10px] bg-white/80 text-slate-700 rounded px-1.5 py-0.5 shadow">
          {new Date(unlockDate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          })}
        </div>
      )}

      {/* Status badge bottom-right */}
      {!open && (
        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 bg-slate-900/80 text-white rounded-full">
          Locked
        </div>
      )}
      {open && (
        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 bg-emerald-600 text-white rounded-full">
          Open
        </div>
      )}
    </div>
  );
}
