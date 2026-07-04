import { useLocale } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { getHome } from "@/content/home";

export function HomeFaq() {
  const { faq } = getHome(useLocale());
  return (
    <Section id="faq" tone="light">
      <SectionHeading
        eyebrow={faq.heading.eyebrow}
        title={faq.heading.title}
        subtitle={faq.heading.subtitle}
      />
      <div className="mt-12">
        <FaqAccordion items={faq.items} />
      </div>
      <FaqJsonLd items={faq.items} />
    </Section>
  );
}
