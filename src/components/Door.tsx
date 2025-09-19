import clsx from "clsx";

export default function Door({ day, open }: { day: number; open: boolean }) {
  return (
    <div
      className={clsx(
        "door relative h-28 md:h-32 rounded-xl overflow-hidden bg-white shadow-soft border border-slate-200",
        open && "door-open"
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-slate-800">
        {day}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-cvBlue/10 to-cvRed/10" />
      <div className="absolute inset-0 perf-bg opacity-60" />
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
