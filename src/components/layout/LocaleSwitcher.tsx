"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

/** Switches locale while preserving the current page (audit §3 hreflang note). */
export function LocaleSwitcher({ label }: { label: string }) {
  const active = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function select(next: Locale) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        disabled={isPending}
        className="flex h-9 items-center gap-1.5 rounded-pill border border-fg/15 px-3 text-sm text-fg-muted transition-colors hover:border-fg/40 hover:text-fg"
      >
        <span aria-hidden>🌐</span>
        <span className="uppercase">{active}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 min-w-44 overflow-hidden rounded-2xl border border-edge bg-surface-2 p-1 shadow-card"
        >
          {locales.map((loc) => (
            <li key={loc} role="option" aria-selected={loc === active}>
              <button
                type="button"
                onClick={() => select(loc)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-fg/5",
                  loc === active ? "text-fg" : "text-fg-muted"
                )}
              >
                <span>{localeNames[loc]}</span>
                <span className="uppercase text-xs text-fg-faint">{loc}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
