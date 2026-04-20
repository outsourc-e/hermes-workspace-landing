import Image from "next/image";
import { Reveal } from "./reveal";

const screenshots = [
  {
    title: "Chat",
    caption: "Multi-model conversations with real-time tool activity.",
    src: "/screenshots/chat.png",
  },
  {
    title: "Conductor",
    caption: "Mission orchestrator — spawn parallel agents, watch them work.",
    src: "/screenshots/conductor.png",
  },
  {
    title: "Dashboard",
    caption: "At-a-glance metrics across sessions, messages, tools, tokens.",
    src: "/screenshots/dashboard.png",
  },
  {
    title: "Memory",
    caption: "Browse and search what your agent remembers.",
    src: "/screenshots/memory.png",
  },
  {
    title: "Terminal",
    caption: "Browser-native pty inside the workspace.",
    src: "/screenshots/terminal.png",
  },
  {
    title: "Settings",
    caption: "Themes, providers, accents — 8 paired light/dark themes.",
    src: "/screenshots/settings.png",
  },
];

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Screens</p>
        <h2 className="editorial-display mt-4 text-4xl text-[var(--foreground)] md:text-5xl">
          Section by section.
        </h2>
        <p className="mt-5 text-base text-[var(--muted-strong)] md:text-lg">
          Real product screens across the core workflow.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-px bg-[var(--border)] md:grid-cols-2">
        {screenshots.map((shot, index) => (
          <Reveal key={shot.title} delay={index * 70}>
            <figure className="bg-[var(--background)]">
              <div className="border-b border-[var(--border-subtle)] px-6 py-4">
                <p className="micro-label">{`Screen ${String(index + 1).padStart(2, "0")}`}</p>
                <p className="mt-1 text-base font-semibold tracking-tight text-[var(--foreground)]">
                  {shot.title}
                </p>
                <p className="mt-1 text-sm text-[var(--muted-strong)]">
                  {shot.caption}
                </p>
              </div>
              <div className="p-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--border)] bg-[var(--panel)]">
                  <Image
                    src={shot.src}
                    alt={`${shot.title} screenshot`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
