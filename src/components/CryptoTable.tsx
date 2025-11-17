// Main crypto table component displaying market data

import type { CryptoAsset } from "@/lib/coingecko";
import { PriceChangeBadge } from "./PriceChangeBadge";
import Image from "next/image";

type Props = {
  assets: CryptoAsset[];
};

function formatCurrency(value: number): string {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

export function CryptoTable({ assets }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-forest-main/30 bg-slate-grey/40 shadow-lg shadow-slate-dark/40">
      <div className="max-h-[70vh] overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 bg-slate-dark/90 backdrop-blur">
            <tr className="border-b border-forest-main/30">
              <th className="px-4 py-3 font-medium text-forest-accent">#</th>
              <th className="px-4 py-3 font-medium text-forest-accent">Name</th>
              <th className="px-4 py-3 font-medium text-forest-accent">
                Price
              </th>
              <th className="px-4 py-3 font-medium text-forest-accent">24h</th>
              <th className="px-4 py-3 font-medium text-forest-accent">
                Market Cap
              </th>
              <th className="px-4 py-3 font-medium text-forest-accent">
                Volume 24h
              </th>
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
