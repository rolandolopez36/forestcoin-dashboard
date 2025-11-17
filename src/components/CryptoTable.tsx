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
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg shadow-slate-900/40">
      <div className="max-h-[70vh] overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="sticky top-0 bg-slate-950/90 backdrop-blur">
            <tr className="border-b border-slate-800/80">
              <th className="px-4 py-3 font-medium text-slate-400">#</th>
              <th className="px-4 py-3 font-medium text-slate-400">Name</th>
              <th className="px-4 py-3 font-medium text-slate-400">Price</th>
              <th className="px-4 py-3 font-medium text-slate-400">24h</th>
              <th className="px-4 py-3 font-medium text-slate-400">
                Market Cap
              </th>
              <th className="px-4 py-3 font-medium text-slate-400">
                Volume 24h
              </th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, idx) => (
              <tr
                key={asset.id}
                className="border-b border-slate-800/60 hover:bg-slate-900/60 transition-colors"
              >
                <td className="px-4 py-3 text-slate-500">{idx + 1}</td>
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
                      <span className="text-sm font-medium text-slate-100">
                        {asset.name}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-slate-500">
                        {asset.symbol}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-sm">
                    {formatCurrency(asset.current_price)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <PriceChangeBadge value={asset.price_change_percentage_24h} />
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs">
                    {formatCurrency(asset.market_cap)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs">
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
