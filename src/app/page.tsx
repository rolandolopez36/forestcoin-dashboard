// Main dashboard page - Server Component with SSR

import { fetchTopMarketCoins, type CryptoAsset } from "@/lib/coingecko";
import { CryptoTable } from "@/components/CryptoTable";
import { ForestCoinLogo } from "@/components/ForestCoinLogo";

export const metadata = {
  title: "ForestCoin - Crypto Prices Dashboard",
  description: "Real-time cryptocurrency prices with server-side rendering",
};

export default async function Page() {
  let assets: CryptoAsset[] = [];
  let error: string | null = null;

  try {
    assets = await fetchTopMarketCoins(50);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load data";
    console.error("Error fetching crypto data:", err);
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-dark text-mist">
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-semibold">
            ForestCoin - Crypto Prices Dashboard
          </h1>
          <div className="mt-8 rounded-xl border border-negative/50 bg-negative/10 p-6">
            <p className="text-sm text-negative">
              Failed to load cryptocurrency data. Please try again later.
            </p>
            <p className="mt-2 text-xs text-negative/70">{error}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-dark text-mist">
      <section className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ForestCoinLogo className="w-10 h-10" />
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              ForestCoin
            </h1>
          </div>
          <p className="text-sm text-mist/80 mb-3">
            Crypto prices rooted in nature
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-positive animate-pulse"></span>
              <span className="text-mist/70">Live</span>
            </span>
            <span className="text-mist/50">•</span>
            <span className="text-mist/70">Updates every 60s</span>
          </div>
        </header>

        <CryptoTable assets={assets} />
      </section>
    </main>
  );
}
