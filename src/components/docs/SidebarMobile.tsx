"use client";

import { useCallback, useEffect, useState } from "react";
import type { SidebarSection as SidebarSectionType } from "@/lib/docs/types";
import { SidebarSection } from "./SidebarSection";

interface SidebarMobileProps {
  sections: SidebarSectionType[];
}

export function SidebarMobile({ sections }: SidebarMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, close]);

  // Close on route change (link click)
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a")) {
        close();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen, close]);

  return (
    <>
      {/* Hamburger button -- visible only on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded-md p-1.5 lg:hidden"
        style={{ color: "var(--docs-text-secondary)" }}
        aria-label="Open navigation menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 5H17M3 10H17M3 15H17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={close}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <div
        className="fixed left-0 top-0 z-50 h-full w-72 overflow-y-auto pb-8 pt-4 px-4 transition-transform duration-200 lg:hidden"
        style={{
          background: "var(--docs-bg)",
          borderRight: "1px solid var(--docs-border)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--docs-text)" }}
          >
            Navigation
          </span>
          <button
            onClick={close}
            className="rounded-md p-1"
            style={{ color: "var(--docs-text-secondary)" }}
            aria-label="Close navigation menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile docs sidebar" className="space-y-2">
          {sections.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </nav>
      </div>
    </>
  );
}
