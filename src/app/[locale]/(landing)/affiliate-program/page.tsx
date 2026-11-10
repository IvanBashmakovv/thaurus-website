import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { pressLogos } from "@/content/home";
import { getAffiliate } from "@/content/affiliate";
import type { ProgramCard } from "@/content/affiliate/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { Marquee } from "@/components/affiliate/Marquee";
import { BenefitArt } from "@/components/affiliate/BenefitArt";
import { ApplyForm } from "@/components/affiliate/ApplyForm";
import { ProgramLogo } from "@/components/affiliate/ProgramLogo";
import { VelocityText } from "@/components/affiliate/VelocityText";
import { RatingLogo } from "@/components/affiliate/RatingLogo";
import { Reviews } from "@/components/affiliate/Reviews";
import { cn } from "@/lib/cn";

const PATH = routes.affiliate;
const APPLY = "#apply";
const BTN = "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-semibold transition";
const GRADIENT = "tone-dark relative overflow-hidden text-fg bg-[linear-gradient(90deg,#131228_0%,#42478b_55%,#2f6bd6_100%)]";
const DARK = "tone-dark relative bg-[#0f0e24] text-fg";
const LIGHT = "tone-light relative bg-white text-fg";
const LIGHT2 = "tone-light relative bg-[#f4f6fc] text-fg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Partnership Program: Revenue Share and CPA",
    description: "Join the Thaurus Partnership Program. Earn revenue share or CPA commission by referring traders to Thaurus Ltd, an FSC Mauritius licensed broker on MetaTrader 5.",
    path: PATH,
  });
}

