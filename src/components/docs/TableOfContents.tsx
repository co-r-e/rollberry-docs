"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/docs/types";

interface TableOfContentsProps {
  entries: TocEntry[];
}

export function TableOfContents({ entries }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    if (entries.length === 0) return;

    const headingElements = entries
      .map((entry) => document.getElementById(entry.slug))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (intersections) => {
        const visible = intersections.find((i) => i.isIntersecting);
        if (visible?.target.id) {
          setActiveSlug(visible.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const el of headingElements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <aside
      className="scrollbar-hide fixed right-0 top-[var(--docs-header-height)] hidden h-[calc(100vh-var(--docs-header-height))] w-[var(--docs-toc-width)] overflow-y-auto pb-8 pt-6 pr-4 pl-2 xl:block"
    >
      <p
        className="mb-3 text-xs font-semibold uppercase tracking-wider"
        style={{ color: "var(--docs-text-secondary)" }}
      >
        On this page
      </p>
      <ul className="space-y-1">
        {entries.map((entry) => {
          const isActive = activeSlug === entry.slug;
          return (
            <li key={entry.slug}>
              <a
                href={`#${entry.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(entry.slug);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    // Update URL hash without jumping
                    history.replaceState(null, "", `#${entry.slug}`);
                    setActiveSlug(entry.slug);
                  }
                }}
                className="block text-[13px] leading-relaxed no-underline transition-colors"
                style={{
                  paddingLeft: entry.depth === 3 ? "0.75rem" : "0",
                  color: isActive
                    ? "var(--docs-accent)"
                    : "var(--docs-text-secondary)",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {entry.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
