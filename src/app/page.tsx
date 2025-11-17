// Main dashboard page - Server Component with SSR

import { fetchTopMarketCoins, type CryptoAsset } from "@/lib/coingecko";
import { CryptoTable } from "@/components/CryptoTable";

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
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-forest-accent">
              ForestCoin Dashboard
            </h1>
            <p className="mt-1 text-sm text-mist/70">
              Server-side rendered. Data revalidated every 60 seconds.
            </p>
          </div>
          <span className="rounded-full bg-slate-grey px-3 py-1 text-xs text-forest-accent w-fit">
            SSR · revalidate:60
          </span>
        </header>

        <CryptoTable assets={assets} />
      </section>
    </main>
  );
}
