import Image from "next/image";
import { useLocale } from "next-intl";
import { Container } from "@/components/ui/Container";
import { pressLogos, getHome } from "@/content/home";

/** Press / media strip — outlet logos in a single line. */
export function Press() {
  const { pressTitle, pressNote } = getHome(useLocale());
  return (
    <section className="tone-light bg-surface py-16 text-fg sm:py-20">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-fg-faint">
          {pressTitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
          {pressLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read the Thaurus feature on ${logo.name}`}
              className="inline-flex transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-6 w-auto object-contain opacity-80 transition-opacity hover:opacity-100 sm:h-7"
              />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-fg-muted">{pressNote}</p>
      </Container>
    </section>
  );
}
