import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export type Tone = "dark" | "light";

const TONE_COLOR: Record<Tone, string> = {
  dark: "#131228",
  light: "#eef1fb",
};

/**
 * A page section with a tone (dark blue or light). Text colors flip automatically
 * via the .tone-* CSS variables, so content stays readable on both backgrounds.
 */
export function Section({
  id,
  tone = "dark",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        `tone-${tone} relative bg-surface py-20 text-fg sm:py-28`,
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/**
 * Smooth gradient seam between two tones (white→blue / blue→white), as on
 * FundingPips. Place between two sections of different tone.
 */
export function SectionTransition({
  from,
  to,
  height = 220,
}: {
  from: Tone;
  to: Tone;
  height?: number;
}) {
  const a = TONE_COLOR[from];
  const b = TONE_COLOR[to];
  return (
    <div
      aria-hidden
      style={{
        height,
        // Eased multi-stop blend reads smoother than a hard linear ramp.
        background: `linear-gradient(180deg, ${a} 0%, ${a} 6%, color-mix(in srgb, ${a}, ${b}) 50%, ${b} 94%, ${b} 100%)`,
      }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-hover">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">{subtitle}</p>
      )}
    </div>
  );
}
