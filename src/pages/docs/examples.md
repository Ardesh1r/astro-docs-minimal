---
layout: ../../layouts/DocsLayout.astro
title: Examples
description: Examples and use cases for astro-docs-minimal
---

## Examples

Practical examples and use cases for astro-docs-minimal.

## Example 1: Creating a Simple Page

Create a new markdown file in `src/pages/docs/`:

```markdown
---
layout: ../../layouts/DocsLayout.astro
title: My Page
description: My page description
---

# My Page

This is my documentation page content.

## Section 1

Some content here.

## Section 2

More content here.
```

## Example 2: Adding Code Examples

Include code examples with syntax highlighting:

```javascript
// Example JavaScript code
function calculateSum(a, b) {
  return a + b
}

const result = calculateSum(5, 3)
console.log(result) // Output: 8
```

## Example 3: Using Lists

Create organized lists:

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

## Example 4: Adding Links

Link to other documentation pages:

- [Getting Started](/docs/getting-started)
- [Installation](/docs/installation)
- [Configuration](/docs/configuration)

## Example 5: Blockquotes

Use blockquotes for important information:

> This is an important note that should stand out from the rest of the content.

## Example 6: Tables

Create structured data with tables:

| Feature | Status | Description |
|---------|--------|-------------|
| Dark Mode | ✓ | Built-in dark mode support |
| Responsive | ✓ | Mobile-friendly design |
| Fast | ✓ | Optimized for performance |
| Customizable | ✓ | Easy to customize |

## Example 7: Inline Code

Use inline code for technical terms: `npm install`, `astro build`, `npm run dev`.

## Next Steps

Ready to create your own documentation? Start by [creating a new page](/docs/usage) and customize it to your needs.
