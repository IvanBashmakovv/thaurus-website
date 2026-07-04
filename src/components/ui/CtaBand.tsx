import { Section, type Tone } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

/** Clear, reusable call-to-action band. */
export function CtaBand({
  title = "Start trading with a regulated broker",
  subtitle = "Open your account in minutes, or try a free demo first. Your capital is at risk.",
  tone = "light",
  primaryHref = siteConfig.registerUrl,
  primaryLabel = "Open account",
  secondaryHref = siteConfig.demoUrl,
  secondaryLabel = "Try a free demo",
  className,
}: {
  title?: string;
  subtitle?: string;
  tone?: Tone;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <Section tone={tone} className={className}>
      <div className="relative overflow-hidden rounded-card border border-edge bg-surface-2 px-6 py-14 text-center sm:py-16">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(66,71,139,0.28) 0%, rgba(19,18,40,0) 70%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-xl text-fg-muted">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
