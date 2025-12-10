"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="lux-container relative flex flex-col items-start gap-10 pb-20 pt-16 md:flex-row md:items-center md:py-24">
        {/* Background glow shapes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E11] via-[#111114] to-[#0E0E11]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1C1B1F_0%,transparent_60%)] opacity-40"></div>

        {/* Left column: text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-xl space-y-7"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--muted)]">
            House of Velour · Eau de Parfum
          </p>

          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] text-[var(--foreground)]">
  Luxury that <span className="italic">lingers</span> long after you’ve left.
</h1>

          <p className="text-[var(--subtle-text)] leading-relaxed max-w-lg">
  Velour distills intimate evenings, whispered memories, 
  and quiet confidence into contemporary compositions.
</p>

          <div className="flex flex-wrap items-center gap-4">
            <Button>Discover signature scents</Button>
            <Button variant="ghost">Build your scent profile</Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--muted)]">
            <p>Small-batch crafted</p>
            <p>Genderless by design</p>
            <p>Free worldwide shipping over $150</p>
          </div>
        </motion.div>

        {/* Right column: bottle / composition */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto mt-4 w-full max-w-xs md:mt-0 md:max-w-sm"
        >
          <div className="relative aspect-[3/5] overflow-hidden rounded-[2.2rem] border border-[var(--border-subtle)] bg-gradient-to-b from-[#13131c] via-[#090910] to-[#050509] p-[1.2px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#16161f] via-[#090910] to-[#050509]">
              {/* light stripe */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[30%] -translate-x-1/2 bg-gradient-to-b from-white/10 via-transparent to-white/5 blur-2" />

              {/* Bottle */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative h-48 w-24 rounded-[1.3rem] bg-gradient-to-b from-[#f9f4ea] to-[#d2b48c] shadow-[0_0_80px_rgba(210,180,140,0.6)]">
                  {/* Cap */}
                  <div className="absolute -top-6 left-1/2 h-6 w-16 -translate-x-1/2 rounded-[999px] bg-black/90 border border-white/10" />
                  {/* Label */}
                  <div className="absolute inset-x-3 top-10 rounded-[1rem] border border-black/4 bg-black/4 backdrop-blur-sm p-3">
                    <p className="font-display text-xs tracking-[0.32em] uppercase text-black/70">
                      Velour
                    </p>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-black/60">
                      Nuit No. 01
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* meta info */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-[0.65rem] text-[var(--muted)]">
                <span>Extrait · 50ml</span>
                <span className="uppercase tracking-[0.22em] text-[var(--accent)]">
                  New
                </span>
              </div>
            </div>
          </div>

          {/* floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex items-center justify-between rounded-full border border-[var(--border-subtle)] bg-black/40 px-4 py-2 text-[0.7rem] text-[var(--muted)] backdrop-blur-xl"
          >
            <span className="uppercase tracking-[0.24em]">
              Top: Bergamot · Saffron
            </span>
            <span className="hidden text-[var(--accent)] md:inline">
              Curated just for nightfall.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
