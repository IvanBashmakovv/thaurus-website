import Image from "next/image";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/cn";

/**
 * Background mosaic of real Thaurus brand photos (team / office / staff),
 * faded towards the bottom so content can sit on top. Decorative only.
 */
const TILES = [
  photos.team,
  photos.portrait,
  photos.office,
  photos.appPhone,
  photos.mt5Devices,
  photos.portrait,
  photos.team,
  photos.office,
  photos.appPhone,
  photos.team,
  photos.portrait,
  photos.office,
];

export function PhotoMosaic({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="grid h-full w-full grid-cols-4 gap-2 opacity-60 sm:grid-cols-6 sm:gap-3">
        {TILES.map((p, i) => (
          <div
            key={i}
            className={cn(
              "relative aspect-square overflow-hidden rounded-2xl bg-surface-2",
              i % 5 === 0 && "sm:row-span-2 sm:aspect-auto"
            )}
          >
            {p.src && (
              <Image
                src={p.src}
                alt=""
                fill
                sizes="(max-width: 640px) 25vw, 16vw"
                className="object-cover saturate-[0.85]"
              />
            )}
          </div>
        ))}
      </div>
      {/* Fade so the stats block below stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#131228]/60 via-[#131228]/40 to-[#131228]" />
    </div>
  );
}
