import Image from "next/image";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/hermes-avatar.webp"
        alt="Hermes Workspace"
        width={compact ? 30 : 48}
        height={compact ? 30 : 48}
        className={
          compact
            ? "h-[30px] w-[30px] rounded-md border border-[var(--border)] bg-[var(--panel)] p-[3px] object-cover"
            : "h-[48px] w-[48px] rounded-md border border-[var(--border)] bg-[var(--panel)] p-[4px] object-cover"
        }
      />
      <div className="leading-tight">
        <p
          className={
            compact
              ? "text-base font-semibold tracking-tight text-[var(--foreground)]"
              : "text-lg font-semibold tracking-tight text-[var(--foreground)]"
          }
        >
          Hermes Workspace
        </p>
        {!compact ? (
          <p className="micro-label mt-1">Editorial UI for Project Agent</p>
        ) : null}
      </div>
    </div>
  );
}
