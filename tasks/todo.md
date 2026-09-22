# Tasks Checklist: Production-Grade Optimization

- [x] Task 1: Resolve React 19 Lint & Cascading Render Errors (`MOD-01-LINT-EFFECTS`)
  - Acceptance: `npm run lint` passes with 0 errors and 0 warnings.
  - Verify: `npm run lint`
  - Files: `src/context/ThemeContext.tsx`, `src/components/book-appointment/SimpleBookingForm.tsx`, `src/components/VideoTourModal.tsx`, `src/app/contact/page.tsx`, `src/components/book-appointment/BookingInfoCard.tsx`, `src/components/home/HairPatchSection.tsx`, `src/components/transformations/TransformationsGrid.tsx`, `src/components/transformations/VideoStoriesSection.tsx`

- [x] Task 2: Restore Image Optimization & Prune Bloated Assets (`MOD-02-IMAGE-PERF`)
  - Acceptance: AVIF/WebP formats enabled in `next.config.ts`, `unoptimized` flag removed from `OwnerProfileSection.tsx` and `HairPatchSection.tsx`, redundant debug images and duplicate contact images deleted.
  - Verify: `npm run build`
  - Files: `next.config.ts`, `src/components/about/OwnerProfileSection.tsx`, `src/components/home/HairPatchSection.tsx`, `public/images/`

- [x] Task 3: Implement Technical SEO, Sitemap, Robots, & Schema.org JSON-LD (`MOD-03-SEO-METADATA`)
  - Acceptance: `robots.ts` and `sitemap.ts` generate valid endpoints, Schema.org `BeautySalon` JSON-LD active on root, dedicated metadata added to `/`, `/about`, and `/services`, redundant `<head>` tags removed.
  - Verify: `npm run build`
  - Files: `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/services/page.tsx`

- [x] Task 4: Streamline App Router Architecture & RSC Boundaries (`MOD-04-RSC-ARCHITECTURE`)
  - Acceptance: Demote 6 static components from client to RSC, delete dead `AppointmentModal.tsx` and `BeforeAfterSlider.tsx`, add `loading.tsx`, `error.tsx`, and `not-found.tsx`, lazy-load `VideoTourModal`.
  - Verify: `npm run build`
  - Files: `src/components/Logo.tsx`, `src/components/about/AboutHero.tsx`, `src/components/book-appointment/BookAppointmentHero.tsx`, `src/components/book-appointment/BookingInfoCard.tsx`, `src/components/transformations/TransformationsHero.tsx`, `src/components/transformations/TransformationCta.tsx`, `src/app/loading.tsx`, `src/app/error.tsx`, `src/app/not-found.tsx`, `src/components/AppointmentModal.tsx`, `src/components/common/BeforeAfterSlider.tsx`

- [x] Task 5: Security Hardening & UI/UX Refinements (`MOD-05-SECURITY-UX`)
  - Acceptance: Security headers added and `x-powered-by` disabled in `next.config.ts`, passive scroll listener in `Navbar.tsx`, `TestimonialsSection.tsx` layout shift fixed, video thumbnail converted to semantic button.
  - Verify: `npm run lint && npm run build`
  - Files: `next.config.ts`, `src/components/Navbar.tsx`, `src/components/home/TestimonialsSection.tsx`, `src/components/transformations/VideoStoriesSection.tsx`

- [x] Task 6: Final End-to-End Verification & Health Audit (`MOD-06-VALIDATION`)
  - Acceptance: Clean `npm run lint` (0 errors, 0 warnings), clean `npm run build` (all static routes, sitemap, robots pre-rendered), clean `npx react-doctor@latest --verbose` (100 / 100 score).
  - Verify: `npm run lint && npm run build && npx react-doctor@latest --verbose`
  - Files: Entire repository
