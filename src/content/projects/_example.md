---
title: 'Example Project Post'
pubDate: 2024-11-01
---

This is an example post for the **Projects** collection.

## About This Collection

Projects is for your work, creative projects, and portfolio items.

## Getting Started

1. Delete this `_example.md` file
2. Create your own posts with `.md` or `.mdx` extension
3. Add frontmatter with `title` and `pubDate`
4. Store project images/screenshots in `_assets/` folder

## Using Images

Store project screenshots and images:

```
src/content/projects/
├── _assets/
│   ├── portfolio-screenshot.png
│   └── app-demo.gif
├── portfolio-website.md
└── mobile-app.md
```

Reference them in your posts:

```markdown
---
title: 'My Portfolio Website'
pubDate: 2024-11-01
---

![Portfolio Screenshot](./\_assets/portfolio-screenshot.png)

I built a portfolio website using Astro...
```

## URL Structure

- Collection list: `/collections/projects/`
- Individual posts: `/collections/projects/{project-name}/`
