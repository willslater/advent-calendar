import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Snow from "@/components/Snow";

export const metadata: Metadata = {
  title: "Contra Vision Advent Calendar",
  description: "24 days of festive fun for Contra Vision staff"
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