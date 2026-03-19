import Link from "next/link";
import type { SidebarItem } from "@/lib/docs/types";

interface PrevNextLinksProps {
  prev: SidebarItem | null;
  next: SidebarItem | null;
}

export function PrevNextLinks({ prev, next }: PrevNextLinksProps) {
  if (!prev && !next) return null;

  const cardClass =
    "group flex items-center gap-2 rounded-lg border p-4 text-sm no-underline transition-colors hover:border-[var(--docs-accent)]";

  return (
    <nav
      aria-label="Previous and next pages"
      className="mt-12 grid grid-cols-2 gap-4"
      style={{ borderTop: "1px solid var(--docs-border)", paddingTop: "1.5rem" }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className={cardClass}
          style={{
            borderColor: "var(--docs-border)",
            color: "var(--docs-text)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
            aria-hidden
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex flex-col">
            <span
              className="text-xs"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              Previous
            </span>
            <span className="font-medium">{prev.title}</span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className={`${cardClass} justify-end text-right`}
          style={{
            borderColor: "var(--docs-border)",
            color: "var(--docs-text)",
          }}
        >
          <span className="flex flex-col">
            <span
              className="text-xs"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              Next
            </span>
            <span className="font-medium">{next.title}</span>
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
            aria-hidden
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
