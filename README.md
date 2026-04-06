# astro-docs-minimal

A minimal, clean documentation theme for Astro. Perfect for technical documentation, API docs, and knowledge bases.

[![npm version](https://img.shields.io/npm/v/astro-docs-minimal.svg)](https://www.npmjs.com/package/astro-docs-minimal)
[![npm downloads](https://img.shields.io/npm/dw/astro-docs-minimal.svg)](https://www.npmjs.com/package/astro-docs-minimal)

## Features

- Clean, minimal design focused on content
- Dark/light mode support with automatic detection
- Responsive sidebar navigation
- Mobile-friendly layout with hamburger menu
- Syntax highlighting for code blocks
- Auto-generated table of contents
- Fast performance with Astro
- Easy to customize with Tailwind CSS
- SEO-friendly with proper meta tags

## Quick Start

### Clone the Repository

```bash
git clone https://github.com/Ardesh1r/astro-docs-minimal.git
cd astro-docs-minimal
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Project Structure

```
astro-docs-minimal/
├── src/
│   ├── components/        # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   │   └── docs/         # Documentation pages
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
└── package.json
```

## Usage

### Creating Documentation Pages

Create new markdown files in `src/pages/docs/`:

```markdown
---
layout: ../../layouts/DocsLayout.astro
title: Page Title
description: Page description
---

# Your Content

Your markdown content here...
```

### Customizing Navigation

Edit the `navigation` array in `src/components/Sidebar.astro`:

```javascript
const navigation = [
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Your Page', href: '/docs/your-page' },
]
```

### Customizing Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: '#3b82f6',
  dark: '#1f2937',
}
```

## Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Deployment

Deploy the `dist/` folder to your hosting provider:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## Components

- **Header** - Top navigation with theme toggle
- **Sidebar** - Left navigation menu
- **TableOfContents** - Right sidebar with page headings
- **Footer** - Footer with links
- **ThemeToggle** - Dark/light mode toggle
- **MobileMenu** - Mobile navigation toggle

## Layouts

- **BaseLayout** - Base layout for all pages
- **DocsLayout** - Layout for documentation pages with sidebar and TOC

## License

MIT - Feel free to use this theme for personal and commercial projects.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Credits

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
