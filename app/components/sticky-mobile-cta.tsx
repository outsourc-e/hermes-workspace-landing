"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 720);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-indigo-500/12 bg-[#070710]/95 px-4 py-3 backdrop-blur-lg transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="https://github.com/outsourc-e/hermes-workspace"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glow flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
      >
        View on GitHub
      </a>
    </div>
  );
}
