import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

/**
 * Trust strip — license front-and-center (trust = priority #1).
 * Real Trustpilot rating / client numbers are intentionally omitted until Ivan
 * supplies verifiable figures (no fabricated counters, audit §4.8).
 */
export function TrustBar({
  regulatedLabel,
  licenseLabel,
  verifyLabel,
  className = "",
}: {
  regulatedLabel: string;
  licenseLabel: string;
  verifyLabel: string;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-pill border border-edge bg-surface-2/60 px-6 py-3 text-sm backdrop-blur ${className}`}
    >
      <Icon name="verified" className="h-5 w-5 text-success" />
      <span className="font-medium text-fg">{regulatedLabel}</span>
      <span className="text-fg-faint">·</span>
      <span className="text-fg-muted">{licenseLabel}</span>
      <a
        href={siteConfig.license.registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg underline decoration-primary/60 underline-offset-4 transition-colors hover:decoration-primary"
      >
        {verifyLabel}
      </a>
    </div>
  );
}
