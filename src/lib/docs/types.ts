export interface DocMeta {
  title: string;
  description: string;
  order: number;
}

export interface DocPage {
  slug: string[];
  meta: DocMeta;
  content: string;
  filePath: string;
}

export interface TocEntry {
  depth: number;
  text: string;
  slug: string;
}

export interface SidebarItem {
  title: string;
  href: string;
  order: number;
  isActive?: boolean;
}

export type SectionIcon = "rocket" | "book" | "code" | "wrench";

export interface SidebarSection {
  title: string;
  icon: SectionIcon;
  items: SidebarItem[];
  order: number;
  defaultOpen?: boolean;
}

export interface NavMeta {
  title: string;
  icon: SectionIcon;
  order: number;
  pages: string[];
}

export interface RootDocsMeta {
  sections: string[];
}
