import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  docFrontmatterSchema,
  navMetaSchema,
  rootDocsMetaSchema,
} from "./schemas";
import type {
  DocPage,
  RootDocsMeta,
  SectionIcon,
  SidebarItem,
  SidebarSection,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "docs");

interface SectionConfig {
  slug: string;
  title: string;
  icon: SectionIcon;
  order: number;
  pages: DocPage[];
}

interface DocsConfig {
  rootMeta: RootDocsMeta;
  sections: SectionConfig[];
}

let docsConfigCache: DocsConfig | null = null;

function readJsonFile(filePath: string): unknown {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function readDocPage(slug: string[]): DocPage {
  const filePath = path.join(CONTENT_DIR, ...slug) + ".mdx";

  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing documentation file: ${slug.join("/")}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta = docFrontmatterSchema.parse(data);

  return {
    slug,
    meta,
    content,
    filePath,
  };
}

function getDocsConfig(): DocsConfig {
  if (docsConfigCache) {
    return docsConfigCache;
  }

  const rootMetaPath = path.join(CONTENT_DIR, "meta.json");
  const rootMeta = rootDocsMetaSchema.parse(readJsonFile(rootMetaPath));
  const sections: SectionConfig[] = [];

  for (const sectionName of rootMeta.sections) {
    const sectionDir = path.join(CONTENT_DIR, sectionName);
    const sectionMetaPath = path.join(sectionDir, "meta.json");

    if (!fs.existsSync(sectionDir)) {
      throw new Error(`Missing docs section directory: ${sectionName}`);
    }

    if (!fs.existsSync(sectionMetaPath)) {
      throw new Error(`Missing section meta.json: ${sectionName}`);
    }

    const sectionMeta = navMetaSchema.parse(readJsonFile(sectionMetaPath));
    const filesOnDisk = fs
      .readdirSync(sectionDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => entry.name.replace(/\.mdx$/, ""))
      .sort();
    const pagesInMeta = [...sectionMeta.pages].sort();

    const missingInMeta = filesOnDisk.filter(
      (pageName) => !pagesInMeta.includes(pageName),
    );
    const missingFiles = pagesInMeta.filter(
      (pageName) => !filesOnDisk.includes(pageName),
    );

    if (missingInMeta.length > 0 || missingFiles.length > 0) {
      throw new Error(
        [
          `Documentation metadata mismatch in section "${sectionName}"`,
          missingInMeta.length > 0
            ? `Files missing from meta.json: ${missingInMeta.join(", ")}`
            : null,
          missingFiles.length > 0
            ? `Pages listed in meta.json without files: ${missingFiles.join(", ")}`
            : null,
        ]
          .filter(Boolean)
          .join("\n"),
      );
    }

    sections.push({
      slug: sectionName,
      title: sectionMeta.title,
      icon: sectionMeta.icon,
      order: sectionMeta.order,
      pages: sectionMeta.pages.map((pageName) =>
        readDocPage([sectionName, pageName]),
      ),
    });
  }

  docsConfigCache = {
    rootMeta,
    sections: sections.sort((a, b) => a.order - b.order),
  };

  return docsConfigCache;
}

export function getDocBySlug(slug: string[]): DocPage | null {
  if (slug.length < 2) {
    return null;
  }

  const doc = getDocsConfig()
    .sections.flatMap((section) => section.pages)
    .find((page) => page.slug.join("/") === slug.join("/"));

  return doc ?? null;
}

export function getAllDocSlugs(): string[][] {
  return getDocsConfig()
    .sections.flatMap((section) => section.pages.map((page) => page.slug));
}

export function getSidebar(activeSlug?: string[]): SidebarSection[] {
  const activePath = activeSlug ? `/docs/${activeSlug.join("/")}` : null;

  return getDocsConfig().sections.map((section, sectionIndex) => {
    const items: SidebarItem[] = section.pages
      .map((page) => ({
        title: page.meta.title,
        href: `/docs/${page.slug.join("/")}`,
        order: page.meta.order,
        isActive: activePath === `/docs/${page.slug.join("/")}`,
      }))
      .sort((a, b) => a.order - b.order);

    const hasActivePage = items.some((item) => item.isActive);

    return {
      title: section.title,
      icon: section.icon,
      items,
      order: section.order,
      defaultOpen: hasActivePage || sectionIndex === 0,
    };
  });
}

export function getFlatDocPages(): DocPage[] {
  return getDocsConfig().sections.flatMap((section) => section.pages);
}

export function getAdjacentPages(
  slug: string[],
): { prev: SidebarItem | null; next: SidebarItem | null } {
  const allItems = getSidebar().flatMap((section) => section.items);
  const currentPath = `/docs/${slug.join("/")}`;
  const currentIndex = allItems.findIndex((item) => item.href === currentPath);

  return {
    prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
    next:
      currentIndex >= 0 && currentIndex < allItems.length - 1
        ? allItems[currentIndex + 1]
        : null,
  };
}
