import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes, toolHref } from "@/lib/site";
import { toolsContent, getTool, getTools, getToolUi } from "@/content/tools";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CtaBand } from "@/components/ui/CtaBand";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { MarginCalculator } from "@/components/tools/MarginCalculator";
import { PivotPointCalculator } from "@/components/tools/PivotPointCalculator";
import { FibonacciCalculator } from "@/components/tools/FibonacciCalculator";
import { StopLossCalculator } from "@/components/tools/StopLossCalculator";
import { CfdCalculator } from "@/components/tools/CfdCalculator";
import { ForexHeatmap } from "@/components/tools/ForexHeatmap";

const widgets: Record<string, React.ComponentType> = {
  "margin-calculator": MarginCalculator,
  "pivot-point": PivotPointCalculator,
  fibonacci: FibonacciCalculator,
  "stop-loss-limit": StopLossCalculator,
  "cfd-profit-loss-calculator": CfdCalculator,
  heatmap: ForexHeatmap,
};

export function generateStaticParams() {
  return toolsContent.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}): Promise<Metadata> {
  const { locale, tool } = await params;
  const data = getTool(locale, tool);
  if (!data) return {};
  return buildMetadata({
    locale: locale as Locale,
    title: data.metaTitle,
    description: data.metaDescription,
    path: toolHref(tool),
  });
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; tool: string }>;
}) {
  const { locale, tool } = await params;
  setRequestLocale(locale);
  const data = getTool(locale, tool);
  const Widget = widgets[tool];
  if (!data || !Widget) notFound();
  const ui = getToolUi(locale);
  const related = getTools(locale).filter((t) => t.slug !== tool).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: "Tools & Resources", url: localizedUrl(locale as Locale, routes.toolsHub) },
          { name: data.name, url: localizedUrl(locale as Locale, toolHref(tool)) },
        ]}
      />

      <PageHeader
        eyebrow={ui.eyebrow}
        title={data.heading}
        intro={data.intro}
        crumbs={[
          { name: "Tools & Resources", href: routes.toolsHub },
          { name: data.name, href: toolHref(tool) },
        ]}
      />

      <Section tone="light" className="pt-16">
        <Container className="max-w-3xl px-0">
          {/* How to use */}
          <div className="mb-8 rounded-card border border-primary/30 bg-primary/5 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-hover">
              {ui.howToTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{data.howTo}</p>
          </div>

          <Widget />

          <div className="mt-10 space-y-4 text-fg-muted">
            {data.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Clear CTA */}
      <CtaBand tone="light" title={ui.ctaTitle(data.name)} subtitle={ui.ctaSub} />

      {/* Related tools */}
      <Section tone="light">
        <h2 className="text-xl font-bold text-fg">{ui.more}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((t) => (
            <Link
              key={t.slug}
              href={toolHref(t.slug)}
              className="group flex items-center justify-between rounded-xl border border-edge bg-surface-2/50 p-4 transition-colors hover:border-primary/60"
            >
              <span className="font-medium text-fg">{t.name}</span>
              <Icon name="arrow" className="h-4 w-4 text-primary-hover transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
