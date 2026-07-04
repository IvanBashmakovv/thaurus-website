import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";
import { articles, getArticle, getArticles, getBlogUi } from "@/content/blog";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const a = getArticle(locale, slug);
  if (!a) return {};
  return buildMetadata({
    locale: locale as Locale,
    title: a.title,
    description: a.excerpt,
    path: `${routes.blog}/${slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const a = getArticle(locale, slug);
  if (!a) notFound();
  const ui = getBlogUi(locale);

  const url = localizedUrl(locale as Locale, `${routes.blog}/${slug}`);
  const related = getArticles(locale).filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: "Blog", url: localizedUrl(locale as Locale, routes.blog) },
          { name: a.title, url },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          dateModified: a.date,
          author: { "@type": "Organization", name: a.author },
          publisher: {
            "@type": "Organization",
            name: siteConfig.legalName,
            logo: {
              "@type": "ImageObject",
              url: `${siteConfig.url}/brand/thaurus-wordmark-color.png`,
            },
          },
          mainEntityOfPage: url,
        }}
      />

      <article className="tone-light bg-surface pb-12 pt-32 text-fg sm:pt-36">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Blog", href: routes.blog },
              { name: a.title, href: `${routes.blog}/${slug}` },
            ]}
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary-hover">
            {a.tag}
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{a.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-fg-muted">
            <span>{a.author}</span>
            <span className="text-fg-faint">·</span>
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            <span className="text-fg-faint">·</span>
            <span>{a.readingMinutes} {ui.minRead}</span>
          </div>

          <div className="mt-10 space-y-8">
            {a.sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <h2 className="text-xl font-bold text-fg sm:text-2xl">
                    {s.heading}
                  </h2>
                )}
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-fg-muted">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-fg-muted">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-card border border-edge bg-surface-2/60 p-8 text-center">
            <h2 className="text-xl font-bold text-fg">{ui.articleCtaTitle}</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-fg-muted">{ui.articleCtaSub}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.registerUrl} variant="primary">
                {ui.openAccount}
              </ButtonLink>
              <ButtonLink href={siteConfig.demoUrl} variant="outline">
                {ui.tryDemo}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </article>

      {/* Related */}
      <Section tone="light">
        <Container className="max-w-3xl px-0">
          <h2 className="text-xl font-bold text-fg">{ui.relatedTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`${routes.blog}/${r.slug}`}
                className="group rounded-xl border border-edge bg-surface-2/50 p-4 transition-colors hover:border-primary/60"
              >
                <span className="text-xs uppercase tracking-wider text-primary-hover">{r.tag}</span>
                <p className="mt-2 text-sm font-medium text-fg">{r.title}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
