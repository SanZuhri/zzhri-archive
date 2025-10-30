---
title: 'Customizing Your Archive'
pubDate: 2024-10-28
---

Learn how to customize your Archive to match your preferences and needs.

## Configuration File

The main configuration is in `src/config.ts`. This file controls the appearance and behavior of your Archive.

## Site Information

Update your site details:

```typescript
site: {
  website: 'https://your-domain.com/',
  title: 'Your Archive Name',
  author: 'Your Name',
  description: 'Your archive description',
  language: 'en-US'
}
```

## Layout Settings

### Content Width

Adjust the maximum width of content:

```typescript
general: {
  contentWidth: '45rem', // Default: 45rem
  // ...
}
```

### Centered Layout

Toggle between centered and left-aligned layout:

```typescript
general: {
  centeredLayout: true, // true = centered, false = left-aligned
  // ...
}
```

### Theme Toggle

Show or hide the theme toggle button:

```typescript
general: {
  themeToggle: true, // true = show, false = hide
  // ...
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

The sidebar navigation is automatically generated based on your collections. To modify it, edit:

```
src/components/ui/NavigationSidebar.astro
```

## Collections Metadata

Update collection titles and descriptions in:

```
src/pages/collections.astro
src/pages/collections/[collection].astro
```

## Tips

1. **Test changes locally** - Always preview changes with `npm run dev`
2. **Keep backups** - Save your config before making major changes
3. **Be consistent** - Use consistent naming and formatting
4. **Document changes** - Keep notes on customizations you make

## Advanced Customization

For more advanced customization:
- Edit layouts in `src/layouts/`
- Modify components in `src/components/`
- Adjust styles in `src/styles/`
- Configure build settings in `astro.config.ts`

## Need Help?

If you encounter issues:
1. Check the Astro documentation
2. Review the Chiri theme documentation
3. Inspect browser console for errors
4. Verify file paths and imports

Happy customizing!
