import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-black/40">
      <div className="lux-container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3 max-w-sm">
          <p className="font-display text-xl tracking-[0.32em] uppercase">
            Velour
          </p>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            A modern house of perfumery, distilling quiet confidence into every
            lingering note.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-xs md:flex-row md:gap-12">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.24em] text-[var(--muted)]">
              Navigate
            </p>
            <div className="flex flex-col gap-1.5">
              <Link href="/collections" className="hover:text-[var(--accent)]">
                Collections
              </Link>
              <Link href="/story" className="hover:text-[var(--accent)]">
                Our Story
              </Link>
              <Link href="/journal" className="hover:text-[var(--accent)]">
                Journal
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="uppercase tracking-[0.24em] text-[var(--muted)]">
              Support
            </p>
            <div className="flex flex-col gap-1.5">
              <Link href="/support" className="hover:text-[var(--accent)]">
                Help & FAQ
              </Link>
              <Link href="/shipping" className="hover:text-[var(--accent)]">
                Shipping & Returns
              </Link>
              <Link href="/privacy" className="hover:text-[var(--accent)]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] py-4 text-[0.65rem] text-[var(--muted)]">
        <div className="lux-container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Velour. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">
            Crafted with intention · Designed to linger
          </p>
        </div>
      </div>
    </footer>
  );
};
