# Archive

Minimal collection and archive system built with Astro and Chiri theme.

## Features

- Collections system for organizing content
- Sidebar navigation (desktop) and mobile menu
- MDX support with interactive components
- Dark/light theme toggle
- Performance optimized

## Quick Start

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:4321`

## Structure

```
src/
├── content/
│   ├── posts/       # Guide posts
│   ├── astronomy/   # Collections
│   ├── geography/
│   ├── literature/
│   └── movie/
├── pages/           # Routes
└── config.ts        # Configuration
```

## Add Content

Create `.md` or `.mdx` file in collection folder:

```markdown
---
title: 'Post Title'
pubDate: 2024-10-31
---

Content here...
```

## Configuration

Edit `src/config.ts` for site settings.

## Build

```bash
pnpm build
pnpm preview
```

## Documentation

Visit `/guide/` for:
- How to add posts
- How to add collections
- Markdown vs MDX guide
- Using MDX components
- Customization tips

---

Built with [Astro](https://astro.build) and [Chiri](https://github.com/the3ash/astro-chiri)
