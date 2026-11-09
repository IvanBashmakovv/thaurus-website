import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { pressLogos } from "@/content/home";
import { getAffiliate, type ProgramCard } from "@/content/affiliate";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
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
    title: "Partnership Program | Register & Monetize Your Traffic",
    description:
      "Join the Thaurus Partnership Program. Earn revenue share or CPA commission by referring traders to a regulated multi-asset broker on MetaTrader 5.",
    path: PATH,
  });
}

/** Anchor styled as a button that stays on the page. */
function Cta({ children, variant = "primary", size = "md", className }: { children: React.ReactNode; variant?: "primary" | "outline"; size?: "sm" | "md" | "lg"; className?: string }) {
  return <a href={APPLY} className={buttonClasses({ variant, size, className })}>{children}</a>;
}

export default async function AffiliateLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getAffiliate(locale);

  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <FaqJsonLd items={a.faq.items} />
      <LandingHeader items={a.nav.items} cta={a.nav.cta} ctaHref={APPLY} languageLabel={a.nav.language} />

      <main className="flex-1">
        {/* 1. HERO */}
        <section className="tone-dark relative overflow-hidden bg-surface pt-32 pb-16 text-fg sm:pt-40 sm:pb-20">
          <AuroraBackground className="opacity-70" />
          <Container className="relative z-10">
            <Reveal immediate className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{a.hero.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-muted">{a.hero.sub}</p>
              <div className="mt-8"><Cta size="lg">{a.hero.cta}</Cta></div>
            </Reveal>
            <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              {a.hero.pills.map((p, i) => (
                <Reveal key={p.text} immediate delay={0.25 + i * 0.1}>
                  <li className="flex items-center justify-center gap-3 rounded-pill border border-edge bg-surface-2/60 px-5 py-3 text-sm font-medium backdrop-blur">
                    <Icon name={p.icon} className="h-5 w-5 text-primary-hover" />{p.text}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>

        {/* 2. PRESS MARQUEE (real logos, not clickable here) */}
        <section className="tone-dark border-y border-edge bg-surface py-8 text-fg">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">{a.press.eyebrow}</p>
          <Marquee duration={28}>
            {pressLogos.map((l) => (
              <Image key={l.name} src={l.src} alt={l.name} width={l.width} height={l.height} className="mx-8 h-7 w-auto object-contain opacity-70" />
            ))}
          </Marquee>
        </section>

        {/* 3. TRUSTED — spotlight mosaic + counting stats */}
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
                  <dd className="text-3xl font-bold text-fg sm:text-4xl">
                    {s.num !== undefined ? <CountUp to={s.num} decimals={s.decimals} suffix={s.suffix} /> : s.text}
                  </dd>
                  <dt className="mt-1 text-sm text-fg-muted">{s.label}</dt>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Pill><span className="flex h-5 w-5 items-center justify-center rounded bg-[#00B67A] text-[10px] text-white">★</span><b>Trustpilot</b><Stars rating={4.4} /><b>4.4</b></Pill>
              <Pill><b>Google</b><Stars rating={4.6} /><b>4.6</b></Pill>
              <Pill><b>{a.trusted.wikifx}</b><span className="rounded-pill bg-success/20 px-2 py-0.5 text-xs font-semibold text-success">{a.trusted.verified}</span></Pill>
            </Reveal>
          </Container>
        </section>

        {/* 4. CHOOSE YOUR PARTNERSHIP — gradient band */}
        <section id="programs" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-28")}>
          <Container>
            <Reveal><SectionHeading eyebrow={a.programs.eyebrow} title={a.programs.title} /></Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {a.programs.cards.map((c, i) => <Reveal key={c.name} delay={i * 0.12}><ProgramCardView card={c} /></Reveal>)}
            </div>
          </Container>
        </section>

        {/* 5. BENEFITS — bento with animated art */}
        <Section id="benefits" tone="light" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.benefits.eyebrow} title={a.benefits.title} /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {a.benefits.items.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.1} className={cn(i === 0 && "lg:col-span-2", i === 3 && "sm:col-span-2 lg:col-span-1")}>
                <Card className="h-full">
                  <BenefitArt kind={b.art} />
                  <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{b.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 6. COMPARISON */}
        <Section id="comparison" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.comparison.eyebrow} title={a.comparison.title} /></Reveal>
          <Reveal delay={0.15} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead><tr className="border-b border-edge"><th className="py-4 pe-4" /><th className="py-4 px-4 text-start text-lg font-bold text-fg">{a.comparison.colA}</th><th className="py-4 px-4 text-start text-lg font-bold text-fg">{a.comparison.colB}</th></tr></thead>
              <tbody>
                {a.comparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-edge align-top">
                    <th scope="row" className="py-5 pe-4 text-start font-medium text-fg-faint">{r.label}</th>
                    <td className="py-5 px-4 text-fg-muted">{r.a}</td><td className="py-5 px-4 text-fg-muted">{r.b}</td>
                  </tr>
                ))}
                <tr><td /><td className="py-6 px-4"><Cta>{a.comparison.ctaA}</Cta></td><td className="py-6 px-4"><Cta>{a.comparison.ctaB}</Cta></td></tr>
              </tbody>
            </table>
          </Reveal>
        </Section>

        {/* 7. HOW IT WORKS */}
        <Section id="steps" tone="light" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.steps.eyebrow} title={a.steps.title} subtitle={a.steps.sub} /></Reveal>
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

        {/* 8. TESTIMONIALS — infinite marquee (placeholder slots) */}
        <Section>
          <Reveal><SectionHeading eyebrow={a.testimonials.eyebrow} title={a.testimonials.title} /></Reveal>
          <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <Marquee duration={45}>
              {a.testimonials.items.map((t, i) => (
                <figure key={i} className="w-80 shrink-0 rounded-card border border-edge bg-surface-2/70 p-6">
                  <span className="text-3xl leading-none text-primary-hover">“</span>
                  <blockquote className="mt-2 text-sm leading-relaxed text-fg-muted">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-fg">{t.author}{t.role && <span className="block text-xs font-normal text-fg-faint">{t.role}</span>}</figcaption>
                </figure>
              ))}
            </Marquee>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-fg-faint">{a.testimonials.note}</p>
        </Section>

        {/* 9. FAQ */}
        <Section id="faq" tone="light" className="scroll-mt-20">
          <Reveal><SectionHeading eyebrow={a.faq.eyebrow} title={a.faq.title} /></Reveal>
          <Reveal delay={0.15} className="mt-12"><FaqAccordion items={a.faq.items} /></Reveal>
        </Section>

        {/* 10. APPLY — gradient band with the on-page form */}
        <section id="apply" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-28")}>
          <Container>
            <Reveal><SectionHeading eyebrow={a.apply.eyebrow} title={a.apply.title} subtitle={a.apply.sub} /></Reveal>
            <Reveal delay={0.15} className="mx-auto mt-12 max-w-3xl"><ApplyForm copy={a.apply} /></Reveal>
          </Container>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-pill border border-fg/15 bg-fg/5 px-4 py-2 text-sm text-fg backdrop-blur">{children}</span>;
}

function ProgramCardView({ card }: { card: ProgramCard }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-white/15 bg-white/5 p-8 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
      <p className="text-lg font-semibold text-fg"><span className="font-bold">{card.brand}</span> {card.name}</p>
      <p className="mt-1 text-sm text-fg-muted">{card.model}</p>
      <ul className="mt-6 space-y-3">
        {card.bullets.map((b) => <li key={b} className="flex items-start gap-3 text-sm text-fg-muted"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary-hover" />{b}</li>)}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Cta>{card.cta}</Cta>
        <a href="#comparison" className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">{card.learnMore}</a>
      </div>
    </div>
  );
}
