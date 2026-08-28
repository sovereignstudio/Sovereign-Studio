import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Dellons — Minecraft Plugin & RPG Systems Developer",
  description:
    "Portfolio of Dellons (noctenz): Minecraft server plugins and RPG systems built with Java, Paper API, AetherCore, MMOItems, and MythicLib.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b0d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-body antialiased"
        style={{
          "--font-display": "Minecraft, sans-serif",
          "--font-body": "Minecraft, sans-serif",
          "--font-mono": "Minecraft, sans-serif",
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
