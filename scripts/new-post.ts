import fs from 'fs'
import path from 'path'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve))
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

async function main() {
  const collectionArg = process.argv[2]
  const titleArg = process.argv.slice(3).join(' ')

  let collection = collectionArg
  let title = titleArg

  // Interactive mode if no arguments
  if (!collection) {
    console.log('\n📝 Create a new post\n')

    // List available collections
    const contentPath = path.join(process.cwd(), 'src', 'content')
    const collections = fs.readdirSync(contentPath)
      .filter(name => {
        const stat = fs.statSync(path.join(contentPath, name))
        return stat.isDirectory() && name !== 'about'
      })

    console.log('Available collections:')
    collections.forEach((col, i) => console.log(`  ${i + 1}. ${col}`))
    console.log()

    collection = await question('Collection name: ')
  }

  if (!collection) {
    console.error('❌ Error: Collection name is required')
    rl.close()
    process.exit(1)
  }

  // Check if collection exists
  const collectionPath = path.join(process.cwd(), 'src', 'content', collection)
  if (!fs.existsSync(collectionPath)) {
    console.error(`❌ Error: Collection "${collection}" does not exist`)
    console.log(`\nCreate it first: pnpm new:collection ${collection}`)
    rl.close()
    process.exit(1)
  }

  if (!title) {
    title = await question('Post title: ')
  }

  if (!title) {
    console.error('❌ Error: Post title is required')
    rl.close()
    process.exit(1)
  }

  // Ask for image (optional)
  const hasImage = await question('Add image? (y/N): ')
  let imagePath = ''

  if (hasImage.toLowerCase() === 'y' || hasImage.toLowerCase() === 'yes') {
    const imageFile = await question('Image filename (in _assets/): ')
    if (imageFile) {
      imagePath = `./_assets/${imageFile}`
    }
  }

  rl.close()

  // Generate slug
  const slug = slugify(title)
  const today = new Date().toISOString().split('T')[0]

  // Determine file extension
  const usesMdx = imagePath || collection === 'posts'
  const extension = usesMdx ? 'mdx' : 'md'
  const filename = `${slug}.${extension}`
  const filepath = path.join(collectionPath, filename)

  // Check if file exists
  if (fs.existsSync(filepath)) {
    console.error(`❌ Error: Post "${filename}" already exists in ${collection}`)
    process.exit(1)
  }

  // Create post content
  let content = `---
title: '${title}'
pubDate: ${today}
---

Write your content here...

## Section 1

Your content...

## Section 2

More content...
`

  if (imagePath) {
    content = `---
title: '${title}'
pubDate: ${today}
---

![${title}](${imagePath})

Write your content here...

## Section 1

Your content...

## Section 2

More content...
`
  }

  // Write file
  fs.writeFileSync(filepath, content)

  console.log(`\n✨ Post created successfully!\n`)
  console.log(`📄 File: src/content/${collection}/${filename}`)
  console.log(`📅 Date: ${today}`)
  console.log(`🔗 URL: /collections/${collection}/${slug}/`)

  if (imagePath) {
    console.log(`\n📸 Don't forget to add your image:`)
    console.log(`   src/content/${collection}/_assets/${path.basename(imagePath)}`)
  }

  console.log(`\n💡 Next steps:`)
  console.log(`   1. Edit the post: src/content/${collection}/${filename}`)
  console.log(`   2. Start dev server: npm run dev`)
  console.log(`   3. Visit: http://localhost:4321/collections/${collection}/${slug}/\n`)
}

main().catch(console.error)
