"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";
const STORAGE_KEY = "hermes-workspace-landing-theme";

function apply(mode: Mode) {
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.style.colorScheme = mode;
  localStorage.setItem(STORAGE_KEY, mode);
}

export function SiteThemeToggle({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next = stored === "dark" ? "dark" : "light";
    setMode(next);
    apply(next);
  }, []);

  function toggle() {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    apply(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={compact ? "site-theme-toggle site-theme-toggle-compact" : "site-theme-toggle"}
      aria-label={mode === "dark" ? "Switch to light theme" : "Switch to dark Hermes theme"}
      title={mode === "dark" ? "Switch to light theme" : "Switch to dark Hermes theme"}
    >
      {mode === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
      <span>{mode === "dark" ? "Light" : "Hermes Dark"}</span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
