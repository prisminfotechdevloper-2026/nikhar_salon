# Spec: Production-Grade React Doctor & Design Modernization (Nikhar Salon)

## Objective
Remediate all issues uncovered by `npx react-doctor@latest design --verbose` across the entire Nikhar Salon codebase. Modernize Tailwind v4 utilities, eliminate iOS Safari auto-zoom by ensuring minimum 16px form control typography on mobile viewports, replace deprecated flex layout patterns (`space-y-*` → `gap-*`), collapse duplicate dimensional axes to `size-N`, refine accessibility on floating actions and tooltips, and ensure 100% build and lint compliance.

---

## Assumptions
1. Tailwind CSS v4 is used (`@tailwindcss/postcss`). Modern v4 syntax (`bg-linear-to-*`, `shrink-*`, `grow-*`, `size-*`) is fully supported.
2. The user experience and visual aesthetic (obsidian `#0E1012`, metallic gold `#BA9D6A`, and warm ivory `#FAF8F5`) must remain completely intact.
3. Form submission flows to WhatsApp and local booking validation must not be altered.
4. Changes will not degrade the general `react-doctor` score (which is currently 100/100).

---

## Capability Map

| Module ID | Capability & Responsibility | Depends On | Files Touched |
| :--- | :--- | :--- | :--- |
| `DOC-01-TAILWIND-V4` | Modernize Tailwind v4 utilities (`bg-gradient-*` → `bg-linear-*`, `flex-shrink-*` → `shrink-*`, `flex-grow-*` → `grow-*`, deprecated blur/shadow utilities) | — | Layout, Navbar, ServiceCard, OwnerProfile, Transformation files, etc. |
| `DOC-02-FLEX-LAYOUTS` | Layout & sizing hygiene: replace `space-*` on flex with `gap-*`, collapse `w-N h-N` to `size-N`, remove redundant display utilities | `DOC-01-TAILWIND-V4` | ServiceCard, AboutTeam, ServiceHero, VideoStories, ThemeToggle, Loading, Error |
| `DOC-03-MOBILE-FORMS-UX` | Eliminate iOS mobile focus zoom by applying `text-base sm:text-sm` (16px base font on mobile) and expand cramped padding | — | `SimpleBookingForm.tsx`, `ContactForm.tsx` |
| `DOC-04-A11Y-SHADOWS` | Refine harsh pure-black shadows to tinted modern shadows, make floating action labels accessible, replace decorative pulsing badges | `DOC-02-FLEX-LAYOUTS` | `FloatingActions.tsx`, `MobileBottomNav.tsx`, `VideoTourModal.tsx`, `BookAppointmentHero.tsx`, `BookingInfoCard.tsx`, `ContactHero.tsx`, `HairPatchSection.tsx`, `loading.tsx` |
| `DOC-05-VERIFY` | End-to-end multi-axis verification: linting (`npm run lint`), build (`npm run build`), and design doctor verification (`npx react-doctor@latest design`) | All Modules | Entire codebase |

---

## Commands
```bash
# Verify ESLint (must be 0 errors, 0 warnings)
npm run lint

# Verify Production Build (all 15 static routes pre-rendered)
npm run build

# Verify React Doctor Design Audit
npx react-doctor@latest design --verbose

# Verify Full General React Health
npx react-doctor@latest --verbose
```

---

## Code Style & Conventions
- **Tailwind v4 Gradients**: Use `bg-linear-to-r` or `bg-linear-to-tr` instead of `bg-gradient-to-r`.
- **Dimensions**: Use `size-6` instead of `w-6 h-6`.
- **Flex Spacing**: Use `gap-3` on flex containers instead of `space-y-3` or `space-x-3`.
- **Mobile Input Typography**: Use `text-base sm:text-sm` on `<input>`, `<select>`, `<textarea>` so iOS mobile browsers never auto-zoom on field focus.
- **Shadows**: Use Tailwind's built-in `shadow-md`, `shadow-xl`, or alpha-blended values like `shadow-black/20` or `shadow-[#BA9D6A]/20` instead of raw harsh `shadow-[0_20px_50px_rgba(0,0,0,0.5)]`.

---

## Boundaries
- **Always do**: Keep all functionality, links, forms, and WhatsApp dispatch URLs intact; run `npm run lint` and `npm run build` after changes.
- **Ask first**: Removing features or altering page content.
- **Never do**: Add `@ts-ignore` or `eslint-disable` comments.

---

## Success Criteria
1. `npm run lint` passes with 0 errors and 0 warnings.
2. `npm run build` succeeds cleanly in Turbopack with 15/15 static routes pre-rendered.
3. `npx react-doctor@latest` maintains 100 / 100 Great score.
4. `npx react-doctor@latest design` reports all targeted design issues remediated.
