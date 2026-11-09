import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { siteConfig, routes } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CtaBand } from "@/components/ui/CtaBand";
import { cn } from "@/lib/cn";
import { getPlans, getComparison, getAccountUi, planNames } from "@/content/accounts";

const PATH = routes.accountTypes;
const TITLE = "Account Types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Trading Account Types | Low Minimum Deposit from $50",
    description:
      "Compare Thaurus trading accounts: Bullion Power (low $50 minimum deposit), Prestige Plus (from $1,500) and Royal Elite (from $25,000). Leverage, spreads from 0.2 pips, commissions and benefits side by side.",
    path: PATH,
  });
}

export default async function AccountTypesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const plans = getPlans(locale);
  const comparison = getComparison(locale);
  const ui = getAccountUi(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      <PageHeader
        eyebrow={ui.heroEyebrow}
        title={ui.heroTitle}
        intro={ui.heroIntro}
        crumbs={[{ name: TITLE, href: PATH }]}
      />

      {/* Pricing cards */}
      <Section tone="light" className="pt-16">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-card border p-7",
                plan.recommended
                  ? "border-primary bg-surface-2 shadow-glow"
                  : "border-edge bg-surface-2/60"
              )}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-7 rounded-pill bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {ui.recommended}
                </span>
              )}

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-fg">{plan.name}</h2>
                {plan.badge && (
                  <span className="rounded-pill border border-success/40 px-2.5 py-1 text-[0.7rem] font-medium text-success">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-fg-muted">{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold text-fg">
                  {plan.minDeposit}
                </span>
                {plan.oldDeposit && (
                  <span className="mb-1 text-lg text-fg-faint line-through">
                    {plan.oldDeposit}
                  </span>
                )}
              </div>
              <p className="text-xs uppercase tracking-wider text-fg-faint">
                {ui.minDeposit}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {h}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={siteConfig.registerUrl}
                variant={plan.recommended ? "primary" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                {ui.open(plan.name)}
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-fg-faint">{ui.riskNote}</p>
      </Section>

      {/* Mid-page CTA */}
      <CtaBand title={ui.midTitle} subtitle={ui.midSub} />

      {/* Comparison table */}
      <Section tone="light">
        <SectionHeading
          eyebrow={ui.compareEyebrow}
          title={ui.compareTitle}
          subtitle={ui.compareSub}
        />
        <Container className="mt-12 overflow-x-auto px-0">
          <table className="w-full min-w-[768px] border-collapse text-sm">
            <caption className="sr-only">
              Comparison of Thaurus account types
            </caption>
            <thead>
              <tr>
                <th scope="col" className="p-4 text-left font-medium text-fg-muted">
                  {ui.featureHeader}
                </th>
                {planNames.map((name, i) => (
                  <th
                    key={name}
                    scope="col"
                    className={cn(
                      "p-4 text-left font-bold text-fg",
                      i === 1 && "bg-primary/10"
                    )}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-t border-edge">
                  <th scope="row" className="p-4 text-left font-medium text-fg-muted">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={cn(
                        "p-4 text-fg/90",
                        i === 1 && "bg-primary/10"
                      )}
                    >
                      {v === "—" ? (
                        <span className="text-fg-faint">—</span>
                      ) : v === "Yes" ? (
                        <Icon name="check" className="h-5 w-5 text-success" />
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="light">
        <div className="rounded-card border border-edge bg-surface-2 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{ui.finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-fg-muted">{ui.finalSub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.demoUrl} variant="primary" size="lg">
              {ui.tryDemo}
            </ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.contact.supportEmail}`} variant="outline" size="lg">
              {ui.contactSupport}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
