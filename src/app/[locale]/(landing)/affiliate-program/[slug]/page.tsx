import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { subPages, getSubPage } from "@/content/affiliate/pages";
import { getAffiliate } from "@/content/affiliate";
import type { Txt, SubSection } from "@/content/affiliate/types";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/affiliate/Reveal";
import { CountUp } from "@/components/affiliate/CountUp";
import { BenefitArt } from "@/components/affiliate/BenefitArt";
import { ProgramLogo } from "@/components/affiliate/ProgramLogo";
import { ShaderBackdrop } from "@/components/affiliate/ShaderBackdrop";
import { cn } from "@/lib/cn";

const APPLY = `${routes.affiliate}#apply`;
const GRADIENT = "tone-dark relative overflow-hidden text-fg bg-[linear-gradient(135deg,#131228_0%,#262a63_55%,#42478b_100%)]";

export function generateStaticParams() {
  return subPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getSubPage(slug);
  if (!p) return {};
  return buildMetadata({ locale: locale as Locale, title: p.metaTitle, description: p.metaDescription, path: `${routes.affiliate}/${p.slug}` });
}

function Todo({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1 rounded-md border border-dashed border-amber-400/70 bg-amber-400/10 px-1.5 py-0.5 text-xs font-medium text-amber-300"><span className="font-bold">TODO</span>{children}</span>;
}
const T = ({ v }: { v: Txt }) => (typeof v === "string" ? <>{v}</> : <Todo>{v.todo}</Todo>);

export default async function PartnerSubPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const p = getSubPage(slug);
  if (!p) notFound();
  const a = getAffiliate(locale);
  const faq = p.sections.find((s) => s.kind === "faq");

  return (
    <>
      {faq && faq.kind === "faq" && <FaqJsonLd items={faq.items} />}

      <section className="tone-dark relative overflow-hidden bg-surface pt-32 pb-16 text-fg sm:pt-40 sm:pb-20">
        <ShaderBackdrop tone="dark" speed={0.7} />
        <Container className="relative z-10">
          <div className="rise max-w-3xl">
            {p.hero.program ? <ProgramLogo program={p.hero.program} size="lg" /> : <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fg-faint">{p.hero.eyebrow}</p>}
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{p.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-fg-muted"><T v={p.hero.sub as Txt} /></p>
            <div className="mt-8"><Link href={APPLY} className={buttonClasses({ variant: "primary", size: "lg", className: "whitespace-nowrap" })}>{a.cta}</Link></div>
          </div>
        </Container>
      </section>

      {p.sections.map((s, i) => <Block key={i} s={s} cta={a.cta} />)}

      <section className={cn(GRADIENT, "py-20 sm:py-24")}>
        <Container className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">{a.apply.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-fg-muted">{a.apply.sub}</p>
            <div className="mt-8"><Link href={APPLY} className={buttonClasses({ variant: "primary", size: "lg", className: "whitespace-nowrap" })}>{a.cta}</Link></div>
          </Reveal>
          <p className="mx-auto mt-8 max-w-3xl text-xs text-fg-faint">{a.apply.risk}</p>
        </Container>
      </section>
    </>
  );
}

function Block({ s, cta }: { s: SubSection; cta: string }) {
  switch (s.kind) {
    case "cards":
      return (
        <Section tone={s.tone ?? "dark"}>
          <Reveal><SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.sub} /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 0.1}>
                <Card className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15"><Icon name={it.icon} className="h-6 w-6 text-primary-hover" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted"><T v={it.body} /></p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      );
    case "split":
      return (
        <Section tone={s.tone ?? "dark"}>
          <div className={cn("grid items-center gap-12 lg:grid-cols-2", s.flip && "lg:[&>*:first-child]:order-2")}>
            <Reveal>
              <SectionHeading align="start" eyebrow={s.eyebrow} title={s.title} />
              <p className="mt-4 text-lg text-fg-muted"><T v={s.body} /></p>
              <ul className="mt-6 space-y-3">{s.facts.map((f, i) => <li key={i} className="flex items-start gap-3 text-fg-muted"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-hover" /><span><T v={f} /></span></li>)}</ul>
              <div className="mt-8"><Link href={APPLY} className={buttonClasses({ variant: "primary", className: "whitespace-nowrap" })}>{cta}</Link></div>
            </Reveal>
            <Reveal delay={0.15}><Card className="p-8"><BenefitArt kind={s.art} tall /></Card></Reveal>
          </div>
        </Section>
      );
    case "steps":
      return (
        <Section tone={s.tone ?? "light"}>
          <Reveal><SectionHeading eyebrow={s.eyebrow} title={s.title} /></Reveal>
          <div className={cn("mt-14 grid gap-6 sm:grid-cols-2", s.items.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
            {s.items.map((st, i) => (
              <Reveal key={st.title} delay={i * 0.1}>
                <Card className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-hover">Step {i + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-fg">{st.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted"><T v={st.body} /></p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      );
    case "table":
      return (
        <Section tone={s.tone ?? "light"}>
          <Reveal><SectionHeading eyebrow={s.eyebrow} title={s.title} /></Reveal>
          <Reveal delay={0.15} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead><tr className="border-b border-edge">{s.cols.map((c) => <th key={c} className="py-4 px-4 text-start text-base font-bold text-fg">{c}</th>)}</tr></thead>
              <tbody>{s.rows.map((r) => <tr key={r.label} className="border-b border-edge align-top"><th scope="row" className="py-5 px-4 text-start font-medium text-fg">{r.label}</th>{r.cells.map((c, i) => <td key={i} className="py-5 px-4 text-fg-muted"><T v={c} /></td>)}</tr>)}</tbody>
            </table>
          </Reveal>
          {s.note && <p className="mt-6 text-center text-xs text-fg-faint">{s.note}</p>}
        </Section>
      );
    case "stats":
      return (
        <Section>
          <Reveal><SectionHeading eyebrow={s.eyebrow} title={s.title} /></Reveal>
          <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {s.items.map((st, i) => <Reveal key={st.label} delay={i * 0.1} className="text-center"><dd className="text-3xl font-bold tabular-nums text-fg sm:text-4xl">{st.num !== undefined ? <CountUp to={st.num} decimals={st.decimals} suffix={st.suffix} /> : st.text}</dd><dt className="mt-1 text-sm text-fg-muted">{st.label}</dt></Reveal>)}
          </dl>
        </Section>
      );
    case "faq":
      return (
        <Section tone="light">
          <Reveal><SectionHeading eyebrow="FAQ" title={s.title} /></Reveal>
          <Reveal delay={0.15} className="mt-12"><FaqAccordion items={s.items} /></Reveal>
        </Section>
      );
    case "other":
      return (
        <Section>
          <Reveal className="mx-auto max-w-2xl rounded-card border border-edge bg-surface-2/70 p-10 text-center">
            <ProgramLogo program={s.program} size="lg" className="justify-center" />
            <h2 className="mt-6 text-2xl font-bold text-fg sm:text-3xl">{s.title}</h2>
            <p className="mt-3 text-fg-muted">{s.sub}</p>
            <Link href={s.href} className={buttonClasses({ variant: "outline", className: "mt-8 whitespace-nowrap" })}>Learn more</Link>
          </Reveal>
        </Section>
      );
  }
}
