---
title: 'Markdown Style Guide'
pubDate: '2025-11-02'
tags: ['guide', 'markdown', 'reference', 'syntax', 'typography']
---

Welcome to the complete markdown style guide! This document showcases every typographic feature, markdown element, and styling option available in this theme. From basic formatting to advanced typography enhancements like drop caps, sidenotes, and pull quotes—everything you need to create beautiful, readable content.

---

## Typography Enhancements

This theme includes several advanced typography features that make your content more engaging and readable.

### Drop Caps

The first paragraph after the title automatically gets a beautiful drop cap—notice how the first letter is larger and styled differently. This classic typographic technique draws readers into your content and adds visual interest to the opening.

### Text Formatting

You can use various inline formatting options: **bold text** for emphasis, _italic text_ for subtle stress, ~~strikethrough~~ for corrections, and `inline code` for technical terms. Combine them for **_bold italic_** or **`bold code`** when needed.

### Headings Hierarchy

# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

Each heading level has carefully crafted spacing, sizing, and weight to create a clear visual hierarchy. Use them to structure your content logically.

## Blockquotes & Pull Quotes

### Standard Blockquote

Blockquotes are styled with a subtle left border, italic text, and a light background for emphasis:

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

### Multi-line Blockquote

> The best way to predict the future is to invent it.
> This quote spans multiple lines and demonstrates
> how blockquotes handle longer content with proper
> line breaks and spacing.
> 
> — <cite>Alan Kay</cite>

### Nested Blockquotes

> This is a first-level quote.
> > This is nested inside.
> > > And this is double-nested for complex citations.

### Pull Quote

<p class="pull-quote">
"Design is not just what it looks like and feels like. Design is how it works."
</p>

Pull quotes are centered, larger, and have top/bottom borders to draw attention to key statements.

## Lists

### Ordered Lists

1. First item with proper spacing
2. Second item that demonstrates flow
3. Third item showing consistency
   1. Nested numbered item
   2. Another nested item
4. Back to first level

### Unordered Lists

- Main bullet point
- Another main point
  - Nested subpoint
  - Another subpoint
    - Deep nested item
    - Another deep item
- Back to main level

### Mixed Lists

1. Start with numbered
   - Mix with bullets
   - Another bullet
     - Deep bullet
2. Back to numbered
   1. Nested number
   2. Another nested

### Task Lists

- [x] Completed task with checkmark
- [x] Another finished item
- [ ] Pending task to do
- [ ] Another pending item

Task lists are perfect for tracking progress, todos, or feature checklists.

## Images & Figures

### Standard Image

Images are automatically optimized and responsive. Captions are shown by default:

![HIKARI](./_assets/hikari.jpg)

### Hidden Caption

To hide the caption, start it with an underscore `_` or leave the alt text empty:

![_Hidden caption](./_assets/hikari.jpg)

### Image with Link

