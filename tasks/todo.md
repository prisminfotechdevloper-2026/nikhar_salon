# Todo: Unused Asset, Data & Component Cleanup

- [x] Task 1: Fix dangling image path in `ServiceHero.tsx` (`customer4.png` → `gallery-textured-crop.jpg`)
  - Acceptance: Card 09 references existing asset, zero 404 image requests
  - Verify: File view and build check
  - Files: `src/components/services/ServiceHero.tsx`

- [x] Task 2: Remove unused React components
  - Acceptance: Delete `SectionHeader.tsx` and `WhatsAppButton.tsx` without breaking any imports
  - Verify: `npm run lint`
  - Files: `src/components/common/SectionHeader.tsx`, `src/components/common/WhatsAppButton.tsx`

- [x] Task 3: Remove unused data module
  - Acceptance: Delete `src/data/appointment.ts`
  - Verify: `npm run lint` and TypeScript check
  - Files: `src/data/appointment.ts`

- [x] Task 4: Remove confirmed unused public image assets
  - Acceptance: Delete 53 unused image files from `public/` (30.84 MB recovered)
  - Verify: Directory check and audit script (0 unused assets remain)
  - Files: `public/contact/`, `public/og-image.jpg`, `public/images/...`

- [x] Task 5: Run full verification suite & React Doctor
  - Acceptance: `npm run lint`, `npm run build`, and `npx react-doctor@latest --verbose` all pass cleanly
  - Verify: Build produces 15/15 static pages, 0 lint warnings/errors, 100/100 React Doctor score
  - Files: All
