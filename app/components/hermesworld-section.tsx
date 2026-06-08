import { Reveal } from "./reveal";

const hermesWorldUrl = "https://hermes-world.ai";
const playUrl = "https://play.hermes-world.ai/play/web/";

export function HermesWorldSection() {
  return (
    <section id="hermesworld" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="mb-5 flex justify-center">
          <img
            src="/hermesworld-crest.png?v=4"
            alt="HermesWorld"
            className="h-20 w-auto md:h-24"
          />
        </div>
        <p className="micro-label">Showcase</p>
        <h2 className="editorial-display mt-4 text-4xl text-[var(--foreground)] md:text-5xl">
          Built with Hermes Workspace.
        </h2>
        <p className="mt-5 text-base text-[var(--muted-strong)] md:text-lg">
          HermesWorld is the flagship example: an open-world MMO where your AI
          agent is not a sidebar — it plays with you.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <article className="frame mt-14 overflow-hidden">
          <div className="grid gap-px bg-[var(--border)] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-[var(--background)] p-6 md:p-8">
              <p className="micro-label text-[var(--brand)]">HermesWorld</p>
              <h3 className="editorial-display mt-4 max-w-xl text-3xl text-[var(--foreground)] md:text-4xl">
                An MMO you play with your AI agent.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted-strong)] md:text-base">
                Explore a persistent fantasy world, delegate tasks, run missions,
                and bring agent workflows out of chat and into a playable world.
                It is proof that Workspace can operate real products, not just
                pretty demos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={hermesWorldUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-tight"
                >
                  Visit HermesWorld
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href={playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-secondary inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-tight"
                >
                  Play in browser
                </a>
              </div>
            </div>

            <div className="bg-[var(--panel)] p-4 md:p-6">
              <div className="frame overflow-hidden">
                <video
                  src="/hermesworld-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
                <span className="micro-label">World demo</span>
                <span className="rounded-full border border-[var(--brand-line)] bg-[var(--brand-soft)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  Live
                </span>
              </div>
            </div>
          </div>
        </article>
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
