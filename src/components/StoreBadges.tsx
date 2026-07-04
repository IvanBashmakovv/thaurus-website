/** Official-style App Store / Google Play download badges (inline SVG marks). */

const APP_STORE = "https://apps.apple.com/app/metatrader-5/id413251709";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5";

const badge =
  "inline-flex items-center gap-3 rounded-xl border border-white/15 bg-[#0b0a18] px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5";

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
      <path d="M3.6 1.8 13.8 12 3.6 22.2a1 1 0 0 1-.6-.92V2.72a1 1 0 0 1 .6-.92z" fill="#00D2FF" />
      <path d="M16.95 8.85 13.8 12l3.15 3.15 4.24-2.43c.96-.55.96-1.9 0-2.45L16.95 8.85z" fill="#FFC400" />
      <path d="M3.6 22.2 13.8 12l3.15 3.15-9.83 5.62c-.86.49-1.9.49-2.76 0z" fill="#FF3D47" />
      <path d="M16.95 8.85 13.8 12 3.6 1.8c.86-.49 1.9-.49 2.76 0l9.83 5.62z" fill="#00F076" />
    </svg>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className={badge}>
        <AppleMark />
        <span className="text-left leading-tight">
          <span className="block text-[0.65rem] opacity-80">Download on the</span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </a>
      <a href={GOOGLE_PLAY} target="_blank" rel="noopener noreferrer" className={badge}>
        <PlayMark />
        <span className="text-left leading-tight">
          <span className="block text-[0.65rem] opacity-80">GET IT ON</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
