import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    year: z.number(),
    inProgress: z.boolean().optional(),
    tags: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), href: z.url() })),
    featured: z.boolean(),
    order: z.number(),
  }),
});

export const collections = { projects };