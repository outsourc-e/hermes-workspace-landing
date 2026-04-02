type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/favicon.svg"
        alt="Hermes Workspace"
        className={
          compact
            ? "h-10 w-10 drop-shadow-[0_0_16px_rgba(99,102,241,0.42)]"
            : "h-12 w-12 drop-shadow-[0_0_18px_rgba(99,102,241,0.45)]"
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
