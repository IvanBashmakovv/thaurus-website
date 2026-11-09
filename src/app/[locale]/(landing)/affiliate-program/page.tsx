import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { getAffiliate } from "@/content/affiliate";
import type { Badge, ProgramCard } from "@/content/affiliate/types";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { buttonClasses } from "@/components/ui/Button";
import { Marquee } from "@/components/affiliate/Marquee";
import { BenefitArt } from "@/components/affiliate/BenefitArt";
import { ApplyForm } from "@/components/affiliate/ApplyForm";
import { ProgramLogo } from "@/components/affiliate/ProgramLogo";
import { HeroShapes } from "@/components/affiliate/HeroShapes";
import { VelocityText } from "@/components/affiliate/VelocityText";
import { cn } from "@/lib/cn";

const PATH = routes.affiliate;
const APPLY = "#apply";
const PANEL = "tone-dark relative bg-[#1b1a35] text-fg";
const GRADIENT = "tone-dark relative overflow-hidden text-fg bg-[linear-gradient(90deg,#5b3fd6_0%,#42478b_55%,#2f6bd6_100%)]";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Partnership Program: Revenue Share and CPA",
    description: "Join the Thaurus Partnership Program. Earn revenue share or CPA commission by referring traders to Thaurus Ltd, an FSC Mauritius licensed broker on MetaTrader 5.",
    path: PATH,
  });
}

/* Reference button geometry: rectangular, 6px radius. */
const primary = (extra = "") => buttonClasses({ variant: "primary", size: "md", className: cn("rounded-md whitespace-nowrap", extra) });
const secondary = (extra = "") => cn("inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md bg-[#eceef5] px-6 text-sm font-semibold text-[#131228] transition-colors hover:bg-[#dfe2ee]", extra);

