import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { siteConfig, routes, marketHref } from "@/lib/site";
import { markets, getMarket, getMarketUi } from "@/content/markets";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return markets.map((m) => ({ market: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; market: string }>;
}): Promise<Metadata> {
  const { locale, market } = await params;
  const data = getMarket(locale, market);
  if (!data) return {};
  return buildMetadata({
    locale: locale as Locale,
    title: data.metaTitle,
    description: data.metaDescription,
    path: marketHref(market),
  });
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ locale: string; market: string }>;
}) {
  const { locale, market } = await params;
  setRequestLocale(locale);
  const data = getMarket(locale, market);
  if (!data) notFound();
  const ui = getMarketUi(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: "Markets", url: localizedUrl(locale as Locale, routes.markets) },
          { name: data.name, url: localizedUrl(locale as Locale, marketHref(market)) },
        ]}
      />

      <PageHeader
        eyebrow={data.name}
        title={data.heroTitle}
        intro={data.heroIntro}
        crumbs={[
          { name: "Markets", href: routes.markets },
          { name: data.name, href: marketHref(market) },
        ]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.registerUrl} variant="primary" size="lg">
            {ui.openAccount}
          </ButtonLink>
          <ButtonLink href={siteConfig.demoUrl} variant="outline" size="lg">
            {ui.tryDemo}
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Features */}
      <Section tone="light">
        <SectionHeading eyebrow={ui.featuresEyebrow} title={ui.featuresTitle(data.name)} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((f) => (
            <Card key={f.title}>
              <div className="relative inline-flex h-11 w-11 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl" aria-hidden />
                <Icon name={f.icon} className="relative h-7 w-7 text-primary-hover" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{f.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Industry fact */}
      <Section tone="dark" className="relative overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <div className="text-center lg:text-left">
            <div className="text-5xl font-bold text-fg sm:text-6xl">{data.fact.stat}</div>
            <div className="mt-1 text-sm uppercase tracking-wider text-primary-hover">
              {data.fact.label}
            </div>
          </div>
          <p className="text-lg leading-relaxed text-fg-muted">{data.fact.text}</p>
        </div>
      </Section>

      {/* Why choose (list) */}
      <Section tone="light">
        <SectionHeading align="start" eyebrow={ui.whyEyebrow} title={ui.whyTitle(data.name)} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {data.why.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-xl border border-edge bg-surface-2/40 p-4 text-fg-muted">
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              {w}
            </li>
          ))}
        </ul>
      </Section>

      {/* Mid-page CTA */}
      <CtaBand title={ui.ctaMid(data.name)} subtitle={ui.ctaSub} primaryLabel={ui.openAccount} secondaryLabel={ui.tryDemo} />

      {/* How to start */}
      <Section tone="light">
        <SectionHeading eyebrow={ui.startEyebrow} title={ui.startTitle(data.name)} subtitle={ui.startSubtitle} />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {data.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Card className="h-full">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 text-sm font-bold text-primary-hover">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-fg-muted">{s.body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <SectionHeading eyebrow={ui.faqEyebrow} title={ui.faqTitle(data.name)} />
        <div className="mt-12">
          <FaqAccordion items={data.faq} />
        </div>
        <FaqJsonLd items={data.faq} />
      </Section>

      {/* Related + CTA */}
      <Section tone="light">
        <div className="rounded-card border border-edge bg-surface-2 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{ui.ctaTitle(data.name)}</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.registerUrl} variant="primary" size="lg">
              {ui.openAccount}
            </ButtonLink>
            <Link href={routes.markets} className={buttonClasses({ variant: "outline", size: "lg" })}>
              {ui.exploreOther}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
