import { Reveal } from "./reveal";

const setupPaths = [
  {
    title: "Full Features",
    description:
      "Use the `outsourc-e/hermes-agent` fork with gateway mode to unlock the complete Hermes Workspace experience.",
    badge: "Recommended",
    accent: "border-indigo-500/30 shadow-indigo-950/30",
    lines: [
      "git clone https://github.com/outsourc-e/hermes-agent.git",
      "cd hermes-agent",
      "hermes --gateway",
    ],
  },
  {
    title: "Vanilla Hermes",
    description:
      "Point Hermes Workspace at upstream `NousResearch/hermes-agent` for a lighter setup focused on basic chat.",
    badge: "Basic chat",
    accent: "border-violet-500/20 shadow-violet-950/20",
    lines: [
      "git clone https://github.com/NousResearch/hermes-agent.git",
      "cd hermes-agent",
      "hermes --gateway",
    ],
  },
  {
    title: "Any OpenAI Backend",
    description:
      "Use Ollama, vLLM, or any `/v1/chat/completions` endpoint when you just need a compatible chat backend.",
    badge: "Portable mode",
    accent: "border-sky-500/20 shadow-sky-950/20",
    lines: [
      "export OPENAI_BASE_URL=http://localhost:11434/v1",
      "export OPENAI_API_KEY=dummy",
      "Use Hermes Workspace with any compatible endpoint",
    ],
  },
];

export function SetupSection() {
  return (
    <section id="setup" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300/80">
          Setup
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-indigo-50 md:text-4xl">
          Three ways to get Hermes Workspace online
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Pick the backend path that matches how much Hermes functionality you need.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {setupPaths.map((path, index) => (
          <Reveal key={path.title} delay={index * 80}>
            <article
              className={`overflow-hidden rounded-3xl border bg-[linear-gradient(180deg,rgba(17,24,39,0.72),rgba(5,5,12,0.88))] shadow-2xl ${path.accent}`}
            >
              <div className="flex items-center justify-between border-b border-white/6 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-indigo-50">{path.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                    Path {index + 1}
                  </p>
                </div>
                <span className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-indigo-200">
                  {path.badge}
                </span>
              </div>

              <div className="p-5">
                <p className="min-h-20 text-sm leading-relaxed text-slate-400">
                  {path.description}
                </p>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/6 bg-black/40">
                  <div className="flex items-center gap-2 border-b border-white/6 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-auto font-mono text-[10px] text-slate-600">terminal</span>
                  </div>
                  <div className="overflow-x-auto p-4 font-mono text-xs text-left sm:text-sm">
                    {path.lines.map((line) => (
                      <div key={line} className="whitespace-nowrap text-slate-300">
                        <span className="mr-2 text-indigo-400">$</span>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
