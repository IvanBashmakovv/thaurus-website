import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center">
      <Container className="py-32 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-hover">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-fg-muted">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink href={`${siteConfig.url}/`} variant="primary" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
