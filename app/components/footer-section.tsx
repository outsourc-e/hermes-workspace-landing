import Image from "next/image";

const footerLinks = [
  {
    label: "Hermes Workspace",
    href: "https://github.com/outsourc-e/hermes-workspace",
  },
  {
    label: "Project Agent",
    href: "https://github.com/NousResearch/hermes-agent",
  },
];

export function FooterSection() {
  return (
    <footer className="relative z-10 mt-12 border-t border-[var(--border)] bg-[var(--panel)] pb-16 md:pb-0">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <Image
            src="/hermes-avatar.webp"
            alt="Hermes Workspace"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--panel)] p-[3px] object-cover"
          />
          <p className="micro-label">Hermes Workspace · v2</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm tracking-tight">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-strong)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-center text-xs tracking-tight text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
          <p>MIT License — open source forever</p>
          <p>An editorial UI for Project Agent</p>
        </div>
      </div>
    </footer>
  );
}
