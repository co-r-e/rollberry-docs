import React from "react";
import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  icon?: string;
}

export function LinkCard({ href, title, description, icon }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group my-3 block rounded-lg border p-4 no-underline transition-colors duration-150 hover:border-[var(--docs-accent)] hover:bg-[var(--docs-surface)]"
      style={{
        borderColor: "var(--docs-border)",
        backgroundColor: "var(--docs-bg)",
      }}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <span className="mt-0.5 text-lg" role="img" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="min-w-0">
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--docs-text)" }}
          >
            {title}
            <span
              className="ml-1 inline-block transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </p>
          {description && (
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
