# Blog Instructions

The blog now uses a shared data model plus one reusable reader template.

1. Add each new post object in `blog-data.js`.
2. Keep `slug`, `title`, `source`, `published`, `readTime`, `sourceUrl`, `excerpt`, and `content` up to date.
3. `index.html` renders the listing at `/blogs/`.
4. Each post is available at `/blogs/<slug>/` (directory-based route).
5. Shared rendering and behavior is handled through `blog.js`.

This keeps the listing page and individual post pages in sync without duplicating markup.
