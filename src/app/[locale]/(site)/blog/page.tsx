import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes } from "@/lib/site";
import { getArticles, getBlogUi } from "@/content/blog";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "@/i18n/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const PATH = routes.blog;
const TITLE = "Blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Blog | Trading Insights & Education",
    description:
      "Trading education, platform insights and market analysis from Thaurus — a regulated multi-asset broker.",
    path: PATH,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ui = getBlogUi(locale);
  const sorted = [...getArticles(locale)].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      <PageHeader
        eyebrow={ui.feedEyebrow}
        title={ui.feedTitle}
        intro={ui.feedIntro}
        crumbs={[{ name: TITLE, href: PATH }]}
      />

      <Section tone="light" className="pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a) => (
            <Link key={a.slug} href={`${routes.blog}/${a.slug}`} className="group block">
              <Card className="flex h-full flex-col group-hover:border-primary/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-hover">
                  {a.tag}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-fg">{a.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                  {a.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-fg-faint">
                  <span>{formatDate(a.date)}</span>
                  <span>·</span>
                  <span>{a.readingMinutes} {ui.minRead}</span>
                  <Icon name="arrow" className="ms-auto h-4 w-4 text-primary-hover transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand title={ui.ctaTitle} subtitle={ui.ctaSub} />
    </>
  );
}
