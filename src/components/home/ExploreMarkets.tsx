import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { getHome } from "@/content/home";
import { marketHref, routes } from "@/lib/site";

export function ExploreMarkets() {
  const { markets } = getHome(useLocale());
  return (
    <Section tone="light" className="relative overflow-hidden">
      <div className="glow-blob right-0 top-20 h-96 w-96 opacity-15" aria-hidden />
      <SectionHeading
        eyebrow={markets.heading.eyebrow}
        title={markets.heading.title}
        subtitle={markets.heading.subtitle}
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {markets.cards.map((m) => (
          <Link key={m.slug} href={marketHref(m.slug)} className="group block">
            <Card className="h-full group-hover:border-primary/60">
              <h3 className="text-xl font-semibold text-fg">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{m.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-hover">
                {markets.trade} {m.title}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Card>
          </Link>
        ))}
        <Link href={routes.markets} className="group block">
          <Card className="flex h-full items-center justify-center border-dashed text-center group-hover:border-primary/60">
            <span className="inline-flex items-center gap-2 text-base font-semibold text-fg">
              {markets.viewAll}
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Card>
        </Link>
      </div>
    </Section>
  );
}
