import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "docs");
const PUBLIC_DIR = path.join(process.cwd(), "public");
const BASE_URL = "https://co-r-e.github.io/rollberry-docs";

interface PageInfo {
  slug: string;
  title: string;
  description: string;
  section: string;
  content: string;
}

function collectPages(): PageInfo[] {
  const rootMeta = JSON.parse(
    fs.readFileSync(path.join(CONTENT_DIR, "meta.json"), "utf-8"),
  );

  const pages: PageInfo[] = [];

  for (const sectionName of rootMeta.sections) {
    const sectionDir = path.join(CONTENT_DIR, sectionName);
    const sectionMetaPath = path.join(sectionDir, "meta.json");

    if (!fs.existsSync(sectionMetaPath)) continue;

    const sectionMeta = JSON.parse(fs.readFileSync(sectionMetaPath, "utf-8"));

    for (const pageName of sectionMeta.pages) {
      const filePath = path.join(sectionDir, `${pageName}.mdx`);
      if (!fs.existsSync(filePath)) continue;

      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      // Strip MDX/JSX syntax for plain text
      const plainContent = content
        .replace(/import\s+.*?from\s+['"].*?['"]/g, "")
        .replace(/<[^>]+>/g, "")
        .replace(/\{[^}]+\}/g, "")
        .trim();

      pages.push({
        slug: `${sectionName}/${pageName}`,
        title: data.title ?? pageName,
        description: data.description ?? "",
        section: sectionMeta.title,
        content: plainContent,
      });
    }
  }

  return pages;
}

function generateLlmsTxt(pages: PageInfo[]): string {
  const lines: string[] = [
    "# Rollberry",
    "",
    "> A zero-install CLI that captures full-page scrolling videos of web pages using a real browser (Playwright/Chromium).",
    "",
    "Rollberry is an open-source (MIT) command-line tool that scrolls any web page and records smooth MP4 video. It requires no installation (runs via npx), supports localhost, custom viewports, overlay hiding, and debug frames.",
    "",
    "- Package: npx rollberry capture <url>",
    "- npm: https://www.npmjs.com/package/rollberry",
    "- GitHub: https://github.com/co-r-e/rollberry",
    "- Documentation: " + BASE_URL + "/docs",
    "- License: MIT",
    "- Company: CORe Inc. (https://co-r-e.com)",
    "",
    "## Documentation Pages",
    "",
  ];

  let currentSection = "";
  for (const page of pages) {
    if (page.section !== currentSection) {
      currentSection = page.section;
      lines.push(`### ${currentSection}`);
      lines.push("");
    }
    lines.push(
      `- [${page.title}](${BASE_URL}/docs/${page.slug}): ${page.description}`,
    );
  }

  lines.push("");
  lines.push("## Optional");
  lines.push("");
  lines.push(
    `- [Full documentation for LLMs](${BASE_URL}/llms-full.txt): Complete documentation content in plain text`,
  );
  lines.push("");

  return lines.join("\n");
}

function generateLlmsFullTxt(pages: PageInfo[]): string {
  const sections: string[] = [
    "# Rollberry — Complete Documentation",
    "",
    "> A zero-install CLI that captures full-page scrolling videos of web pages using a real browser (Playwright/Chromium).",
    "",
    "Package: `npx rollberry capture <url>`",
    "GitHub: https://github.com/co-r-e/rollberry",
    "npm: https://www.npmjs.com/package/rollberry",
    "License: MIT | Company: CORe Inc. (https://co-r-e.com)",
    "",
    "---",
    "",
  ];

  for (const page of pages) {
    sections.push(`# ${page.title}`);
    sections.push("");
    sections.push(`> ${page.description}`);
    sections.push("");
    sections.push(`Source: ${BASE_URL}/docs/${page.slug}`);
    sections.push("");
    sections.push(page.content);
    sections.push("");
    sections.push("---");
    sections.push("");
  }

  return sections.join("\n");
}

function main() {
  console.log("Generating llms.txt and llms-full.txt...");

  const pages = collectPages();

  const llmsTxt = generateLlmsTxt(pages);
  const llmsFullTxt = generateLlmsFullTxt(pages);

  fs.writeFileSync(path.join(PUBLIC_DIR, "llms.txt"), llmsTxt);
  fs.writeFileSync(path.join(PUBLIC_DIR, "llms-full.txt"), llmsFullTxt);

  console.log(
    `Generated: llms.txt (${pages.length} pages), llms-full.txt (${Math.round(llmsFullTxt.length / 1024)}KB)`,
  );
}

main();
