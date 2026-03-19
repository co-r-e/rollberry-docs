import type { SidebarSection as SidebarSectionType, TocEntry, SidebarItem } from "@/lib/docs/types";
import { DocsHeader } from "./DocsHeader";
import { Sidebar } from "./Sidebar";
import { SidebarMobile } from "./SidebarMobile";
import { TableOfContents } from "./TableOfContents";
import { Breadcrumb } from "./Breadcrumb";
import { PrevNextLinks } from "./PrevNextLinks";

interface DocsLayoutShellProps {
  children: React.ReactNode;
  sidebar: SidebarSectionType[];
  toc: TocEntry[];
  breadcrumbs: { label: string; href: string }[];
  prevNext: { prev: SidebarItem | null; next: SidebarItem | null };
}

export function DocsLayoutShell({
  children,
  sidebar,
  toc,
  breadcrumbs,
  prevNext,
}: DocsLayoutShellProps) {
  return (
    <div className="min-h-screen">
      <DocsHeader />

      {/* Mobile sidebar hamburger -- rendered inside the header area on mobile */}
      <div
        className="sticky top-[var(--docs-header-height)] z-40 flex items-center gap-2 px-4 py-2 lg:hidden"
        style={{
          background: "var(--docs-bg)",
          borderBottom: "1px solid var(--docs-border)",
        }}
      >
        <SidebarMobile sections={sidebar} />
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb (mobile)"
            className="truncate text-xs"
            style={{ color: "var(--docs-text-secondary)" }}
          >
            {breadcrumbs.map((b, i) => (
              <span key={b.href}>
                {i > 0 && " / "}
                {b.label}
              </span>
            ))}
          </nav>
        )}
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar sections={sidebar} />

        {/* Main content area */}
        <main
          id="docs-content"
          className="min-w-0 flex-1 lg:ml-[var(--docs-sidebar-width)] xl:mr-[var(--docs-toc-width)]"
        >
          <div className="mx-auto max-w-3xl px-6 py-8">
            {/* Desktop Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <div className="hidden lg:block">
                <Breadcrumb items={breadcrumbs} />
              </div>
            )}

            {/* Content */}
            {children}

            {/* Prev / Next */}
            <PrevNextLinks prev={prevNext.prev} next={prevNext.next} />
          </div>

          {/* Footer */}
          <footer
            className="mt-12 px-6 py-6 text-center text-xs lg:ml-0"
            style={{
              borderTop: "1px solid var(--docs-border)",
              color: "var(--docs-text-secondary)",
            }}
          >
            &copy; 2025{" "}
            <a
              href="https://co-r-e.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              CORe Inc.
            </a>
          </footer>
        </main>

        {/* Desktop Table of Contents */}
        <TableOfContents entries={toc} />
      </div>
    </div>
  );
}
