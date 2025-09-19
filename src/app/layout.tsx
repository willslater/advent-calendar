import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Snow from "@/components/Snow";

export const metadata: Metadata = {
  title: "Contra Vision 12 Days",
  description: "12-day build-up to the Christmas party"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Snow />
        <Header />
        <main className="max-w-6xl mx-auto px-4 pb-16">{children}</main>
      </body>
    </html>
  );
}
