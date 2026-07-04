import { useLocale } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BrandImage } from "@/components/ui/BrandImage";
import { buttonClasses } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { getHome } from "@/content/home";
import { photos } from "@/lib/photos";
import { routes } from "@/lib/site";

/**
 * Human/brand-photography band. The team photo is used as a full-bleed
 * background (not a focal card) with a dark gradient overlay for readability.
 */
export function PeopleBand() {
  const { people } = getHome(useLocale());
  return (
    <section className="tone-dark relative overflow-hidden py-28 text-fg sm:py-36">
      <BrandImage photo={photos.team} className="absolute inset-0 rounded-none" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c1e]/95 via-[#0d0c1e]/85 to-[#0d0c1e]/45" />

      <Container className="relative z-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-hover">
            {people.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{people.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{people.body}</p>

          <ul className="mt-8 space-y-3">
            {people.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-fg-muted">
                <span className="mt-0.5 text-success">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={routes.company} className={buttonClasses({ variant: "outline" })}>
              {people.about}
            </Link>
            <Link
              href={routes.license}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-hover hover:text-fg"
            >
              {people.license}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
