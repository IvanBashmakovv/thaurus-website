import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { routing, isRtl, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import "../globals.css";

// Self-hosted variable Figtree (OFL, files in src/fonts): no Google Fonts
// request at build time, same font on every deployment.
const figtree = localFont({
  src: [
    { path: "../../fonts/figtree-latin-wght-normal.woff2", weight: "300 700", style: "normal" },
    { path: "../../fonts/figtree-latin-wght-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-figtree",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#131228",
  colorScheme: "dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const base = buildMetadata({
    locale: locale as Locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/",
  });
  return {
    ...base,
    title: {
      default: t("metaTitle"),
      template: `%s | ${siteConfig.name}`,
    },
    // Keep Search Console verification (audit §3.1) — must not be lost.
    verification: { google: siteConfig.googleSiteVerification },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={isRtl(locale) ? "rtl" : "ltr"}
      className={figtree.variable}
    >
      <body className="flex min-h-dvh flex-col bg-surface text-fg antialiased">
        <div className="grain-overlay" aria-hidden />
        <NextIntlClientProvider messages={messages}>
          <OrganizationJsonLd />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
