import { cn } from "@/lib/cn";

/**
 * Decorative animated backdrop: slow-drifting brand-colored aurora blobs over a
 * faint chart grid. Pure CSS, GPU-friendly, and disabled under reduced-motion
 * (the global media query neutralizes the animation). aria-hidden by design.
 */
export function AuroraBackground({
  className,
  grid = true,
}: {
  className?: string;
  grid?: boolean;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {grid && <div className="absolute inset-0 bg-chart-grid" />}
      <div className="aurora">
        <span
          style={{
            top: "5%",
            left: "12%",
            width: "38rem",
            height: "38rem",
            background:
              "radial-gradient(circle, rgba(66,71,139,0.55) 0%, rgba(19,18,40,0) 70%)",
            animationDelay: "0s",
          }}
        />
        <span
          style={{
            top: "20%",
            right: "8%",
            width: "30rem",
            height: "30rem",
            background:
              "radial-gradient(circle, rgba(79,85,166,0.4) 0%, rgba(19,18,40,0) 70%)",
            animationDelay: "-9s",
          }}
        />
        <span
          style={{
            bottom: "-10%",
            left: "40%",
            width: "34rem",
            height: "34rem",
            background:
              "radial-gradient(circle, rgba(42,44,87,0.6) 0%, rgba(19,18,40,0) 70%)",
            animationDelay: "-18s",
          }}
        />
      </div>
    </div>
  );
}
