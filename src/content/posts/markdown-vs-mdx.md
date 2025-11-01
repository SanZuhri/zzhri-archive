---
title: 'Markdown vs MDX: A Comprehensive Guide'
pubDate: 2025-10-27
---

Understanding the difference between Markdown (.md) and MDX (.mdx) is essential for choosing the right format for your content. This guide covers everything you need to know.

## What is Markdown?

**Markdown** is a lightweight markup language created by John Gruber in 2004. It allows you to write formatted text using plain text syntax that's easy to read and write.

### Markdown Features

- **Simple syntax** - Easy to learn and use
- **Plain text** - Human-readable even without rendering
- **Widely supported** - Works across many platforms
- **Fast rendering** - Lightweight and quick to process
- **Static content** - Pure content without interactivity

### Basic Markdown Example

```markdown
# Heading 1
## Heading 2

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

[Link text](https://example.com)

![Image alt text](/path/to/image.jpg)
```

## What is MDX?

**MDX** is Markdown for the component era. It lets you use JSX (JavaScript XML) in your Markdown content, allowing you to import and use React/Astro components directly in your documents.

### MDX Features

- **Component support** - Use React/Astro components
- **Interactive content** - Add dynamic elements
- **JavaScript expressions** - Embed JS logic
- **Import statements** - Import components and data
- **Extended functionality** - Beyond static content

### Basic MDX Example

```mdx
---
title: 'My Post'
pubDate: 2024-10-27
---

import MyComponent from '../components/MyComponent.astro'
import { Chart } from '../components/Chart.jsx'

# Heading 1

This is regular Markdown content.

<MyComponent title="Hello" />

You can use components inline like <Chart data={myData} />.

{/* This is a JSX comment */}

<div className="custom-box">
  Custom HTML with JSX syntax
</div>
```

## Key Differences

### 1. File Extension

- **Markdown**: `.md`
- **MDX**: `.mdx`

### 2. Syntax

**Markdown** uses pure Markdown syntax:
```markdown
**Bold text**
*Italic text*
[Link](url)
```

**MDX** supports Markdown + JSX:
```mdx
**Bold text**
<strong>Bold with HTML</strong>
<CustomComponent prop="value" />
```

### 3. Components

**Markdown**: Cannot use components
```markdown
<!-- This won't work in .md -->
<MyComponent />
```

**MDX**: Full component support
```mdx
import MyComponent from './MyComponent.astro'

<MyComponent prop="value" />
```

### 4. Imports

**Markdown**: No import statements
```markdown
<!-- Cannot import in .md -->
```

**MDX**: Can import anything
```mdx
import { data } from './data.js'
import Component from './Component.astro'
import './styles.css'
```

### 5. JavaScript Expressions

**Markdown**: No JavaScript
```markdown
<!-- This is just text in .md -->
{2 + 2}
```

**MDX**: JavaScript expressions work
```mdx
The answer is {2 + 2}
{/* Outputs: The answer is 4 */}
```

### 6. HTML Elements

**Markdown**: Basic HTML support
```markdown
<div>
  <p>Basic HTML works</p>
</div>
```

**MDX**: JSX syntax required
```mdx
<div className="box">
  <p>Must use JSX syntax</p>
</div>
```

Note: In MDX, use `className` instead of `class`, `htmlFor` instead of `for`, etc.

### 7. Comments

**Markdown**: HTML comments
```markdown
<!-- This is a comment -->
```

**MDX**: JSX comments
```mdx
{/* This is a JSX comment */}
```

### 8. Performance

**Markdown**:
- Faster to parse
- Lighter weight
- Less processing overhead
- Better for simple content

**MDX**:
- Slower to parse (needs JSX compilation)
- More processing required
- Better for interactive content
- Worth it for complex features

## When to Use Markdown (.md)

Use Markdown when:

✅ Writing simple, static content
✅ Creating documentation
✅ Writing blog posts without interactivity
✅ You want faster build times
✅ Content is primarily text and images
✅ You don't need components
✅ Simplicity is preferred

### Markdown Use Cases

- Blog posts
- Documentation pages
- README files
- Simple articles
- Text-heavy content
- Static guides

## When to Use MDX (.mdx)

Use MDX when:

✅ You need interactive components
✅ Embedding charts or graphs
✅ Creating interactive tutorials
✅ Reusing UI components
✅ Need dynamic content
✅ Want to import data
✅ Building complex layouts

### MDX Use Cases

