import type { Testimonial } from "@/content/affiliate/types";
import { Marquee } from "@/components/affiliate/Marquee";

/** One auto-scrolling row of partner review cards (pauses on hover). */
export function Reviews({ items, authorLabel }: { items: Testimonial[]; authorLabel: string }) {
  return (
    <div className="[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <Marquee duration={110}>
        {items.map((t) => (
          <figure key={t.country} className="g-card flex h-[15.5rem] w-[20rem] shrink-0 flex-col p-6 sm:w-[22rem]">
            <span aria-hidden className="font-serif text-4xl leading-none text-[#8fa4ff]/70">“</span>
            <blockquote className="mt-1 flex-1 text-[15px] leading-relaxed text-white/90">{t.quote}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              <img
                src={`https://flagcdn.com/48x36/${t.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/96x72/${t.code.toLowerCase()}.png 2x`}
                width={32}
                height={24}
                alt={t.country}
                title={t.country}
                loading="lazy"
                className="h-6 w-8 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,.15)]"
              />
              <span className="text-sm font-semibold text-white">{authorLabel}</span>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </div>
  );
}
