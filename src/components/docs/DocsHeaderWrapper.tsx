"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { useSearch } from "./SearchProvider";

export function DocsHeaderWrapper() {
  const { resolvedTheme, setTheme } = useTheme();
  const { open } = useSearch();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      {/* Search button */}
      <button
        onClick={open}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs transition-colors"
        style={{
          border: "1px solid var(--docs-border)",
          color: "var(--docs-text-secondary)",
          background: "var(--docs-surface)",
        }}
        aria-label="Search documentation"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd
          className="hidden rounded px-1 py-0.5 text-[10px] font-medium sm:inline"
          style={{
            background: "var(--docs-bg)",
            border: "1px solid var(--docs-border)",
          }}
        >
          {"\u2318"}K
        </kbd>
      </button>

      {/* Divider */}
      <div className="mx-1 hidden h-4 w-px sm:block" style={{ background: "var(--docs-border)" }} />

      {/* GitHub link */}
      <a
        href="https://github.com/co-r-e/rollberry"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-md p-1.5 transition-colors hover:bg-[var(--docs-surface)]"
        style={{ color: "var(--docs-text-secondary)" }}
        aria-label="GitHub repository"
      >
        <GitHubIcon className="h-[18px] w-[18px]" />
      </a>

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex items-center justify-center rounded-md p-1.5 transition-colors hover:bg-[var(--docs-surface)]"
        style={{ color: "var(--docs-text-secondary)" }}
        aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      >
        {mounted ? (
          isDark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )
        ) : (
          <div className="h-[18px] w-[18px]" />
        )}
      </button>

      {/* Divider */}
      <div className="mx-1 hidden h-4 w-px sm:block" style={{ background: "var(--docs-border)" }} />

      {/* Back to site */}
      <Link
        href="/"
        className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium no-underline transition-colors hover:bg-[var(--docs-surface)] sm:flex"
        style={{ color: "var(--docs-text-secondary)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M7.5 9.5L3.5 6L7.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to site
      </Link>
    </div>
  );
}
