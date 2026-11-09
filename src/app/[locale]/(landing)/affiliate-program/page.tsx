import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { photos } from "@/lib/photos";
import { pressLogos } from "@/content/home";
import { getAffiliate, type ProgramCard } from "@/content/affiliate";
import type { Txt } from "@/content/affiliate/types";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
import { BrandImage } from "@/components/ui/BrandImage";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { buttonClasses } from "@/components/ui/Button";
import { LandingHeader } from "@/components/affiliate/LandingHeader";
import { LandingFooter } from "@/components/affiliate/LandingFooter";
import { PhotoMosaic } from "@/components/affiliate/PhotoMosaic";
import { Reveal } from "@/components/affiliate/Reveal";
import { CountUp } from "@/components/affiliate/CountUp";
import { Marquee } from "@/components/affiliate/Marquee";
import { BenefitArt } from "@/components/affiliate/BenefitArt";
import { ApplyForm } from "@/components/affiliate/ApplyForm";
import { cn } from "@/lib/cn";

const PATH = routes.affiliate;
const APPLY = "#apply";
const GRADIENT =
  "tone-dark relative overflow-hidden text-fg bg-[linear-gradient(135deg,#131228_0%,#262a63_55%,#42478b_100%)]";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Partner Program: Revenue Share and CPA",
    description:
      "Refer traders to Thaurus Ltd, an FSC Mauritius licensed broker on MetaTrader 5, and earn revenue share or CPA commission. Apply on this page.",
    path: PATH,
  });
}

/** Visible marker for a fact Thaurus still has to confirm. Never ships as final copy. */
function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-dashed border-amber-400/70 bg-amber-400/10 px-1.5 py-0.5 text-xs font-medium text-amber-300">
      <span className="font-bold">TODO</span>
      {children}
    </span>
  );
}
function T({ v }: { v: Txt }) {
  return typeof v === "string" ? <>{v}</> : <Todo>{v.todo}</Todo>;
}
function Cta({ children, size = "md", className }: { children: React.ReactNode; size?: "sm" | "md" | "lg"; className?: string }) {
  return <a href={APPLY} className={buttonClasses({ variant: "primary", size, className: cn("whitespace-nowrap", className) })}>{children}</a>;
}
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-pill border border-fg/15 bg-fg/5 px-4 py-2 text-sm text-fg backdrop-blur">{children}</span>;
}

