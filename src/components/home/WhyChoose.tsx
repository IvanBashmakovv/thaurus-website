import { useLocale } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { getHome } from "@/content/home";

export function WhyChoose() {
  const { why } = getHome(useLocale());
  return (
    <Section tone="light" className="overflow-hidden">
      <div className="glow-blob -left-40 top-10 h-96 w-96 opacity-30" aria-hidden />
      <SectionHeading
        eyebrow={why.heading.eyebrow}
        title={why.heading.title}
        subtitle={why.heading.subtitle}
      />
      <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {why.items.map((item) => (
          <Card key={item.title} className="group relative hover:border-primary/50 hover:bg-surface-2">
            <div className="relative inline-flex h-11 w-11 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl transition-opacity group-hover:bg-primary/50" aria-hidden />
              <Icon name={item.icon} className="relative h-7 w-7 text-primary-hover" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
