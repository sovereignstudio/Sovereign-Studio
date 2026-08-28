"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-tooltip-grid relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      {/* soft ambient glow, echoes an enchanted item's particle aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span className="font-mono-label text-[11px] uppercase" style={{ color: "var(--accent)" }}>
            {profile.role}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] font-semibold leading-[0.95] sm:text-6xl md:text-7xl"
          style={{
            color: "var(--text)",
            textShadow: "0 0 46px color-mix(in srgb, var(--accent) 35%, transparent)",
          }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-body text-base italic leading-relaxed sm:text-lg"
          style={{ color: "var(--text-muted)" }}
        >
          &ldquo;{profile.lore}&rdquo;
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-3"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="tooltip-panel rounded-md px-3.5 py-2.5"
            >
              <div className="font-mono-label text-[9px] uppercase" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
              <div className="mt-1 font-mono-label text-xs sm:text-[13px]" style={{ color: "var(--text)" }}>
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md px-5 py-2.5 font-mono-label text-[12px] uppercase transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border px-5 py-2.5 font-mono-label text-[12px] uppercase transition-colors hover:opacity-70"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
