---
title: 'Customizing Your Archive'
pubDate: 2025-10-28
---

Want to make this archive yours? Here's what you can change.

## Where everything lives

Most settings are in `src/config.ts`. Open it up and you'll see options for site info, layout, dates, and post features.

## The basics

First things first—update your site details:

```typescript
site: {
  website: 'https://your-domain.com/',
  title: 'Your Archive Name',
  author: 'Your Name',
  description: 'Your archive description',
  language: 'en-US'
}
```

Pretty self-explanatory.

## Layout stuff

**Content width:**  
Too wide? Too narrow? Change it:

```typescript
general: {
  contentWidth: '45rem', // or whatever feels right
}
```

**Centered or left-aligned:**  
Personal preference really:

```typescript
general: {
  centeredLayout: true, // false for left-aligned
}
```

**Theme toggle:**  
That little sun/moon button. Show it or don't:

```typescript
general: {
  themeToggle: true, // false to hide it
}
```

## Date Format

Customize how dates are displayed:

```typescript
date: {
  dateFormat: 'YYYY-MM-DD', // Options: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY
  dateSeparator: '.', // Options: . - /
  dateOnRight: true // true = right side, false = left side
}
```

## Post Settings

### Reading Time

Show estimated reading time:

```typescript
post: {
  readingTime: true, // true = show, false = hide
  // ...
}
```

### Table of Contents

Enable table of contents for posts:

```typescript
post: {
  toc: true, // true = show, false = hide
  // ...
}
```

### Image Viewer

Enable lightbox for images:

```typescript
post: {
  imageViewer: true, // true = enable, false = disable
  // ...
}
```

### Code Copy Button

Add copy button to code blocks:

```typescript
post: {
  copyCode: true, // true = show, false = hide
  // ...
}
```

## Styling

Archive uses CSS variables for theming. You can customize colors by editing the CSS variables in your global styles.

## Navigation

The navigation includes:
- **Sidebar navigation** (desktop) - Shows Home, Collections, Guide
- **Mobile menu** - Hamburger menu for mobile devices

To modify navigation links, edit:
```
src/components/ui/NavigationSidebar.astro
src/components/ui/MobileMenu.astro
```

## Collections Management

Collections are now managed through a **unified system**. All collection metadata is in one place:

```typescript
// src/collections.config.ts
export const CONTENT_STRUCTURE = {
  thoughts: {
    type: 'collection' as const,
    title: 'Thoughts',
    description: 'Reflections & ideas',
    urlPattern: '/collections/thoughts/{slug}',
    listPage: '/collections/thoughts/',
    backLabel: 'thoughts',
    showInCollectionsList: true
  },
  // ... more collections
}
```

**To add a new collection:**
1. Add entry to `CONTENT_STRUCTURE` in `src/collections.config.ts`
2. Create folder `src/content/{collection}/`
3. Run `pnpm astro sync`

**No need to edit multiple files!** The system automatically:
- Generates routes
- Updates collection list page
- Sets up back buttons
- Creates TypeScript types

## Tips

1. **Test changes locally** - Always preview changes with `npm run dev`
2. **Keep backups** - Save your config before making major changes
3. **Be consistent** - Use consistent naming and formatting
4. **Document changes** - Keep notes on customizations you make

## Image Assets

Each collection has an `_assets/` folder for images:

```
src/content/thoughts/
├── _assets/
│   └── my-image.jpg
└── my-post.md
```

Reference images in posts:
```markdown
![Description](./\_assets/my-image.jpg)
```

**Benefits:**
- Images stay with their collection
- Easy to organize and find
- Portable - move collection, images come with it

## Advanced Customization

For more advanced customization:
- **Layouts** - Edit files in `src/layouts/`
- **Components** - Modify files in `src/components/`
- **Styles** - Adjust CSS in component files
- **Build settings** - Configure `astro.config.ts`
- **Collections system** - Customize `src/collections.config.ts`
- **Content schema** - Modify `src/content.config.ts`

## Need Help?

If you encounter issues:
1. Check the Astro documentation
2. Review the Chiri theme documentation
3. Inspect browser console for errors
4. Verify file paths and imports

Happy customizing!
