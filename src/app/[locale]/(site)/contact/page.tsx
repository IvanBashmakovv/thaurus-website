import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildMetadata, localizedUrl } from "@/lib/seo";
import { siteConfig, routes } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { BrandImage } from "@/components/ui/BrandImage";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { photos } from "@/lib/photos";
import { getContact } from "@/content/contact";
import { ContactForm } from "./ContactForm";

const PATH = routes.contact;
const TITLE = "Contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    title: "Contact Us | Support & Enquiries",
    description:
      "Get in touch with Thaurus. Email support@thaurus.com, call our team, or send us a message — we typically reply within 24 hours.",
    path: PATH,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = getContact(locale);

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

      <Section tone="light" className="pt-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Contact info — portrait photo as background */}
          <div className="tone-dark relative overflow-hidden rounded-card text-fg">
            <BrandImage
              photo={photos.portrait}
              className="absolute inset-0 rounded-none"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0c1e]/80 via-[#0d0c1e]/88 to-[#0d0c1e]/96" />
            <div className="relative z-10 p-8 sm:p-10">
              <h2 className="text-xl font-bold">{c.reachTeam}</h2>
              <dl className="mt-6 space-y-6">
                <ContactRow icon="support" label={c.emailLabel}>
                  <a href={`mailto:${siteConfig.contact.supportEmail}`} className="hover:text-fg">
                    {siteConfig.contact.supportEmail}
                  </a>
                </ContactRow>

                <ContactRow icon="globe" label={c.phoneLabel}>
                  <div className="space-y-1">
                    {siteConfig.contact.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-fg">
                        {p}
                      </a>
                    ))}
                  </div>
                </ContactRow>

                <ContactRow icon="shield" label={c.officeLabel}>
                  <p>
                    {siteConfig.legalName} — {siteConfig.contact.address.full}
                  </p>
                  <p className="mt-1 text-sm text-fg-faint">
                    {siteConfig.license.regulator} · License {siteConfig.license.number}
                  </p>
                </ContactRow>
              </dl>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-card border border-edge bg-surface-2 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-fg">{c.formTitle}</h2>
            <p className="mt-1 text-sm text-fg-muted">{c.formSub}</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: "support" | "globe" | "shield";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-primary/25 blur-lg" aria-hidden />
        <Icon name={icon} className="relative h-6 w-6 text-primary-hover" />
      </div>
      <div>
        <dt className="text-xs uppercase tracking-wider text-fg-faint">{label}</dt>
        <dd className="mt-1 text-fg/90">{children}</dd>
      </div>
    </div>
  );
}
