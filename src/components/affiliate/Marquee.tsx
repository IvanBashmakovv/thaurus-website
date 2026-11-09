import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Seamless infinite marquee (pure CSS, pauses on hover). Children are rendered
 * twice in two equal halves so a -50% translate loops without a jump.
 */
export function Marquee({
  children,
  duration = 40,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("marquee relative overflow-hidden", className)}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div className="marquee-track flex w-max">
        <div className="flex shrink-0 items-center gap-6 pe-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6 pe-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
