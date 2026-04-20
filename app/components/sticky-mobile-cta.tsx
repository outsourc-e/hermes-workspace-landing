"use client";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--background)]/95 px-4 py-3 backdrop-blur md:hidden">
      <a
        href="#setup"
        className="cta-primary flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium tracking-tight"
      >
        Install
      </a>
    </div>
  );
}
