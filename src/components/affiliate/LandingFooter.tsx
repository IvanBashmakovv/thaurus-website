import { useTranslations } from "next-intl";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig, legalLinks } from "@/lib/site";

/**
 * Compliance footer for the standalone landing. No site navigation. The only
 * links are the legal documents and the regulator's public register, which a
 * financial page must carry; both open in a new tab so the landing stays put.
 */
export function LandingFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <footer className="tone-dark border-t border-edge bg-surface text-fg">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Logo className="h-6" />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg-muted">
              {t("licensedAs", {
                legalName: siteConfig.legalName,
                regulator: siteConfig.license.regulatorFull,
                category: siteConfig.license.category,
              })}{" "}
              <a
                href={siteConfig.license.registerUrl}
                {...ext}
                className="text-fg underline decoration-primary/60 underline-offset-4 hover:decoration-primary"
              >
                {t("licenseLink", { number: siteConfig.license.number })}
              </a>
            </p>
            <address className="mt-3 text-sm not-italic text-fg-muted">{siteConfig.contact.address.full}</address>
          </div>

          <nav className="lg:col-span-5" aria-label={t("legal")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">{t("legal")}</h2>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {legalLinks.map((l) => (
                <li key={l.key}>
                  <a href={l.href} {...ext} className="inline-flex min-h-11 items-center text-fg-muted hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-8 border-t border-edge py-8 md:grid-cols-2">
          <section aria-label={t("riskWarningTitle")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">{t("riskWarningTitle")}</h2>
            <p className="mt-3 text-xs leading-relaxed text-fg-faint">{t("riskWarningPlaceholder")}</p>
          </section>
          <section aria-label={t("restrictedTitle")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">{t("restrictedTitle")}</h2>
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
