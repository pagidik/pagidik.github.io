# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Kishore Pagidi, hosted on GitHub Pages at `pagidik.github.io`. It's a static HTML/CSS/JS site with no build system.

## Development

**Local preview**: Open `index.html` directly in a browser, or use a local server:
```bash
python -m http.server 8000
# or
npx serve
```

**Deployment**: Push to `main` branch - GitHub Pages automatically deploys.

## Architecture

- **Main site**: `index.html` - Modern portfolio design with CSS variables, grid layouts, and scroll animations
- **Legacy pages**: Project detail pages (`3dobject.html`, `ImageCaptioning.html`, etc.) use the older Massively template
- **Blog**: `blog/` directory with its own index; add posts as HTML files following `first-post.html` pattern

### Styling System

Two separate design systems exist:
1. **Modern** (`assets/css/style.css`): Uses CSS custom properties (`--color-*`, `--space-*`), Inter/Playfair Display fonts, dark theme with purple accents
2. **Legacy** (`assets/css/main.css`): Massively template styles with SASS source in `assets/sass/`

### Key Files

- `assets/css/style.css` - Main stylesheet with design tokens in `:root`
- `assets/js/app.js` - Main JavaScript (scroll effects, navigation, counters)
- `assets/js/main.js` - Legacy template JavaScript
- `images/` - Profile photo and project images

## Blog Posts

Add new posts by creating HTML files in `blog/`. Include navigation header for return links. Link posts from `blog/index.html` with a new `<article>` block.
