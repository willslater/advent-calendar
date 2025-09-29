import Image from "next/image";
import duck from "@/media/duck.png";

export default function CheekyLockedArt() {
  return (
    <div className="mt-4 text-center">
      <Image
        src={duck}
        alt="Cheeky duck behind a Contra Vision perforated window"
        className="mx-auto rounded-xl border shadow-soft"
        width={400} // set an appropriate width
        height={300} // set an appropriate height
        priority={false}
      />
      <p className="mt-2 text-xs text-slate-500">
        Quack! This door isn’t ready yet.
      </p>
    </div>
  );
}
