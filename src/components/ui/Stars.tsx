/** Star rating with accurate partial fill (e.g. 4.8 / 5). */
export function Stars({
  rating,
  max = 5,
  className = "",
}: {
  rating: number;
  max?: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(1, rating / max)) * 100;
  const row = Array.from({ length: max });

  const Star = () => (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.88l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85z" />
    </svg>
  );

  return (
    <span
      className={`relative inline-flex ${className}`}
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      <span className="flex gap-0.5 text-fg-faint/30">
        {row.map((_, i) => (
          <Star key={i} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-[#FFC400]"
        style={{ width: `${pct}%` }}
      >
        {row.map((_, i) => (
          <Star key={i} />
        ))}
      </span>
    </span>
  );
}
