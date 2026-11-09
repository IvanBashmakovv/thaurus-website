"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import {
  siteConfig,
  routes,
  markets,
  tools,
  marketHref,
  toolHref,
} from "@/lib/site";
import { cn } from "@/lib/cn";

type MenuItem = { label: string; href: string; description?: string };

export function Header() {
  const t = useTranslations("nav");
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Header adapts to the tone of the section it currently floats over.
  const [tone, setTone] = useState<"dark" | "light">("dark");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 12);
      const el = headerRef.current;
      if (!el) return;
      // Sample the section just below the header bar to read its tone.
      const probe = document.elementFromPoint(
        Math.floor(window.innerWidth / 2),
        el.offsetHeight + 8
      );
      const toned = probe?.closest(".tone-light, .tone-dark");
      if (toned && !el.contains(toned)) {
        setTone(toned.classList.contains("tone-light") ? "light" : "dark");
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const companyMenu: MenuItem[] = [
    { label: t("company"), href: routes.company },
    { label: t("license"), href: routes.license },
  ];
  const marketsMenu: MenuItem[] = [
    { label: t("marketsOverview"), href: routes.markets },
    ...markets.map((m) => ({ label: m.label, href: marketHref(m.slug) })),
  ];
  const toolsMenu: MenuItem[] = [
    { label: t("toolsOverview"), href: routes.toolsHub },
    ...tools.map((tool) => ({ label: tool.label, href: toolHref(tool.slug) })),
  ];

  return (
    <header
      ref={headerRef}
      className={cn(
        `tone-${tone} fixed inset-x-0 top-0 z-50 text-fg transition-colors duration-300`,
        scrolled || mobileOpen
          ? "border-b border-edge bg-surface/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="max-w-[92rem]">
        <div className="flex h-16 items-center justify-between gap-3 lg:h-18">
          <Link
            href={routes.home}
            aria-label={`${siteConfig.name} — home`}
            className="shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Logo className="h-6 lg:h-7" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <NavLink href={routes.home} label={t("home")} />
            <NavDropdown
              id="company"
              label={t("company")}
              items={companyMenu}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
            <NavDropdown
              id="markets"
              label={t("markets")}
              items={marketsMenu}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              wide
            />
            <NavDropdown
              id="tools"
              label={t("toolsShort")}
              items={toolsMenu}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              wide
            />
            <NavLink href={routes.accountTypes} label={t("accountsShort")} />
            <NavLink href={routes.affiliate} label={t("affiliate")} />
            <NavLink href={routes.blog} label={t("blog")} />
            <NavLink href={routes.faq} label={t("faq")} />
            <NavLink href={routes.contact} label={t("contact")} />
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <LocaleSwitcher label={t("language")} />
            </div>
            <ButtonLink
              href={siteConfig.loginUrl}
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("login")}
            </ButtonLink>
            <ButtonLink
              href={siteConfig.registerUrl}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("openAccount")}
            </ButtonLink>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-fg lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Burger open={mobileOpen} />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-edge bg-surface"
        >
          <Container>
            <div className="flex flex-col gap-1 py-5">
              <MobileLink href={routes.home} label={t("home")} onNavigate={() => setMobileOpen(false)} />
              <MobileGroup label={t("company")} items={companyMenu} onNavigate={() => setMobileOpen(false)} />
              <MobileGroup label={t("markets")} items={marketsMenu} onNavigate={() => setMobileOpen(false)} />
              <MobileGroup label={t("tools")} items={toolsMenu} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href={routes.accountTypes} label={t("accountTypes")} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href={routes.affiliate} label={t("affiliate")} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href={routes.blog} label={t("blog")} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href={routes.faq} label={t("faq")} onNavigate={() => setMobileOpen(false)} />
              <MobileLink href={routes.contact} label={t("contact")} onNavigate={() => setMobileOpen(false)} />

              <div className="mt-4 flex flex-col gap-3">
                <ButtonLink href={siteConfig.registerUrl} variant="primary" size="md">
                  {t("openAccount")}
                </ButtonLink>
                <ButtonLink href={siteConfig.loginUrl} variant="outline" size="md">
                  {t("login")}
                </ButtonLink>
                <div className="pt-2">
                  <LocaleSwitcher label={t("language")} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
    >
      {label}
    </Link>
  );
}

function NavDropdown({
  id,
  label,
  items,
  openMenu,
  setOpenMenu,
  wide,
}: {
  id: string;
  label: string;
  items: MenuItem[];
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
  wide?: boolean;
}) {
  const open = openMenu === id;
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onFocus={() => setOpenMenu(id)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpenMenu(open ? null : id)}
        className={cn(
          "flex items-center gap-1 whitespace-nowrap rounded-pill px-3 py-2 text-sm font-medium transition-colors",
          open ? "text-fg" : "text-fg-muted hover:text-fg"
        )}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className={cn("transition-transform", open && "rotate-180")}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className={cn(
            "absolute start-0 top-full z-50 pt-2",
            wide ? "w-64" : "w-56"
          )}
        >
          <ul className="overflow-hidden rounded-2xl border border-edge bg-surface-2 p-1.5 shadow-card">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className="block rounded-xl px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-xl px-3 py-3 text-base font-medium text-fg/90 transition-colors hover:bg-fg/5"
    >
      {label}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: MenuItem[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-fg/90 transition-colors hover:bg-fg/5"
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className={cn("transition-transform", open && "rotate-180")}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="ms-3 border-s border-edge ps-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2.5 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300",
          open ? "top-1.5 rotate-45" : "top-0"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300",
          open ? "top-1.5 -rotate-45" : "top-3"
        )}
      />
    </span>
  );
}
