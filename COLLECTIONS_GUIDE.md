# Panduan Sistem Collections

Aplikasi ini sekarang memiliki sistem collection/archive yang memungkinkan Anda mengorganisir posts ke dalam kategori-kategori terpisah.

## Struktur Collections

Saat ini ada 3 collections yang tersedia:
- **Astronomy** - Posts tentang astronomi dan luar angkasa
- **Geography** - Posts tentang geografi dan bumi
- **Literature** - Posts tentang literatur dan buku

## Cara Menggunakan

### 1. Navigasi
- Klik link **"Collections"** di header untuk melihat semua collections
- Klik pada collection tertentu untuk melihat posts di dalamnya
- Setiap halaman collection menampilkan jumlah posts yang ada

### 2. Menambah Post Baru ke Collection

Buat file markdown baru di folder collection yang sesuai:

```bash
src/content/astronomy/nama-post.md
src/content/geography/nama-post.md
src/content/literature/nama-post.md
```

Format frontmatter yang diperlukan:

```markdown
---
title: 'Judul Post'
pubDate: 2024-10-31
image: '/path/to/image.jpg' # opsional
---

Konten post Anda di sini...
```

### 3. Menambah Collection Baru

Jika ingin menambah collection baru (misalnya "History"):

1. **Buat folder di `src/content/`**:
   ```
   src/content/history/
   ```

2. **Update `src/content.config.ts`**:
   ```typescript
   const history = defineCollection({
     loader: glob({ base: './src/content/history', pattern: '**/*.{md,mdx}' }),
     schema: () => postSchema
   })
   
   export const collections = { posts, astronomy, geography, literature, history, about }
   ```

3. **Update array collections di `src/pages/collections.astro`**:
   ```typescript
   const collections = [
     // ... collections yang ada
     {
       name: 'history',
       title: 'History',
       description: 'Posts about history'
     }
   ]
   ```

4. **Update array di `src/pages/collections/[collection].astro`** dan `src/pages/collections/[collection]/[...slug].astro`**:
   ```typescript
   const collections = ['astronomy', 'geography', 'literature', 'history'] as const
   ```

## Fitur

- ✅ Tampilan menggunakan komponen Chiri yang sudah ada
- ✅ Sorting otomatis berdasarkan tanggal publikasi
- ✅ Menampilkan jumlah posts di setiap collection
- ✅ Navigasi mudah antar collections
- ✅ Link "back" untuk kembali ke daftar collections
- ✅ Responsive dan mengikuti tema yang dipilih

## URL Structure

- `/collections/` - Daftar semua collections
- `/collections/astronomy/` - Posts dalam collection Astronomy
- `/collections/astronomy/black-holes/` - Post individual
- `/collections/geography/mountains/` - Post individual
- `/collections/literature/poetry/` - Post individual

## Catatan

- Posts yang dimulai dengan underscore (`_`) akan diabaikan (draft)
- Halaman utama (`/`) masih menampilkan posts dari folder `src/content/posts/`
- Collections dan posts reguler terpisah dan tidak saling mempengaruhi
