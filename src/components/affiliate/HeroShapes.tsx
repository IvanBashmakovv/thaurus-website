/**
 * Code-drawn hero object: glossy rings and a ribbon built from gradients, drifting
 * slowly. Gives the hero the depth a 3D render would, without an asset.
 */
export function HeroShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="hero-ring hero-ring-a" />
      <span className="hero-ring hero-ring-b" />
      <span className="hero-ribbon" />
      <span className="hero-glow" />
      <span className="hero-veil" />
    </div>
  );
}