export default async function AffiliateLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getAffiliate(locale);

  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <FaqJsonLd items={a.faq.items} />
      <LandingHeader items={a.nav.items} cta={a.cta} ctaHref={APPLY} languageLabel={a.nav.language} />

      <main className="flex-1">
        {/* 1. HERO */}
        <section className="tone-dark relative overflow-hidden bg-surface pt-32 pb-16 text-fg sm:pt-40 sm:pb-20">
          <AuroraBackground className="opacity-70" />
          <Container className="relative z-10">
            <div className="rise mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{a.hero.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-muted">{a.hero.sub}</p>
              <div className="mt-8"><Cta size="lg">{a.cta}</Cta></div>
            </div>
            <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
              {a.hero.pills.map((p, i) => (
                <li
                  key={p.text}
                  className="rise flex items-center gap-2 whitespace-nowrap rounded-pill border border-edge bg-surface-2/60 px-4 py-2.5 text-sm font-medium backdrop-blur"
                  style={{ animationDelay: `${0.25 + i * 0.1}s` }}
                >
                  <Icon name={p.icon} className="h-4 w-4 text-primary-hover" />{p.text}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 2. PRESS MARQUEE */}
        <section className="tone-dark border-y border-edge bg-surface py-8 text-fg">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">{a.press.eyebrow}</p>
          <Marquee duration={28}>
            {pressLogos.map((l) => (
              <Image key={l.name} src={l.src} alt={l.name} width={l.width} height={l.height} className="mx-8 h-7 w-auto object-contain opacity-70" />
            ))}
          </Marquee>
        </section>

        {/* 3. TRUST — photo wall + real numbers */}
        <section className="tone-dark relative overflow-hidden bg-surface text-fg">
          <div className="relative h-64 sm:h-80"><PhotoMosaic /></div>
          <Container className="relative z-10 -mt-10 pb-20 sm:pb-24">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">{a.trusted.eyebrow}</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold sm:text-4xl">{a.trusted.title}</h2>
            </Reveal>
            <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
              {a.trusted.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1} className="text-center">
                  <dd className="text-3xl font-bold tabular-nums text-fg sm:text-4xl">
                    {s.num !== undefined ? <CountUp to={s.num} decimals={s.decimals} suffix={s.suffix} /> : s.text}
                  </dd>
                  <dt className="mt-1 text-sm text-fg-muted">{s.label}</dt>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Pill><span className="flex h-5 w-5 items-center justify-center rounded bg-[#00B67A] text-[10px] text-white">★</span><b>Trustpilot</b><Stars rating={4.4} /><b className="tabular-nums">4.4</b></Pill>
              <Pill><b>Google</b><Stars rating={4.6} /><b className="tabular-nums">4.6</b></Pill>
              <Pill><b>{a.trusted.wikifx}</b><span className="rounded-pill bg-success/20 px-2 py-0.5 text-xs font-semibold text-success">{a.trusted.verified}</span></Pill>
            </Reveal>
          </Container>
        </section>

        {/* 4. TWO PROGRAMS — gradient band */}
        <section id="programs" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-28")}>
          <Container>
            <Reveal><SectionHeading eyebrow={a.programs.eyebrow} title={a.programs.title} /></Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {a.programs.cards.map((c, i) => <Reveal key={c.name} delay={i * 0.12}><ProgramCardView card={c} cta={a.cta} compare={a.programs.compare} /></Reveal>)}
            </div>
          </Container>
        </section>

        {/* 5. WHAT YOU PROMOTE — split with the real MT5 screenshot */}
        <Section tone="light">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading align="start" eyebrow={a.promote.eyebrow} title={a.promote.title} subtitle={a.promote.body} />
              <ul className="mt-8 space-y-3">
                {a.promote.facts.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-fg-muted"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-hover" />{f}</li>
                ))}
              </ul>
              <div className="mt-8"><Cta>{a.cta}</Cta></div>
            </Reveal>
            <Reveal delay={0.15}>
              <BrandImage photo={photos.mt5Devices} className="aspect-[4/3]" sizes="(max-width: 1024px) 100vw, 50vw" />
            </Reveal>
          </div>
        </Section>

        {/* 6. STRAIGHT ANSWERS */}
        <Section id="answers" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.answers.eyebrow} title={a.answers.title} /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.answers.items.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.1}>
                <Card className="h-full">
                  <BenefitArt kind={b.art} />
                  <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted"><T v={b.body} /></p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 7. COMPARISON */}
        <Section id="comparison" tone="light" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.comparison.eyebrow} title={a.comparison.title} /></Reveal>
          <Reveal delay={0.15} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead><tr className="border-b border-edge"><th className="py-4 pe-4" /><th className="py-4 px-4 text-start text-lg font-bold text-fg">{a.comparison.colA}</th><th className="py-4 px-4 text-start text-lg font-bold text-fg">{a.comparison.colB}</th></tr></thead>
              <tbody>
                {a.comparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-edge align-top">
                    <th scope="row" className="py-5 pe-4 text-start font-medium text-fg-faint">{r.label}</th>
                    <td className="py-5 px-4 text-fg-muted"><T v={r.a} /></td><td className="py-5 px-4 text-fg-muted"><T v={r.b} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 text-center"><Cta size="lg">{a.cta}</Cta></Reveal>
        </Section>

        {/* 8. FOUR STEPS */}
        <Section id="steps" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.steps.eyebrow} title={a.steps.title} /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.steps.items.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <Card className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-hover">{a.steps.stepLabel} {i + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-fg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 9. PARTNER QUOTES — marquee when real quotes exist, otherwise an explicit pending marker */}
        <Section tone="light">
          <Reveal><SectionHeading eyebrow={a.testimonials.eyebrow} title={a.testimonials.title} /></Reveal>
          {a.testimonials.items.length > 0 ? (
            <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
              <Marquee duration={45}>
                {a.testimonials.items.map((t, i) => (
                  <figure key={i} className="w-80 shrink-0 rounded-card border border-edge bg-surface-2/70 p-6">
                    <blockquote className="text-sm leading-relaxed text-fg-muted">{t.quote}</blockquote>
                    <figcaption className="mt-5 text-sm font-semibold text-fg">{t.author}{t.role && <span className="block text-xs font-normal text-fg-faint">{t.role}</span>}</figcaption>
                  </figure>
                ))}
              </Marquee>
            </div>
          ) : (
            <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl rounded-card border border-dashed border-amber-400/60 bg-amber-400/5 p-8 text-center text-sm text-fg-muted">
              <Todo>partner quotes</Todo>
              <p className="mt-3">{a.testimonials.pending}</p>
            </Reveal>
          )}
        </Section>

        {/* 10. FAQ */}
        <Section id="faq" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.faq.eyebrow} title={a.faq.title} /></Reveal>
          <Reveal delay={0.15} className="mt-12"><FaqAccordion items={a.faq.items} /></Reveal>
        </Section>

        {/* 11. APPLY — the on-page form, with the verbatim risk line next to the CTA */}
        <section id="apply" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-28")}>
          <Container>
            <Reveal><SectionHeading eyebrow={a.apply.eyebrow} title={a.apply.title} subtitle={a.apply.sub} /></Reveal>
            <Reveal delay={0.15} className="mx-auto mt-12 max-w-3xl"><ApplyForm copy={a.apply} /></Reveal>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-fg-faint">{a.apply.risk}</p>
          </Container>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

function ProgramCardView({ card, cta, compare }: { card: ProgramCard; cta: string; compare: string }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-white/15 bg-white/5 p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
      <p className="text-lg font-semibold text-fg">{card.name}</p>
      <p className="mt-1 text-sm text-fg-muted">{card.model}</p>
      <ul className="mt-6 space-y-3">
        {card.bullets.map((b, i) => <li key={i} className="flex items-start gap-3 text-sm text-fg-muted"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary-hover" /><span><T v={b} /></span></li>)}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Cta>{cta}</Cta>
        <a href="#comparison" className="inline-flex min-h-11 items-center text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">{compare}</a>
      </div>
    </div>
  );
}
