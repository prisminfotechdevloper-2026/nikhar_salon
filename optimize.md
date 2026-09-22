Review and fix the top 3 React Doctor findings in nikhar-salon. Leave the rest for a follow-up.

1. WARN Performance: transition: all animates everything (×46)
   Your users see janky animation because `transition-all` animates every property that changes, including expensive layout ones and instant ones like focus rings. Name the properties: `transition-colors`, `transition-opacity`, or `transition-transform`.
   Curl with no cache & follow the canonical fix and false positive check recipe before fixing: https://react.doctor/docs/rules/react-doctor/no-transition-all
   - src/app/contact/page.tsx:36
   - src/components/FloatingActions.tsx:20
   - src/components/Navbar.tsx:74
   - +16 more files
2. WARN Bugs: Google Fonts loaded via link (×1)
   Loading Google Fonts with <link> blocks rendering & shifts layout.
   Curl with no cache & follow the canonical fix and false positive check recipe before fixing: https://react.doctor/docs/rules/react-doctor/nextjs-no-font-link
   - src/app/layout.tsx:84
3. WARN Maintainability: Non-component export in component file (×2)
   This file exports non-components, so Fast Refresh can't safely preserve component state.
   Curl with no cache & follow the canonical fix and false positive check recipe before fixing: https://react.doctor/docs/rules/react-doctor/only-export-components
   - src/components/AppointmentModal.tsx:19

Full results for all 104 issues (diagnostics.json + a .txt per rule): C:\Users\A\AppData\Local\Temp\react-doctor-fd9e04e3-4c31-4442-a821-3e50b9d92e0f

Read each file and fix the root cause — don't suppress or silence the rule.

Findings that share a `fixGroupId` (in diagnostics.json) are one root cause — a single fix clears all of them, so treat each `fixGroupId` as ONE task, not one per site.

Verify against the real thing, don't assume: confirm each change matches the canonical fix recipe you fetched for that rule, then re-run `npx react-doctor@latest --verbose` and check the issue is actually gone against the real tool before moving on.

Teach me as you go: for every issue you touch, explain it in plain language (no jargon) — what the problem is, why it's a problem, and how serious it is in human terms. Describe the real-world impact and severity concretely (e.g. "this crashes the page for users on Safari" vs. "this is a minor cleanup with no user impact") so I understand why it matters, not just what changed.

Stop after this pass. Summarize the remaining findings for a follow-up.