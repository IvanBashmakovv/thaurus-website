import { setRequestLocale } from "next-intl/server";
import { getAffiliate } from "@/content/affiliate";
import { LandingHeader } from "@/components/affiliate/LandingHeader";
import { LandingFooter } from "@/components/affiliate/LandingFooter";

/** Partner-site shell: every partner page (home + sub-pages) shares this header and footer. */
export default async function PartnerLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const a = getAffiliate(locale);
  return (
    <div className="flex min-h-dvh flex-col">
      <LandingHeader menus={a.nav.menus} why={a.nav.why} cta={a.cta} languageLabel={a.nav.language} />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
  );
}
