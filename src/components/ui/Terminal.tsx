"use client";

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Terminal({
  children,
  title = "Terminal",
  className = "",
}: TerminalProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-neutral-800 bg-code-bg shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs text-neutral-500">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}
