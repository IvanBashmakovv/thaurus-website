import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

/** Inner-page hero: breadcrumbs + eyebrow + H1 + intro, offset for fixed header. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="tone-dark relative overflow-hidden bg-surface pt-32 pb-12 sm:pt-36">
      <AuroraBackground className="opacity-70" />
      <Container className="relative z-10">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary-hover">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {intro}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
