import React from "react";

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
}

export function Terminal({ title = "Terminal", children }: TerminalProps) {
  return (
    <div
      className="my-5 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--docs-border)",
        backgroundColor: "var(--docs-code-bg)",
      }}
    >
      {/* Title bar with traffic lights */}
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs text-neutral-500">{title}</span>
      </div>

      {/* Content */}
      <div
        className="p-5 text-sm leading-relaxed text-neutral-300"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {children}
      </div>
    </div>
  );
}
