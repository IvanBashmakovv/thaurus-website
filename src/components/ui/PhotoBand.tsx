import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { BrandImage } from "@/components/ui/BrandImage";
import type { Photo } from "@/lib/photos";

/**
 * A section that uses a brand photo as a full-bleed background (not a framed
 * image) with a dark gradient overlay for readability. Always a dark tone.
 */
export function PhotoBand({
  photo,
  className,
  containerClassName,
  sizes = "100vw",
  children,
}: {
  photo: Photo;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "tone-dark relative overflow-hidden py-24 text-fg sm:py-32",
        className
      )}
    >
      <BrandImage photo={photo} className="absolute inset-0 rounded-none" sizes={sizes} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c1e]/95 via-[#0d0c1e]/85 to-[#0d0c1e]/45" />
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
