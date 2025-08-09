# vaibhavcodes.com

Personal/professional website featuring blog, courses, paper summaries, and book summaries.

## Tech Stack

- **Framework**: Astro + TypeScript
- **Styling**: Plain CSS/SCSS (CSS frameworks can be added later)
- **Content**: MDX with Astro Content Collections
- **Package Manager**: pnpm
- **Version Control**: Git
- **Deployment**: Netlify
- **Development Tools**: Prettier + ESLint + Husky

## Content Structure

```
src/content/
├── blog/          # Blog posts
├── courses/       # Course content  
├── papers/        # Paper summaries
└── books/         # Book summaries
```

Each content type uses separate Astro Content Collections with:
- Tags/categories for filtering
- Type-safe schemas per content type
- Metadata can be extended later (reading dates, ratings, difficulty levels, etc.)

## Deployment Strategy

- **Production**: Auto-deploy from `main` branch to vaibhavcodes.com
- **Preview**: Auto-deploy from feature branches for testing
- **Workflow**: Feature branch → Preview → Review → Merge to main → Live

## Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Format code
pnpm format
```

## Content Guidelines

- Use MDX for rich content with interactive components
- Organize content by type in separate directories
- Use consistent frontmatter across content types
- Tag content for easy filtering and discovery

## Future Enhancements

- RSS feeds for content sections
- Advanced metadata tracking (ratings, difficulty, reading dates)
- Search functionality across all content types
- Performance optimizations (image optimization, caching)