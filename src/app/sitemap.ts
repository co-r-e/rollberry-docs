import type { MetadataRoute } from "next";
import { getAllDocSlugs } from "@/lib/docs/content";

export const dynamic = "force-static";

const BASE_URL = "https://co-r-e.github.io/rollberry-docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const docSlugs = getAllDocSlugs();
  const docEntries: MetadataRoute.Sitemap = docSlugs.map((slug) => ({
    url: `${BASE_URL}/docs/${slug.join("/")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...docEntries,
  ];
}
