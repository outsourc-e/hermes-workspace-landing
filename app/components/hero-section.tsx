import Image from "next/image";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section id="top" className="relative py-10 md:py-24">
      <Reveal className="mx-auto max-w-5xl text-center">
        <div className="mb-8 flex justify-center">
          <a
            href="https://github.com/outsourc-e/hermes-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-sm transition hover:border-indigo-300/25 hover:bg-white/[0.05]"
          >
            <Image
              src="/hermes-avatar.webp"
              alt="Hermes avatar"
              width={60}
              height={60}
              priority
              className="animate-logo-bounce h-[60px] w-[60px] rounded-full border border-white/12 object-cover opacity-95 transition-all duration-300 group-hover:scale-105 group-hover:[animation-play-state:paused] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            />
            <div className="text-left leading-tight">
              <p className="text-xl font-bold tracking-tight text-indigo-50 sm:text-2xl">
                Hermes <span className="text-indigo-400">Workspace</span>
              </p>
              <p className="text-xs text-slate-400">Open-source UI for Hermes Agent</p>
            </div>
          </a>
        </div>

        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/8 px-4 py-2 text-xs text-indigo-100 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
          Open-source UI for Hermes Agent
        </div>

        <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-indigo-50 sm:text-5xl lg:text-7xl">
          Your AI agent&apos;s{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
            command center
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg lg:text-xl">
          Chat, memory, skills, terminal, and files — one interface for everything
          your agent does.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#setup"
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400 hover:scale-[1.03] sm:w-auto"
          >
            Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/outsourc-e/hermes-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-400/20 bg-slate-950/70 px-7 py-3.5 text-base font-medium text-indigo-100 transition hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-slate-900/90 sm:w-auto"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(19,20,38,0.98),rgba(8,8,18,0.96))] shadow-[0_40px_120px_rgba(2,6,23,0.5)]">
            <div className="flex items-center justify-between border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="hidden rounded-md border border-white/8 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-slate-400 md:block">
                hermes-workspace.com
              </div>
              <div className="rounded-full border border-indigo-300/15 bg-indigo-400/10 px-2.5 py-1 text-[10px] font-medium text-indigo-100">
                Splash preview
              </div>
            </div>
            <div className="p-3 sm:p-5">
              <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_36%),linear-gradient(180deg,rgba(15,23,42,0.42),rgba(2,6,23,0.15))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-3">
                <Image
                  src="/screenshots/splash.png"
                  alt="Hermes Workspace splash screen"
                  width={1600}
                  height={1000}
                  priority
                  className="screenshot-frame h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}
