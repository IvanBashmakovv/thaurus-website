import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Photo } from "@/lib/photos";

/**
 * Renders brand photography, or a tasteful branded placeholder panel while the
 * real file is missing (photo.src === null). Wrap in a sized container.
 */
export function BrandImage({
  photo,
  className,
  sizes = "100vw",
  priority = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!photo.src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-card border border-edge bg-surface-2",
          className
        )}
        aria-hidden
      >
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="glow-blob left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-fg-faint">
            Photo
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-card", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
