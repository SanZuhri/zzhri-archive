---
title: 'How to Add a New Collection'
pubDate: 2024-10-30
---

This guide will walk you through the process of adding a new collection to your Archive.

## What is a Collection?

A collection is a group of related posts. For example, you might have collections for:
- **History** - Posts about historical events
- **Science** - Posts about scientific topics
- **Art** - Posts about art and artists
- **Technology** - Posts about tech topics

## Step-by-Step Guide

### Step 1: Create the Content Folder

Create a new folder in `src/content/` with your collection name:

```bash
src/content/history/
```

### Step 2: Update Content Config

Open `src/content.config.ts` and add your new collection:

```typescript
const history = defineCollection({
  loader: glob({ base: './src/content/history', pattern: '**/*.{md,mdx}' }),
  schema: () => postSchema
})

// Add to exports
export const collections = { 
  posts, 
  astronomy, 
  geography, 
  literature, 
  history,  // Add your new collection here
  about 
}
```

### Step 3: Update Collections Page

Open `src/pages/collections.astro` and add your collection to the array:

```typescript
const collections = [
  {
    name: 'astronomy',
    title: 'Astronomy',
    description: 'Posts about astronomy and space'
  },
  {
    name: 'geography',
    title: 'Geography',
    description: 'Posts about geography and earth'
  },
  {
    name: 'literature',
    title: 'Literature',
    description: 'Posts about literature and books'
  },
  {
    name: 'history',  // Add your new collection
    title: 'History',
    description: 'Posts about historical events'
  }
]
```

### Step 4: Update Collection Routes

Open `src/pages/collections/[collection].astro` and add your collection to the array:

```typescript
export async function getStaticPaths() {
  const collections = ['astronomy', 'geography', 'literature', 'history']  // Add here
  // ...
}
```

Also update the metadata object:

```typescript
const collectionMeta: Record<string, { title: string; description: string }> = {
  // ... existing collections
  history: {
    title: 'History',
    description: 'Posts about historical events'
  }
}
```

### Step 5: Update Post Routes

Open `src/pages/collections/[collection]/[...slug].astro` and update:

```typescript
export async function getStaticPaths() {
  const collections = ['astronomy', 'geography', 'literature', 'history'] as const
  // ...
}
```

Also update the type:

```typescript
type Props = {
  post: CollectionEntry<'astronomy'> | CollectionEntry<'geography'> | CollectionEntry<'literature'> | CollectionEntry<'history'>
  collection: string
}
```

### Step 6: Add Your First Post

Create a markdown file in your new collection folder:

```bash
src/content/history/world-war-ii.md
```

With frontmatter:

```markdown
---
title: 'World War II Overview'
pubDate: 2024-10-30
---

Your content here...
```

## That's It!

Your new collection is now ready. Visit `/collections/` to see it listed, or go directly to `/collections/history/` to see posts in that collection.

## Tips

- Use descriptive collection names (lowercase, no spaces)
- Keep collection descriptions short and clear
- Organize posts logically within each collection
- Use consistent naming conventions for post files
