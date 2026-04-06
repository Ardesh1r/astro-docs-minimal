---
layout: ../../layouts/DocsLayout.astro
title: Usage
description: How to use astro-docs-minimal
---

## Usage

Learn how to effectively use astro-docs-minimal for your documentation.

## Creating Documentation Pages

Documentation pages are created as Markdown files in the `src/pages/docs/` directory.

### Page Structure

Each documentation page should have the following frontmatter:

```markdown
---
layout: ../../layouts/DocsLayout.astro
title: Page Title
description: Page description
---

# Your Content Here

Your markdown content goes here...
```

### Markdown Features

The theme supports all standard Markdown features:

- **Bold text** with `**text**`
- *Italic text* with `*text*`
- `Inline code` with backticks
- Code blocks with triple backticks
- Lists and nested lists
- Headings (h1-h6)
- Links and images
- Tables
- Blockquotes

### Code Blocks

Highlight code with syntax highlighting:

```javascript
function hello() {
  console.log('Hello, World!')
}
```

```python
def hello():
    print("Hello, World!")
```

## Navigation

The sidebar navigation is automatically generated from the `navigation` array in `src/components/Sidebar.astro`. Add new pages by updating this array.

## Styling

The theme uses Tailwind CSS for styling. You can customize colors, fonts, and spacing in `tailwind.config.mjs`.

## Dark Mode

Dark mode is automatically supported. Users can toggle between light and dark modes using the theme toggle button in the header.

## Next Steps

Learn more about the [API Reference](/docs/api-reference) or check out some [Examples](/docs/examples).
