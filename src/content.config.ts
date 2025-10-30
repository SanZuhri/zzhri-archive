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

const astronomy = defineCollection({
  loader: glob({ base: './src/content/astronomy', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const geography = defineCollection({
  loader: glob({ base: './src/content/geography', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const literature = defineCollection({
  loader: glob({ base: './src/content/literature', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const movie = defineCollection({
  loader: glob({ base: './src/content/movie', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

export const collections = { posts, astronomy, geography, literature, movie, about }
