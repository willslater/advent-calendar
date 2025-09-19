import { Suspense } from "react";
import DayClient from "./page-client";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading…</div>}>
      <DayClient />
    </Suspense>
  );
}
