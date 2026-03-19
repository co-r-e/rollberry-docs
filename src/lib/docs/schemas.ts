import { z } from "zod";

export const docFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

export const sectionIconSchema = z.enum(["rocket", "book", "code", "wrench"]);

export const navMetaSchema = z.object({
  title: z.string(),
  icon: sectionIconSchema,
  order: z.number(),
  pages: z.array(z.string()),
});

export const rootDocsMetaSchema = z.object({
  sections: z.array(z.string()),
});

export type DocFrontmatter = z.infer<typeof docFrontmatterSchema>;
export type NavMetaInput = z.infer<typeof navMetaSchema>;
export type RootDocsMetaInput = z.infer<typeof rootDocsMetaSchema>;
