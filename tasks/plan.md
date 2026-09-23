# Implementation Plan: React Doctor Design & Modernization

## Overview
This plan implements the design, accessibility, and modern Tailwind v4 remediations identified by `react-doctor design`, adhering to the specification in [`tasks/spec.md`](file:///D:/prism/main/Nikhar-salon/tasks/spec.md).

---

## Architectural Dependency Graph

```
[DOC-01: Tailwind v4 Modernization]
        │
        ▼
[DOC-02: Flex Layouts & Sizing (gap, size-N)]
        │
        ▼
[DOC-03: Mobile Form Accessibility (16px font)]
        │
        ▼
[DOC-04: Shadows & A11y Polish (FloatingActions, badges)]
        │
        ▼
[DOC-05: Validation & Quality Gates (Lint, Build, React Doctor)]
```

---

## Remediation Phases

### Phase 1: Modernize Tailwind v4 Syntax (`DOC-01-TAILWIND-V4`)
- Update `bg-gradient-to-*` to `bg-linear-to-*` across components.
- Update `flex-shrink-*` to `shrink-*` and `flex-grow-*` to `grow-*`.
- Update legacy `backdrop-blur-xs` and `shadow-2xs` utilities.

### Phase 2: Flex Layouts & Sizing Hygiene (`DOC-02-FLEX-LAYOUTS`)
- Replace `space-y-*` / `space-x-*` with `gap-*` on flex parents in `ServiceCard.tsx`, `AboutTeam.tsx`, `ServiceHero.tsx`, and `VideoStoriesSection.tsx`.
- Collapse matching `w-N h-N` classes to `size-N` (e.g. `w-14 h-14` → `size-14`).
- Remove redundant display classes (`ThemeToggle.tsx`, `OwnerProfileSection.tsx`).

### Phase 3: Mobile Form Accessibility & Touch Zoom Fix (`DOC-03-MOBILE-FORMS-UX`)
- In `SimpleBookingForm.tsx` and `ContactForm.tsx`, ensure all `<input>`, `<select>`, and `<textarea>` elements use `text-base sm:text-sm` so iOS Safari does not auto-zoom on field focus while preserving compact desktop presentation.
- Expand cramped padding where noted.

### Phase 4: Shadows & A11y Polish (`DOC-04-A11Y-SHADOWS`)
- In `FloatingActions.tsx`, `MobileBottomNav.tsx`, `VideoTourModal.tsx`, `BookAppointmentHero.tsx`, and `BookingInfoCard.tsx`, replace harsh pure-black `rgba(0,0,0,...)` shadow declarations with modern subtle tinted shadows.
- Ensure floating action buttons provide accessible labels (`aria-label`) that don't depend exclusively on hover.
- Replace continuous pulsing animations on static badges with subtle static indicators.

### Phase 5: Verification & Quality Gate (`DOC-05-VERIFY`)
- Run `npm run lint` → 0 errors, 0 warnings.
- Run `npm run build` → 15/15 static pages pre-rendered without warnings.
- Run `npx react-doctor@latest design --verbose` and `npx react-doctor@latest --verbose`.

---

## Risk Mitigation
- **Visual Regressions**: All visual colors, layout alignments, gold accents, and responsive behavior are verified.
- **Form Submissions**: WhatsApp message generation and URL formatting remain 100% unaltered.
- **Turbopack Build**: Clean TypeScript types and fast compile times are maintained.
