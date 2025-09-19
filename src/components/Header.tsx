import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="font-semibold text-cvBlue" href="/">Contra Vision Advent</Link>
      </div>
    </header>
  );
}