# React Doctor Remediation Tasks

- [x] Task 1: Fix Core Context & Modal Events (`MOD-01`)
  - Acceptance: `ThemeContext.tsx` and `VideoTourModal.tsx` pass `react-doctor` with 0 issues.
  - Verify: `npx react-doctor@latest --verbose` on modified files.
  - Files: `src/context/ThemeContext.tsx`, `src/components/VideoTourModal.tsx`

- [x] Task 2: Fix Home Sections Part 1 (`MOD-02`)
  - Acceptance: `HeroSection.tsx`, `HairPatchSection.tsx`, `HomeCtaSection.tsx`, `HomeServicesSection.tsx` transitions, fragment links, and prop sync fixed.
  - Verify: `npx react-doctor@latest --verbose` on these files.
  - Files: `src/components/home/HeroSection.tsx`, `src/components/home/HairPatchSection.tsx`, `src/components/home/HomeCtaSection.tsx`, `src/components/home/HomeServicesSection.tsx`

- [x] Task 3: Fix Home Sections Part 2 (`MOD-03`)
  - Acceptance: `TestimonialsSection.tsx`, `VipMembershipsSection.tsx`, `CraftsmanshipSection.tsx` giant component, keys, and timer callbacks fixed.
  - Verify: `npx react-doctor@latest --verbose` on these files.
  - Files: `src/components/home/TestimonialsSection.tsx`, `src/components/home/VipMembershipsSection.tsx`, `src/components/home/CraftsmanshipSection.tsx`

- [x] Task 4: Refactor Services & About Modules (`MOD-04`)
  - Acceptance: `ServiceHero.tsx` decomposed, duplicate JSX in `AboutTeam.tsx` extracted, keys & transitions fixed.
  - Verify: `npx react-doctor@latest --verbose` on these files.
  - Files: `src/components/services/ServiceHero.tsx`, `src/components/about/AboutTeam.tsx`

- [x] Task 5: Fix Transformations Module (`MOD-05`)
  - Acceptance: Accessible click/keyboard handlers, keys, and targeted transitions in `CaseStudyCard.tsx`, `TransformationCta.tsx`, `TransformationsHero.tsx`, `VideoStoriesSection.tsx`.
  - Verify: `npx react-doctor@latest --verbose` on these files.
  - Files: `src/components/transformations/CaseStudyCard.tsx`, `src/components/transformations/TransformationCta.tsx`, `src/components/transformations/TransformationsHero.tsx`, `src/components/transformations/VideoStoriesSection.tsx`

- [x] Task 6: Refactor Booking & Contact Forms (`MOD-06`)
  - Acceptance: `SimpleBookingForm.tsx` decomposed and accessible, `ContactForm.tsx` labels linked with inputs, render-time locale formatting moved to memo/module level.
  - Verify: `npx react-doctor@latest --verbose` on these files.
  - Files: `src/components/book-appointment/SimpleBookingForm.tsx`, `src/components/contact/ContactForm.tsx`

- [x] Task 7: Final End-to-End Validation & Build (`MOD-07`)
  - Acceptance: Full React Doctor scan scores ~100/100, zero remaining warnings, clean `npm run build`.
  - Verify: `npx react-doctor@latest --verbose && npm run build`
  - Files: Entire repository
