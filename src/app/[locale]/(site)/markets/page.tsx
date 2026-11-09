import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes, marketHref, siteConfig } from "@/lib/site";
import { getMarkets, getMarketUi } from "@/content/markets";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const PATH = routes.markets;
const TITLE = "Markets";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Markets | Forex, Stocks, Futures, CFDs & Commodities",
    description:
      "Trade forex, stocks, futures, CFDs and commodities on MetaTrader 5 with a regulated broker. Explore all five Thaurus markets from one account.",
    path: PATH,
  });
}

export default async function MarketsHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const markets = getMarkets(locale);
  const ui = getMarketUi(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      <PageHeader
        eyebrow="Markets"
        title={ui.hubTitle}
        intro={ui.hubIntro}
        crumbs={[{ name: TITLE, href: PATH }]}
      />

      <Section tone="light" className="pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <Link key={m.slug} href={marketHref(m.slug)} className="group block">
              <Card className="h-full group-hover:border-primary/60">
                <h2 className="text-xl font-semibold text-fg">{m.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{m.heroIntro}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-hover">
                  {ui.hubTrade(m.name)}
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}

          <div className="flex flex-col justify-center rounded-card border border-dashed border-edge bg-surface-2/40 p-7">
            <h2 className="text-lg font-semibold text-fg">{ui.hubNotSure}</h2>
            <p className="mt-2 text-sm text-fg-muted">{ui.hubNotSureBody}</p>
            <ButtonLink href={siteConfig.demoUrl} variant="primary" className="mt-5 w-fit">
              {ui.tryDemo}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand title={ui.hubCtaTitle} subtitle={ui.hubCtaSub} />
    </>
  );
}
