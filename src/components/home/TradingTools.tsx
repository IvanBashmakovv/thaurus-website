import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { getHome } from "@/content/home";
import { tools, toolHref, routes } from "@/lib/site";

/** Tools listed exactly ONCE (audit §4.4 — duplicate section removed). */
export function TradingTools() {
  const { tools: t } = getHome(useLocale());
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow={t.heading.eyebrow}
        title={t.heading.title}
        subtitle={t.heading.subtitle}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.slug} href={toolHref(tool.slug)} className="group block">
            <Card className="flex h-full items-start gap-4 group-hover:border-primary/60">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-hover">
                <Icon name="tools" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-fg">{tool.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {t.blurbs[tool.slug]}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href={routes.toolsHub}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-hover hover:text-fg"
        >
          {t.viewAll}
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
