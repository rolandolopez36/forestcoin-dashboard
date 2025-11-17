// Badge component for displaying 24h price change percentage

type Props = {
  value: number;
};

export function PriceChangeBadge({ value }: Props) {
  const isPositive = value >= 0;

  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const color = isPositive
    ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/60"
    : "bg-rose-900/30 text-rose-300 border border-rose-700/60";

  const formatted = `${isPositive ? "+" : ""}${value.toFixed(2)}%`;

  return <span className={`${base} ${color}`}>{formatted}</span>;
}
