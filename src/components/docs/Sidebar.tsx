import type { SidebarSection as SidebarSectionType } from "@/lib/docs/types";
import { SidebarSection } from "./SidebarSection";

interface SidebarProps {
  sections: SidebarSectionType[];
}

export function Sidebar({ sections }: SidebarProps) {
  return (
    <aside
      className="scrollbar-hide fixed top-[var(--docs-header-height)] hidden h-[calc(100vh-var(--docs-header-height))] w-[var(--docs-sidebar-width)] overflow-y-auto pb-8 pt-6 pl-4 pr-2 lg:block"
      style={{ borderRight: "1px solid var(--docs-border)" }}
    >
      <nav aria-label="Docs sidebar" className="space-y-2">
        {sections.map((section) => (
          <SidebarSection key={section.title} section={section} />
        ))}
      </nav>
    </aside>
  );
}
