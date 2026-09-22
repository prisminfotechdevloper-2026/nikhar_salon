# Spec: Production-Grade Full System Optimization (Nikhar Salon)

## Objective
Transform the Nikhar Salon Next.js application into a production-hardened, high-performance, SEO-optimized, accessible, and secure digital flagship following the comprehensive audit in `optimize.md`. Achieve 0 ESLint errors/warnings, optimal Core Web Vitals (LCP/CLS), complete Local Business Schema.org coverage, automated indexing (robots/sitemap), clean React Server Component boundaries, and robust HTTP security headers.

---

## Assumptions
1. Deployment target is Vercel / modern Node.js edge runtime with Turbopack support.
2. The primary domain is `https://nikharsaloon.vercel.app`.
3. The business is a luxury men's & unisex salon located at Vigyan Nagar, Kota, Rajasthan (coordinates: 25.1328965, 75.8366472).
4. No external database or CMS is required; appointment bookings and inquiries continue to securely dispatch to WhatsApp concierge and local UI confirmation.
5. All design aesthetics, color schemes (obsidian `#0E1012` and metallic gold `#BA9D6A`), animations, and typography remain completely preserved without visual regressions.

---

## Capability Map

| Module ID | Capability & Responsibility | Depends On | Files Touched |
| :--- | :--- | :--- | :--- |
| `MOD-01-LINT-EFFECTS` | Resolve cascading render errors (`react-hooks/set-state-in-effect`) and all unused variables to achieve 0 lint issues | — | `ThemeContext.tsx`, `SimpleBookingForm.tsx`, `VideoTourModal.tsx`, `contact/page.tsx`, `BookingInfoCard.tsx`, `HairPatchSection.tsx`, `TransformationsGrid.tsx`, `VideoStoriesSection.tsx` |
| `MOD-02-IMAGE-PERF` | Restore Next.js AVIF/WebP image optimization, remove `unoptimized` flags, and remove orphaned bloated image assets | `MOD-01-LINT-EFFECTS` | `next.config.ts`, `OwnerProfileSection.tsx`, `HairPatchSection.tsx`, `public/images/` |
| `MOD-03-SEO-METADATA` | Implement automated discovery (`robots.ts`, `sitemap.ts`), Schema.org `BeautySalon` JSON-LD, page metadata on `/`, `/about`, `/services`, and clean redundant `<head>` tags | — | `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/services/page.tsx` |
| `MOD-04-RSC-ARCHITECTURE` | Convert static presentation components to RSC, delete dead components (`AppointmentModal.tsx`, `BeforeAfterSlider.tsx`), and add `loading.tsx`, `error.tsx`, `not-found.tsx` | `MOD-01-LINT-EFFECTS` | `Logo.tsx`, `AboutHero.tsx`, `BookAppointmentHero.tsx`, `BookingInfoCard.tsx`, `TransformationsHero.tsx`, `TransformationCta.tsx`, `src/app/loading.tsx`, `src/app/error.tsx`, `src/app/not-found.tsx` |
| `MOD-05-SECURITY-UX` | Add HTTP security headers, disable `x-powered-by`, add passive scroll listener, and eliminate hydration layout shift | `MOD-02-IMAGE-PERF` | `next.config.ts`, `Navbar.tsx`, `TestimonialsSection.tsx`, `VideoStoriesSection.tsx` |
| `MOD-06-VALIDATION` | End-to-end multi-axis verification: linting, build prerendering, and React Doctor score verification | All Modules | Entire repository |

---

## Tech Stack
- **Framework**: Next.js 16.3.5 (App Router, Turbopack)
- **Library**: React 19.2.8 & React DOM 19.2.8
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Smooth Scroll**: Lenis v1.3.26
- **Icons**: Lucide React v1.46.0

---

## Commands
```bash
# Development server
npm run dev

# Code quality & React 19 hook validation
npm run lint

# Production compilation & static prerendering
npm run build

# Production server preview
npm run start

# React health & architecture audit
npx react-doctor@latest --verbose
```

---

## Project Structure
```text
src/
├── app/
│   ├── layout.tsx              # Root HTML, fonts, theme wrapper, JSON-LD Schema
│   ├── page.tsx                # Homepage + dedicated metadata
│   ├── robots.ts               # Automated robots.txt generation
│   ├── sitemap.ts              # Automated sitemap.xml generation
│   ├── loading.tsx             # Global luxury loading fallback boundary
│   ├── error.tsx               # Client error containment boundary
│   ├── not-found.tsx           # Custom 404 page
│   ├── globals.css             # Tailwind v4 theme & Lenis styles
│   ├── about/page.tsx          # About page + dedicated metadata
│   ├── services/page.tsx       # Services directory + dedicated metadata
│   ├── transformations/page.tsx # Case studies & video stories
│   ├── contact/page.tsx        # Contact concierge + location
│   └── book-appointment/      # Booking reservation wizard
├── components/                 # Client & Server React components
├── context/                    # ThemeContext provider
├── data/                       # Static typed catalogs (services, appointments, reviews)
public/                         # Optimized static assets & brand icons
```

---

## Code Style & Architectural Conventions
1. **Server Components First**: Components that do not access browser APIs (`window`, `localStorage`), state (`useState`, `useReducer`), or event listeners MUST NOT use `'use client'`.
2. **State Synchronization**: Avoid setting state synchronously inside `useEffect`. Derive values during render, use lazy state initialization `useState(() => init)`, or synchronize DOM nodes declaratively.
3. **Semantic HTML**: Use `<button>` for clickable triggers, `<article>` for cards, and `<nav>` for navigation groupings.
4. **Image Optimization**: All images must use `next/image` without `unoptimized` unless explicitly required. Provide exact `sizes` attribute.

---

## Boundaries
- **Always Do**:
  - Run `npm run lint` and `npm run build` to verify every change.
  - Preserve all existing responsive styles, colors, animations, and typography.
  - Use semantic HTML tags with accessible ARIA attributes.
- **Ask First**:
  - Adding or modifying runtime dependencies in `package.json`.
  - Changing public routing structures or deleting non-dead assets.
- **Never Do**:
  - Never silence linter errors with `// eslint-disable` or `@ts-ignore`.
  - Never place unoptimized multi-megabyte images in production render paths.
  - Never hardcode manual duplicate SEO tags in `<head>` when Next.js metadata is available.

---

## Success Criteria
1. `npm run lint` passes with **0 errors and 0 warnings**.
2. `npm run build` succeeds cleanly with Turbopack, pre-rendering all static routes.
3. `npx react-doctor@latest --verbose` scores **100 / 100 Great** with 0 issues.
4. Google-compliant Schema.org `BeautySalon` structured data validated on root.
5. Automated `sitemap.xml` and `robots.txt` accessible via standard App Router endpoints.
6. All unused files (`AppointmentModal.tsx`, `BeforeAfterSlider.tsx`, debug images) eliminated.
7. Next.js serves optimized AVIF/WebP image formats for all local and remote images.
