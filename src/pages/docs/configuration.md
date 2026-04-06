---
layout: ../../layouts/DocsLayout.astro
title: Configuration
description: Configure astro-docs-minimal
---

## Configuration

Learn how to customize astro-docs-minimal to match your needs.

### Site Configuration

Edit `astro.config.mjs` to configure your site:

```javascript
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-domain.com',
})
```

### Tailwind CSS

Customize the theme colors in `tailwind.config.mjs`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        dark: '#1f2937',
      },
    },
  },
}
```

### Navigation

Update the sidebar navigation by editing the `navigation` array in `src/components/Sidebar.astro`:

```javascript
const navigation = [
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Installation', href: '/docs/installation' },
  // Add more items here
]
```

### Metadata

Update site metadata in `src/layouts/BaseLayout.astro`:

```astro
<meta name="description" content="Your site description" />
<title>Your Site Title</title>
```

## Next Steps

Check out the [Usage](/docs/usage) guide to learn how to create and organize your documentation.
