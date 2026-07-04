import { cn } from "@/lib/cn";

/** Elevated brand surface used by feature/market/tool cards. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-edge bg-surface-2/70 p-6 transition-colors duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
