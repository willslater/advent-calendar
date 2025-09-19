"use client";
import { Suspense } from "react";
import HomeClient from "./home-client";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading…</div>}>
      <HomeClient />
    </Suspense>
  );
}
