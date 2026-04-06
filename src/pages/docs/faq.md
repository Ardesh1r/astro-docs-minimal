---
layout: ../../layouts/DocsLayout.astro
title: FAQ
description: Frequently asked questions about astro-docs-minimal
---

## Frequently Asked Questions

### What is astro-docs-minimal?

astro-docs-minimal is a minimal, clean documentation theme for Astro. It provides a simple, fast, and easy-to-customize foundation for building documentation sites.

### How do I customize the theme colors?

Edit the `tailwind.config.mjs` file to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

### Can I add custom components?

Yes! Create new components in `src/components/` and import them in your pages or layouts.

### How do I add new navigation items?

Edit the `navigation` array in `src/components/Sidebar.astro`:

```javascript
const navigation = [
  { label: 'Your Page', href: '/docs/your-page' },
]
```

### Is dark mode supported?

Yes! Dark mode is built-in and automatically detects system preferences. Users can also toggle it manually.

### How do I deploy the site?

Build the site with `npm run build`, then deploy the `dist/` folder to your hosting provider (Netlify, Vercel, GitHub Pages, etc.).

### Can I use this theme commercially?

Yes! The theme is released under the MIT license, which allows commercial use.

### How do I add images?

Place images in the `public/` folder and reference them in your markdown:

```markdown
![Alt text](/image-name.png)
```

### Is the theme SEO-friendly?

Yes! The theme includes proper meta tags, semantic HTML, and is optimized for search engines.

### How do I add custom CSS?

Add custom CSS to `src/styles/global.css` or use Tailwind CSS classes in your components.

### Can I modify the sidebar navigation?

Yes! The sidebar is fully customizable. Edit `src/components/Sidebar.astro` to change the navigation structure.

## Still have questions?

If you have additional questions, feel free to open an issue on GitHub or check the documentation.
