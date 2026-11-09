import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes, toolHref } from "@/lib/site";
import { getTools, getToolUi } from "@/content/tools";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "@/i18n/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const PATH = routes.toolsHub;
const TITLE = "Tools & Resources";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Free Trading Tools & Calculators",
    description:
      "Seven free trading tools: forex heatmap, margin calculator, stop-loss & take-profit, CFD profit/loss, pivot points, Fibonacci and a currency converter.",
    path: PATH,
  });
}

export default async function ToolsHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tools = getTools(locale);
  const ui = getToolUi(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      <PageHeader
        eyebrow="Tools & Resources"
        title={ui.hubTitle}
        intro={ui.hubIntro}
        crumbs={[{ name: TITLE, href: PATH }]}
      />

      <Section tone="light" className="pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.slug} href={toolHref(t.slug)} className="group block">
              <Card className="h-full group-hover:border-primary/60">
                <div className="relative inline-flex h-11 w-11 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl" aria-hidden />
                  <Icon name="tools" className="relative h-6 w-6 text-primary-hover" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-fg">{t.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-hover">
                  {ui.openTool}
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand title={ui.hubCtaTitle} subtitle={ui.hubCtaSub} />
    </>
  );
}
