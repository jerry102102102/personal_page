import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    links: z.object({
      repo: z.string().optional(),
      demo: z.string().optional(),
      paper: z.string().optional(),
    }).default({}),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    links: z.object({
      paper: z.string().optional(),
      code: z.string().optional(),
    }).default({}),
  }),
});

export const collections = { projects, research };
