import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

/** Compliance-only footer for the standalone landing: no navigation, no links. */
export function LandingFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="tone-dark border-t border-edge bg-surface text-fg">
      <Container>
        <div className="py-10">
          <Logo className="h-6" />
          <p className="mt-5 max-w-3xl text-sm text-fg-muted">
            {t("licensedAs", {
              legalName: siteConfig.legalName,
              regulator: siteConfig.license.regulatorFull,
              category: siteConfig.license.category,
            })}{" "}
            <span className="text-fg">License {siteConfig.license.number}.</span>
          </p>
          <p className="mt-2 text-sm text-fg-muted">{siteConfig.contact.address.full}</p>
        </div>

        <div className="grid gap-8 border-t border-edge py-8 md:grid-cols-2">
          <section aria-label={t("riskWarningTitle")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("riskWarningTitle")}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-fg-faint">{t("riskWarningPlaceholder")}</p>
          </section>
          <section aria-label={t("restrictedTitle")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("restrictedTitle")}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-fg-faint">{t("restrictedPlaceholder")}</p>
          </section>
        </div>

        <div className="border-t border-edge py-6">
          <p className="text-xs text-fg-faint">{t("copyright", { year, legalName: siteConfig.legalName })}</p>
        </div>
      </Container>
    </footer>
  );
}
