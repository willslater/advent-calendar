export default function Door({
  day,
  open,
  title,
}: {
  day: number;
  open: boolean;
  title?: string;
}) {
  return (
    <div
      className={
        "door relative h-28 md:h-32 rounded-xl overflow-hidden bg-white shadow-soft border border-slate-200" +
        (open ? " door-open" : "")
      }
    >
      {/* Middle content changes based on open/locked */}
      <div className="absolute inset-0 flex items-center justify-center text-center p-2">
        {!open && (
          <span className="text-3xl font-bold text-slate-800">{day}</span>
        )}
        {open && (
          <span className="text-sm font-semibold text-cvBlue">
            {title ?? `Day ${day}`}
          </span>
        )}
      </div>

      {/* Decorative layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cvBlue/10 to-cvRed/10" />
      <div className="absolute inset-0 perf-bg opacity-60" />

      {/* Status badge */}
      {!open && (
        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 bg-slate-900/80 text-white rounded-full">
          Locked
        </div>
      )}
      {open && (
        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 bg-emerald-600 text-white rounded-full">
          Click to Open
        </div>
      )}
    </div>
  );
}
