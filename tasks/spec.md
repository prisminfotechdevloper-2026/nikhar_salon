# Spec: React Doctor Diagnostic Remediation & Codebase Quality Hardening

## Objective
Remediate all 79 diagnostic issues reported by `react-doctor` across the codebase, raising the codebase health score from **52/100 (Critical)** to **100/100 (Clean)**, eliminating all bugs, accessibility violations, performance bottlenecks, and maintainability concerns without altering existing UI design or business functionality.

---

## Diagnostic Summary (79 Issues Across 17 Files)

| Category | Issue Count | Primary Rules | Affected Files |
|---|---|---|---|
| **Accessibility (a11y)** | 34 | `label-has-associated-control`, `no-placeholder-only-field`, `control-has-associated-label`, `no-static-element-interactions`, `click-events-have-key-events` | `SimpleBookingForm.tsx`, `ContactForm.tsx`, `HeroSection.tsx`, `ServiceHero.tsx`, `VideoStoriesSection.tsx` |
| **Performance** | 27 | `no-transition-all`, `no-locale-format-in-render`, `rerender-state-only-in-handlers`, `jsx-no-constructed-context-values` | `ThemeContext.tsx`, `ServiceHero.tsx`, `HeroSection.tsx`, `TestimonialsSection.tsx`, `HairPatchSection.tsx`, `CaseStudyCard.tsx`, `TransformationCta.tsx`, `TransformationsHero.tsx`, `VideoStoriesSection.tsx`, `HomeServicesSection.tsx`, `HomeCtaSection.tsx`, `SimpleBookingForm.tsx` |
| **Bugs & React Reactivity** | 13 | `prefer-use-effect-event`, `no-reset-all-state-on-prop-change`, `no-adjust-state-on-prop-change`, `no-array-index-as-key`, `anchor-target-exists` | `VideoTourModal.tsx`, `TestimonialsSection.tsx`, `HairPatchSection.tsx`, `VipMembershipsSection.tsx`, `ServiceHero.tsx`, `CaseStudyCard.tsx`, `TransformationsHero.tsx`, `VideoStoriesSection.tsx`, `HeroSection.tsx` |
| **Maintainability & Architecture** | 5 | `no-giant-component`, `no-high-complexity-react-function`, `duplicate-jsx-subtree` | `SimpleBookingForm.tsx`, `CraftsmanshipSection.tsx`, `ServiceHero.tsx`, `AboutTeam.tsx` |

---

## Tech Stack & Tooling
- **Framework:** Next.js 14+ / React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Diagnostic Tool:** `npx react-doctor@latest --verbose`

---

## Commands
- **Run Full Diagnostics:** `npx react-doctor@latest --verbose`
- **Check Health Score:** `npx react-doctor@latest --score`
- **Type Check / Build:** `npm run build`
- **Development Server:** `npm run dev`

---

## Code Style & Architectural Patterns for Remediation

### 1. Context Optimization (`ThemeContext.tsx`)
- **Rule:** `jsx-no-constructed-context-values` & `rerender-state-only-in-handlers`
- **Pattern:** Memoize context provider values with `useMemo` so consumers don't re-render on unrelated state ticks. Ensure state isn't held for values only accessed imperatively in callbacks (or use `useRef` when reactivity isn't needed).

### 2. Accessibility & Form Controls (`SimpleBookingForm.tsx`, `ContactForm.tsx`, `HeroSection.tsx`)
- **Rules:** `label-has-associated-control`, `no-placeholder-only-field`, `control-has-associated-label`
- **Pattern:** 
  - Ensure every `<input>`, `<select>`, `<textarea>` has an explicit `id` and corresponding `<label htmlFor="...">`.
  - Add explicit screen-reader / accessible labels (`aria-label` or visible `<label>`) instead of relying solely on `placeholder`.
  - Give interactive controls (buttons, select dropdown triggers) proper `aria-label` or `title`.

### 3. CSS Transitions (`no-transition-all`)
- **Rule:** `react-doctor/no-transition-all` (24 occurrences)
- **Pattern:** Replace broad `transition-all` Tailwind utility classes with explicit transition properties: `transition-colors`, `transition-opacity`, `transition-transform`, `transition-[color,background-color,border-color,transform]`.

### 4. Interactive Elements & Key Listeners
- **Rules:** `no-static-element-interactions`, `click-events-have-key-events`
- **Pattern:** Replace clickable `<div>` / `<span>` elements with semantic `<button type="button">`, or add `role="button"`, `tabIndex={0}`, and `onKeyDown` (handling Enter and Space).

### 5. Stable Keys (`no-array-index-as-key`)
- **Pattern:** Generate or use stable unique identifiers (e.g., `item.id`, `item.slug`, `item.title`, or a deterministic compound key) instead of array index `idx` in `.map()`.

### 6. Event Callback Stability & Effect Separation
- **Rules:** `prefer-use-effect-event`, `no-reset-all-state-on-prop-change`, `no-adjust-state-on-prop-change`
- **Pattern:** 
  - Extract non-reactive callback reads out of `useEffect` dependencies or wrap handler in a stable ref pattern / `useEffectEvent` polyfill.
  - Avoid resetting state synchronously during render when props change; use React keys on child components (`key={propId}`) to reset state declaratively, or calculate derived values during render without redundant state.

### 7. Component Modularization & Complexity Reduction
- **Rules:** `no-giant-component`, `no-high-complexity-react-function`, `duplicate-jsx-subtree`
- **Pattern:** Decompose monolithic components into cohesive subcomponents:
  - `SimpleBookingForm.tsx` -> Extract step subcomponents (`BookingPersonalDetails`, `BookingServiceSelect`, `BookingDateTime`, `BookingSummary`).
  - `CraftsmanshipSection.tsx` & `ServiceHero.tsx` -> Extract distinct sub-sections into child components.
  - `AboutTeam.tsx` -> Extract repeated team card JSX into a `<TeamMemberCard />` reusable component.

---

## Boundaries
- **Always:** 
  - Preserve visual design, layouts, animations, and user interactions.
  - Re-run `npx react-doctor@latest --verbose` after each module fix to verify score increment.
  - Ensure zero TypeScript compiler errors (`npm run build`).
- **Ask First:** 
  - If any external library installation is considered.
  - If any user-facing API routes or data contracts require structural modification.
- **Never:** 
  - Silence or disable rules using ignore comments without explicit approval.
  - Break responsive layouts across mobile, tablet, or desktop viewports.

---

## Success Criteria
1. `react-doctor` score reaches **95-100 / 100** with **0 critical or high-severity warnings**.
2. Zero build or TypeScript lint errors (`npm run build`).
3. All form inputs, modal dialogs, and video players are accessible via keyboard and screen readers.
4. CSS performance is optimized by eliminating `transition-all` reflow bottlenecks.
