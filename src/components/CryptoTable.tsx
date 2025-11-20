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
          {/* Table body containing all the cryptocurrency rows */}
          <tbody>
            {/* Loop through each cryptocurrency in the assets array and create a row */}
            {assets.map((asset, idx) => (
              <tr
                key={asset.id} // Unique identifier for React to track this row
                className="border-b border-forest-main/20 hover:bg-slate-grey/60 transition-colors" // Border bottom, changes color on hover with smooth transition
              >
                {/* First column: Ranking number (1, 2, 3...) */}
                <td className="px-4 py-3 text-mist/50">{idx + 1}</td>
                
                {/* Second column: Cryptocurrency name with icon */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3"> {/* Container to align icon and text horizontally */}
                    {/* Cryptocurrency logo image - 24x24 pixels, circular */}
                    <Image
                      src={asset.image} // URL of the crypto logo
                      alt={asset.name} // Alternative text for accessibility
                      width={24} // Image width in pixels
                      height={24} // Image height in pixels
                      className="rounded-full" // Makes the image circular
                    />
                    {/* Container for name and symbol stacked vertically */}
                    <div className="flex flex-col">
                      {/* Full name (e.g., "Bitcoin") */}
                      <span className="text-sm font-medium text-mist">
                        {asset.name}
                      </span>
                      {/* Symbol in uppercase (e.g., "BTC") - smaller and lighter color */}
                      <span className="text-xs uppercase tracking-wide text-mist/50">
                        {asset.symbol}
                      </span>
                    </div>
                  </div>
                </td>
                
                {/* Third column: Current price in USD */}
                <td className="px-4 py-3">
                  <span className="font-mono text-sm text-mist"> {/* Monospace font for numbers alignment */}
                    {formatCurrency(asset.current_price)} {/* Formatted price (e.g., "$45,123.45") */}
                  </span>
                </td>
                
                {/* Fourth column: 24-hour price change percentage with color badge */}
                <td className="px-4 py-3">
                  <PriceChangeBadge value={asset.price_change_percentage_24h} /> {/* Green badge for positive, red for negative */}
                </td>
                
                {/* Fifth column: Total market capitalization */}
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-mist/80"> {/* Monospace font, smaller size */}
                    {formatCurrency(asset.market_cap)} {/* Formatted market cap (e.g., "$850.23B") */}
                  </span>
                </td>
                
                {/* Sixth column: 24-hour trading volume */}
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-mist/80"> {/* Monospace font, smaller size */}
                    {formatCurrency(asset.total_volume)} {/* Formatted volume (e.g., "$23.45B") */}
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
