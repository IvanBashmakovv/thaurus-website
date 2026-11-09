import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import type { Program } from "@/content/affiliate/types";

/** Program lock-up: brand wordmark + program name, like a partner-site sub-brand. */
export function ProgramLogo({
  program,
  className,
  size = "md",
}: {
  program: Program;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const name = program === "ib" ? "IB Partners" : "Affiliates";
  const h = size === "lg" ? "h-7" : size === "sm" ? "h-4" : "h-5";
  const t = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <Logo className={cn(h, "shrink-0")} />
      <span className={cn("font-medium leading-none text-fg-muted", t)}>{name}</span>
    </span>
  );
}
