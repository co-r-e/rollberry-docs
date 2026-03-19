"use client";

import { useState } from "react";
import Link from "next/link";
import type { SidebarSection as SidebarSectionType, SectionIcon as SectionIconType } from "@/lib/docs/types";

function SectionIcon({ name }: { name: SectionIconType }) {
  const cls = "h-4 w-4 shrink-0";
  const stroke = "currentColor";

  switch (name) {
    case "rocket":
      return (
        <svg className={cls} viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M8 1.5c0 0-3.5 2-3.5 7.5l-2 2h11l-2-2c0-5.5-3.5-7.5-3.5-7.5z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="6.5" r="1.25" stroke={stroke} strokeWidth="1.3" />
          <path d="M5.5 14.5c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg className={cls} viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M2.5 2.5h4a2 2 0 012 2v9a1.5 1.5 0 00-1.5-1.5H2.5v-9.5z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 2.5h-4a2 2 0 00-2 2v9a1.5 1.5 0 011.5-1.5h4.5v-9.5z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg className={cls} viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M5 4.5L1.5 8L5 11.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 4.5L14.5 8L11 11.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 2.5L6.5 13.5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={cls} viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M10.5 2a4 4 0 00-3.86 5.14L2.5 11.28a1.5 1.5 0 102.12 2.12l4.14-4.14A4 4 0 0010.5 2z" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="5.5" stroke={stroke} strokeWidth="1.3" />
        </svg>
      );
  }
}

export function SidebarSection({ section }: { section: SidebarSectionType }) {
  const [isOpen, setIsOpen] = useState(section.defaultOpen ?? true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm font-semibold transition-colors hover:bg-[var(--docs-surface)]"
        style={{ color: "var(--docs-text)" }}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2" style={{ color: "var(--docs-text-secondary)" }}>
          <SectionIcon name={section.icon} />
          <span style={{ color: "var(--docs-text)" }}>{section.title}</span>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 transition-transform duration-200"
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            color: "var(--docs-text-secondary)",
          }}
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
      </button>
      {isOpen && (
        <ul className="mt-0.5 ml-4 space-y-0.5 border-l" style={{ borderColor: "var(--docs-border)" }}>
          {section.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md py-1 pl-3 pr-2 text-[13px] no-underline transition-colors"
                style={{
                  color: item.isActive
                    ? "var(--docs-accent)"
                    : "var(--docs-text-secondary)",
                  background: item.isActive
                    ? "var(--docs-accent-muted)"
                    : "transparent",
                  fontWeight: item.isActive ? 500 : 400,
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
