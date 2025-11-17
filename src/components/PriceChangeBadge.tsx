// Badge component for displaying 24h price change percentage

type Props = {
  value: number;
};

export function PriceChangeBadge({ value }: Props) {
  const isPositive = value >= 0;

  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const color = isPositive
    ? "bg-positive/20 text-positive border border-positive/60"
    : "bg-negative/20 text-negative border border-negative/60";

  const formatted = `${isPositive ? "+" : ""}${value.toFixed(2)}%`;

  return <span className={`${base} ${color}`}>{formatted}</span>;
}
