import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && (
                <span
                  className="select-none"
                  style={{ color: "var(--docs-text-secondary)" }}
                  aria-hidden
                >
                  /
                </span>
              )}
              {isLast ? (
                <span
                  className="font-medium"
                  style={{ color: "var(--docs-text)" }}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:underline"
                  style={{ color: "var(--docs-text-secondary)" }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
