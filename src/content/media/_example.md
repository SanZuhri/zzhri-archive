---
title: 'Example Media Post'
pubDate: 2024-11-01
---

This is an example post for the **Media** collection.

## About This Collection

Media is for reviews and notes about books, movies, music, series, anime, and other media.

## Getting Started

1. Delete this `_example.md` file
2. Create posts with `.md` or `.mdx` extension
3. Add frontmatter with `title` and `pubDate`
4. Store cover images/posters in `_assets/` folder (optional)

## Using Images (Optional)

Store book covers, movie posters, or album art:

```
src/content/media/
├── _assets/
│   ├── book-cover.jpg
│   └── movie-poster.jpg
├── favorite-book.md
└── movie-review.md
```

Reference them in your posts:

```markdown
---
title: 'The Great Gatsby Review'
pubDate: 2024-11-01
---

![Book Cover](./\_assets/book-cover.jpg)

A timeless classic about...
```

## Example Post

```markdown
---
title: 'The Great Gatsby - A Timeless Classic'
pubDate: 2024-11-01
---

![The Great Gatsby Cover](./\_assets/gatsby-cover.jpg)

F. Scott Fitzgerald's masterpiece continues to resonate...

## Why I Love It

- Beautiful prose
- Complex characters
- Timeless themes

## Rating: ⭐⭐⭐⭐⭐
```

## URL Structure

- Collection list: `/collections/media/`
- Individual posts: `/collections/media/{post-name}/`
