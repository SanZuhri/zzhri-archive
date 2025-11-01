import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const postSchema = z.object({
  title: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  image: z.string().optional()
})

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () => postSchema
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

const thoughts = defineCollection({
  loader: glob({ base: './src/content/thoughts', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const media = defineCollection({
  loader: glob({ base: './src/content/media', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const gallery = defineCollection({
  loader: glob({ base: './src/content/gallery', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

export const collections = { posts, about, thoughts, media, gallery, projects }