export default async function AffiliateLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getAffiliate(locale);

  return (
    <div id="top" className="tone-dark bg-[#0b0a1a] text-fg">
      <FaqJsonLd items={a.faq.items} />

      {/* ATMOSPHERE: hero + journey + trust share one liquid backdrop */}
      <div className="relative overflow-hidden">
        <div className="liquid" aria-hidden><span className="liquid-ridge" /></div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-[#0b0a1a]" />

        {/* 1. HERO */}
        <section className="relative pt-[136px] pb-6 sm:pt-44 sm:pb-16">
          <Container className="relative z-10">
            <div className="rise mx-auto max-w-4xl text-center">
              <span className="pill-glow hidden h-11 sm:inline-flex items-center px-6 text-sm font-bold uppercase tracking-wide text-white">{a.hero.badge}</span>
              <h1 className="text-4xl font-bold leading-[44px] tracking-[-0.02em] sm:mt-8 sm:text-6xl sm:leading-[1.02] lg:text-[5rem]">{a.hero.title}</h1>
              <p className="mx-auto mt-2 max-w-2xl text-lg leading-[26px] text-white/90 sm:mt-6 sm:text-xl sm:leading-normal">{a.hero.sub}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
                <a href={APPLY} className={cn(BTN, "btn-glow h-12 px-8 text-base sm:h-13")}>{a.cta}<Icon name="arrow" className="h-4 w-4" /></a>
                <a href="#programs" className={cn(BTN, "btn-glass hidden h-13 px-7 text-base sm:inline-flex")}>{a.learnMore}</a>
              </div>
            </div>
            <ul className="-mx-5 mt-16 grid gap-4 border-t border-white/15 px-6 pt-5 sm:mx-0 sm:mt-14 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10 sm:rounded-2xl sm:border sm:border-white/12 sm:bg-white/[.04] sm:px-0 sm:pt-0 sm:shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_30px_60px_-40px_rgba(0,0,0,.8)] sm:backdrop-blur-xl">
              {a.hero.features.map((f, i) => (
                <li key={f.title} className="rise flex items-center gap-2 sm:gap-4 sm:px-7 sm:py-6" style={{ animationDelay: `${0.25 + i * 0.1}s` }}>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center sm:h-12 sm:w-12 sm:rounded-full sm:bg-[linear-gradient(180deg,#4f55a3,#2f6bd6)] sm:shadow-[0_0_28px_-6px_rgba(47,107,214,.95),inset_0_1px_0_rgba(255,255,255,.25)]"><Icon name={f.icon} className="h-6 w-6 text-white sm:h-5 sm:w-5" /></span>
                  <span className="text-start leading-tight"><span className="block text-base font-normal leading-6 text-white sm:text-[15px] sm:font-semibold sm:leading-tight">{f.title}</span><span className="hidden text-[13px] text-white/60 sm:mt-0.5 sm:block">{f.sub}</span></span>
                </li>
              ))}
            </ul>
          </Container>
        </section>


        {/* 3. TRUSTED BY — inline logos, ratings, three glowing tiles */}
        <section className="relative pb-12 pt-6 sm:pb-24 sm:pt-8">
          <Container className="relative z-10">
            <p className="text-center text-sm text-white/60">{a.trusted.label}</p>
            <div className="mx-auto mt-5 grid max-w-xs grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:flex sm:max-w-none sm:justify-center sm:gap-x-12">
              {pressLogos.map((l) => <Image key={l.name} src={l.src} alt={l.name} width={l.width} height={l.height} className="h-6 w-auto max-w-[8rem] object-contain opacity-90 brightness-0 invert sm:h-7" />)}
            </div>
            <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
              {a.trusted.tiles.map((t) => (
                <div key={t.label} className="g-tile flex flex-col items-center px-6 py-6 text-center sm:py-7">
                  {t.logo ? <RatingLogo kind={t.logo} className="relative" /> : <span className="relative inline-flex h-6 items-center gap-1.5 text-[15px] font-semibold text-white"><Icon name="globe" className="h-5 w-5" />Media</span>}
                  <div className="relative mt-3 text-4xl font-bold tabular-nums tracking-tight text-white sm:text-5xl">{t.value}</div>
                  <div className="relative mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">{t.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* 4. CHOOSE YOUR PARTNERSHIP */}
      <section id="programs" className={cn(GRADIENT, "scroll-mt-20 py-8 sm:py-24")}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,.18),transparent_70%)]" />
        <Container className="relative">
          <p className="text-center text-base font-medium uppercase tracking-[0.6px] text-white/95 sm:text-xs sm:font-bold sm:tracking-[0.3em] sm:text-white/70">{a.programs.eyebrow}</p>
          <h2 className="mx-auto mt-3 hidden max-w-3xl text-center text-[28px] font-bold leading-tight text-white sm:mt-4 sm:block sm:text-5xl">{a.programs.title}</h2>
          <div className="mt-7 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            {a.programs.cards.map((c) => <ProgramCardView key={c.program} card={c} learnMore={a.learnMore} />)}
          </div>
        </Container>
      </section>

      {/* 5. KEY BENEFITS — 2 + 2 + 3 glass cards */}
      <section id="benefits" className={cn(LIGHT, "scroll-mt-20 py-8 sm:py-28")}>
        <Container>
          <SectionHeading align="start" eyebrow={a.benefits.eyebrow} title={a.benefits.title} />
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
            {a.benefits.items.map((b, i) => (
              <div key={b.title} className={cn("l-card flex flex-col p-5 sm:p-6", i < 4 ? "lg:col-span-3" : "lg:col-span-2")}>
                <BenefitArt kind={b.art} tall={i < 4} />
                <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. COMPARISON — glass table */}
      <section id="comparison" className={cn(LIGHT2, "scroll-mt-20 py-8 sm:py-28")}>
        <Container>
          <SectionHeading align="start" eyebrow={a.comparison.eyebrow} title={a.comparison.title} />
          <div className="md:hidden">
            <div className="mt-8 grid gap-4">
            {a.comparison.rows.map((r) => (
              <div key={r.label} className="l-card p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-fg-faint">{r.label}</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div><ProgramLogo program="ib" size="sm" /><p className="mt-1 text-fg-muted">{r.a}</p></div>
                  <div><ProgramLogo program="affiliates" size="sm" /><p className="mt-1 text-fg-muted">{r.b}</p></div>
                </div>
              </div>
            ))}
            </div>
            <a href={APPLY} className={cn(BTN, "btn-glow mt-5 w-full")}>{a.cta}</a>
          </div>
          <div className="l-card mt-12 hidden overflow-x-auto p-2 sm:p-4 md:block">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#131228]/10">
                  <th className="w-40 py-5 ps-4 pe-4" />
                  <th className="py-5 px-4 text-start"><ProgramLogo program="ib" /></th>
                  <th className="py-5 px-4 text-start"><ProgramLogo program="affiliates" /></th>
                </tr>
              </thead>
              <tbody>
                {a.comparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-[#131228]/8 align-top">
                    <th scope="row" className="py-6 ps-4 pe-4 text-start font-medium text-fg-faint">{r.label}</th>
                    <td className="py-6 px-4 text-fg-muted">{r.a}</td>
                    <td className="py-6 px-4 text-fg-muted">{r.b}</td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td className="py-7 px-4"><a href={APPLY} className={cn(BTN, "btn-glow")}>{a.comparison.ctaA}</a></td>
                  <td className="py-7 px-4"><a href={APPLY} className={cn(BTN, "btn-glow")}>{a.comparison.ctaB}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className={cn(DARK, "py-8 sm:py-28")}>
        <Container>
          <SectionHeading align="start" eyebrow={a.testimonials.eyebrow} title={a.testimonials.title} />
          <div className="mt-8 sm:mt-12">
            {a.testimonials.items.length > 0 ? (
              <Reviews items={a.testimonials.items} authorLabel={a.testimonials.authorLabel} />
            ) : (
              <p className="g-card p-8 text-sm text-white/65">{a.testimonials.pending}</p>
            )}
          </div>
          <p className="mt-6 text-xs text-white/40">{a.testimonials.note}</p>
        </Container>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className={cn(LIGHT, "scroll-mt-20 py-8 sm:py-28")}>
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-12">
            <SectionHeading align="start" eyebrow={a.faq.eyebrow} title={a.faq.title} />
            <div className="mt-8 lg:mt-0"><FaqAccordion items={a.faq.items} className="max-w-none" /></div>
          </div>
        </Container>
      </section>

      {/* 9. START EARNING TODAY — cards + application */}
      <section id="apply" className={cn(GRADIENT, "scroll-mt-20 py-8 sm:py-24")}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,.18),transparent_70%)]" />
        <Container className="relative">
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-5xl">{a.finalCta.title}</h2>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="grid gap-4 sm:gap-6">
            {a.finalCta.cards.map((c) => (
              <div key={c.program} className="tone-light flex flex-col rounded-lg bg-white p-6 text-fg sm:rounded-[20px] sm:p-8 sm:shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)]">
                <ProgramLogo program={c.program} />
                <h3 className="mt-6 text-xl font-semibold">{c.headline}</h3>
                <p className="mt-1 text-sm text-fg-muted">{c.model}</p>
                <div className="mt-auto flex flex-col items-center gap-4 pt-6 sm:items-stretch sm:gap-3">
                  <a href="#apply-form" className={cn(BTN, "btn-glow w-[200px] sm:w-full")}>{c.cta}</a>
                  <a href="#comparison" className={cn(BTN, "w-[200px] rounded-xl sm:w-full bg-[#eceef5] text-[#131228] hover:bg-[#dfe2ee]")}>{a.learnMore}</a>
                </div>
              </div>
            ))}
          </div>
          <div id="apply-form" className="tone-light scroll-mt-24 rounded-2xl bg-white p-5 sm:rounded-[20px] sm:p-6 text-fg shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-fg-faint">{a.apply.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-semibold">{a.apply.title}</h3>
            <p className="mt-1 text-sm text-fg-muted">{a.apply.sub}</p>
            <div className="mt-6"><ApplyForm copy={a.apply} /></div>
          </div>
          </div>
          <p className="mt-6 text-xs text-white/70">{a.apply.risk}</p>
        </Container>
      </section>

      {/* 10. SCROLL-VELOCITY STRIP — closing beat */}
      <section className="tone-dark overflow-hidden bg-[#0b0a1a] text-fg">
        <VelocityText text={a.velocity} />
      </section>
    </div>
  );
}

function ProgramCardView({ card, learnMore }: { card: ProgramCard; learnMore: string }) {
  return (
    <div className="tone-light flex h-full flex-col rounded-lg bg-white p-6 text-fg sm:rounded-[20px] sm:p-8 sm:shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)]">
      <ProgramLogo program={card.program} />
      <p className={cn("mt-6 text-2xl font-bold leading-8 sm:text-[1.75rem] sm:leading-tight", card.program === "ib" ? "text-[#42478b]" : "text-[#2f6bd6]")}>{card.model}</p>
      <ul className="mt-12 list-disc space-y-2 ps-5 text-sm leading-5 text-fg-muted sm:mt-5">{card.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      <div className="mt-auto flex flex-col items-center gap-4 pt-8 sm:items-stretch sm:gap-3 sm:pt-7">
        <a href={APPLY} className={cn(BTN, "btn-glow w-[200px] sm:w-full")}>{card.cta}</a>
        <a href="#comparison" className={cn(BTN, "w-[200px] rounded-xl sm:w-full bg-[#eceef5] text-[#131228] hover:bg-[#dfe2ee]")}>{learnMore}</a>
      </div>
    </div>
  );
}
