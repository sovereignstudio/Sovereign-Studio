import FadeUp from "./FadeUp";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t px-5 py-24 sm:px-8 sm:py-32" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <span className="font-mono-label text-[11px] uppercase" style={{ color: "var(--accent)" }}>
            Enchantments
          </span>
          <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl" style={{ color: "var(--text)" }}>
            Stack
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <FadeUp key={skill.name} delay={i * 0.05}>
              <div className="tooltip-panel rounded-md px-4 py-3.5">
                <div className="font-display text-sm font-medium sm:text-base" style={{ color: "var(--text)" }}>
                  {skill.name}
                </div>
                <div className="font-mono-label mt-1 text-[9px] uppercase" style={{ color: "var(--text-muted)" }}>
                  {skill.note}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
