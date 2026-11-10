"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { cn } from "@/lib/cn";

type Item = { label: string; href: `#${string}` };

/** One-page landing header: lock-up, in-page anchors, language, one CTA. Nothing leads off the page. */
export function LandingHeader({ items, cta, languageLabel }: { items: Item[]; cta: string; languageLabel: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobile]);

  const link = "whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg";

  return (
    <header className={cn("tone-dark fixed inset-x-0 top-0 z-50 text-fg transition-colors duration-300", scrolled || mobile ? "border-b border-edge bg-surface/90 backdrop-blur-xl" : "border-b border-transparent")}>
      <Container className="max-w-[92rem]">
        <div className="flex h-18 items-center justify-between gap-3">
          <a href="#top" className="flex shrink-0 items-end gap-2" aria-label="Thaurus Partners" onClick={() => setMobile(false)}>
            <Logo className="h-5 sm:h-6" />
            <span className="hidden text-sm font-medium leading-none text-fg-muted sm:block">Partners</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
            {items.map((it) => <a key={it.label} href={it.href} className={link}>{it.label}</a>)}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher label={languageLabel} />
            <a href="#apply" className="btn-glow hidden h-10 items-center whitespace-nowrap px-5 text-sm font-semibold md:inline-flex">{cta}</a>
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-fg lg:hidden" aria-expanded={mobile} aria-label="Menu" onClick={() => setMobile((v) => !v)}>
              <span className="relative block h-4 w-5">
                <span className={cn("absolute left-0 block h-0.5 w-5 bg-current transition-all", mobile ? "top-1.5 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all", mobile && "opacity-0")} />
                <span className={cn("absolute left-0 block h-0.5 w-5 bg-current transition-all", mobile ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {mobile && (
        <div className="border-t border-edge bg-surface lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-5">
              {items.map((it) => <a key={it.label} href={it.href} onClick={() => setMobile(false)} className="rounded-xl px-3 py-3 text-base font-medium text-fg/90 hover:bg-fg/5">{it.label}</a>)}
              <a href="#apply" onClick={() => setMobile(false)} className="btn-glow mt-3 inline-flex h-12 w-full items-center justify-center whitespace-nowrap text-sm font-semibold">{cta}</a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