export default async function AffiliateLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getAffiliate(locale);

  return (
    <div id="top">
      <FaqJsonLd items={a.faq.items} />

      {/* 1. HERO */}
      <section className="tone-dark relative overflow-hidden bg-surface pt-32 pb-10 text-fg sm:pt-40 sm:pb-12 lg:min-h-[590px]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,#0e0d22_0%,#1c1f52_55%,#3b3f8a_100%)]" />
        <HeroShapes />
        <Container className="relative z-10">
          <div className="rise mx-auto max-w-4xl text-center">
            <h1 className="text-[2.5rem] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.5rem]">{a.hero.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-fg-muted sm:text-lg">{a.hero.sub}</p>
            <div className="mt-7"><a href={APPLY} className={primary("h-12 px-7 text-base")}>{a.cta}</a></div>
          </div>
          <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-14 gap-y-3 border-t border-white/10 pt-6">
            {a.hero.pills.map((p, i) => (
              <li key={p.text} className="rise flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-fg" style={{ animationDelay: `${0.25 + i * 0.1}s` }}>
                <Icon name={p.icon} className="h-5 w-5 text-[#8f94e8]" />{p.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 2. TRUSTED BY — panel, big number, badge marquee, two stats */}
      <section className={cn(PANEL, "py-16 sm:py-20")}>
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">{a.trusted.eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-medium leading-tight sm:text-5xl">
            {a.trusted.headline}<br />{a.trusted.headlineSub}
          </h2>
        </Container>
        <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee duration={60}>
            {a.trusted.badges.map((b) => <BadgeTile key={b.label} b={b} />)}
          </Marquee>
        </div>
        <Container>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 divide-x divide-white/10">
            {a.trusted.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-4 text-center">
                <Icon name={s.icon} className="h-7 w-7 text-[#8f94e8]" />
                <div className="mt-3 text-2xl font-semibold tabular-nums sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-sm text-fg-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2b. SCROLL-VELOCITY TEXT STRIP */}
      <section className="tone-dark overflow-hidden border-y border-white/5 bg-[#0f0e24] text-fg">
        <VelocityText text={a.velocity} />
      </section>

      {/* 3. CHOOSE YOUR PARTNERSHIP — gradient band, two white cards */}
      <section id="programs" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-24")}>
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{a.programs.eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-white sm:text-5xl">{a.programs.title}</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {a.programs.cards.map((c) => <ProgramCardView key={c.program} card={c} learnMore={a.learnMore} />)}
          </div>
        </Container>
      </section>

      {/* 4. KEY BENEFITS — 2 + 2 + 3 */}
      <Section id="benefits" className="scroll-mt-20 bg-[#0f0e24]">
        <SectionHeading eyebrow={a.benefits.eyebrow} title={a.benefits.title} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {a.benefits.items.map((b, i) => (
            <div key={b.title} className={cn("rounded-2xl border border-white/8 bg-[#171634] p-6", i < 4 ? "lg:col-span-3" : "lg:col-span-2")} style={{ animationDelay: `${(i % 3) * 0.08}s` }}>
              <BenefitArt kind={b.art} tall={i < 4} />
              <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. COMPARISON — white, lock-up headers, two CTAs */}
      <section id="comparison" className="tone-light relative scroll-mt-20 bg-white py-20 text-fg sm:py-24">
        <Container>
          <SectionHeading eyebrow={a.comparison.eyebrow} title={a.comparison.title} />
          <div className="mx-auto mt-14 max-w-5xl overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#131228]/10">
                  <th className="w-40 py-4 pe-4" />
                  <th className="py-4 px-4 text-start"><ProgramLogo program="ib" /></th>
                  <th className="py-4 px-4 text-start"><ProgramLogo program="affiliates" /></th>
                </tr>
              </thead>
              <tbody>
                {a.comparison.rows.map((r) => (
                  <tr key={r.label} className="border-b border-[#131228]/10 align-top">
                    <th scope="row" className="py-6 pe-4 text-start font-medium text-fg-faint">{r.label}</th>
                    <td className="py-6 px-4 text-fg-muted">{r.a}</td>
                    <td className="py-6 px-4 text-fg-muted">{r.b}</td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td className="py-8 px-4"><a href={APPLY} className={primary()}>{a.comparison.ctaA}</a></td>
                  <td className="py-8 px-4"><a href={APPLY} className={primary()}>{a.comparison.ctaB}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 6. HOW IT WORKS — light grey, 2 x 2 */}
      <section id="steps" className="tone-light relative scroll-mt-20 bg-[#f4f5fb] py-20 text-fg sm:py-24">
        <Container>
          <SectionHeading eyebrow={a.steps.eyebrow} title={a.steps.title} subtitle={a.steps.sub} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {a.steps.items.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(19,18,40,.06)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-fg-faint">{a.steps.stepLabel} {i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. TESTIMONIALS — dark; marquee once real quotes exist */}
      <Section className="bg-[#0f0e24]">
        <SectionHeading eyebrow={a.testimonials.eyebrow} title={a.testimonials.title} />
        {a.testimonials.items.length > 0 ? (
          <div className="mt-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <Marquee duration={90}>
              {a.testimonials.items.map((t, i) => (
                <figure key={i} className={cn("w-80 shrink-0 rounded-2xl p-6", i % 2 ? "bg-[linear-gradient(135deg,#5b3fd6,#2f6bd6)] text-white" : "border border-white/8 bg-[#171634]")}>
                  <blockquote className="text-sm leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm font-semibold">{t.author}{t.role && <span className="block text-xs font-normal opacity-70">{t.role}</span>}</figcaption>
                </figure>
              ))}
            </Marquee>
          </div>
        ) : (
          <p className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/8 bg-[#171634] p-8 text-center text-sm text-fg-muted">{a.testimonials.pending}</p>
        )}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-fg-faint">{a.testimonials.note}</p>
      </Section>

      {/* 8. FAQ */}
      <section id="faq" className="tone-light relative scroll-mt-20 bg-[#f4f5fb] py-20 text-fg sm:py-24">
        <Container>
          <SectionHeading eyebrow={a.faq.eyebrow} title={a.faq.title} />
          <div className="mt-12"><FaqAccordion items={a.faq.items} /></div>
        </Container>
      </section>

      {/* 9. START EARNING TODAY — gradient band, two cards, application form */}
      <section id="apply" className={cn(GRADIENT, "scroll-mt-20 py-20 sm:py-24")}>
        <Container>
          <h2 className="text-center text-3xl font-medium text-white sm:text-5xl">{a.finalCta.title}</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {a.finalCta.cards.map((c) => (
              <div key={c.program} className="tone-light rounded-2xl bg-white p-8 text-fg">
                <ProgramLogo program={c.program} />
                <h3 className="mt-6 text-xl font-semibold">{c.headline}</h3>
                <p className="mt-1 text-sm text-fg-muted">{c.model}</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href="#apply-form" className={primary("w-full")}>{c.cta}</a>
                  <a href="#comparison" className={secondary("w-full")}>{a.learnMore}</a>
                </div>
              </div>
            ))}
          </div>
          <div id="apply-form" className="tone-light mx-auto mt-10 max-w-3xl scroll-mt-24 rounded-2xl bg-white p-6 text-fg sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">{a.apply.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-semibold">{a.apply.title}</h3>
            <p className="mt-1 text-sm text-fg-muted">{a.apply.sub}</p>
            <div className="mt-6"><ApplyForm copy={a.apply} /></div>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-white/70">{a.apply.risk}</p>
        </Container>
      </section>
    </div>
  );
}

function BadgeTile({ b }: { b: Badge }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-[#131228] px-4">
      {b.logo ? (
        <Image src={b.logo} alt={b.label} width={120} height={32} className="h-6 w-auto max-w-[7rem] object-contain brightness-0 invert" />
      ) : (
        <>
          {b.mark === "trustpilot" && <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#00B67A] text-sm text-white">★</span>}
          {b.mark === "google" && <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#4285F4]">G</span>}
          {b.mark === "wikifx" && <Icon name="verified" className="h-7 w-7 shrink-0 text-[#2ecc8a]" />}
          {b.mark === "fsc" && <Icon name="shield" className="h-7 w-7 shrink-0 text-[#8f94e8]" />}
          <span className="leading-tight"><span className="block text-sm font-semibold text-fg">{b.label}</span>{b.sub && <span className="block text-[11px] text-fg-faint">{b.sub}</span>}</span>
        </>
      )}
    </div>
  );
}

function ProgramCardView({ card, learnMore }: { card: ProgramCard; learnMore: string }) {
  return (
    <div className="tone-light flex h-full flex-col rounded-2xl bg-white p-8 text-fg">
      <ProgramLogo program={card.program} />
      <p className={cn("mt-6 text-[1.75rem] font-medium leading-tight", card.program === "ib" ? "text-[#6a46f0]" : "text-[#2f6bd6]")}>{card.model}</p>
      <ul className="mt-5 list-disc space-y-2 ps-5 text-sm text-fg-muted">{card.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      <div className="mt-8 flex flex-col gap-3">
        <a href={APPLY} className={primary("w-full")}>{card.cta}</a>
        <a href="#comparison" className={secondary("w-full")}>{learnMore}</a>
      </div>
    </div>
  );
}
