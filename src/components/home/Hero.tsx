import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TrustBadges } from "@/components/TrustBadges";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { MorphingHeadline } from "@/components/MorphingHeadline";
import { heroWords } from "@/content/home";
import { siteConfig, routes } from "@/lib/site";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section
      className="tone-dark relative flex min-h-dvh items-center overflow-hidden bg-surface"
      aria-label="Thaurus — a regulated multi-asset broker"
    >
      <AuroraBackground />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />

      <Container className="relative z-10 py-32 text-center">
        <p className="text-base font-bold uppercase tracking-[0.45em] text-fg-muted sm:text-xl">
          {t("kicker")}
        </p>

        <h1 className="sr-only">
          Thaurus — a regulated, secure and advanced multi-asset broker
        </h1>
        <div className="mt-4" aria-hidden>
          <MorphingHeadline words={heroWords} endsWithLogo loop holdMs={10000} />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.registerUrl} variant="primary" size="lg">
            {t("ctaPrimary")}
          </ButtonLink>
          <Link
            href={routes.company}
            className="inline-flex h-13 items-center justify-center rounded-pill border border-fg/25 px-8 text-base font-semibold text-fg transition-colors hover:border-fg/60 hover:bg-fg/5"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <TrustBadges className="mt-24 sm:mt-32" />
      </Container>
    </section>
  );
}
