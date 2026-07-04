import { siteConfig } from "@/lib/site";

/** Renders a JSON-LD <script>. `data` must be a plain serializable object. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; escape `<` to avoid breaking out of the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** BreadcrumbList structured data (audit §3.4) for inner pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

/**
 * Global Organization + FinancialService graph, emphasizing the FSC license
 * (E-E-A-T / trust, audit §3.2). Rendered once in the root layout.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/thaurus-wordmark-color.png`,
        description: siteConfig.description,
        email: siteConfig.contact.supportEmail,
        telephone: siteConfig.contact.phones,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          addressCountry: "MU",
        },
        areaServed: "Worldwide",
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: `${siteConfig.license.regulatorFull} — ${siteConfig.license.category}`,
          identifier: siteConfig.license.number,
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: siteConfig.license.regulatorFull,
            url: siteConfig.license.registerUrl,
          },
        },
        sameAs: [
          siteConfig.social.instagram.url,
          siteConfig.social.facebook.url,
          siteConfig.social.tiktok.url,
          siteConfig.social.trustpilot.url,
        ],
      },
    ],
  };
  return <JsonLd data={data} />;
}
