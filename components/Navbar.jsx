"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, FolderGit2, Sparkles, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#skills", label: "Stack", icon: Sparkles },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActive(`#${mostVisible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className="tooltip-panel flex items-center rounded-full p-1.5 shadow-glow backdrop-blur-md"
        style={{
          backgroundColor: "color-mix(in srgb, var(--surface) 85%, transparent)",
        }}
      >
        {/* Logo — separated from the nav group with real spacing, not a hairline divider */}
        <a
          href="#top"
          aria-label="noctenz — home"
          className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-80"
        >
          <img src="/logo.svg" alt="noctenz logo" className="h-6 w-6" />
        </a>

        {/* Nav items — tight together, icon-only by default, expand on hover/active */}
        <div className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = active === href;
            return (
              <a
                key={href}
                href={href}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-9 items-center overflow-hidden rounded-full transition-[width] duration-300 ease-out ${isActive ? "w-32" : "w-9 hover:w-32"
                  }`}
                style={{
                  backgroundColor: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "var(--bg)" : "var(--text-muted)",
                }}
              >
                {/* icon sits in a fixed-size box so it stays perfectly centered
                    regardless of the parent's collapsed/expanded width */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span
                  className={`font-mono-label whitespace-nowrap pr-4 text-[11px] uppercase transition-opacity duration-200 ${isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                    }`}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Theme toggle — separated from the nav group with real spacing */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}