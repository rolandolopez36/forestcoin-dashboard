// Main crypto table component displaying market data

// Import the CryptoAsset type definition from our API utility
import type { CryptoAsset } from "@/lib/coingecko";
// Import the badge component that shows if price went up (green) or down (red)
import { PriceChangeBadge } from "./PriceChangeBadge";
// Import Next.js Image component for optimized image loading
import Image from "next/image";

// Define the properties (props) this component expects to receive
type Props = {
  assets: CryptoAsset[]; // An array of cryptocurrency data objects
};

/**
 * Formats large numbers into readable currency format
 * Examples:
 * - 1,500,000,000 becomes "$1.50B" (billions)
 * - 2,300,000 becomes "$2.30M" (millions)
 * - 1,234.56 becomes "$1,234.56" (regular format)
 */
function formatCurrency(value: number): string {
  // If the value is 1 billion or more, display in billions (B)
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  // If the value is 1 million or more, display in millions (M)
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  // For smaller values, show the full number with comma separators and max 2 decimals
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

// Main component that displays the cryptocurrency table
export function CryptoTable({ assets }: Props) {
  return (
    // Outer container with rounded corners, border, background color and shadow effects
    <div className="overflow-hidden rounded-xl border border-forest-main/30 bg-slate-grey/40 shadow-lg shadow-slate-dark/40">
      {/* Scrollable container that limits height to 70% of viewport height */}
      <div className="max-h-[70vh] overflow-auto">
        {/* Main table - takes full width, text aligned left, small text size */}
        <table className="min-w-full text-left text-sm">
          {/* Table header - stays visible when scrolling (sticky) with dark background and blur effect */}
          <thead className="sticky top-0 bg-slate-dark/90 backdrop-blur">
            <tr className="border-b border-forest-main/30">
              {/* Column header for ranking number */}
              <th className="px-4 py-3 font-medium text-mist/50">#</th>
              {/* Column header for cryptocurrency name and symbol */}
              <th className="px-4 py-3 font-medium text-mist/50">Name</th>
              {/* Column header for current price */}
              <th className="px-4 py-3 font-medium text-mist/50">Price</th>
              {/* Column header for 24-hour price change percentage */}
              <th className="px-4 py-3 font-medium text-mist/50">24h</th>
              {/* Column header for total market capitalization */}
              <th className="px-4 py-3 font-medium text-mist/50">Market Cap</th>
              {/* Column header for 24-hour trading volume */}
              <th className="px-4 py-3 font-medium text-mist/50">Volume 24h</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, idx) => (
              <tr
                key={asset.id}
                className="border-b border-forest-main/20 hover:bg-slate-grey/60 transition-colors"
              >
                <td className="px-4 py-3 text-mist/50">{idx + 1}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={asset.image}
                      alt={asset.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-mist">
                        {asset.name}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-mist/50">
                        {asset.symbol}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-sm text-mist">
                    {formatCurrency(asset.current_price)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <PriceChangeBadge value={asset.price_change_percentage_24h} />
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-mist/80">
                    {formatCurrency(asset.market_cap)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-mist/80">
                    {formatCurrency(asset.total_volume)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
