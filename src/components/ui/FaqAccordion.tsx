import { JsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

/** Accessible accordion built on native <details>/<summary> (works without JS). */
export function FaqAccordion({ items, className }: { items: readonly FaqItem[]; className?: string }) {
  return (
    <div className={cn("mx-auto max-w-3xl divide-y divide-edge rounded-card border border-edge bg-surface-2/40", className)}>
      {items.map((item, idx) => (
        <details key={idx} className="group px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-medium text-fg [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="shrink-0 text-fg-muted transition-transform duration-200 group-open:rotate-45">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="pb-6 pe-8 text-fg-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Emits FAQPage structured data for rich results (audit §3.2). */
export function FaqJsonLd({ items }: { items: readonly FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}
