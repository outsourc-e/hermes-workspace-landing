"use client";

import { Reveal } from "./reveal";

export function SetupSection() {
  return (
    <section id="setup" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Setup</p>
        <h2 className="editorial-display mt-4 text-4xl text-[var(--foreground)] md:text-5xl">
          Running in three minutes.
        </h2>
        <p className="mt-5 text-base text-[var(--muted-strong)] md:text-lg">
          One command installs Project Agent, clones the workspace, and wires the .env.
          Two more start it up.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto mt-14 max-w-3xl frame overflow-hidden">
          {/* Step 1 — Install everything */}
          <div className="border-b border-[var(--border-subtle)] px-6 py-5">
            <div className="flex flex-col gap-1">
              <p className="micro-label">Step 1</p>
              <p className="text-base font-semibold text-[var(--foreground)]">
                Install in one line
              </p>
            </div>
          </div>

          <div className="px-6 py-5">
            <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
              Detects Node 22+, Python 3.11+, pnpm — installs what's missing,
              installs <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[12px] font-mono text-[var(--foreground)]">hermes-agent</code> from PyPI,
              clones the workspace, and configures <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[12px] font-mono text-[var(--foreground)]">.env</code>.
              Re-runnable.
            </p>

            <div className="terminal-card mt-4 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-[var(--terminal-border)] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[10px] tracking-[0.16em] text-[var(--terminal-muted)] uppercase">
                  terminal
                </span>
              </div>
              <div className="overflow-x-auto px-4 py-3 font-mono text-xs leading-6">
                <div className="min-w-max whitespace-nowrap">
                  <span className="term-prompt mr-2">$</span>
                  <span className="text-[var(--terminal-text)]">
                    curl -fsSL https://hermes-workspace.com/install.sh | bash
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 — Start the gateway + UI */}
          <div className="border-y border-[var(--border-subtle)] px-6 py-5">
            <div className="flex flex-col gap-1">
              <p className="micro-label">Step 2</p>
              <p className="text-base font-semibold text-[var(--foreground)]">
                Start the gateway and the UI
              </p>
            </div>
          </div>

          <div className="px-6 py-5">
            <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
              Two daemons. Project Agent on <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[12px] font-mono text-[var(--foreground)]">:8642</code> handles
              models, memory, and skills. The workspace on <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[12px] font-mono text-[var(--foreground)]">:3000</code> is your interface.
            </p>

            <div className="terminal-card mt-4 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-[var(--terminal-border)] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[10px] tracking-[0.16em] text-[var(--terminal-muted)] uppercase">
                  terminal
                </span>
              </div>
              <div className="overflow-x-auto px-4 py-3 font-mono text-xs leading-6">
                <div className="min-w-max whitespace-nowrap">
                  <span className="term-prompt mr-2">$</span>
                  <span className="text-[var(--terminal-text)]">hermes gateway run</span>
                  <span className="term-comment ml-2"># terminal 1 · :8642</span>
                </div>
                <div className="min-w-max whitespace-nowrap">
                  <span className="term-prompt mr-2">$</span>
                  <span className="text-[var(--terminal-text)]">cd ~/hermes-workspace && pnpm dev</span>
                  <span className="term-comment ml-2"># terminal 2 · :3000</span>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Or run <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[11px] font-mono text-[var(--foreground)]">pnpm start:all</code> to launch both at once.
              First run prompts for <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[11px] font-mono text-[var(--foreground)]">hermes setup</code> to pick a provider.
            </p>
          </div>

          {/* Optional — backend choice footnote */}
          <div className="border-t border-[var(--border-subtle)] bg-[var(--panel-2)] px-6 py-4">
            <p className="text-xs leading-relaxed text-[var(--muted-strong)]">
              <span className="micro-label mr-2">Compatible with</span>
              Anthropic, OpenAI, OpenRouter, Atomic Chat, Ollama, vLLM, LM Studio,
              and any OpenAI-compatible <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[11px] font-mono text-[var(--foreground)]">/v1/chat/completions</code> endpoint.
              Pick during <code className="rounded bg-[var(--brand-soft)] px-1 py-0.5 text-[11px] font-mono text-[var(--foreground)]">hermes setup</code>.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
