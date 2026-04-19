"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const backends = [
  {
    id: "hermes",
    label: "Hermes Agent",
    badge: "Recommended",
    description:
      "Full features — sessions, memory, skills, config, and streaming. Clone, don't fork: workspace runs on vanilla hermes-agent from PyPI.",
    lines: [
      { text: "pip install hermes-agent", comment: "# vanilla, no fork" },
      { text: "hermes setup", comment: "# pick your provider" },
      { text: "hermes gateway run", comment: "# starts on :8642" },
    ],
    note: "v2+ requires no fork — upstream shipped full parity. Run `pip install -U hermes-agent` any time to upgrade.",
  },
  {
    id: "openai",
    label: "Any OpenAI Backend",
    badge: "Portable",
    description:
      "Ollama, vLLM, LM Studio, or any endpoint that serves /v1/chat/completions. No Python needed.",
    lines: [
      { text: "ollama serve", comment: "# or any OpenAI-compat server" },
    ],
    note: "Configure the backend URL in Hermes Workspace settings after connecting.",
  },
];

export function SetupSection() {
  const [active, setActive] = useState("hermes");
  const backend = backends.find((b) => b.id === active) ?? backends[0];

  return (
    <section id="setup" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300/80">
          Setup
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-indigo-50 md:text-4xl">
          Get running in under 3 minutes
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Pick your backend, install the workspace, and you&apos;re live.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.72),rgba(5,5,12,0.88))] shadow-2xl">
          {/* Step 1 header + tabs */}
          <div className="border-b border-white/6 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-indigo-50">Step 1 — Start your backend</p>
              </div>
              <div className="flex gap-1 rounded-xl border border-white/8 bg-white/5 p-1">
                {backends.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setActive(b.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      active === b.id
                        ? "bg-indigo-500/20 text-indigo-200 shadow-sm"
                        : "text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm leading-relaxed text-slate-400">{backend.description}</p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/6 bg-black/40">
              <div className="flex items-center gap-2 border-b border-white/6 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-slate-600">terminal</span>
              </div>
              <div className="overflow-x-auto p-4 font-mono text-xs leading-6">
                {backend.lines.map((line) => (
                  <div key={line.text} className="min-w-max whitespace-nowrap">
                    <span className="mr-2 text-indigo-400">$</span>
                    <span className="text-slate-300">{line.text}</span>
                    {line.comment && (
                      <span className="ml-2 text-slate-600">{line.comment}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {backend.note && (
              <p className="mt-3 text-xs leading-relaxed text-slate-500">{backend.note}</p>
            )}
          </div>

          {/* Step 2 — Workspace install */}
          <div className="border-t border-white/6 px-5 py-4">
            <p className="text-base font-semibold text-indigo-50">Step 2 — Install Hermes Workspace</p>
          </div>
          <div className="px-5 pb-5">
            <div className="overflow-hidden rounded-2xl border border-white/6 bg-black/40">
              <div className="flex items-center gap-2 border-b border-white/6 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-slate-600">terminal</span>
              </div>
              <div className="overflow-x-auto p-4 font-mono text-xs leading-6">
                <div className="min-w-max whitespace-nowrap">
                  <span className="mr-2 text-indigo-400">$</span>
                  <span className="text-slate-300">git clone https://github.com/outsourc-e/hermes-workspace.git</span>
                </div>
                <div className="min-w-max whitespace-nowrap">
                  <span className="mr-2 text-indigo-400">$</span>
                  <span className="text-slate-300">cd hermes-workspace</span>
                </div>
                <div className="min-w-max whitespace-nowrap">
                  <span className="mr-2 text-indigo-400">$</span>
                  <span className="text-slate-300">pnpm install</span>
                </div>
                <div className="min-w-max whitespace-nowrap">
                  <span className="mr-2 text-indigo-400">$</span>
                  <span className="text-slate-300">pnpm dev</span>
                  <span className="ml-2 text-slate-600"># opens on localhost:3000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
