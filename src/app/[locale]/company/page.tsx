import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { siteConfig, routes } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoBand } from "@/components/ui/PhotoBand";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink, buttonClasses } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { photos } from "@/lib/photos";
import { getCompany } from "@/content/company";

const PATH = routes.company;
const TITLE = "Company";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "About Thaurus | The Smart Way to Invest",
    description:
      "Thaurus is a regulated multi-asset broker built by traders, analysts and educators. Learn about our mission, values and the team behind the platform.",
    path: PATH,
  });
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getCompany(locale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: localizedUrl(locale as Locale, routes.home) },
          { name: TITLE, url: localizedUrl(locale as Locale, PATH) },
        ]}
      />

      <PageHeader
        eyebrow={c.heroEyebrow}
        title={c.heroTitle}
        intro={c.heroIntro}
        crumbs={[{ name: TITLE, href: PATH }]}
      />

      {/* Mission — team photo as background */}
      <PhotoBand photo={photos.team}>
        <div className="max-w-xl">
          <SectionHeading align="start" eyebrow={c.missionEyebrow} title={c.missionTitle} />
          <div className="mt-5 space-y-4 text-fg-muted">
            <p>{c.missionP1}</p>
            <p>{c.missionP2}</p>
          </div>
          <Link href={routes.license} className={buttonClasses({ variant: "outline", className: "mt-8" })}>
            {c.licenseBtn}
          </Link>
        </div>
      </PhotoBand>

      {/* Values */}
      <Section tone="light">
        <SectionHeading
          eyebrow={c.valuesEyebrow}
          title={c.valuesTitle}
          subtitle={c.valuesSub}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {c.values.map((v) => (
            <Card key={v.title}>
              <div className="relative inline-flex h-11 w-11 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl" aria-hidden />
                <Icon name={v.icon} className="relative h-7 w-7 text-primary-hover" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-fg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team — office photo as background */}
      <PhotoBand photo={photos.office}>
        <div className="max-w-xl">
          <SectionHeading align="start" eyebrow={c.teamEyebrow} title={c.teamTitle} />
          <p className="mt-5 text-fg-muted">{c.teamBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.registerUrl} variant="primary">
              {c.openAccount}
            </ButtonLink>
            <Link href={routes.contact} className={buttonClasses({ variant: "outline" })}>
              {c.contactUs}
            </Link>
          </div>
        </div>
      </PhotoBand>

      <CtaBand title={c.ctaTitle} subtitle={c.ctaSub} />
    </>
  );
}
