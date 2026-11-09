import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import {
  siteConfig,
  legalLinks,
  routes,
  markets,
  marketHref,
} from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const year = new Date().getFullYear();

  const pageLinks = [
    { label: tn("company"), href: routes.company },
    { label: tn("license"), href: routes.license },
    { label: tn("accountTypes"), href: routes.accountTypes },
    { label: tn("affiliate"), href: routes.affiliate },
    { label: tn("faq"), href: routes.faq },
    { label: tn("blog"), href: routes.blog },
    { label: tn("contact"), href: routes.contact },
  ];

  return (
    <footer className="mt-24 border-t border-edge bg-surface-2/40">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + socials */}
          <div className="lg:col-span-4">
            <Logo className="h-7" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              {t("tagline")}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
              {t("tagline2")}
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
                {t("followUs")}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {Object.values(siteConfig.social).map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="inline-flex h-9 items-center rounded-pill border border-fg/15 px-3.5 text-xs text-fg-muted transition-colors hover:border-fg/40 hover:text-fg"
                    >
                      {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pages */}
          <nav className="lg:col-span-2" aria-label={t("pages")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("pages")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-fg-muted transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Markets */}
          <nav className="lg:col-span-2" aria-label={tn("markets")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {tn("markets")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link href={marketHref(m.slug)} className="text-fg-muted transition-colors hover:text-fg">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav className="lg:col-span-2" aria-label={t("legal")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("legal")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {legalLinks.map((l) => (
                <li key={l.key}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("contactInfo")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-fg-muted">
              <li>
                <a href={`mailto:${siteConfig.contact.supportEmail}`} className="transition-colors hover:text-fg">
                  {siteConfig.contact.supportEmail}
                </a>
              </li>
              {siteConfig.contact.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="transition-colors hover:text-fg">
                    {p}
                  </a>
                </li>
              ))}
              <li className="not-italic">
                <address className="not-italic leading-relaxed">
                  {siteConfig.contact.address.full}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* License line */}
        <div className="border-t border-edge py-8">
          <p className="text-sm text-fg-muted">
            {t("licensedAs", {
              legalName: siteConfig.legalName,
              regulator: siteConfig.license.regulatorFull,
              category: siteConfig.license.category,
            })}{" "}
            <a
              href={siteConfig.license.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-primary/60 underline-offset-4 transition-colors hover:decoration-primary"
            >
              {t("licenseLink", { number: siteConfig.license.number })}
            </a>
          </p>
        </div>

        {/* Compliance blocks — MUST be verbatim. Awaiting exact text from Ivan. */}
        <div className="grid gap-8 border-t border-edge py-8 md:grid-cols-2">
          <section aria-label={t("riskWarningTitle")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("riskWarningTitle")}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-fg-faint">
              {t("riskWarningPlaceholder")}
            </p>
          </section>
          <section aria-label={t("restrictedTitle")}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-faint">
              {t("restrictedTitle")}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-fg-faint">
              {t("restrictedPlaceholder")}
            </p>
          </section>
        </div>

        <div className="border-t border-edge py-6">
          <p className="text-xs text-fg-faint">
            {t("copyright", { year, legalName: siteConfig.legalName })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
