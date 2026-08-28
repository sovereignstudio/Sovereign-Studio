/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090b",
          900: "#0a0b0d",
          850: "#101216",
          800: "#131519",
          700: "#1b1e24",
          600: "#262a32",
        },
        parchment: {
          50: "#f7f3e8",
          100: "#f1ead6",
          200: "#e6dec9",
          300: "#d8cdac",
        },
        rarity: {
          common: "#9aa1ab",
          rare: "#4c8dff",
          epic: "#a855f7",
          legendary: "#d4a72c",
          legendaryBright: "#f0cd63",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(212,167,44,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,167,44,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(32,28,20,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,28,20,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,167,44,0.35), 0 0 24px -4px rgba(212,167,44,0.35)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
