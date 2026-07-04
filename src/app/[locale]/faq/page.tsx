import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getFaqCategories, getAllFaqItems, getFaqUi } from "@/content/faq";

const PATH = routes.faq;
const TITLE = "FAQ";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Frequently Asked Questions",
    description:
      "Answers about Thaurus accounts, funding, the MetaTrader 5 platform and our FSC Mauritius regulation. Everything you need to start trading with confidence.",
    path: PATH,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const categories = getFaqCategories(locale);
  const ui = getFaqUi(locale);

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

      <Section tone="light" className="pt-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="mb-5 text-xl font-bold text-fg">{cat.title}</h2>
              <FaqAccordion items={cat.items} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-card border border-edge bg-surface-2/50 p-8 text-center">
          <h2 className="text-lg font-semibold text-fg">{ui.stillTitle}</h2>
          <p className="mt-2 text-sm text-fg-muted">{ui.stillSub}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={`mailto:${siteConfig.contact.supportEmail}`} variant="primary">
              {ui.emailSupport}
            </ButtonLink>
            <ButtonLink href={siteConfig.registerUrl} variant="outline">
              {ui.openAccount}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand title={ui.ctaTitle} subtitle={ui.ctaSub} />

      {/* All questions in one FAQPage graph for rich results */}
      <FaqJsonLd items={getAllFaqItems(locale)} />
    </>
  );
}
