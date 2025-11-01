import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'
import { CONTENT_STRUCTURE } from './collections.config'

const postSchema = z.object({
  title: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional().default([])
})

const aboutSchema = z.object({})

// Auto-generate collections from CONTENT_STRUCTURE
const collections: Record<string, any> = {}

Object.entries(CONTENT_STRUCTURE).forEach(([key, config]) => {
  const schema = key === 'about' ? aboutSchema : postSchema

  collections[key] = defineCollection({
    loader: glob({
      base: `./src/content/${key}`,
      pattern: '**/*.{md,mdx}'
    }),
    schema: () => schema
  })
})

export { collections }
