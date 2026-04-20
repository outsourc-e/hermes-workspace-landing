import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./reveal";

type Feature = {
  number: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    number: "01",
    title: "Multi-model chat",
    description:
      "Claude, GPT, Gemini, Codex, and local models in one conversation flow. Switch mid-thread without losing context.",
    icon: ChatIcon,
  },
  {
    number: "02",
    title: "Memory & skills",
    description:
      "Persistent memory plus a deep catalog of 100+ skills your agent can pull from. Browse and edit live.",
    icon: LibraryIcon,
  },
  {
    number: "03",
    title: "Integrated terminal",
    description:
      "Run commands where your agent lives — pty in the browser, full color, no leaving the workspace.",
    icon: TerminalIcon,
  },
  {
    number: "04",
    title: "Real-time tool cards",
    description:
      "Watch the agent think and act with live tool states streaming into the UI. Approve, abort, inspect.",
    icon: BoltIcon,
  },
  {
    number: "05",
    title: "Mobile-first PWA",
    description:
      "Full feature parity on desktop, tablet, or phone. Install to home screen, run offline, push notifications.",
    icon: DeviceIcon,
  },
  {
    number: "06",
    title: "Conductor + Operations",
    description:
      "Mission orchestrator with parallel sub-agents, live worker grid, and an Operations console for managing every running agent.",
    icon: LinkIcon,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Features</p>
        <h2 className="editorial-display mt-4 text-4xl text-[var(--foreground)] md:text-5xl">
          Built for agents that do real work.
        </h2>
        <p className="mt-5 text-base text-[var(--muted-strong)] md:text-lg">
          One interface for the parts of your agent that usually scatter
          across terminals, tabs, and logs.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-14 mt-12">
          <hr className="editorial-rule" />
          <div className="flex flex-wrap items-baseline justify-center gap-x-12 gap-y-4 py-6">
            {[
              { value: "6", label: "core surfaces" },
              { value: "100+", label: "skills" },
              { value: "PWA", label: "mobile parity" },
              { value: "MIT", label: "open source" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="editorial-display text-3xl text-[var(--foreground)] md:text-4xl">
                  {stat.value}
                </p>
                <p className="micro-label mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <hr className="editorial-rule" />
        </div>
      </Reveal>

      <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 60}>
            <article className="group relative h-full bg-[var(--background)] p-6 transition-colors hover:bg-[var(--panel)]">
              <div className="flex items-start gap-3">
                <span className="micro-label tabular-nums text-[var(--brand)]">
                  {feature.number}
                </span>
                <feature.icon className="h-4 w-4 text-[var(--brand)]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-strong)]">
                {feature.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10.5h8M8 14h5.5M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v6.7a2.25 2.25 0 0 1-2.25 2.25H10.5l-3.75 3v-3H6.75a2.25 2.25 0 0 1-2.25-2.25v-6.7Z" />
    </svg>
  );
}

function LibraryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h2.5A2.25 2.25 0 0 1 11.5 6.75v10.5A2.25 2.25 0 0 1 9.25 19.5h-2.5A2.25 2.25 0 0 1 4.5 17.25V6.75ZM12.5 6.75A2.25 2.25 0 0 1 14.75 4.5h2.5A2.25 2.25 0 0 1 19.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a2.25 2.25 0 0 1-2.25-2.25V6.75Z" />
    </svg>
  );
}

function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 8 3 3-3 3m5 0h4" />
      <rect x="3.75" y="4.75" width="16.5" height="14.5" rx="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2.25 4.5 13.5h5.25l-1.5 8.25L19.5 10.5h-5.25L13 2.25Z" />
    </svg>
  );
}

function DeviceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12A2.25 2.25 0 0 0 7.5 20.25h9A2.25 2.25 0 0 0 18.75 18V6a2.25 2.25 0 0 0-2.25-2.25ZM11.25 17.25h1.5" />
    </svg>
  );
}

function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h6M9 18h6M6 9v6M18 9v6" />
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" />
    </svg>
  );
}