- Interactive tutorials
- Component showcases
- Data visualizations
- Complex layouts
- Reusable content blocks
- Dynamic documentation

## Practical Examples

### Example 1: Simple Blog Post

**Use Markdown (.md)**

```markdown
---
title: 'My Travel Story'
pubDate: 2024-10-27
---

# My Trip to Paris

Last summer, I visited Paris. Here's what I learned:

## Day 1: The Eiffel Tower

The Eiffel Tower was amazing! Here's a photo:

![Eiffel Tower](/images/eiffel.jpg)

## Day 2: The Louvre

The Louvre Museum houses thousands of artworks...
```

### Example 2: Interactive Tutorial

**Use MDX (.mdx)**

```mdx
---
title: 'Interactive React Tutorial'
pubDate: 2024-10-27
---

import Counter from '../components/Counter.jsx'
import CodeBlock from '../components/CodeBlock.astro'

# Learn React Hooks

Let's learn about useState with an interactive example:

<Counter initialCount={0} />

Try clicking the button above! Here's the code:

<CodeBlock language="jsx">
{`const [count, setCount] = useState(0)`}
</CodeBlock>
```

### Example 3: Data Visualization

**Use MDX (.mdx)**

```mdx
---
title: 'Sales Report 2024'
pubDate: 2024-10-27
---

import { BarChart } from '../components/Charts.jsx'
import { salesData } from '../data/sales.js'

# Q3 Sales Report

Here's our performance this quarter:

<BarChart 
  data={salesData} 
  title="Sales by Region"
  height={400}
/>

The data shows a {salesData.growth}% increase compared to last quarter.
```

## Migration Between Formats

### Converting .md to .mdx

1. Rename file from `.md` to `.mdx`
2. Update HTML to JSX syntax (`class` → `className`)
3. Add imports if needed
4. Test thoroughly

### Converting .mdx to .md

1. Remove all import statements
2. Remove all component usage
3. Convert JSX to plain HTML or Markdown
4. Remove JavaScript expressions
5. Rename file from `.mdx` to `.md`

## Best Practices

### For Markdown (.md)

1. **Keep it simple** - Use standard Markdown syntax
2. **Be consistent** - Follow Markdown conventions
3. **Use headings properly** - Create clear hierarchy
4. **Optimize images** - Use appropriate sizes
5. **Write for humans** - Keep content readable

### For MDX (.mdx)

1. **Import at the top** - Keep imports organized
2. **Use components wisely** - Don't overuse
3. **Test interactivity** - Ensure components work
4. **Document props** - Make components clear
5. **Consider performance** - Don't add unnecessary complexity

## Common Pitfalls

### Markdown Pitfalls

❌ Trying to use components
❌ Expecting JavaScript to work
❌ Using JSX syntax
❌ Importing files

### MDX Pitfalls

❌ Using `class` instead of `className`
❌ Forgetting to import components
❌ Mixing HTML and JSX syntax
❌ Not closing self-closing tags (`<img>` → `<img />`)
❌ Using HTML comments instead of JSX comments

## Performance Considerations

### Build Time

- **Markdown**: ~10-50ms per file
- **MDX**: ~50-200ms per file

MDX takes longer because it needs to:
1. Parse Markdown
2. Parse JSX
3. Compile components
4. Bundle JavaScript

### Runtime Performance

- **Markdown**: Static HTML, very fast
- **MDX**: May include JavaScript, slightly slower

### Recommendations

- Use `.md` for 80% of content
- Use `.mdx` only when you need interactivity
- Don't convert everything to MDX "just in case"
- Profile your build times

## Archive Configuration

In Archive, both formats are supported:

```typescript
// src/content.config.ts
const posts = defineCollection({
  loader: glob({ 
    base: './src/content/posts', 
    pattern: '**/*.{md,mdx}'  // Both formats supported
  }),
  schema: () => postSchema
})
```

## Conclusion

**Choose Markdown (.md)** for:
- Simple, static content
- Better performance
- Easier maintenance
- Standard documentation

**Choose MDX (.mdx)** for:
- Interactive content
- Component reuse
- Dynamic features
- Complex layouts

Most content should be Markdown. Use MDX only when you need its special features. This keeps your site fast and maintainable.

## Further Reading

- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [Astro Markdown](https://docs.astro.build/en/guides/markdown-content/)
- [Using MDX](/using-mdx/) - See the existing MDX example in Archive

Happy writing!
