import { useLocale } from "next-intl";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { getHome } from "@/content/home";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  const { cta } = getHome(useLocale());
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-edge bg-surface-2 px-6 py-20 text-center sm:px-12">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(66,71,139,0.4) 0%, rgba(19,18,40,0) 70%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">{cta.subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.registerUrl} variant="primary" size="lg">
              {cta.primary}
            </ButtonLink>
            <ButtonLink href={siteConfig.demoUrl} variant="outline" size="lg">
              {cta.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
