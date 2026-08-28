"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rarityMeta } from "@/lib/data";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const rarity = rarityMeta[project.rarity];

  return (
    <div
      className="tooltip-panel flex h-full flex-col rounded-lg p-5 transition-shadow duration-300 sm:p-6"
      style={{
        borderTop: `2px solid ${rarity.color}`,
        boxShadow: open
          ? `0 0 0 1px ${rarity.color}55, 0 0 32px -8px ${rarity.color}66`
          : "none",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold sm:text-2xl" style={{ color: "var(--text)" }}>
          {project.name}
        </h3>
        <span
          className="font-mono-label shrink-0 rounded-full border px-2.5 py-1 text-[9px] uppercase"
          style={{ borderColor: rarity.color, color: rarity.color }}
        >
          {rarity.label}
        </span>
      </div>

      <p className="mt-2 text-sm italic leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {project.tagline}
      </p>

      <p className="mt-4 text-[13px] leading-relaxed" style={{ color: "var(--text)" }}>
        {project.lore}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-2 border-t pt-4" style={{ borderColor: "var(--border)" }}>
        {project.stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between font-mono-label text-[10px] uppercase">
            <span style={{ color: "var(--text-muted)" }}>{stat.label}</span>
            <span style={{ color: "var(--text)" }}>{stat.value}</span>
          </div>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 space-y-2 overflow-hidden border-t pt-4"
            style={{ borderColor: "var(--border)" }}
          >
            {project.details.map((line) => (
              <li key={line} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: rarity.color }}>▸</span>
                <span>{line}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono-label rounded border px-2 py-1 text-[9px] uppercase"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="font-mono-label mt-5 self-start text-[11px] uppercase transition-opacity hover:opacity-70"
        style={{ color: rarity.color }}
      >
        {open ? "Hide details −" : "Inspect item +"}
      </button>
    </div>
  );
}
