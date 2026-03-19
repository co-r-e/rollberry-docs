import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocBySlug, getAllDocSlugs, getSidebar, getAdjacentPages } from "@/lib/docs/content";
import { compileMdx } from "@/lib/docs/mdx";
import { mdxComponents } from "@/components/docs/mdx";
import { DocsLayoutShell } from "@/components/docs/DocsLayoutShell";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const BASE_URL = "https://co-r-e.github.io/rollberry-docs";
const DEFAULT_SLUG = ["getting-started", "introduction"];

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return [
    { slug: undefined },
    ...slugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = slug ?? DEFAULT_SLUG;
  const doc = getDocBySlug(resolvedSlug);

  if (!doc) {
    return { title: "Not Found — Rollberry Docs" };
  }

  const pageUrl = `${BASE_URL}/docs/${resolvedSlug.join("/")}`;

  return {
    title: `${doc.meta.title} — Rollberry Docs`,
    description: doc.meta.description,
    openGraph: {
      title: `${doc.meta.title} — Rollberry Docs`,
      description: doc.meta.description,
      type: "article",
      url: pageUrl,
      siteName: "Rollberry",
    },
    twitter: {
      card: "summary",
      title: `${doc.meta.title} — Rollberry Docs`,
      description: doc.meta.description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function DocsPage({ params }: PageProps) {
  const { slug } = await params;
  const resolvedSlug = slug ?? DEFAULT_SLUG;
  const doc = getDocBySlug(resolvedSlug);

  if (!doc) {
    notFound();
  }

  const { content, toc } = await compileMdx(doc.content, mdxComponents);
  const sidebar = getSidebar(resolvedSlug);
  const { prev, next } = getAdjacentPages(resolvedSlug);

  // Build breadcrumbs
  const breadcrumbs = [
    { label: "Docs", href: "/docs" },
  ];
  const section = sidebar.find((s) =>
    s.items.some((i) => i.href === `/docs/${resolvedSlug.join("/")}`)
  );
  if (section) {
    breadcrumbs.push({
      label: section.title,
      href: section.items[0]?.href ?? "/docs",
    });
  }
  breadcrumbs.push({
    label: doc.meta.title,
    href: `/docs/${resolvedSlug.join("/")}`,
  });

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.meta.title,
    description: doc.meta.description,
    url: `${BASE_URL}/docs/${resolvedSlug.join("/")}`,
    author: {
      "@type": "Organization",
      name: "CORe Inc.",
      url: "https://co-r-e.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CORe Inc.",
      url: "https://co-r-e.com",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Rollberry Documentation",
      url: `${BASE_URL}/docs`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${BASE_URL}${item.href}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocsLayoutShell
        sidebar={sidebar}
        toc={toc}
        breadcrumbs={breadcrumbs}
        prevNext={{ prev, next }}
      >
        <article className="prose-docs">
          <h1>{doc.meta.title}</h1>
          <p style={{ color: "var(--docs-text-secondary)", fontSize: "1.125rem", marginTop: "0.5rem" }}>
            {doc.meta.description}
          </p>
          <div>{content}</div>
        </article>
      </DocsLayoutShell>
    </>
  );
}
