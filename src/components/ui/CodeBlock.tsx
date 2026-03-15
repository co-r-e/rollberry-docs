"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className = "" }: CodeBlockProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className={`group relative ${className}`}>
      <button
        onClick={() => copy(code)}
        className="absolute right-3 top-3 rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-400 opacity-0 transition-opacity hover:bg-neutral-700 hover:text-white group-hover:opacity-100"
        aria-label="Copy to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto rounded-xl border border-neutral-800 bg-code-bg p-5 font-mono text-sm leading-relaxed text-neutral-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
