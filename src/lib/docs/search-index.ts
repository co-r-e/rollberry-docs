import { getFlatDocPages, getSidebar } from "./content";

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  content: string;
  section: string;
  slug: string;
}

function stripMdxToText(source: string): string {
  return source
    .replace(/import\s+.*?from\s+['"].*?['"]/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]+`/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\{[^}]+\}/g, "")
    .replace(/[#*_~>\[\]()!|]/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

export function buildSearchEntries(): SearchEntry[] {
  const sectionTitleMap = new Map(
    getSidebar().map((section) => [
      section.items[0]?.href.split("/")[2] ?? section.title,
      section.title,
    ]),
  );

  return getFlatDocPages().map((doc) => {
    const slug = doc.slug.join("/");
    const sectionSlug = doc.slug[0] ?? "";

    return {
      id: slug,
      title: doc.meta.title,
      description: doc.meta.description,
      content: stripMdxToText(doc.content).slice(0, 2000),
      section: sectionTitleMap.get(sectionSlug) ?? sectionSlug,
      slug,
    };
  });
}
