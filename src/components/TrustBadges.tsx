import { Stars } from "@/components/ui/Stars";

// All trust badges link to the official WikiFX dealer profile.
const WIKIFX = "https://www.wikifx.com/en/dealer/1693167330.html";

const pill =
  "inline-flex items-center gap-2 rounded-pill border border-fg/15 bg-fg/5 px-4 py-2 text-sm text-fg backdrop-blur transition-colors hover:border-fg/35 hover:bg-fg/10";

function TrustpilotMark() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#00B67A]">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="#fff" aria-hidden>
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.88l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85z" />
      </svg>
    </span>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      <a href={WIKIFX} target="_blank" rel="noopener noreferrer" className={pill} aria-label="Trustpilot rating 4.4 — verified on WikiFX">
        <TrustpilotMark />
        <span className="font-semibold">Trustpilot</span>
        <Stars rating={4.4} className="hidden sm:inline-flex" />
        <span className="font-bold">4.4</span>
      </a>

      <a href={WIKIFX} target="_blank" rel="noopener noreferrer" className={pill} aria-label="Google reviews rating 4.6 — verified on WikiFX">
        <GoogleMark />
        <span className="font-semibold">Google</span>
        <Stars rating={4.6} className="hidden sm:inline-flex" />
        <span className="font-bold">4.6</span>
      </a>

      <a href={WIKIFX} target="_blank" rel="noopener noreferrer" className={pill} aria-label="WikiFX verified broker">
        <span className="font-bold tracking-tight">WikiFX</span>
        <span className="rounded-pill bg-success/20 px-2 py-0.5 text-xs font-semibold text-success">
          Verified
        </span>
      </a>
    </div>
  );
}
