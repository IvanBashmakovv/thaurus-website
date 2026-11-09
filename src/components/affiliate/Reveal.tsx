import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Entrance wrapper. Content is in the server HTML and visible without JS; the
 * only motion is a short CSS rise on load (prefers-reduced-motion disables it).
 * The reference site has no scroll-reveals, and gating content behind
 * hydration left whole sections blank on slow loads.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  immediate?: boolean;
  className?: string;
}) {
  const style = delay ? ({ animationDelay: `${delay}s` } as CSSProperties) : undefined;
  return (
    <div className={cn("rise", className)} style={style}>
      {children}
    </div>
  );
}
