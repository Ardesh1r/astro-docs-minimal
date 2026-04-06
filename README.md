# astro-docs-minimal

A minimal, fast, and beautiful documentation theme for Astro. Build stunning technical documentation, API docs, and knowledge bases with zero configuration.

[![npm version](https://img.shields.io/npm/v/@ardesh1r/astro-docs-minimal.svg)](https://www.npmjs.com/package/@ardesh1r/astro-docs-minimal)
[![npm downloads](https://img.shields.io/npm/dw/@ardesh1r/astro-docs-minimal.svg)](https://www.npmjs.com/package/@ardesh1r/astro-docs-minimal)

## What is astro-docs-minimal?

A production-ready documentation theme designed for developers, technical writers, and open-source maintainers. Built with Astro for lightning-fast performance and Tailwind CSS for beautiful, customizable styling.

## Target Audience

- **Developers** building API documentation and technical guides
- **Open-source maintainers** documenting projects and libraries
- **Technical writers** creating knowledge bases and tutorials
- **SaaS companies** building product documentation
- **Educators** creating course materials and learning resources
- **Teams** needing fast, maintainable documentation sites

## What to Expect

### Performance
- **Instant page loads** with Astro's static site generation
- **Optimized bundle size** (~8.2 KB gzipped)
- **Zero JavaScript** by default (100% Lighthouse score possible)
- **Fast build times** even with hundreds of pages

### Developer Experience
- **Zero configuration** - works out of the box
- **Markdown-based** - write docs in familiar Markdown
- **Easy customization** - Tailwind CSS for styling
- **Component-based** - reusable Astro components
- **Type-safe** - full TypeScript support

### User Experience
- **Dark/light mode** with automatic system detection
- **Responsive design** - mobile, tablet, desktop
- **Accessible** - WCAG compliant components
- **Fast navigation** - instant sidebar and search
- **Beautiful typography** - optimized for reading

## Features

- ✨ Clean, minimal design focused on content
- 🌙 Dark/light mode with automatic system preference detection
- 📱 Responsive sidebar navigation with mobile hamburger menu
- 🎨 Beautiful syntax highlighting for code blocks
- 📑 Auto-generated table of contents from headings
- ⚡ Lightning-fast performance with Astro
- 🎯 Easy to customize with Tailwind CSS
- 🔍 SEO-friendly with proper meta tags and structured data
- ♿ Accessible components following WCAG guidelines
- 📦 Zero dependencies beyond Astro and Tailwind CSS

## Quick Start

### Option 1: Use as Astro Theme Template

```bash
npm create astro@latest -- --template Ardesh1r/astro-docs-minimal
cd my-docs
npm run dev
```

### Option 2: Clone the Repository

```bash
git clone https://github.com/Ardesh1r/astro-docs-minimal.git
cd astro-docs-minimal
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

### Option 3: Install as npm Package

```bash
npm install @ardesh1r/astro-docs-minimal
```

Then use it in your Astro project.

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
