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
        <section className="relative pt-36 pb-16 sm:pt-44">
          <Container className="relative z-10">
            <div className="rise mx-auto max-w-4xl text-center">
              <span className="pill-glow inline-flex h-11 items-center px-6 text-sm font-bold uppercase tracking-wide text-white">{a.hero.badge}</span>
              <h1 className="mt-8 text-[2.75rem] font-bold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-[5rem]">{a.hero.title}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">{a.hero.sub}</p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a href={APPLY} className={cn(BTN, "btn-glow h-13 px-8 text-base")}>{a.cta}<Icon name="arrow" className="h-4 w-4" /></a>
                <a href="#programs" className={cn(BTN, "btn-glass h-13 px-7 text-base")}>{a.learnMore}</a>
              </div>
            </div>
            <ul className="mx-auto mt-10 grid max-w-sm gap-3 sm:mt-14 sm:max-w-4xl sm:grid-cols-3 sm:gap-6">
              {a.hero.features.map((f, i) => (
                <li key={f.title} className="rise flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:justify-self-center sm:border-0 sm:bg-transparent sm:p-0" style={{ animationDelay: `${0.25 + i * 0.1}s` }}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur"><Icon name={f.icon} className="h-5 w-5 text-white" /></span>
                  <span className="text-start leading-tight"><span className="block text-sm font-semibold text-white">{f.title}</span><span className="block text-xs text-white/60">{f.sub}</span></span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 2. JOURNEY — steps drawn over the atmosphere */}
        <section id="steps" className="relative scroll-mt-20 pb-14 pt-6">
          <Container className="relative z-10">
            <ol className="relative mx-auto grid max-w-5xl gap-7 ps-9 sm:grid-cols-4 sm:gap-10 sm:ps-0 before:absolute before:bottom-3 before:left-[6px] before:top-2 before:w-px before:bg-white/20 sm:before:hidden">
              <span aria-hidden className="absolute left-[12%] right-[12%] top-[7px] hidden h-px bg-gradient-to-r from-transparent via-white/40 to-transparent sm:block" />
              {a.steps.items.map((s, i) => (
                <li key={s.title} className="relative text-start sm:text-center">
                  <span className="dot-glow absolute -left-9 top-1 block h-3.5 w-3.5 rounded-full bg-white sm:static sm:mx-auto" />
                  <span className="inline-flex rounded-full bg-[#1b1a35]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c7d2ff] sm:mt-5">{String(i + 1).padStart(2, "0")} · {a.steps.stepLabel}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-white/65">{s.body}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* 3. TRUSTED BY — inline logos, ratings, three glowing tiles */}
        <section className="relative pb-24 pt-8">
          <Container className="relative z-10">
            <p className="text-center text-sm text-white/60">{a.trusted.label}</p>
            <div className="mx-auto mt-5 grid max-w-xs grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:flex sm:max-w-none sm:justify-center sm:gap-x-12">
              {pressLogos.map((l) => <Image key={l.name} src={l.src} alt={l.name} width={l.width} height={l.height} className="h-6 w-auto max-w-[8rem] object-contain opacity-90 brightness-0 invert sm:h-7" />)}
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
              {a.trusted.tiles.map((t) => (
                <div key={t.label} className="g-tile px-6 py-8 text-center sm:px-8 sm:py-12">
                  <div className="relative text-5xl font-bold tabular-nums tracking-tight text-white sm:text-7xl">{t.value}</div>
                  <span className="relative mx-auto mt-5 block h-1 w-12 rounded-full bg-[#c7d2ff]/80" />
                  <div className="relative mt-4 text-xs font-bold uppercase tracking-[0.22em] text-white/80">{t.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* 4. CHOOSE YOUR PARTNERSHIP */}
      <section id="programs" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-24")}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,.18),transparent_70%)]" />
        <Container className="relative">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/70">{a.programs.eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-5xl">{a.programs.title}</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {a.programs.cards.map((c) => <ProgramCardView key={c.program} card={c} learnMore={a.learnMore} />)}
          </div>
        </Container>
      </section>

      {/* 5. KEY BENEFITS — 2 + 2 + 3 glass cards */}
      <section id="benefits" className={cn(LIGHT, "scroll-mt-20 py-20 sm:py-28")}>
        <Container>
          <SectionHeading eyebrow={a.benefits.eyebrow} title={a.benefits.title} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {a.benefits.items.map((b, i) => (
              <div key={b.title} className={cn("l-card p-6", i < 4 ? "lg:col-span-3" : "lg:col-span-2")}>
                <BenefitArt kind={b.art} tall={i < 4} />
                <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. COMPARISON — glass table */}
      <section id="comparison" className={cn(LIGHT2, "scroll-mt-20 py-20 sm:py-28")}>
        <Container>
          <SectionHeading eyebrow={a.comparison.eyebrow} title={a.comparison.title} />
          <div className="mt-10 grid gap-4 md:hidden">
            {a.comparison.rows.map((r) => (
              <div key={r.label} className="l-card p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-fg-faint">{r.label}</p>
                <div className="mt-3 space-y-3 text-sm">
                  <div><ProgramLogo program="ib" size="sm" /><p className="mt-1 text-fg-muted">{r.a}</p></div>
                  <div><ProgramLogo program="affiliates" size="sm" /><p className="mt-1 text-fg-muted">{r.b}</p></div>
                </div>
              </div>
            ))}
            <a href={APPLY} className={cn(BTN, "btn-glow mt-2 w-full")}>{a.cta}</a>
          </div>
          <div className="l-card mx-auto mt-14 hidden max-w-5xl overflow-x-auto p-2 sm:p-4 md:block">
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
      <section className={cn(DARK, "py-20 sm:py-28")}>
        <Container>
          <SectionHeading eyebrow={a.testimonials.eyebrow} title={a.testimonials.title} />
          {a.testimonials.items.length > 0 ? (
            <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
              <Marquee duration={90}>
                {a.testimonials.items.map((t, i) => (
                  <figure key={i} className={cn("w-80 shrink-0 rounded-[20px] p-6", i % 2 ? "bg-[linear-gradient(135deg,#131228,#2f6bd6)] text-white" : "g-card")}>
                    <blockquote className="text-sm leading-relaxed">{t.quote}</blockquote>
                    <figcaption className="mt-5 text-sm font-semibold">{t.author}{t.role && <span className="block text-xs font-normal opacity-70">{t.role}</span>}</figcaption>
                  </figure>
                ))}
              </Marquee>
            </div>
          ) : (
            <p className="g-card mx-auto mt-10 max-w-xl p-8 text-center text-sm text-white/65">{a.testimonials.pending}</p>
          )}
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-white/40">{a.testimonials.note}</p>
        </Container>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className={cn(LIGHT, "scroll-mt-20 py-20 sm:py-28")}>
        <Container>
          <SectionHeading eyebrow={a.faq.eyebrow} title={a.faq.title} />
          <div className="mt-12"><FaqAccordion items={a.faq.items} /></div>
        </Container>
      </section>

      {/* 9. START EARNING TODAY — cards + application */}
      <section id="apply" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-24")}>
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,.18),transparent_70%)]" />
        <Container className="relative">
          <h2 className="text-center text-3xl font-bold text-white sm:text-5xl">{a.finalCta.title}</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {a.finalCta.cards.map((c) => (
              <div key={c.program} className="tone-light rounded-[20px] bg-white p-8 text-fg shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)]">
                <ProgramLogo program={c.program} />
                <h3 className="mt-6 text-xl font-semibold">{c.headline}</h3>
                <p className="mt-1 text-sm text-fg-muted">{c.model}</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href="#apply-form" className={cn(BTN, "btn-glow w-full")}>{c.cta}</a>
                  <a href="#comparison" className={cn(BTN, "w-full rounded-xl bg-[#eceef5] text-[#131228] hover:bg-[#dfe2ee]")}>{a.learnMore}</a>
                </div>
              </div>
            ))}
          </div>
          <div id="apply-form" className="tone-light mx-auto mt-10 max-w-3xl scroll-mt-24 rounded-[20px] bg-white p-6 text-fg shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-fg-faint">{a.apply.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-semibold">{a.apply.title}</h3>
            <p className="mt-1 text-sm text-fg-muted">{a.apply.sub}</p>
            <div className="mt-6"><ApplyForm copy={a.apply} /></div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-white/70">{a.apply.risk}</p>
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
    <div className="tone-light flex h-full flex-col rounded-[20px] bg-white p-8 text-fg shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)]">
      <ProgramLogo program={card.program} />
      <p className={cn("mt-6 text-[1.75rem] font-bold leading-tight", card.program === "ib" ? "text-[#42478b]" : "text-[#2f6bd6]")}>{card.model}</p>
      <ul className="mt-5 list-disc space-y-2 ps-5 text-sm text-fg-muted">{card.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      <div className="mt-8 flex flex-col gap-3">
        <a href={APPLY} className={cn(BTN, "btn-glow w-full")}>{card.cta}</a>
        <a href="#comparison" className={cn(BTN, "w-full rounded-xl bg-[#eceef5] text-[#131228] hover:bg-[#dfe2ee]")}>{learnMore}</a>
      </div>
    </div>
  );
}
