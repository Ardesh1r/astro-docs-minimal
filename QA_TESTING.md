# QA Testing Plan for astro-docs-minimal

## Testing Checklist

### 1. Installation & Setup
- [ ] Clone repository successfully
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts development server on port 3000
- [ ] `npm run build` completes successfully
- [ ] `npm run preview` works after build

### 2. Home Page
- [ ] Home page loads at `http://localhost:3000`
- [ ] Title "Welcome to Documentation" displays correctly
- [ ] All 6 feature cards are visible and properly styled
- [ ] Cards are clickable and link to correct pages
- [ ] Layout is responsive on mobile (< 640px)
- [ ] Layout is responsive on tablet (640px - 1024px)
- [ ] Layout is responsive on desktop (> 1024px)

### 3. Navigation
- [ ] Sidebar displays on desktop (md breakpoint and up)
- [ ] Sidebar is hidden on mobile by default
- [ ] Mobile hamburger menu appears on small screens
- [ ] Hamburger menu toggles sidebar visibility
- [ ] Active page is highlighted in sidebar
- [ ] All navigation links work correctly
- [ ] Navigation items are clickable and navigate to correct pages

### 4. Documentation Pages
- [ ] Getting Started page loads and displays content
- [ ] Installation page loads with code blocks
- [ ] Configuration page displays properly
- [ ] Usage page shows markdown features
- [ ] API Reference page displays component documentation
- [ ] Examples page shows various markdown examples
- [ ] FAQ page displays Q&A content
- [ ] All pages have proper headings and structure

### 5. Dark/Light Mode
- [ ] Theme toggle button appears in header
- [ ] Clicking toggle switches between dark and light mode
- [ ] Dark mode applies correct colors to all elements
- [ ] Light mode applies correct colors to all elements
- [ ] Theme preference is saved to localStorage
- [ ] Theme persists after page reload
- [ ] System preference is detected on first visit
- [ ] All text is readable in both modes
- [ ] Code blocks are visible in both modes

### 6. Table of Contents (TOC)
- [ ] TOC appears on desktop (xl breakpoint and up)
- [ ] TOC is hidden on smaller screens
- [ ] TOC shows all headings (h2, h3)
- [ ] TOC links navigate to correct sections
- [ ] Heading IDs are properly generated
- [ ] TOC styling is clean and readable

### 7. Code Blocks & Syntax Highlighting
- [ ] JavaScript code blocks display with syntax highlighting
- [ ] Python code blocks display with syntax highlighting
- [ ] Inline code displays with proper styling
- [ ] Code blocks are scrollable on small screens
- [ ] Code text is readable and properly formatted
- [ ] Different languages are highlighted correctly

### 8. Responsive Design
- [ ] Mobile (320px): All content visible, no horizontal scroll
- [ ] Tablet (768px): Sidebar visible, proper spacing
- [ ] Desktop (1024px): Full layout with TOC
- [ ] Large desktop (1440px): Optimal spacing and readability
- [ ] Images scale properly on all screen sizes
- [ ] Text is readable on all screen sizes
- [ ] Touch targets are large enough on mobile (min 44px)

### 9. Performance
- [ ] Page loads in < 2 seconds on 3G connection
- [ ] Lighthouse Performance score > 90
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse Best Practices score > 90
- [ ] Lighthouse SEO score > 90
- [ ] No console errors or warnings
- [ ] No broken images or assets

### 10. Accessibility
- [ ] All images have alt text (if applicable)
- [ ] Heading hierarchy is correct (h1 > h2 > h3)
- [ ] Links are distinguishable from regular text
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators are visible
- [ ] Form inputs have proper labels
- [ ] Screen reader compatible

### 11. SEO
- [ ] Page title is set correctly
- [ ] Meta description is present
- [ ] Open Graph tags are present
- [ ] Canonical URL is set
- [ ] Sitemap can be generated
- [ ] robots.txt is accessible
- [ ] Structured data (JSON-LD) is valid

### 12. Browser Compatibility
- [ ] Works in Chrome/Chromium (latest)
- [ ] Works in Firefox (latest)
- [ ] Works in Safari (latest)
- [ ] Works in Edge (latest)
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome

### 13. Build & Deployment
- [ ] Build output is in `dist/` directory
- [ ] All assets are properly bundled
- [ ] No broken links in built site
- [ ] Static files are served correctly
- [ ] Can be deployed to Netlify
- [ ] Can be deployed to Vercel
- [ ] Can be deployed to GitHub Pages

### 14. Content & Documentation
- [ ] README is comprehensive and clear
- [ ] Installation instructions are accurate
- [ ] Configuration guide is complete
- [ ] Usage examples are practical
- [ ] API reference is accurate
- [ ] FAQ answers common questions
- [ ] No typos or grammatical errors

### 15. Customization
- [ ] Colors can be changed in tailwind.config.mjs
- [ ] Navigation items can be updated
- [ ] New pages can be added easily
- [ ] Components can be customized
- [ ] Styling can be overridden
- [ ] Layout can be modified

## Test Results

### Environment
- Node.js version: ___________
- npm version: ___________
- OS: ___________
- Browser: ___________

### Results Summary
- Total Tests: 75
- Passed: ___________
- Failed: ___________
- Skipped: ___________

### Issues Found
1. ___________
2. ___________
3. ___________

### Notes
___________________________________________________________________________

## Sign-off

Tested by: ___________
Date: ___________
Status: [ ] PASS [ ] FAIL
