import { Reveal } from "./reveal";

const screenshots = [
  "Chat screenshot",
  "Memory screenshot",
  "Tool cards screenshot",
  "Terminal screenshot",
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
        <p className="mt-4 text-lg text-slate-400">
          Placeholder frames for the product shots you&apos;ll drop in later.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {screenshots.map((label, index) => (
          <Reveal key={label} delay={index * 80}>
            <div className="overflow-hidden rounded-3xl border border-indigo-400/14 bg-[linear-gradient(180deg,rgba(17,24,39,0.72),rgba(5,5,12,0.9))] shadow-2xl shadow-indigo-950/20">
              <div className="flex items-center justify-between border-b border-white/6 px-5 py-4">
                <p className="text-sm font-semibold text-indigo-50">{label}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  Placeholder
                </span>
              </div>
              <div className="h-72 p-5 sm:h-80">
                <div className="grid h-full place-items-center rounded-[24px] border border-dashed border-indigo-400/18 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.8),rgba(6,6,13,0.92))] text-center">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-indigo-300/75">
                      Image Slot
                    </p>
                    <p className="mt-3 text-lg text-slate-300">{label}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
