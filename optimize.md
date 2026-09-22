 Perform a complete production-grade audit of this entire Next.js project.

Do NOT modify any files yet. First inspect the complete codebase and produce a detailed audit report.

Audit the project across all of these areas:

1. PERFORMANCE
- Core Web Vitals: LCP, INP, CLS
- TTFB and server response performance
- Server Components vs Client Components
- Unnecessary "use client"
- Rendering strategy: SSR, SSG, ISR, dynamic rendering
- Next.js caching and revalidation
- Image optimization with next/image
- Image dimensions, formats, lazy loading and priority usage
- Font loading and optimization
- JavaScript bundle size
- Unnecessary dependencies
- Tree-shaking opportunities
- Dynamic imports and code splitting
- Large components and expensive renders
- React re-render issues
- useEffect/useMemo/useCallback misuse
- API request waterfalls
- Duplicate API requests
- Slow database/API operations
- Third-party scripts
- Loading states and Suspense boundaries
- Static asset optimization
- Middleware/proxy performance
- Build and production runtime performance

2. SEO
- Metadata implementation
- Dynamic metadata
- Title and description quality
- Canonical URLs
- robots.txt
- sitemap.xml
- Open Graph metadata
- Twitter/X metadata
- Structured data / JSON-LD
- Schema.org implementation
- Indexability
- noindex/nofollow issues
- Duplicate content
- URL structure
- Internal linking
- Heading hierarchy
- Semantic HTML
- Image alt attributes
- Breadcrumbs
- Pagination/indexation problems
- Missing metadata
- Incorrect metadata
- SEO issues caused by client-side rendering
- Search-engine crawlability

3. NEXT.JS ARCHITECTURE
- App Router architecture
- Server/Client component boundaries
- Route organization
- Layout architecture
- Loading/error/not-found boundaries
- Data fetching patterns
- Route handlers/API routes
- Server Actions if present
- Caching strategy
- Revalidation strategy
- Environment variable usage
- Middleware/proxy implementation
- Next.js configuration
- Production configuration

4. ACCESSIBILITY
- WCAG-related issues
- Keyboard navigation
- Focus management
- ARIA misuse
- Semantic HTML
- Form accessibility
- Button/link accessibility
- Image accessibility
- Color contrast
- Screen-reader issues
- Missing labels
- Interactive element problems

5. SECURITY
- Exposed secrets
- Environment variable mistakes
- Client-side secret exposure
- Authentication/authorization issues
- API endpoint security
- Input validation
- XSS risks
- CSRF risks where applicable
- Unsafe HTML rendering
- Dependency vulnerabilities
- Insecure CORS configuration
- Sensitive information leakage
- Firebase/database/API security if present
- Authentication/session handling

6. CODE QUALITY
- TypeScript issues
- Any usage
- Type safety
- ESLint issues
- React best practices
- Next.js best practices
- Dead code
- Duplicate code
- Unused imports
- Unused components
- Overly complex components
- Poor separation of concerns
- Naming problems
- Error handling
- Logging/debug code
- Maintainability issues

7. UI/UX TECHNICAL QUALITY
- Responsive behavior
- Mobile issues
- Layout shifts
- Loading states
- Error states
- Empty states
- Form UX
- Interaction performance
- Animation performance
- Accessibility of animations
- Hydration mismatch risks
- Visual stability

8. DEPENDENCIES
- Check package.json
- Identify outdated/problematic packages
- Identify unnecessary packages
- Identify duplicate functionality
- Check for known vulnerabilities
- Identify packages that significantly increase bundle size

9. BUILD & DEPLOYMENT
- Production build configuration
- next.config
- Environment variables
- Image configuration
- Caching headers
- Compression
- Deployment configuration
- Runtime configuration
- Build errors/warnings
- Potential production-only failures

10. DATABASE/API
If the project communicates with APIs, databases, CMSs or external services:
- Analyze request patterns
- API latency risks
- Over-fetching
- Under-fetching
- Duplicate requests
- Error handling
- Caching
- Pagination
- Authentication
- Rate-limit risks
- Server/client data exposure

11. PERFORMANCE TESTING
If possible, run the project in production mode and inspect:
- npm/pnpm/yarn build
- production startup
- bundle/build output
- Lighthouse
- Core Web Vitals
- network requests
- console errors
- hydration warnings
- runtime errors

Do not rely only on static code inspection if the project can be executed.

IMPORTANT:
- Inspect the entire repository, not just a few files.
- Follow imports and dependencies across the project.
- Identify issues based on actual code rather than assumptions.
- Do not make changes during the audit.
- Do not generate generic advice that is unrelated to this codebase.
- For every issue, provide the exact file path and relevant line/component/function when possible.
- Separate confirmed issues from potential risks.
- Prioritize issues by actual impact.

At the end, generate the audit in this exact structure:

# Next.js Project Audit

## Executive Summary
Overall technical health and the most important findings.

## Critical Issues
Issues that should be fixed immediately.

## High Priority
Issues with significant performance, SEO, security, architecture, or UX impact.

## Medium Priority
Issues that should be addressed but are not immediately critical.

## Low Priority
Minor improvements and cleanup.

## Performance Report
Include:
- Current performance risks
- Largest bottlenecks
- Bundle problems
- Rendering problems
- Image/font problems
- API/data-fetching problems
- Recommended fixes

## SEO Report
Include:
- Current SEO implementation
- Missing SEO features
- Technical SEO problems
- Metadata problems
- Structured data problems
- Crawl/indexing problems

## Accessibility Report

## Security Report

## Architecture Report

## Code Quality Report

## Dependency Report

## Build & Deployment Report

## File-by-File Findings
List important issues with:
- File
- Component/function
- Problem
- Impact
- Recommended fix

## Quick Wins
List fixes that can provide significant improvement with minimal code changes.

## Recommended Roadmap
Create a prioritized implementation order:

Phase 1 — Critical fixes
Phase 2 — Performance & SEO
Phase 3 — Architecture & code quality
Phase 4 — Accessibility & security
Phase 5 — Final optimization

## Final Scorecard
Give separate scores ONLY for:
- Performance
- SEO
- Accessibility
- Security
- Architecture
- Code Quality
- Maintainability

Do NOT give a single overall score.

After completing the audit, do NOT modify the project. Wait for my approval before implementing any fixes.