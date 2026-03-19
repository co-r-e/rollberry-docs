import React from "react";

interface FileTreeProps {
  children: React.ReactNode;
}

export function FileTree({ children }: FileTreeProps) {
  return (
    <div
      className="my-5 overflow-x-auto rounded-lg border p-4"
      style={{
        borderColor: "var(--docs-border)",
        backgroundColor: "var(--docs-surface)",
      }}
    >
      <pre
        className="m-0 border-0 bg-transparent p-0 text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "var(--docs-text-secondary)",
          background: "transparent",
        }}
      >
        <code style={{ background: "transparent" }}>{children}</code>
      </pre>
    </div>
  );
}
