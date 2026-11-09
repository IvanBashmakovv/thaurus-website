"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { buttonClasses } from "@/components/ui/Button";
import { routes } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { Menu } from "@/content/affiliate/types";

const APPLY = `${routes.affiliate}#apply`;

/** Partner-site header: lock-up, three dropdown menus, "why" link, language, one CTA. */
export function LandingHeader({ menus, why, cta, languageLabel }: { menus: Menu[]; why: { label: string; href: string }; cta: string; languageLabel: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = mobile ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobile]);

  return (
    <header className={cn("tone-dark fixed inset-x-0 top-0 z-50 text-fg transition-colors duration-300", scrolled || mobile ? "border-b border-edge bg-surface/90 backdrop-blur-xl" : "border-b border-transparent")}>
      <Container className="max-w-[92rem]">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-18">
          <Link href={routes.affiliate} className="flex shrink-0 items-end gap-2" aria-label="Thaurus Partners" onClick={() => setMobile(false)}>
            <Logo className="h-5 sm:h-6" />
            <span className="hidden text-sm font-medium leading-none text-fg-muted sm:block">Partners</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections" onMouseLeave={() => setOpen(null)}>
            {menus.map((m) => (
              <div key={m.label} className="relative" onMouseEnter={() => setOpen(m.label)}>
                <button type="button" aria-haspopup="true" aria-expanded={open === m.label} onClick={() => setOpen(open === m.label ? null : m.label)} className={cn("flex items-center gap-1 whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium transition-colors", open === m.label ? "text-fg" : "text-fg-muted hover:text-fg")}>
                  {m.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className={cn("transition-transform", open === m.label && "rotate-180")}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                {open === m.label && (
                  <div className="absolute start-0 top-full z-50 w-60 pt-2">
                    <ul className="overflow-hidden rounded-2xl border border-edge bg-surface-2 p-1.5 shadow-card">
                      {m.items.map((it) => <li key={it.href}><Link href={it.href} onClick={() => setOpen(null)} className="block rounded-xl px-3 py-2.5 text-sm text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg">{it.label}</Link></li>)}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <Link href={why.href} className="whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg">{why.label}</Link>
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher label={languageLabel} />
            <Link href={APPLY} className={buttonClasses({ variant: "primary", size: "md", className: "hidden whitespace-nowrap px-4 text-sm md:inline-flex" })}>{cta}</Link>
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
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-edge bg-surface lg:hidden">
          <Container>
            <div className="flex flex-col gap-4 py-5">
              {menus.map((m) => (
                <div key={m.label}>
                  <p className="px-3 text-xs font-semibold uppercase tracking-wider text-fg-faint">{m.label}</p>
                  <ul className="mt-1">{m.items.map((it) => <li key={it.href}><Link href={it.href} onClick={() => setMobile(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-fg/90 hover:bg-fg/5">{it.label}</Link></li>)}</ul>
                </div>
              ))}
              <Link href={why.href} onClick={() => setMobile(false)} className="rounded-xl px-3 py-3 text-base font-medium text-fg/90 hover:bg-fg/5">{why.label}</Link>
              <Link href={APPLY} onClick={() => setMobile(false)} className={buttonClasses({ variant: "primary", size: "lg", className: "mt-2 w-full whitespace-nowrap" })}>{cta}</Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