[![Clickable image](./_assets/hikari.jpg)](https://example.com)

Click the image above to navigate to a link.

## Tables

Tables feature zebra striping, hover effects, and proper spacing for readability:

| Feature      | Description                    | Status |
| ------------ | ------------------------------ | ------ |
| Zebra Stripe | Alternating row colors         | ✅     |
| Hover Effect | Highlight on mouse over        | ✅     |
| Alignment    | Left, center, right support    | ✅     |
| **Bold**     | _Italic_                       | `Code` |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Text         | Text           | Text          |
| More text    | More text      | More text     |
| Even more    | Even more      | Even more     |

### Complex Table

| Language   | Type       | Year | Paradigm           |
| ---------- | ---------- | ---- | ------------------ |
| JavaScript | Interpreted| 1995 | Multi-paradigm     |
| Python     | Interpreted| 1991 | Multi-paradigm     |
| Rust       | Compiled   | 2010 | Multi-paradigm     |
| Go         | Compiled   | 2009 | Concurrent         |

## Code Examples

### Inline Code

Use backticks for `inline code` like `const x = 10` or `npm install` within sentences. Inline code has subtle background and proper spacing.

### Code Blocks with Syntax Highlighting

```jsx
// React Component Example
import { useState } from 'react'

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
```

### Python Example

```python
# Python function with type hints
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    
    return sequence

# Usage
print(fibonacci(10))
```

### Shell Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to production
npm run deploy
```

### JSON Configuration

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

## Links & References

### Inline Links

Here's an [external link to Google](https://google.com), an [internal link to guide](/guide/), and a [link to a specific section](#typography-enhancements).

### Reference-Style Links

You can use reference-style links for cleaner markdown: [GitHub][gh], [MDN Web Docs][mdn], and [Astro Documentation][astro].

[gh]: https://github.com
[mdn]: https://developer.mozilla.org
[astro]: https://astro.build

### Auto-linking

URLs are automatically converted to links: https://example.com

## Horizontal Rules

Horizontal rules create visual separation between sections:

---

You can use three or more hyphens, asterisks, or underscores:

***

___

## Sidenotes & Margin Notes

This theme supports elegant sidenotes and margin notes for supplementary information without interrupting reading flow.

### Sidenotes

Sidenotes appear in the margin on desktop and inline on mobile.<span class="sidenote">This is a sidenote! It provides additional context without breaking the reading flow. On desktop, it appears in the right margin. On mobile, it appears inline with a subtle background.</span> They're perfect for citations, explanations, or tangential thoughts.

### Margin Notes

<span class="marginnote">
This is a margin note without a number. Use it for less formal asides or commentary.
</span>

Margin notes are similar to sidenotes but without numbering, making them ideal for casual observations or additional context.

### Multiple Sidenotes

You can have multiple sidenotes in a paragraph.<span class="sidenote">First sidenote with important information.</span> They automatically number themselves and maintain proper spacing.<span class="sidenote">Second sidenote with more details.</span> This creates a rich, layered reading experience.

For a complete guide on using sidenotes, see the [Sidenotes Guide](/sidenotes-guide/).

## Definition Lists

Definition lists are perfect for glossaries, terminology, or key-value pairs:

Markdown
: A lightweight markup language with plain text formatting syntax.

Typography
: The art and technique of arranging type to make written language legible and appealing.

Sidenote
: A note placed in the margin of a page.
: Can also mean a digression or incidental remark.

Responsive Design
: An approach to web design that makes pages render well on various devices.
: Ensures optimal viewing experience across different screen sizes.

## Special Text Elements

### Subscript and Superscript

Chemical formulas use subscript: H<sub>2</sub>O (water), CO<sub>2</sub> (carbon dioxide), C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose).

Mathematical expressions use superscript: E = mc<sup>2</sup>, x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>, 2<sup>8</sup> = 256.

Footnote references also use superscript: Einstein's theory<sup>[1]</sup>, Quantum mechanics<sup>[2]</sup>.

### Abbreviations

Hover over abbreviations to see their full meaning: <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, <abbr title="JavaScript">JS</abbr>.

Technical terms: <abbr title="Application Programming Interface">API</abbr>, <abbr title="Representational State Transfer">REST</abbr>, <abbr title="Graphics Interchange Format">GIF</abbr>, <abbr title="Portable Network Graphics">PNG</abbr>.

### Keyboard Input

Keyboard shortcuts are styled distinctly:

- Copy: <kbd>CTRL</kbd> + <kbd>C</kbd> or <kbd>⌘</kbd> + <kbd>C</kbd>
- Paste: <kbd>CTRL</kbd> + <kbd>V</kbd> or <kbd>⌘</kbd> + <kbd>V</kbd>
- Save: <kbd>CTRL</kbd> + <kbd>S</kbd> or <kbd>⌘</kbd> + <kbd>S</kbd>
- Command Palette: <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>
- Force Quit: <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd>

### Highlighted Text

Use <mark>highlighting</mark> to draw attention to <mark>important concepts</mark> or <mark>key takeaways</mark> in your content.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures. This demonstrates how highlighting works in flowing text.

### Small Text

<small>This is small text, useful for fine print, disclaimers, or less important information.</small>

### Inserted and Deleted Text

This is <ins>inserted text</ins> showing additions, while this is <del>deleted text</del> showing removals. Useful for showing edits or changes.

### Strong Emphasis

Use **strong emphasis** for important points, or ***combine bold and italic*** for maximum emphasis.

## Footnotes & References

Footnotes appear at the bottom with proper styling and hover effects.[^note1] They're perfect for citations and references.[^note2]

You can reference the same footnote multiple times.[^note1] Numbering is automatic.[^note3]

[^note1]: This is the first footnote with reference information.
[^note2]: Footnotes can include **formatting**, `code`, and [links](https://example.com).
[^note3]: Footnotes are separated with a horizontal rule and styled for readability.

## Interactive Elements

### Collapsible Sections

<details>
<summary>Click to expand: Basic Example</summary>

Hidden content revealed on click. Perfect for FAQ, optional details, or supplementary information.

</details>

<details>
<summary>Click to expand: With Code</summary>

```javascript
const greeting = (name) => `Hello, ${name}!`
console.log(greeting('World'))
```

Lists work too:
1. First item
2. Second item

</details>

## Text Alignment

<div align="left">
Left-aligned text (default).
</div>

<div align="center">
Centered text for titles or emphasis.
</div>

<div align="right">
Right-aligned for signatures or dates.
</div>

## Emoji & Icons

Add personality with emoji: 🎨 ✨ 🚀 💡 📝 🎉 ⚡ 🔥 💻 🌟

Categories:
- Celebration: 🎉 🎊 🥳 🎈
- Technology: 💻 ⌨️ 🖱️ 📱
- Nature: 🌲 🌸 🌊 ⛰️
- Symbols: ✅ ❌ ⚠️ ℹ️

## Special Characters

### Escape Characters

Use backslash: \* \_ \` \# \[ \] \( \) \{ \} \+ \- \. \!

### HTML Entities

Common: &copy; &reg; &trade; &mdash; &ndash; &hellip;

Mathematical: × ÷ ± ≠ ≈ ≤ ≥ ∞ √

Currency: $ € £ ¥ ₹ ₿

Arrows: → ← ↑ ↓ ↔ ⇒

## Advanced Typography

### Proper Quotes

Use typographic quotes: "double quotes" and 'single quotes'.

Em dash—for breaks—is longer than en dash (2020–2025).

Ellipsis… indicates omission.

### Line Breaks

Two spaces at end  
creates line break.

Or use `<br>` tag<br>explicitly.

## Best Practices

1. **Hierarchical headings** — Don't skip levels
2. **Focused paragraphs** — One idea each
3. **Clear lists** — Break down complexity
4. **Alt text** — Improves accessibility
5. **Wise sidenotes** — Don't overload margins
6. **Proper code** — Use syntax highlighting
7. **Test responsive** — Check all devices

---

## Summary

This theme offers comprehensive typography and markdown features:

✨ **Typography**: Drop caps, pull quotes, spacing  
📝 **Markdown**: Standard + extensions  
🎨 **Styling**: Tables, code, blockquotes  
📌 **Advanced**: Sidenotes, margin notes, footnotes  
♿ **Accessible**: Semantic HTML, screen readers  

**Related Guides:**
- [Sidenotes Guide](/sidenotes-guide/) — Margin notes deep dive
- [Using MDX](/using-mdx/) — Interactive components
- [Customizing Archive](/customizing-archive/) — Layout options

Happy writing! 🚀
