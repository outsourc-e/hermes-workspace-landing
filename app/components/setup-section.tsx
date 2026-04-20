"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const backends = [
  {
    id: "hermes",
    label: "Hermes Agent",
    description:
      "Full features — sessions, memory, skills, config, streaming. Clone, don't fork: workspace runs on vanilla hermes-agent from PyPI.",
    lines: [
      { text: "pip install hermes-agent", comment: "# vanilla, no fork" },
      { text: "hermes setup", comment: "# pick your provider" },
      { text: "hermes gateway run", comment: "# starts on :8642" },
    ],
    note: "v2+ requires no fork — upstream shipped full parity. Run `pip install -U hermes-agent` any time to upgrade.",
  },
  {
    id: "openai",
    label: "Any OpenAI backend",
    description:
      "Ollama, vLLM, LM Studio, or any endpoint that serves /v1/chat/completions. No Python required.",
    lines: [
      { text: "ollama serve", comment: "# or any OpenAI-compat server" },
    ],
    note: "Configure the backend URL in workspace settings after connecting.",
  },
];

export function SetupSection() {
  const [active, setActive] = useState("hermes");
  const backend = backends.find((b) => b.id === active) ?? backends[0];

  return (
    <section id="setup" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Setup</p>
        <h2 className="editorial-display mt-4 text-4xl text-[var(--foreground)] md:text-5xl">
          Running in three minutes.
        </h2>
        <p className="mt-5 text-base text-[var(--muted-strong)] md:text-lg">
          Pick your backend, install the workspace, point the browser.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto mt-14 max-w-3xl frame overflow-hidden">
          {/* Step 1 */}
          <div className="border-b border-[var(--border-subtle)] px-6 py-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="micro-label mb-2">Step 1</p>
                <p className="text-base font-semibold text-[var(--foreground)]">
                  Start your backend
                </p>
              </div>
              <div className="flex gap-1 rounded-md border border-[var(--border)] bg-[var(--panel-2)] p-1">
                {backends.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActive(b.id)}
                    className={`rounded px-3 py-1.5 text-xs font-medium tracking-tight transition-colors ${
                      active === b.id
                        ? "bg-[var(--background)] text-[var(--foreground)] shadow-[inset_0_0_0_1px_var(--border)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 py-5">
            <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
              {backend.description}
            </p>

            <div className="terminal-card mt-4 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[10px] tracking-[0.16em] text-white/30 uppercase">
                  terminal
                </span>
              </div>
              <div className="overflow-x-auto px-4 py-3 font-mono text-xs leading-6">
                {backend.lines.map((line) => (
                  <div key={line.text} className="min-w-max whitespace-nowrap">
                    <span className="term-prompt mr-2">$</span>
                    <span className="text-[var(--terminal-text)]">{line.text}</span>
                    {line.comment && (
                      <span className="term-comment ml-2">{line.comment}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {backend.note && (
              <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                {backend.note}
              </p>
            )}
          </div>

          {/* Step 2 */}
          <div className="border-y border-[var(--border-subtle)] px-6 py-5">
            <p className="micro-label mb-2">Step 2</p>
            <p className="text-base font-semibold text-[var(--foreground)]">
              Install the workspace
            </p>
          </div>

          <div className="px-6 py-5">
            <p className="text-sm leading-relaxed text-[var(--muted-strong)]">
              One command. Re-runnable. Detects Node, Python, pnpm — installs
              what's missing.
            </p>
            <div className="terminal-card mt-4 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-[10px] tracking-[0.16em] text-white/30 uppercase">
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
                <div className="min-w-max whitespace-nowrap text-[var(--terminal-text)]/60">
                  <span className="term-comment">
                    # opens at http://localhost:3000
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Prefer manual? <a className="underline decoration-[var(--brand-line)] underline-offset-2 hover:text-[var(--brand)]" href="https://github.com/outsourc-e/hermes-workspace#install">git clone + pnpm install</a>.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
