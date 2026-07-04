import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-[0_8px_24px_-10px_rgba(66,71,139,0.9)]",
  outline:
    "border border-fg/25 text-fg hover:border-fg/60 hover:bg-fg/5",
  ghost: "text-fg-muted hover:text-fg hover:bg-fg/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

/** Anchor styled as a button. Use for external CTAs (cabinet, stores). */
export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: {
  variant?: Variant;
  size?: Size;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props} />
  );
}
