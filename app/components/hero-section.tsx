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
            className="group inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/favicon.svg"
              alt="Hermes Workspace"
              className="animate-logo-bounce h-20 w-20 opacity-95 transition-all duration-300 group-hover:scale-110 group-hover:[animation-play-state:paused] group-hover:drop-shadow-[0_0_30px_rgba(99,102,241,0.65)] md:h-28 md:w-28"
            />
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
          <div className="overflow-hidden rounded-[28px] border border-indigo-400/16 bg-[linear-gradient(180deg,rgba(18,18,35,0.95),rgba(9,9,18,0.95))] shadow-2xl shadow-indigo-950/30">
            <div className="flex items-center justify-between border-b border-indigo-400/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="hidden rounded-md border border-indigo-400/10 bg-slate-900/70 px-3 py-1 font-mono text-[11px] text-slate-500 md:block">
                hermes-workspace.com
              </div>
              <div className="rounded-full border border-emerald-400/15 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                Agent online
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[250px_1fr]">
              <div className="border-b border-indigo-400/10 bg-slate-950/70 p-4 lg:border-b-0 lg:border-r">
                <div className="rounded-2xl border border-indigo-400/10 bg-indigo-500/8 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-300/80">
                    Workspace
                  </p>
                  <h2 className="mt-3 text-lg font-semibold text-indigo-50">
                    One place for chat, memory, skills, terminal, and files
                  </h2>
                  <div className="mt-4 space-y-2">
                    {["Chat timeline", "Memory graph", "Tool cards", "File browser"].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-indigo-400/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-2xl border border-indigo-400/12 bg-slate-950/70 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-indigo-300/70">
                          Screenshot Placeholder
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-indigo-50">
                          Main workspace screenshot
                        </h3>
                      </div>
                      <div className="rounded-full border border-indigo-400/10 bg-indigo-500/10 px-2.5 py-1 font-mono text-[10px] text-indigo-200">
                        1440 x 900
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {[
                        "Multi-model chat",
                        "Real-time tools",
                        "Mobile-first PWA",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-indigo-400/10 bg-black/20 px-3 py-2 text-sm text-slate-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 h-56 rounded-2xl border border-dashed border-indigo-400/18 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_45%),linear-gradient(180deg,rgba(17,24,39,0.75),rgba(8,8,16,0.92))] p-6 text-left text-slate-400 sm:h-72">
                      <div className="grid h-full place-items-center rounded-[20px] border border-indigo-400/10 bg-slate-950/30 text-center">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.28em] text-indigo-300/75">
                            Coming Soon
                          </p>
                          <p className="mt-3 text-lg text-slate-300">
                            Product screenshot placeholder
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <MetricCard value="100+" label="skills in browser-ready catalog" />
                    <MetricCard value="3" label="setup paths for different backends" />
                    <div className="rounded-2xl border border-indigo-400/12 bg-slate-950/70 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-indigo-300/70">
                        Numbered flow
                      </p>
                      <ol className="mt-4 space-y-3">
                        {[
                          "Connect a Hermes backend or any OpenAI-compatible endpoint",
                          "Open one workspace for chat, memory, tools, and files",
                          "Watch tool cards stream while your agent thinks and acts",
                        ].map((step, index) => (
                          <li key={step} className="flex gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-indigo-400/14 bg-indigo-500/10 text-sm font-semibold text-indigo-200">
                              {index + 1}
                            </span>
                            <p className="pt-1 text-sm leading-relaxed text-slate-300">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-indigo-400/12 bg-slate-950/70 p-4">
      <p className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-3xl font-bold text-transparent">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
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
