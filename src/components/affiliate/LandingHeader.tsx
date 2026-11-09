"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export type AnchorItem = { label: string; href: `#${string}` };

/** Landing-only header: logo, in-page anchors, language, one CTA. No site links. */
export function LandingHeader({
  items,
  cta,
  ctaHref,
  languageLabel,
}: {
  items: AnchorItem[];
  cta: string;
  ctaHref: `#${string}`;
  languageLabel: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "tone-dark fixed inset-x-0 top-0 z-50 text-fg transition-colors duration-300",
        scrolled
          ? "border-b border-edge bg-surface/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="max-w-[92rem]">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-18">
          <a href="#top" onClick={(e) => go(e, "#top")} aria-label="Back to top" className="shrink-0">
            <Logo className="h-5 sm:h-6 lg:h-7" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
            {items.map((it) => (
              <a
                key={it.href + it.label}
                href={it.href}
                onClick={(e) => go(e, it.href)}
                className="whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher label={languageLabel} />
            <a
              href={ctaHref}
              onClick={(e) => go(e, ctaHref)}
              className={buttonClasses({ variant: "primary", size: "md", className: "whitespace-nowrap px-4 text-sm" })}
            >
              {cta}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
