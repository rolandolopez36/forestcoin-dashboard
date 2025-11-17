// Root layout with ForestCoin branding and global styles

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForestCoin - Crypto Prices Dashboard",
  description:
    "ForestCoin is a server-side rendered crypto prices dashboard built with Next.js, TypeScript and TailwindCSS. Real-time data from CoinGecko.",
  keywords: [
    "crypto",
    "cryptocurrency",
    "prices",
    "bitcoin",
    "ethereum",
    "dashboard",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
