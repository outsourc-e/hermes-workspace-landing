"use client";

import { useState } from "react";

type Line = {
  text: string;
  comment?: string;
};

type TerminalCommandProps = {
  lines: Line[];
  /** Defaults to the first line text */
  copyText?: string;
  label?: string;
};

export function TerminalCommand({
  lines,
  copyText,
  label = "terminal",
}: TerminalCommandProps) {
  const [copied, setCopied] = useState(false);
  const fullCopyText = copyText ?? lines.map((l) => l.text).join("\n");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(fullCopyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard API unavailable — silently no-op
    }
  }

  return (
    <div className="terminal-card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--terminal-border)] px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] tracking-[0.16em] text-[var(--terminal-muted)] uppercase">
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-btn ml-auto"
          data-copied={copied || undefined}
          aria-label="Copy command to clipboard"
        >
          {copied ? (
            <>
              <CheckIcon className="h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <CopyIcon className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto px-4 py-3 font-mono text-xs leading-6">
        {lines.map((line) => (
          <div key={line.text} className="min-w-max whitespace-nowrap">
            <span className="term-prompt mr-2">$</span>
            <span className="text-[var(--terminal-text)]">{line.text}</span>
            {line.comment && (
              <span className="term-comment ml-2">{line.comment}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="9" y="9" width="11" height="11" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 15V5a1.5 1.5 0 0 1 1.5-1.5H15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 5 5L20 7" />
    </svg>
  );
}
