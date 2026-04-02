"use client";

import { useState } from "react";
import { Brand } from "./brand";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#setup", label: "Setup" },
  { href: "#screenshots", label: "Screenshots" },
  {
    href: "https://github.com/outsourc-e/hermes-workspace",
    label: "GitHub",
    external: true,
  },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-500/10 bg-[#070710]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-10 md:py-4">
        <a href="#top" aria-label="Hermes Workspace home">
          <Brand compact />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="transition hover:text-indigo-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/outsourc-e/hermes-workspace"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 md:inline-flex"
        >
          <GitHubIcon className="h-4 w-4" />
          Get Started
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center justify-center gap-1.5 p-2 text-slate-300 transition hover:text-indigo-50 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-indigo-500/10 bg-[#070710]/95 px-4 pb-4 pt-2 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-indigo-500/10 hover:text-indigo-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/outsourc-e/hermes-workspace"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              <GitHubIcon className="h-4 w-4" />
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}
