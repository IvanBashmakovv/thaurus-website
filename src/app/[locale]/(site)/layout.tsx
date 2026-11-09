import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** Site shell: every regular page gets the global header and footer.
 *  Standalone landings live in the sibling `(landing)` group without them. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </>
  );
}
