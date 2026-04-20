// Background effects — editorial restraint.
// The body has a subtle paper-grain (globals.css). Nothing else floats.
// Architectural grid is rendered inline in the hero only, not page-wide.

export function BackgroundEffects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Faint vertical column rules — museum catalog gridding */}
      <div
        className="absolute inset-0 architectural-grid"
        style={{ opacity: 0.5 }}
      />
    </div>
  );
}
