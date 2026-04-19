import Image from "next/image";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative py-10 md:py-24">
      {/* Subtle ghost frieze — Greek meander + column motifs */}
      <div className="ghost-frieze hidden md:block" />

      <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Avatar card — now warm cream with terracotta rim */}
        <div className="mb-10 flex justify-center">
          <a
            href="https://github.com/outsourc-e/hermes-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 border border-[color:var(--border)] bg-[color:var(--panel)] px-5 py-3 shadow-sm backdrop-blur-sm transition hover:border-[color:var(--brand)]/60 hover:bg-[color:var(--panel-strong)]"
          >
            <Image
              src="/hermes-avatar.webp"
              alt="Hermes avatar"
              width={56}
              height={56}
              priority
              className="animate-logo-bounce h-[56px] w-[56px] rounded-full border border-[color:var(--border-strong)] object-cover transition-all duration-300 group-hover:scale-105 group-hover:[animation-play-state:paused]"
            />
            <div className="text-left leading-tight">
              <p className="display text-2xl font-medium tracking-tight text-[color:var(--foreground)]">
                Project <span className="text-[color:var(--brand)]">Workspace</span>
              </p>
              <p className="label mt-1 text-[0.6875rem] tracking-[0.22em]">
                Open-source UI for Project Agent
              </p>
            </div>
          </a>
        </div>

        {/* Small status pill — terracotta accent */}
        <div className="mx-auto inline-flex items-center gap-2 border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-1.5 text-[0.8125rem] text-[color:var(--muted)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--brand)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--brand)]" />
          </span>
          <span className="label text-[0.6875rem] tracking-[0.22em]">
            v2 · clone, don&apos;t fork
          </span>
        </div>

        {/* Hero headline — Fraunces serif, Greek lapidary feel */}
        <h1 className="display-hero mx-auto mt-6 max-w-4xl text-balance text-[color:var(--foreground)]">
          Your AI agent&apos;s
          <br className="hidden sm:inline" />{" "}
          <span className="italic text-[color:var(--brand)]">command center</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
          Chat, memory, skills, terminal, and files — one interface for everything
          your agent does.
        </p>

        {/* One-liner install — featured prominently */}
        <div className="mx-auto mt-10 max-w-2xl">
          <p className="label mb-3 text-[0.6875rem] tracking-[0.22em] text-[color:var(--muted)]">
            One-line install
          </p>
          <div className="terminal text-left font-mono text-[0.8125rem]">
            <span className="text-[color:var(--accent-gold)]">$</span>{" "}
            <span className="text-[color:var(--foreground)]">
              curl -fsSL hermes-workspace.com/install.sh | bash
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#setup"
            className="btn-terracotta inline-flex w-full items-center justify-center gap-2 px-7 py-3 text-[0.9375rem] font-medium tracking-wide sm:w-auto"
          >
            Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/outsourc-e/hermes-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 border border-[color:var(--border-strong)] bg-[color:var(--panel)] px-7 py-3 text-[0.9375rem] font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--brand)]/60 hover:bg-[color:var(--panel-strong)] sm:w-auto"
          >
            <GitHubIcon className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div className="relative z-10 mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden border-2 border-[color:var(--border-strong)] bg-[color:var(--background-deep)] shadow-lg">
            <video
              src="/demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}
