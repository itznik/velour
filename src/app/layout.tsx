import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Velour — Curated luxury in every note",
  description: "Velour is a modern luxury perfume house crafted for timeless presence.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#050509] text-[var(--foreground)]",
          "font-sans",
          display.variable,
          sans.variable
        )}
      >
        <div className="noise-bg" />

        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-[var(--nav-height)]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
