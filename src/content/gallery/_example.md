---
title: 'Example Gallery Post'
pubDate: 2024-11-01
---

This is an example post for the **Gallery** collection.

## About This Collection

Gallery is for photos, visuals, and image-based content.

## Getting Started

1. Delete this `_example.md` file
2. Create your own posts with `.md` or `.mdx` extension
3. Add frontmatter with `title` and `pubDate`
4. Store images in `_assets/` folder

## Using Images

Store your images in the `_assets/` folder:

```
src/content/gallery/
├── _assets/
│   ├── sunset.jpg
│   └── beach.png
├── sunset-photos.md
└── beach-day.md
```

Reference them in your posts:

```markdown
---
title: 'Sunset at the Beach'
pubDate: 2024-11-01
---

![Sunset](./\_assets/sunset.jpg)

Beautiful sunset captured at the beach...
```

## URL Structure

- Collection list: `/collections/gallery/`
- Individual posts: `/collections/gallery/{post-name}/`
