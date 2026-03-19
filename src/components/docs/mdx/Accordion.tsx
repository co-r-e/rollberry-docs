"use client";

import React, { useState, useCallback } from "react";

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return (
    <div
      className="my-5 overflow-hidden rounded-lg border"
      style={{
        borderColor: "var(--docs-border)",
      }}
    >
      {children}
    </div>
  );
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="accordion-item">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors duration-150"
        style={{ color: "var(--docs-text)" }}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          style={{
            color: "var(--docs-text-secondary)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="px-4 pb-4 text-sm [&>*:first-child]:mt-0"
          style={{ color: "var(--docs-text)" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
