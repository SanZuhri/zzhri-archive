export const CONTENT_STRUCTURE = {
  posts: {
    type: 'guide' as const,
    title: 'Guide',
    description: 'Guides and documentation',
    urlPattern: '/{slug}',
    listPage: '/guide/',
    backLabel: 'guide',
    showInCollectionsList: false
  },

  thoughts: {
    type: 'collection' as const,
    title: 'Thoughts',
    description: 'Reflections & ideas',
    urlPattern: '/collections/thoughts/{slug}',
    listPage: '/collections/thoughts/',
    backLabel: 'thoughts',
    showInCollectionsList: true
  },

  media: {
    type: 'collection' as const,
    title: 'Media',
    description: 'Books, music, movies, etc',
    urlPattern: '/collections/media/{slug}',
    listPage: '/collections/media/',
    backLabel: 'media',
    showInCollectionsList: true
  },

  gallery: {
    type: 'collection' as const,
    title: 'Gallery',
    description: 'Photos & visuals',
    urlPattern: '/collections/gallery/{slug}',
    listPage: '/collections/gallery/',
    backLabel: 'gallery',
    showInCollectionsList: true
  },

  projects: {
    type: 'collection' as const,
    title: 'Projects',
    description: 'Work & creativity',
    urlPattern: '/collections/projects/{slug}',
    listPage: '/collections/projects/',
    backLabel: 'projects',
    showInCollectionsList: true
  },

  blog: {
    type: 'collection' as const,
    title: 'Blog',
    description: 'Blog posts',
    urlPattern: '/collections/blog/{slug}',
    listPage: '/collections/blog/',
    backLabel: 'blog',
    showInCollectionsList: true
  },

  about: {
    type: 'special' as const,
    title: 'About',
    description: 'About page',
    listPage: '/about/',
    backLabel: 'about',
    showInCollectionsList: false
  }
}

// Helper types
export type ContentKey = keyof typeof CONTENT_STRUCTURE
export type CollectionKey = {
  [K in ContentKey]: (typeof CONTENT_STRUCTURE)[K]['type'] extends 'collection' ? K : never
}[ContentKey]

// Helper functions
export function getCollections() {
  return Object.entries(CONTENT_STRUCTURE)
    .filter(([_, config]) => config.type === 'collection')
    .map(([key, config]) => ({ key, ...config }))
}

export function getCollectionKeys(): CollectionKey[] {
  return Object.keys(CONTENT_STRUCTURE).filter(
    (key) => CONTENT_STRUCTURE[key as ContentKey].type === 'collection'
  ) as CollectionKey[]
}

export function getContentConfig(key: ContentKey) {
  return CONTENT_STRUCTURE[key]
}
