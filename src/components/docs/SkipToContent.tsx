"use client";

export function SkipToContent() {
  return (
    <a
      href="#docs-content"
      className="fixed left-4 top-2 z-[100] -translate-y-16 rounded-md px-4 py-2 text-sm font-medium transition-transform focus:translate-y-0"
      style={{
        background: "var(--docs-accent)",
        color: "#fff",
      }}
    >
      Skip to content
    </a>
  );
}
