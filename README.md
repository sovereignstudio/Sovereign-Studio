# Minecraft Dev Portfolio

Portfolio website for a Minecraft plugin / RPG systems developer, built with Next.js 14 (App Router).

## Stack

- **Next.js 14** (App Router)
- **Framer Motion** — scroll-triggered fade-up reveals (`whileInView`)
- **next-themes** — dark/light toggle, defaults to dark
- **Tailwind CSS** — utility styling on top of CSS-variable design tokens
- **@fontsource** (Sora, Inter, JetBrains Mono) — self-hosted fonts, no external font requests

## Design concept

The visual language borrows from item tooltips (the project's own artifact-rarity system):
project cards are bordered by rarity tier (Common → Legendary), stat rows read like an
item's tooltip stats, and the hero reveals like a legendary item name with a soft glow.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All project/skill copy lives in `lib/data.js` — update names, taglines, stats,
and detail bullets there; the layout picks it up automatically.

## Build

```bash
npm run build
npm start
```
