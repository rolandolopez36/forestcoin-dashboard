// CoinGecko API client with TypeScript types and SSR revalidation

export type CryptoAsset = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
};

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";

/**
 * Fetch top cryptocurrency market data from CoinGecko
 * Uses ISR with 60 second revalidation for fresh data
 * @param limit - Number of coins to fetch (default: 20)
 * @returns Array of crypto assets sorted by market cap
 */
export async function fetchTopMarketCoins(
  limit: number = 20
): Promise<CryptoAsset[]> {
  const params = new URLSearchParams({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: String(limit),
    page: "1",
    price_change_percentage: "24h",
  });

  const res = await fetch(
    `${COINGECKO_BASE}/coins/markets?${params.toString()}`,
    {
      // SSR + ISR: revalidate every 60 seconds
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch markets: ${res.status} ${res.statusText}`
    );
  }

  const data = (await res.json()) as CryptoAsset[];
  return data;
}
