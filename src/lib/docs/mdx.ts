import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import type { TocEntry } from "./types";

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function getNodeText(node: HastNode): string {
  if (node.type === "text") {
    return node.value ?? "";
  }
  return node.children?.map(getNodeText).join("") ?? "";
}

function walkHeadings(node: HastNode, entries: TocEntry[]): void {
  if (node.type === "element" && (node.tagName === "h2" || node.tagName === "h3")) {
    const id = typeof node.properties?.id === "string" ? node.properties.id : null;
    const depth = node.tagName === "h2" ? 2 : 3;
    const text = getNodeText(node).trim();
    if (id && text) {
      entries.push({ depth, text, slug: id });
    }
  }
  for (const child of node.children ?? []) {
    walkHeadings(child, entries);
  }
}

function createRehypeExtractToc(out: { entries: TocEntry[] }) {
  return () => (tree: HastNode) => {
    walkHeadings(tree, out.entries);
  };
}

export async function compileMdx(
  source: string,
  components?: Record<string, React.ComponentType<unknown>>,
) {
  const tocContainer = { entries: [] as TocEntry[] };

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
    order: number;
  }>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          createRehypeExtractToc(tocContainer),
          [
            rehypePrettyCode,
            {
              theme: "github-dark-default",
              keepBackground: true,
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["heading-anchor"],
                ariaLabel: "Link to this section",
              },
              content: {
                type: "text",
                value: "#",
              },
            },
          ],
        ],
      },
    },
  });

  return { content, frontmatter, toc: tocContainer.entries };
}
