import Image from "next/image";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/hermes-avatar.webp"
        alt="Hermes avatar"
        width={compact ? 32 : 60}
        height={compact ? 32 : 60}
        className={
          compact
            ? "h-8 w-8 rounded-full border border-white/12 object-cover shadow-[0_10px_30px_rgba(15,23,42,0.35)]"
            : "h-[60px] w-[60px] rounded-full border border-white/12 object-cover shadow-[0_14px_36px_rgba(15,23,42,0.42)]"
        }
      />
      <div className="leading-tight">
        <p
          className={
            compact
              ? "text-lg font-bold tracking-tight text-indigo-50 sm:text-xl"
              : "text-xl font-bold tracking-tight text-indigo-50 sm:text-2xl"
          }
        >
          Hermes <span className="text-indigo-400">Workspace</span>
        </p>
        {!compact ? (
          <p className="text-xs text-slate-400">Open-source UI for Hermes Agent</p>
        ) : null}
      </div>
    </div>
  );
}
