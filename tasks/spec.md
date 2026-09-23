# Spec: Unused Assets, Data & Component Cleanup (Nikhar Salon)

## Objective
Thoroughly clean up all dead weight across the Nikhar Salon codebase by identifying and safely deleting all unused image assets (`public/`), dead data modules (`src/data/`), and unreferenced React components (`src/components/`). Fix the invalid reference to non-existent `customer4.png` in `ServiceHero.tsx`, reducing repository and bundle weight by ~30 MB while preserving 100% of active assets, metadata images, and application functionality.

---

## Assumptions & Boundaries
1. **Preserve Active Real Assets**: All real customer photos in `public/images/real_customer/` (`customer1.png`, `customer2.png`, `customer3.png`, `customer5.png`, `customer6.png`, `customer7.png`), staff photos (`owner/`, `worker/`), and active case study transformation images MUST NOT be touched.
2. **Metadata Integrity**: Root metadata assets (`apple-touch-icon.png`, `favicon.svg`, `icon.svg`, `images/og-cover.jpg`) are required by Next.js metadata and must remain intact.
3. **No Functional Regressions**: All 15 static routes, interactive booking flows, WhatsApp dispatch URLs, and video tour modals must continue to build and function identically.
4. **Verification Requirement**: After cleanup, verify that `npm run lint`, `npm run build` (15/15 static routes), and `npx react-doctor@latest --verbose` pass cleanly with 100/100 score.

---

## Capability Map

| Module ID | Capability & Responsibility | Depends On | Files / Targets |
| :--- | :--- | :--- | :--- |
| `CLEANUP-01-ASSET-REFS` | Fix dangling/broken asset path (`customer4.png` → `gallery-textured-crop.jpg` in `ServiceHero.tsx`) before deletions | — | `src/components/services/ServiceHero.tsx` |
| `CLEANUP-02-UNUSED-COMPS` | Delete unreferenced dead React components | — | `src/components/common/SectionHeader.tsx`, `src/components/common/WhatsAppButton.tsx` |
| `CLEANUP-03-UNUSED-DATA` | Delete unreferenced legacy data module | `CLEANUP-01-ASSET-REFS` | `src/data/appointment.ts` |
| `CLEANUP-04-UNUSED-IMAGES` | Delete confirmed unused public images (~51 files across `public/contact/`, `public/images/`, `public/images/services-hero/`) | `CLEANUP-01-ASSET-REFS` | `public/contact/`, `public/images/services-hero/`, unused `client*-after/before`, unused `service-*`, etc. |
| `CLEANUP-05-VERIFY` | Complete validation: TypeScript/Linting (`npm run lint`), Production Build (`npm run build`), React Doctor (`npx react-doctor@latest --verbose` & `design`) | All Modules | Entire codebase |

---

## Commands
```bash
# Verify ESLint (must be 0 errors, 0 warnings)
npm run lint

# Verify Production Build (all 15 static routes pre-rendered)
npm run build

# Verify React Doctor General Audit (100 / 100 Great score)
npx react-doctor@latest --verbose

# Verify React Doctor Design Audit
npx react-doctor@latest design --verbose
```

---

## Boundaries
- **Always do**: Cross-check file references with string search and regex before any file deletion; verify production build after file deletions.
- **Ask first**: Removing any file that has ambiguous or dynamic references.
- **Never do**: Delete active customer photos, owner photos, worker photos, or metadata icons.

---

## Success Criteria
1. Dangling reference in `ServiceHero.tsx` resolved without 404 errors.
2. Unused components `SectionHeader.tsx` and `WhatsAppButton.tsx` safely removed.
3. Unused data file `src/data/appointment.ts` safely removed.
4. Over 50 unused static image files removed, freeing ~30 MB of repository clutter.
5. `npm run lint` passes with 0 errors and 0 warnings.
6. `npm run build` succeeds cleanly with Turbopack for all 15 routes.
7. `npx react-doctor@latest --verbose` passes with 100 / 100 Great score.
