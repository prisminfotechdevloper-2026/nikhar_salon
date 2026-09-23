# Tasks Checklist: React Doctor & Design Remediation

- [x] Task 1: Modernize Tailwind v4 Syntax (`DOC-01-TAILWIND-V4`)
  - Acceptance: Deprecated `bg-gradient-to-*`, `flex-shrink-*`, `flex-grow-*`, and legacy blur/shadow utilities updated to v4 standards across all flagged files.
  - Verify: `npm run lint && npm run build`
  - Files: `src/app/layout.tsx`, `src/components/FloatingActions.tsx`, `src/components/Navbar.tsx`, `src/components/ServiceCard.tsx`, `src/components/about/AboutCta.tsx`, `src/components/about/AboutTeam.tsx`, `src/components/about/OwnerProfileSection.tsx`, `src/components/book-appointment/BookAppointmentHero.tsx`, `src/components/book-appointment/SimpleBookingForm.tsx`, `src/components/home/CraftsmanshipSection.tsx`, `src/components/home/HomeCtaSection.tsx`, `src/components/services/ServiceHero.tsx`, `src/components/transformations/CaseStudyCard.tsx`, `src/components/transformations/TransformationCta.tsx`, `src/components/transformations/TransformationsHero.tsx`, `src/components/transformations/VideoStoriesSection.tsx`

- [x] Task 2: Fix Flex Child Spacing & Redundant Sizing (`DOC-02-FLEX-LAYOUTS`)
  - Acceptance: `space-*` replaced with `gap-*` on flex parents, matching `w-N h-N` collapsed to `size-N`, redundant display classes removed.
  - Verify: `npm run lint`
  - Files: `src/components/ServiceCard.tsx`, `src/components/about/AboutTeam.tsx`, `src/components/services/ServiceHero.tsx`, `src/components/transformations/VideoStoriesSection.tsx`, `src/components/ThemeToggle.tsx`, `src/components/about/OwnerProfileSection.tsx`, `src/app/loading.tsx`, `src/app/error.tsx`

- [x] Task 3: Mobile Form Accessibility & Input Zoom Fix (`DOC-03-MOBILE-FORMS-UX`)
  - Acceptance: Form controls in `SimpleBookingForm` and `ContactForm` use `text-base sm:text-sm` (16px base font on mobile to prevent iOS Safari auto-zoom on field focus) and cramped padding expanded.
  - Verify: `npm run lint && npm run build`
  - Files: `src/components/book-appointment/SimpleBookingForm.tsx`, `src/components/contact/ContactForm.tsx`, `src/components/home/HairPatchSection.tsx`

- [x] Task 4: Polish Shadows & Accessible Hover Interactions (`DOC-04-A11Y-SHADOWS`)
  - Acceptance: Harsh pure-black `rgba(0,0,0,...)` shadows refined with modern subtle shadows, floating action buttons have permanent accessible labels/aria-labels, continuous pulse on decorative badges replaced with static indicators.
  - Verify: `npm run lint`
  - Files: `src/components/FloatingActions.tsx`, `src/components/MobileBottomNav.tsx`, `src/components/VideoTourModal.tsx`, `src/components/book-appointment/BookAppointmentHero.tsx`, `src/components/book-appointment/BookingInfoCard.tsx`, `src/components/contact/ContactHero.tsx`, `src/components/home/HairPatchSection.tsx`, `src/app/loading.tsx`

- [x] Task 5: Final End-to-End Verification (`DOC-05-VERIFY`)
  - Acceptance: `npm run lint` passes with 0 errors and 0 warnings, `npm run build` succeeds cleanly in Turbopack, and `npx react-doctor@latest design --verbose` passes.
  - Verify: `npm run lint && npm run build && npx react-doctor@latest design --verbose`
  - Files: Entire repository
