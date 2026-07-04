import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
import { StoreBadges } from "@/components/StoreBadges";
import { BrandImage } from "@/components/ui/BrandImage";
import { getHome } from "@/content/home";
import { photos } from "@/lib/photos";
import { siteConfig, routes } from "@/lib/site";

export function MetaTrader() {
  const m = siteConfig.mt5;
  const mt5 = getHome(useLocale()).mt5;

  return (
    <Section tone="light" className="relative overflow-hidden">
      <div className="glow-blob -right-32 top-0 h-96 w-96 opacity-20" aria-hidden />
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Left: copy, ratings, badges */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/metatrader5.svg"
            alt="MetaTrader 5"
            className="h-12 w-auto sm:h-14"
            width={280}
            height={56}
          />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            {mt5.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{mt5.intro}</p>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {mt5.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-fg-muted">
                <span className="mt-0.5 text-success">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* Ratings */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{m.appStoreRating}</span>
                <Stars rating={Number(m.appStoreRating)} />
              </div>
              <div className="text-xs text-fg-muted">App Store</div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{m.googlePlayRating}</span>
                <Stars rating={Number(m.googlePlayRating)} />
              </div>
              <div className="text-xs text-fg-muted">Google Play</div>
            </div>
            <div className="text-sm text-fg-muted">
              <span className="font-semibold text-fg">{m.downloads}</span> {mt5.downloads} ·{" "}
              <span className="font-semibold text-fg">{m.reviews}</span> {mt5.reviews}
            </div>
          </div>

          <StoreBadges className="mt-6" />

          <Link
            href={routes.blog}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-hover hover:text-fg"
          >
            {mt5.readMore}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        {/* Right: animated device showcase */}
        <div className="relative">
          <div
            className="glow-blob animate-glow-pulse left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <div className="animate-float-y relative overflow-hidden rounded-card">
            <BrandImage
              photo={photos.mt5Devices}
              className="aspect-[4/3] w-full rounded-card"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <span className="shine-overlay" aria-hidden />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-fg-muted">
            {mt5.caption}
          </p>
        </div>
      </div>
    </Section>
  );
}
