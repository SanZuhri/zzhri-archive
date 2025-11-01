---
title: 'Welcome to Archive'
pubDate: 2025-10-31
tags: ['guide', 'getting-started', 'introduction']
---

Hey there! Welcome to **Archive**.

This is a personal archive system I built to organize my thoughts, media reviews, photos, and projects. It's minimal by design—no clutter, just content.

## What's this all about?

Think of it as your *digital filing cabinet*, but way more pleasant to use. You can:

- Group related posts into **collections** (like Thoughts, Media, Gallery, Projects)
- Browse everything with a clean interface that doesn't get in your way
- Read without distractions—just you and the content
- Keep images organized in `_assets` folders right next to your posts

## What makes it nice to use

**Collections that make sense**  
Everything's organized into collections—Thoughts for reflections, Media for reviews, Gallery for photos, Projects for work stuff. Adding a new collection? One command. That's it.

**Actually minimal**  
Built on the Chiri theme. Just clean typography and content that's easy to read.

**Images stay organized**  
Each collection gets its own `_assets` folder. Your photos live next to your posts. Move a collection? Images come with it. Simple.

## Want to learn more?

I've written some guides to help you get started:

- **[How to Add a Post](/how-to-add-post/)** — The basics of creating content
- **[How to Add a Collection](/how-to-add-collection/)** — Setting up new collections
- **[Customizing Your Archive](/customizing-archive/)** — Make it yours
- **[Theme Guide](/theme-guide/)** — All the config options

## Quick start

**Adding a post** (the easy way):
```bash
pnpm new:post thoughts "My First Post"
```
Done. File created, frontmatter added, ready to write.

**Adding a collection** (also easy):
```bash
pnpm new:collection recipes
```
Folder created, config updated, types generated. Start adding posts.

**Or do it manually** if you prefer—the guides show you how.

## A few things to know

When you're writing posts, changes show up instantly. Just save and refresh. No restart needed.

But if you add a *new collection* or change config files, you'll need to restart the dev server. That's just how Astro works.

---

Ready to explore? Check out the [Collections](/collections/) page or dive into the guides above.
