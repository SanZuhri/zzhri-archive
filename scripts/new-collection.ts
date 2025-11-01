import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const collectionName = process.argv[2]

if (!collectionName) {
  console.error('❌ Error: Collection name is required')
  console.log('Usage: pnpm new:collection <name>')
  console.log('Example: pnpm new:collection recipes')
  process.exit(1)
}

// Validate collection name
if (!/^[a-z][a-z0-9-]*$/.test(collectionName)) {
  console.error('❌ Error: Collection name must be lowercase, start with a letter, and contain only letters, numbers, and hyphens')
  process.exit(1)
}

const collectionTitle = collectionName.charAt(0).toUpperCase() + collectionName.slice(1)

console.log(`\n🚀 Creating new collection: ${collectionName}\n`)

// 1. Create collection folder
const collectionPath = path.join(process.cwd(), 'src', 'content', collectionName)
if (fs.existsSync(collectionPath)) {
  console.error(`❌ Error: Collection "${collectionName}" already exists`)
  process.exit(1)
}

fs.mkdirSync(collectionPath, { recursive: true })
console.log(`✅ Created folder: src/content/${collectionName}/`)

// 2. Create _assets folder
const assetsPath = path.join(collectionPath, '_assets')
fs.mkdirSync(assetsPath, { recursive: true })

// Create .gitkeep
fs.writeFileSync(
  path.join(assetsPath, '.gitkeep'),
  `# This folder stores images and assets for ${collectionName} collection posts\n`
)
console.log(`✅ Created folder: src/content/${collectionName}/_assets/`)

// 3. Create _example.md
const exampleContent = `---
title: 'Example ${collectionTitle} Post'
pubDate: ${new Date().toISOString().split('T')[0]}
---

This is an example post for the **${collectionTitle}** collection.

## About This Collection

${collectionTitle} collection for your content.

## Getting Started

1. Delete this \`_example.md\` file
2. Create your own posts with \`.md\` or \`.mdx\` extension
3. Add frontmatter with \`title\` and \`pubDate\`
4. Store images in \`_assets/\` folder

## Using Images

Store your images in the \`_assets/\` folder:

\`\`\`
src/content/${collectionName}/
├── _assets/
│   └── image.jpg
└── my-post.md
\`\`\`

Reference them in your posts:

\`\`\`markdown
---
title: 'My Post'
pubDate: ${new Date().toISOString().split('T')[0]}
---

![Description](./\\_assets/image.jpg)

Your content here...
\`\`\`

## URL Structure

- Collection list: \`/collections/${collectionName}/\`
- Individual posts: \`/collections/${collectionName}/{post-name}/\`
`

fs.writeFileSync(path.join(collectionPath, '_example.md'), exampleContent)
console.log(`✅ Created file: src/content/${collectionName}/_example.md`)

// 4. Update collections.config.ts
const configPath = path.join(process.cwd(), 'src', 'collections.config.ts')
let configContent = fs.readFileSync(configPath, 'utf-8')

// Find the position to insert (before 'about' collection)
const insertPosition = configContent.indexOf('  about: {')

if (insertPosition === -1) {
  console.error('❌ Error: Could not find insertion point in collections.config.ts')
  process.exit(1)
}

// Use quotes if collection name has hyphen
const propertyName = collectionName.includes('-') ? `'${collectionName}'` : collectionName

const newCollectionConfig = `  ${propertyName}: {
    type: 'collection' as const,
    title: '${collectionTitle}',
    description: 'Your ${collectionName} collection',
    urlPattern: '/collections/${collectionName}/{slug}',
    listPage: '/collections/${collectionName}/',
    backLabel: '${collectionName}',
    showInCollectionsList: true
  },

  `

configContent = configContent.slice(0, insertPosition) + newCollectionConfig + configContent.slice(insertPosition)

fs.writeFileSync(configPath, configContent)
console.log(`✅ Updated: src/collections.config.ts`)

// 5. Run astro sync
console.log('\n🔄 Running astro sync...')
try {
  execSync('pnpm astro sync', { stdio: 'inherit' })
  console.log('✅ Types generated successfully')
} catch (error) {
  console.error('⚠️  Warning: astro sync failed, run it manually: pnpm astro sync')
}

console.log(`\n✨ Collection "${collectionName}" created successfully!\n`)
console.log('Next steps:')
console.log(`  1. Edit src/collections.config.ts to customize the description`)
console.log(`  2. Create your first post: pnpm new:post ${collectionName} "My First Post"`)
console.log(`  3. Start dev server: npm run dev`)
console.log(`  4. Visit: http://localhost:4321/collections/${collectionName}/\n`)
