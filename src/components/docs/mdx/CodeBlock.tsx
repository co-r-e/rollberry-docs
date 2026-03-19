"use client";

import React, { useRef } from "react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="group relative">
      <button
        onClick={() => copy(preRef.current?.textContent ?? "")}
        className="absolute right-3 top-3 z-10 rounded-md px-2.5 py-1 text-xs font-medium opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        style={{
          backgroundColor: "var(--docs-surface)",
          color: "var(--docs-text-secondary)",
          border: "1px solid var(--docs-border)",
        }}
        aria-label="Copy code to clipboard"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
