import Image from "next/image";
import { Reveal } from "./reveal";
import { TerminalCommand } from "./terminal-command";

export function HeroSection() {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-24 md:pb-24">
      <Reveal className="mx-auto max-w-4xl text-center">
        {/* Bouncing avatar in editorial frame (restored from v1, retoned for paper) */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/hermes-avatar.webp"
            alt="Project Workspace"
            width={84}
            height={84}
            priority
            className="animate-logo-bounce h-[84px] w-[84px] rounded-md border border-[var(--border)] bg-[var(--panel)] object-cover p-[5px]"
          />
        </div>

        {/* Star pill — social proof */}
        <a
          href="https://github.com/outsourc-e/hermes-workspace"
          target="_blank"
          rel="noopener noreferrer"
          className="star-pill mx-auto inline-flex transition-transform hover:scale-[1.03]"
        >
          <StarIcon className="h-3 w-3" />
          1,600+ stars on GitHub
        </a>

        {/* Editorial display title */}
        <h1 className="editorial-display mx-auto mt-6 max-w-3xl text-balance text-5xl text-[var(--foreground)] md:text-6xl lg:text-7xl">
          Your AI agent&rsquo;s<br />
          command center.
        </h1>

        {/* Sub */}
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-strong)] md:text-lg">
          Chat, memory, skills, terminal, and files &mdash; one interface for
          everything your agent does.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#setup"
            className="cta-primary inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-tight sm:w-auto"
          >
            Install
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/outsourc-e/hermes-workspace"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-tight sm:w-auto"
          >
            <StarIcon className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>

        {/* Inline curl one-liner — instant credibility, with copy */}
        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-xl">
            <TerminalCommand
              lines={[{ text: "curl -fsSL https://hermes-workspace.com/install.sh | bash" }]}
            />
          </div>
        </Reveal>
      </Reveal>

      {/* Demo video — thin frame, no shadow */}
      <Reveal delay={200}>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="frame overflow-hidden">
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
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.25l2.85 6.93 7.49.55-5.71 4.86 1.79 7.31L12 17.95l-6.42 3.95 1.79-7.31L1.66 9.73l7.49-.55L12 2.25z" />
    </svg>
  );
}
