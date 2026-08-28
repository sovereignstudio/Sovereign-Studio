import FadeUp from "./FadeUp";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t px-5 py-24 sm:px-8 sm:py-32" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <span className="font-mono-label text-[11px] uppercase" style={{ color: "var(--accent)" }}>
            Trade Window
          </span>
          <h2 className="font-display mt-2 max-w-lg text-3xl font-semibold sm:text-4xl" style={{ color: "var(--text)" }}>
            Have a server or a system in mind?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Open to plugin work, RPG systems, and item economies — reach out and describe what you&apos;re building.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@noctenz.dev"
              className="rounded-md px-5 py-2.5 font-mono-label text-[12px] uppercase transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
            >
              hello@noctenz.dev
            </a>
            <a
              href="https://github.com/noctenz"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border px-5 py-2.5 font-mono-label text-[12px] uppercase transition-colors hover:opacity-70"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              github.com/{profile.namespace}
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center" style={{ borderColor: "var(--border)" }}>
            <span className="font-mono-label text-[10px] uppercase" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} {profile.name} · {profile.namespace}
            </span>
            <span className="font-mono-label text-[10px] uppercase" style={{ color: "var(--text-muted)" }}>
              Built with Next.js &amp; Framer Motion
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
