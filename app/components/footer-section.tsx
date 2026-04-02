import Image from "next/image";

const footerLinks = [
  {
    label: "Hermes Workspace GitHub",
    href: "https://github.com/outsourc-e/hermes-workspace",
  },
  {
    label: "Hermes Agent GitHub",
    href: "https://github.com/NousResearch/hermes-agent",
  },
];

export function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-indigo-500/10 bg-[#070710]/70 pb-16 md:pb-0">
      <div className="px-6 py-10 text-center md:px-10 md:py-12">
        <div className="mb-5 flex justify-center">
          <Image
            src="/hermes-avatar.webp"
            alt="Hermes avatar"
            width={40}
            height={40}
            className="animate-logo-bounce h-10 w-10 rounded-full border border-white/12 object-cover transition-all duration-300 hover:scale-110 hover:[animation-play-state:paused] hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-indigo-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-indigo-500/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-center text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-left md:px-10">
          <p>MIT License</p>
          <p>Built for Hermes Agent by Nous Research</p>
        </div>
      </div>
    </footer>
  );
}
