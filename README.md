# Archive

Minimal collection and archive system built with Astro and Chiri.

## Setup

```bash
pnpm install
pnpm dev
```

## Structure

```
src/content/
├── posts/       # Guide
├── astronomy/   # Collections
├── geography/
├── literature/
└── movie/
```

## Add Post

Create `.md` file in collection folder:

```markdown
---
title: 'Title'
pubDate: 2024-10-31
---

Content...
```

## Build

```bash
pnpm build
```

## Docs

Visit `/guide/` in the app for full documentation.

---

Based on [Chiri](https://github.com/the3ash/astro-chiri)
