// ForestCoin logo component - leaf icon

export function ForestCoinLogo({
  className = "w-10 h-10",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="20" fill="#0B4F3F" />
      <path
        d="M20 10C15 10 12 14 12 18C12 22 15 26 20 30C25 26 28 22 28 18C28 14 25 10 20 10Z"
        fill="#3BB273"
      />
      <path
        d="M20 10V30"
        stroke="#E8F4F0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
