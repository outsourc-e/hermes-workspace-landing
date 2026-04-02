import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./reveal";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
  iconBg: string;
};

const features: Feature[] = [
  {
    title: "Multi-model chat",
    description: "Claude, GPT, Gemini, Codex, and local models in one conversation flow.",
    icon: ChatIcon,
    accent:
      "border-indigo-500/30 from-indigo-500/10 to-slate-950/70 hover:border-indigo-400/50 hover:shadow-indigo-500/10",
    iconBg: "bg-indigo-500/15 text-indigo-300",
  },
  {
    title: "Memory & skills browser",
    description: "Persistent memory plus a deep catalog of 100+ skills your agent can pull from.",
    icon: LibraryIcon,
    accent:
      "border-violet-500/30 from-violet-500/10 to-slate-950/70 hover:border-violet-400/50 hover:shadow-violet-500/10",
    iconBg: "bg-violet-500/15 text-violet-300",
  },
  {
    title: "Integrated terminal",
    description: "Run commands where your agent lives without leaving the workspace.",
    icon: TerminalIcon,
    accent:
      "border-sky-500/30 from-sky-500/10 to-slate-950/70 hover:border-sky-400/50 hover:shadow-sky-500/10",
    iconBg: "bg-sky-500/15 text-sky-300",
  },
  {
    title: "Real-time tool cards",
    description: "Watch your agent think and act with live tool states streaming into the UI.",
    icon: BoltIcon,
    accent:
      "border-emerald-500/30 from-emerald-500/10 to-slate-950/70 hover:border-emerald-400/50 hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/15 text-emerald-300",
  },
  {
    title: "Mobile-first PWA",
    description: "Full feature parity on desktop, tablet, or phone with an installable web app.",
    icon: DeviceIcon,
    accent:
      "border-fuchsia-500/30 from-fuchsia-500/10 to-slate-950/70 hover:border-fuchsia-400/50 hover:shadow-fuchsia-500/10",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-300",
  },
  {
    title: "Works with any backend",
    description: "OpenAI-compatible APIs, Hermes gateway, or portable mode with your own routing.",
    icon: LinkIcon,
    accent:
      "border-amber-500/30 from-amber-500/10 to-slate-950/70 hover:border-amber-400/50 hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/15 text-amber-300",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300/80">
          Features
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-indigo-50 md:text-4xl">
          Built for agents that do real work
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          A single interface for the parts of Hermes Agent that usually get split across
          terminals, tabs, and logs.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-12 mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { value: "6", label: "core workflow surfaces" },
            { value: "100+", label: "skills to browse" },
            { value: "PWA", label: "mobile parity" },
            { value: "OSS", label: "MIT licensed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 70}>
            <article
              className={`card-gradient-border group relative h-full overflow-hidden rounded-2xl border bg-gradient-to-br p-5 backdrop-blur transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg ${feature.accent}`}
            >
              <div className={`inline-flex rounded-xl p-2.5 ${feature.iconBg}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-indigo-50">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.description}</p>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-white/[0.03] blur-2xl transition group-hover:bg-white/[0.06]" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5h8M8 14h5.5M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v6.7a2.25 2.25 0 0 1-2.25 2.25H10.5l-3.75 3v-3H6.75a2.25 2.25 0 0 1-2.25-2.25v-6.7Z" />
    </svg>
  );
}

function LibraryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h2.5A2.25 2.25 0 0 1 11.5 6.75v10.5A2.25 2.25 0 0 1 9.25 19.5h-2.5A2.25 2.25 0 0 1 4.5 17.25V6.75ZM12.5 6.75A2.25 2.25 0 0 1 14.75 4.5h2.5A2.25 2.25 0 0 1 19.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a2.25 2.25 0 0 1-2.25-2.25V6.75ZM8 8h0M16 8h0" />
    </svg>
  );
}

function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 8 3 3-3 3m5 0h4" />
      <rect x="3.75" y="4.75" width="16.5" height="14.5" rx="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2.25 4.5 13.5h5.25l-1.5 8.25L19.5 10.5h-5.25L13 2.25Z" />
    </svg>
  );
}

function DeviceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18V6a2.25 2.25 0 0 0-2.25-2.25ZM11.25 17.25h1.5" />
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 14 4-4m-5.75 8.25H6.5a3.75 3.75 0 0 1 0-7.5h1.75m7.5 0h1.75a3.75 3.75 0 0 1 0 7.5h-1.75" />
    </svg>
  );
}
