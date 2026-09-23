# Implementation Plan: Unused Asset, Data & Component Cleanup

## 1. Objectives & Scope
Eliminate all unreferenced images, dead data files, and unused components across `Nikhar-salon`. Verify with clean build, lint, and `react-doctor` audit.

---

## 2. Sequence of Execution

### Phase 1: Reference Hygiene
- Update `src/components/services/ServiceHero.tsx` card 09 (Perm & Curl Restructure) to point to `/images/gallery-textured-crop.jpg` instead of non-existent `/images/real_customer/customer4.png`.

### Phase 2: Unused Component Removal
- Remove `src/components/common/SectionHeader.tsx` (0 usages).
- Remove `src/components/common/WhatsAppButton.tsx` (0 usages; replaced by direct `WhatsAppIcon` integrations).

### Phase 3: Unused Data Module Removal
- Remove `src/data/appointment.ts` (0 imports; self-contained in `SimpleBookingForm.tsx`).

### Phase 4: Safe Removal of Unused Image Files (~29-30 MB)
Execute removal of:
1. `public/contact/` directory (`contact.png`, `contact1.png` - redundant; actual in `public/images/contact/contact.png`)
2. `public/og-image.jpg` (redundant duplicate of `public/images/og-cover.jpg`)
3. `public/images/avatar-*.jpg` (aman, priyansh, rohit, vikram)
4. `public/images/team-*.jpg` (karan, rahul, sameer, vikram)
5. `public/images/owner/owner.png` (unused 2.3MB portrait; active are `owner-portrait.png`, `firoz-khan.png`, `firoz-khan-clean.png`)
6. `public/images/owner/owner-portrait.png` (was only in removed `appointment.ts`)
7. `public/images/client*-after.jpg`, `client*-before.jpg`, `client*-sidebyside.jpg` (12 uncropped/raw files; active are `client*-head-*.jpg`)
8. `public/images/hair-patch-transform-3.jpg` (unused)
9. `public/images/real-hair-patch-before-after-2.jpg` (unused)
10. `public/images/gallery-ambience.jpg`, `public/images/salon-interior.jpg` (unused)
11. `public/images/service-*.jpg` (15 unused service photos: argan-spa, ayurvedic-champi, beard-color, beard-steam, beard, facial-gold, facial, groom-styling, hair-patch-lace, haircut, products, scalp-detox, shave, spa-master, spa)
12. `public/images/services-hero/` directory (all 9 unused `hero-card-*.jpg` files)

### Phase 5: Verification & React Doctor Audit
- Run `npm run lint` → ensure 0 errors, 0 warnings.
- Run `npm run build` → verify Turbopack builds all 15 static routes with 0 missing asset errors.
- Run `npx react-doctor@latest --verbose` → verify 100/100 score.
- Run `npx react-doctor@latest design --verbose` → verify design health.
