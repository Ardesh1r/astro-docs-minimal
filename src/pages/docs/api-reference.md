---
layout: ../../layouts/DocsLayout.astro
title: API Reference
description: API reference for astro-docs-minimal
---

## API Reference

Complete API documentation for astro-docs-minimal components and utilities.

## Components

### Header

The main header component displayed at the top of every page.

**Props:**
- `title` (string, optional) - The title displayed in the header. Default: "Documentation"

**Usage:**
```astro
import Header from '../components/Header.astro'

<Header title="My Documentation" />
```

### Sidebar

Navigation sidebar component for documentation pages.

**Props:**
- None (uses hardcoded navigation array)

**Usage:**
```astro
import Sidebar from '../components/Sidebar.astro'

<Sidebar />
```

### ThemeToggle

Dark/light mode toggle button.

**Props:**
- None

**Usage:**
```astro
import ThemeToggle from '../components/ThemeToggle.astro'

<ThemeToggle />
```

### TableOfContents

Auto-generated table of contents from page headings.

**Props:**
- `headings` (array) - Array of heading objects with `depth`, `text`, and `slug`

**Usage:**
```astro
import TableOfContents from '../components/TableOfContents.astro'

<TableOfContents headings={headings} />
```

## Layouts

### BaseLayout

Base layout for all pages.

**Props:**
- `title` (string, required) - Page title
- `description` (string, optional) - Page description

### DocsLayout

Layout for documentation pages with sidebar and table of contents.

**Props:**
- `title` (string, required) - Page title
- `description` (string, optional) - Page description
- `headings` (array, optional) - Array of headings for TOC

## Next Steps

Check out the [Examples](/docs/examples) page for practical usage examples.
