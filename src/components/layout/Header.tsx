"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/story", label: "Our Story" },
  { href: "/journal", label: "Journal" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 z-40",
        "backdrop-blur-xl",
        isScrolled
          ? "bg-black/60 border-b border-[var(--border-subtle)]"
          : "bg-black/10 border-b border-transparent"
      )}
      style={{ height: "var(--nav-height)" }}
    >
      <div className="lux-container flex h-full items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-[var(--accent)]/90 shadow-[0_0_30px_rgba(210,180,140,0.6)]" />
          <div className="leading-tight">
            <span className="font-display text-lg tracking-[0.35em] uppercase">
              Velour
            </span>
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[var(--muted)]">
              Curated luxury in every note
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.72rem] uppercase tracking-[0.2em] transition-colors relative text-[var(--muted)] hover:text-[var(--foreground)]"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-[var(--accent)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost">Login</Button>
          <Button>Shop Scents</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <X className="h-4 w-4 text-[var(--foreground)]" />
          ) : (
            <Menu className="h-4 w-4 text-[var(--foreground)]" />
          )}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-[var(--nav-height)] w-full border-b border-[var(--border-subtle)] bg-[#050509]/98 backdrop-blur-xl md:hidden"
            >
              <div className="lux-container flex flex-col gap-4 py-4">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-xs uppercase tracking-[0.22em] py-1 text-[var(--muted)]",
                        active && "text-[var(--foreground)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="mt-2 flex flex-col gap-3">
                  <Button fullWidth>Shop Scents</Button>
                  <Button variant="ghost" fullWidth>
                    Login
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
