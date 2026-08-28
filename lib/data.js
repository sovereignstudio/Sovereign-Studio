export const profile = {
  name: "Dellons",
  role: "Minecraft Plugin & RPG Systems Developer",
  namespace: "noctenz",
  lore: "Builds combat skills, artifact economies, and admin tooling for Paper servers — mostly the kind of item you'd stop scrolling to read the tooltip on.",
  stats: [
    { label: "Primary Language", value: "Java" },
    { label: "Core Stack", value: "Paper API · AetherCore" },
    { label: "Item Systems", value: "MMOItems · MythicLib" },
    { label: "Namespace", value: "noctenz" },
  ],
};

export const projects = [
  {
    id: "cardinalrpg",
    name: "CardinalRPG",
    rarity: "legendary",
    tagline: "Custom RPG skill & artifact engine for Paper servers",
    lore: "An ongoing RPG plugin covering dual-mode weapon skills, chain-dash mobility, and a full artifact-set economy across eight rarity tiers.",
    stats: [
      { label: "Status", value: "In active development" },
      { label: "Skills", value: "Dual-mode weapons, chain dash" },
      { label: "Artifact Sets", value: "8, Common → Legendary" },
    ],
    details: [
      "LoneDestructor — a dual-mode sword/bow weapon with passive proximity-based mode swapping, velocity-based dash movement, and left-click arrow firing in bow mode.",
      "PhantomSabatons — a multi-hop Chain Dash skill with particle trails, invisibility timing, and enemy Slowness.",
      "Artifact sets built on a BaseArtifactSet inheritance pattern, using MMOItems NBT detection, MythicLib StatModifier, and millisecond-based cooldowns.",
      "BellKiamat admin item with spin/stop mechanics and NPC yaw restoration.",
      "Listener registration refactored into a dedicated ListenerRegistry to keep the main module minimal.",
    ],
    tags: ["Java", "Paper API", "MMOItems", "MythicLib"],
  },
  {
    id: "itemdatabase",
    name: "ItemDatabase",
    rarity: "epic",
    tagline: "Time-locked item capsule utility with a full admin layer",
    lore: "A standalone utility plugin for storing and time-releasing items, built for reliability under real server load.",
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Storage", value: "MySQL & H2 support" },
      { label: "Pooling", value: "HikariCP" },
    ],
    details: [
      "Time-locked item capsule system that holds and releases items on a schedule.",
      "Dual storage backends — MySQL for production, H2 for lightweight setups — through HikariCP connection pooling.",
      "Full admin command layer for managing capsules without touching the database directly.",
    ],
    tags: ["Java", "MySQL", "H2", "HikariCP"],
  },
  {
    id: "phoenix-plugins",
    name: "Phoenix Plugins",
    rarity: "rare",
    tagline: "Marketplace website clone, built from scratch",
    lore: "A from-scratch Next.js rebuild of a Minecraft plugin marketplace, focused on interaction detail as much as layout.",
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Framework", value: "Next.js 14, App Router" },
      { label: "Delivery", value: "Packaged as a ZIP" },
    ],
    details: [
      "Sticky filter sidebar for browsing the plugin catalog.",
      "Scroll-triggered navbar with a fade-down entrance animation.",
      "Live countdown promo bar and a custom SVG hero illustration.",
      "Packaged as a downloadable ZIP for handoff.",
    ],
    tags: ["Next.js", "React", "Framer Motion"],
  },
];

export const skills = [
  { name: "Java", note: "Primary language" },
  { name: "Paper API", note: "Server plugin core" },
  { name: "AetherCore", note: "Internal framework" },
  { name: "MMOItems", note: "Item & NBT systems" },
  { name: "MythicLib", note: "Stat & cooldown API" },
  { name: "MySQL / H2", note: "Persistence" },
  { name: "HikariCP", note: "Connection pooling" },
  { name: "Next.js / React", note: "Web tooling" },
];

export const rarityMeta = {
  common: { label: "Common", color: "#9aa1ab" },
  rare: { label: "Rare", color: "#4c8dff" },
  epic: { label: "Epic", color: "#a855f7" },
  legendary: { label: "Legendary", color: "#d4a72c" },
};
