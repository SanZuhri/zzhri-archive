---
title: 'Using Sidenotes & Margin Notes'
pubDate: 2025-11-02
tags: ['guide', 'typography', 'design']
---

Sidenotes and margin notes are a elegant way to add supplementary information without interrupting the reading flow. They're especially useful for academic or technical writing.

## What are Sidenotes?

Sidenotes appear in the right margin alongside the main text, utilizing empty space effectively. They're perfect for:

- Definitions and explanations
- Citations and references
- Additional context
- Image captions
- Side commentary

## Basic Usage

### 1. Simple Margin Note

Use a `<span>` with class `marginnote`:

```html
This is the main text<span class="marginnote">This note appears in the margin</span> and it continues here.
```

### 2. Numbered Sidenote

Use a `<span>` with class `sidenote`:

```html
This is the main text<span class="sidenote">This is a numbered sidenote</span> and it continues.
```

### 3. Image with Side Caption

Use `<figure>` with class `margin`:

```html
<figure class="margin">
  <img src="./path/to/image.jpg" alt="Description" />
  <figcaption>This caption appears in the margin next to the image</figcaption>
</figure>
```

### 4. Wide Figure with Side Caption

Use `<figure>` with class `wide`:

```html
<figure class="wide">
  <img src="./path/to/image.jpg" alt="Description" />
  <figcaption>Caption appears on the right side of this wider image</figcaption>
</figure>
```

### 5. Aside Notes (Longer Annotations)

Use `<aside>` for longer supplementary content:

```html
<aside>
  <strong>Note:</strong> This is a longer aside note with more detailed information
  that needs more space than a simple sidenote.
</aside>
```

### 6. Full Bleed Images

Use `<figure>` with class `fullwidth`:

```html
<figure class="fullwidth">
  <img src="./path/to/image.jpg" alt="Description" />
  <figcaption>Full width image caption</figcaption>
</figure>
```

## Examples

Here's a paragraph with a margin note<span class="marginnote">Like this! It appears in the right margin without breaking the flow.</span> that demonstrates how the text flows naturally while the note sits comfortably in the margin.

And here's one with a numbered sidenote<span class="sidenote">Sidenotes are automatically numbered and can be used for references or citations.</span> which is useful for academic or technical writing.

## Responsive Behavior

On screens smaller than 1200px:
- Sidenotes stack below the paragraph
- They get a subtle background and left border
- Full width is maintained for readability
- No horizontal scrolling

## Best Practices

1. **Don't overuse**: Too many sidenotes can be distracting
2. **Keep them short**: Aim for 1-3 sentences
3. **Relevant content**: Only add truly supplementary information
4. **Test responsiveness**: Check how they look on mobile

## Typography Details

- Font size: 0.875rem (slightly smaller than body)
- Color: Secondary text color with 85% opacity
- Line height: 1.5 for readability
- Width: 12rem in the margin
- Position: 14rem to the right of main content


The goal is to maximize information density while maintaining excellent readability.
