---
title: 'Welcome to Archive'
pubDate: 2024-10-31
---

Welcome to **Archive** - a minimal collection and archive system built with Astro and the Chiri theme.

## What is Archive?

Archive is a simple yet powerful system for organizing your content into collections. Think of it as a digital library where you can:

- **Organize content** into themed collections (Thoughts, Media, Gallery, Projects, etc.)
- **Browse easily** with a clean, minimal interface
- **Navigate quickly** using the sidebar navigation and mobile menu
- **Read comfortably** with a distraction-free reading experience
- **Manage images** with organized `_assets` folders per collection

## Key Features

### Unified Collections System
Group related posts together in collections. The new system uses a **single source of truth** (`collections.config.ts`) making it easy to add or modify collections.

**Current Collections:**
- **Thoughts** - Reflections & ideas
- **Media** - Books, movies, music reviews
- **Gallery** - Photos & visuals
- **Projects** - Work & creativity

### Minimal Design
Built on the Chiri theme, Archive focuses on content with a clean, typography-first design.

### Easy Navigation
- **Sidebar navigation** (desktop) for quick access to Home, Collections, and Guide
- **Mobile menu** with hamburger icon for smaller screens
- **Smart back buttons** that return you to the right place
- **Collection pages** that list all posts with counts
- **Consistent layout** across all pages

### Organized Assets
Each collection has its own `_assets/` folder for images, keeping everything organized and portable.

## Getting Started

To learn how to use Archive effectively, read through these guide posts:

1. **[How to Add a Post](/how-to-add-post/)** - Learn how to add posts to collections
2. **[How to Add a New Collection](/how-to-add-collection/)** - Learn how to create new collections
3. **[Customizing Your Archive](/customizing-archive/)** - Tips for personalizing your archive
4. **[Theme Guide](/theme-guide/)** - Configuration options and features

## Quick Start

**Add a new post (Hot Reload ✨):**
1. Choose a collection (thoughts, media, gallery, or projects)
2. Create a `.md` file in `src/content/{collection}/`
3. Add frontmatter with `title` and `pubDate`
4. Write your content
5. Save & refresh browser - changes appear instantly!

**Add a new collection (Requires Sync):**
1. Edit `src/collections.config.ts`
2. Create folder `src/content/{collection}/`
3. Run `pnpm astro sync && npm run dev`
4. Start adding posts!

## Development Tips

- **Posts in existing collections** = Hot reload (instant preview)
- **New collections or config changes** = Need sync + restart
- Keep dev server running while writing posts
- Only restart when adding collections or changing config

Start exploring by visiting the [Collections](/collections/) page or continue reading the guides!
