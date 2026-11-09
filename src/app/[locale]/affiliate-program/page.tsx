import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { routes } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buttonClasses } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PhotoMosaic } from "@/components/affiliate/PhotoMosaic";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/affiliate/Testimonials";
import { getAffiliate, type ProgramCard } from "@/content/affiliate";
import { cn } from "@/lib/cn";

const PATH = routes.affiliate;
const TITLE = "Affiliate Program";

// TODO(ivan): point to the real partner-portal sign-up URL when available.
const PARTNER_CTA = routes.contact;
const AFFILIATE_CTA = routes.contact;

/** On-brand gradient band (deep navy → Thaurus blue), used twice like the reference. */
const GRADIENT =
  "tone-dark relative overflow-hidden text-fg bg-[linear-gradient(135deg,#131228_0%,#262a63_55%,#42478b_100%)]";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Partnership Program | Register & Monetize Your Traffic",
    description:
      "Join the Thaurus Partnership Program. Earn revenue share or CPA commission by referring traders to a regulated multi-asset broker on MetaTrader 5.",
    path: PATH,
  });
}

export default async function AffiliatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getAffiliate(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      {/* 1. HERO — centered headline, CTA, feature pills */}
      <section className="tone-dark relative overflow-hidden bg-surface pt-28 pb-16 text-fg sm:pt-36 sm:pb-20">
        <AuroraBackground className="opacity-70" />
        <Container className="relative z-10">
          <Breadcrumbs items={[{ name: TITLE, href: PATH }]} />
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {a.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-muted">{a.hero.sub}</p>
            <div className="mt-8">
              <Link href={PARTNER_CTA} className={buttonClasses({ variant: "primary", size: "lg" })}>
                {a.hero.cta}
              </Link>
            </div>
          </div>

          <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            {a.hero.pills.map((p, i) => (
              <li
                key={p}
                className="flex items-center justify-center gap-3 rounded-pill border border-edge bg-surface-2/60 px-5 py-3 text-sm font-medium backdrop-blur"
              >
                <Icon name={(["percent", "clock", "support"] as const)[i] ?? "check"} className="h-5 w-5 text-primary-hover" />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 2. TRUSTED BY — photo mosaic + real trust stats */}
      <section className="tone-dark relative overflow-hidden bg-surface text-fg">
        <div className="relative h-64 sm:h-80">
          <PhotoMosaic />
        </div>
        <Container className="relative z-10 -mt-10 pb-20 sm:pb-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">
            {a.trusted.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold sm:text-4xl">
            {a.trusted.title}
          </h2>
          <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {a.trusted.stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="order-2 mt-1 text-sm text-fg-muted">{s.label}</dt>
                <dd className="text-3xl font-bold text-fg sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <TrustBadges className="mt-10" />
        </Container>
      </section>

      {/* 3. CHOOSE YOUR PARTNERSHIP — gradient band with 2 program cards */}
      <section id="programs" className={cn(GRADIENT, "py-20 sm:py-28")}>
        <Container>
          <SectionHeading eyebrow={a.programs.eyebrow} title={a.programs.title} />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {a.programs.cards.map((c, i) => (
              <ProgramCardView key={c.name} card={c} href={i === 0 ? PARTNER_CTA : AFFILIATE_CTA} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. KEY BENEFITS — bento grid */}
      <Section tone="light">
        <SectionHeading eyebrow={a.benefits.eyebrow} title={a.benefits.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {a.benefits.items.map((b, i) => (
            <Card
              key={b.title}
              className={cn(i === 0 && "lg:col-span-2", i === 3 && "sm:col-span-2 lg:col-span-1")}
            >
              <div className="relative inline-flex h-12 w-12 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/25 blur-xl" aria-hidden />
                <Icon name={b.icon} className="relative h-7 w-7 text-primary-hover" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{b.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5. COMPARISON TABLE */}
      <Section id="comparison">
        <SectionHeading eyebrow={a.comparison.eyebrow} title={a.comparison.title} />
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-start text-sm">
            <thead>
              <tr className="border-b border-edge">
                <th className="py-4 pe-4 text-start font-medium text-fg-faint" />
                <th className="py-4 px-4 text-start text-lg font-bold text-fg">{a.comparison.colA}</th>
                <th className="py-4 px-4 text-start text-lg font-bold text-fg">{a.comparison.colB}</th>
              </tr>
            </thead>
            <tbody>
              {a.comparison.rows.map((r) => (
                <tr key={r.label} className="border-b border-edge align-top">
                  <th scope="row" className="py-5 pe-4 text-start font-medium text-fg-faint">
                    {r.label}
                  </th>
                  <td className="py-5 px-4 text-fg-muted">{r.a}</td>
                  <td className="py-5 px-4 text-fg-muted">{r.b}</td>
                </tr>
              ))}
              <tr>
                <td />
                <td className="py-6 px-4">
                  <Link href={PARTNER_CTA} className={buttonClasses({ variant: "primary" })}>
                    {a.comparison.ctaA}
                  </Link>
                </td>
                <td className="py-6 px-4">
                  <Link href={AFFILIATE_CTA} className={buttonClasses({ variant: "primary" })}>
                    {a.comparison.ctaB}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* 6. HOW IT WORKS — 4 steps */}
      <Section tone="light">
        <SectionHeading eyebrow={a.steps.eyebrow} title={a.steps.title} subtitle={a.steps.sub} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {a.steps.items.map((s, i) => (
            <Card key={s.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-hover">
                {a.steps.stepLabel} {i + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 7. TESTIMONIALS — carousel (placeholder slots until real quotes arrive) */}
      <Section>
        <SectionHeading eyebrow={a.testimonials.eyebrow} title={a.testimonials.title} />
        <div className="mt-12">
          <Testimonials
            items={a.testimonials.items}
            prevLabel={a.testimonials.prev}
            nextLabel={a.testimonials.next}
          />
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-fg-faint">{a.testimonials.note}</p>
      </Section>

      {/* 8. FINAL CTA — gradient band with 2 cards */}
      <section className={cn(GRADIENT, "py-20 sm:py-28")}>
        <Container>
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">{a.finalCta.title}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {a.finalCta.cards.map((c, i) => (
              <div
                key={c.model}
                className="rounded-card border border-white/15 bg-white/5 p-8 text-center backdrop-blur"
              >
                <p className="text-sm text-fg-muted">{c.model}</p>
                <h3 className="mt-2 text-2xl font-bold text-fg">{c.headline}</h3>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <Link
                    href={i === 0 ? PARTNER_CTA : AFFILIATE_CTA}
                    className={buttonClasses({ variant: "primary", size: "lg", className: "w-full sm:w-auto" })}
                  >
                    {c.cta}
                  </Link>
                  <Link href="#comparison" className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">
                    {c.learnMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function ProgramCardView({ card, href }: { card: ProgramCard; href: string }) {
  return (
    <div className="flex flex-col rounded-card border border-white/15 bg-white/5 p-8 backdrop-blur">
      <p className="text-lg font-semibold text-fg">
        <span className="font-bold">{card.brand}</span> {card.name}
      </p>
      <p className="mt-1 text-sm text-fg-muted">{card.model}</p>
      <ul className="mt-6 space-y-3">
        {card.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-fg-muted">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary-hover" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link href={href} className={buttonClasses({ variant: "primary" })}>
          {card.cta}
        </Link>
        <Link href="#comparison" className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">
          {card.learnMore}
        </Link>
      </div>
    </div>
  );
}
