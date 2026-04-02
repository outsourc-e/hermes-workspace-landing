import Image from "next/image";
import { Reveal } from "./reveal";

const screenshots = [
  {
    title: "Chat",
    caption: "Multi-model conversations with tool activity embedded in the thread.",
    src: "/screenshots/chat.png",
  },
  {
    title: "Memory",
    caption: "Browse saved context, relationships, and what the agent already knows.",
    src: "/screenshots/memory.png",
  },
  {
    title: "Terminal",
    caption: "Keep shell access inside the workspace while the agent executes tasks.",
    src: "/screenshots/terminal.png",
  },
  {
    title: "Skills",
    caption: "Search and launch the skills catalog without leaving the interface.",
    src: "/screenshots/skills.png",
  },
  {
    title: "Settings",
    caption: "Tune providers, runtime behavior, and workspace preferences in one place.",
    src: "/screenshots/settings.png",
  },
];

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300/80">
          Screenshots
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-indigo-50 md:text-4xl">
          The interface, section by section
        </h2>
        <p className="mt-4 text-lg text-slate-400">Real product screens across the core workflow.</p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {screenshots.map((shot, index) => (
          <Reveal key={shot.title} delay={index * 80}>
            <div className="overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.76),rgba(5,5,12,0.92))] shadow-[0_28px_80px_rgba(2,6,23,0.24)]">
              <div className="border-b border-white/6 px-5 py-4">
                <p className="text-sm font-semibold text-indigo-50">{shot.title}</p>
                <p className="mt-1 text-sm text-slate-400">{shot.caption}</p>
              </div>
              <div className="p-5">
                <Image
                  src={shot.src}
                  alt={`${shot.title} screenshot`}
                  width={1600}
                  height={1000}
                  className="screenshot-frame h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
