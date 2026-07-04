import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { siteConfig, routes } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { FaqAccordion, FaqJsonLd } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { photos } from "@/lib/photos";
import { getLicense } from "@/content/license";

const PATH = routes.license;
const TITLE = "Broker License & Regulation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Is Thaurus Regulated? FSC Mauritius Broker License GB22200432",
    description:
      "Yes — Thaurus Ltd is a regulated broker licensed by the FSC Mauritius (license GB22200432, SEC-2.1B Investment Dealer). See how client funds are protected and verify the license on the official FSC register.",
    path: PATH,
  });
}

export default async function LicensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const L = getLicense(locale);
  const ui = L.ui;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      <PageHeader
        eyebrow={ui.heroEyebrow}
        title={ui.heroTitle}
        intro={ui.heroIntro}
        crumbs={[{ name: TITLE, href: PATH }]}
      >
        {/* License badge card */}
        <div className="mt-10 inline-flex flex-col gap-4 rounded-card border border-primary/40 bg-surface-2/70 p-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-3">
            <Icon name="verified" className="h-9 w-9 text-success" />
            <div>
              <div className="text-xs uppercase tracking-wider text-fg-muted">
                {siteConfig.license.regulator}
              </div>
              <div className="text-xl font-bold text-fg">
                {`License ${siteConfig.license.number}`}
              </div>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="max-w-xs text-sm text-fg-muted">
            {siteConfig.license.category}
          </div>
          <ButtonLink
            href={siteConfig.license.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {ui.verifyBtn}
          </ButtonLink>
        </div>
      </PageHeader>

      {/* FSC intro — office photo as a full-bleed background */}
      <PhotoBand photo={photos.office}>
        <div className="max-w-xl">
          <SectionHeading align="start" eyebrow={ui.regulatorEyebrow} title={ui.regulatorTitle} />
          <div className="mt-5 space-y-4 text-fg-muted">
            <p>{ui.regulatorP1}</p>
            <p>{ui.regulatorP2}</p>
          </div>
        </div>
      </PhotoBand>

      {/* Client fund protection */}
      <Section tone="light">
        <SectionHeading
          eyebrow={ui.protectionEyebrow}
          title={ui.protectionTitle}
          subtitle={ui.protectionSub}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {L.fundProtection.map((item) => (
            <Card key={item.title}>
              <div className="relative inline-flex h-11 w-11 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl" aria-hidden />
                <Icon name={item.icon as IconName} className="relative h-7 w-7 text-primary-hover" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Mid-page CTA */}
      <CtaBand title={ui.midTitle} subtitle={ui.midSub} />

      {/* Verification steps */}
      <Section tone="light">
        <SectionHeading eyebrow={ui.verifyEyebrow} title={ui.verifyTitle} subtitle={ui.verifySub} />
        <ol className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {L.verificationSteps.map((s) => (
            <li key={s.step}>
              <Card className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 text-lg font-bold text-primary-hover">
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.body}</p>
              </Card>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <ButtonLink
            href={siteConfig.license.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            {ui.openRegister}
          </ButtonLink>
          <p className="mt-4 text-sm text-fg-muted">
            {ui.complianceQ}{" "}
            <a
              href={`mailto:${siteConfig.contact.complianceEmail}`}
              className="text-fg underline decoration-primary/60 underline-offset-4 hover:decoration-primary"
            >
              {siteConfig.contact.complianceEmail}
            </a>
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <SectionHeading eyebrow={ui.faqEyebrow} title={ui.faqTitle} />
        <div className="mt-12">
          <FaqAccordion items={L.licenseFaq} />
        </div>
        <FaqJsonLd items={L.licenseFaq} />
      </Section>

      {/* CTA */}
      <Section tone="light">
        <div className="rounded-card border border-edge bg-surface-2 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">{ui.ctaTitle}</h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.registerUrl} variant="primary" size="lg">
              {ui.openAccount}
            </ButtonLink>
            <Link
              href={routes.accountTypes}
              className={buttonClasses({ variant: "outline", size: "lg" })}
            >
              {ui.compareAccounts}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
