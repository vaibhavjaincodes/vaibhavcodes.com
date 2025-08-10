import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    instructor: z.string().default("Vaibhav Jain"),
    duration: z.string(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    price: z.number().optional(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string().optional(),
    year: z.number(),
    doi: z.string().optional(),
    summary: z.string(),
    readDate: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    tags: z.array(z.string()).optional(),
    keyInsights: z.array(z.string()).optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    isbn: z.string().optional(),
    publishedYear: z.number(),
    readDate: z.coerce.date(),
    rating: z.number().min(1).max(5).optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    recommended: z.boolean().optional().default(false),
    keyTakeaways: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
  courses,
  papers,
  books,
};