# NeoBrutal Soft — LLM / Agent Instructions

Use this file when generating or modifying interfaces with NeoBrutal Soft.

## Intent

NeoBrutal Soft is for SaaS products, dashboards, admin panels, developer tools, agent workflows, licensing/commerce operations, and long-session application interfaces.

## Non-negotiable interaction rule

**Compress, never float.**

Do not generate generic hover lift such as `translateY(-2px)` for buttons, tabs, chips, cards, switches, filters, or other ordinary interactive controls.

Raised controls follow:
- rest: full structural depth
- hover/contact: partial compression
- active/press: full compression
- release: controlled restoration

The main exception is **semantic drag lift** while the user is actively carrying a draggable object/file.

## Source of truth

Styling hierarchy:
1. `src/tokens.css`
2. `src/base.css`
3. `src/components/*.css`
4. `src/index.css`

Framework wrappers must map to existing Soft classes; do not fork or recreate the design language in React/Tailwind component-local styles.

Distribution:
- CSS: `src/index.css`
- React: `packages/react/src/index.js`
- shadcn source registry: `registry.json`
- machine manifest: `registry/manifest.json`

## Preferred classes

Core: `.nbs-button`, `.nbs-card`, `.nbs-input`, `.nbs-textarea`, `.nbs-select`, `.nbs-badge`, `.nbs-switch`, `.nbs-check`, `.nbs-radio`, `.nbs-alert`.

Application: `.nbs-command`, `.nbs-filterbar`, `.nbs-filter-chip`, `.nbs-bulkbar`, `.nbs-data-table`, `.nbs-saved-view`, `.nbs-sort-button`, `.nbs-table-density`.

Agent/security: `.nbs-agent-diff`, `.nbs-agent-run`, `.nbs-scope-card`, `.nbs-permission-grid`, `.nbs-risk`, `.nbs-confirm`.

Data/time/files: `.nbs-chart-card`, `.nbs-chart-bar`, `.nbs-meter`, `.nbs-date-range`, `.nbs-calendar`, `.nbs-dropzone`, `.nbs-artifact`.

Operations/commerce: `.nbs-webhook-log`, `.nbs-operation`, `.nbs-partial-failure`, `.nbs-billing-summary`, `.nbs-payment-method`, `.nbs-commerce-handoff`, `.nbs-schedule-card`, `.nbs-rollout`, `.nbs-inspector`.

## Theme + fluid UI

Use `data-theme="light"` or `data-theme="dark"` on a root ancestor.

Prefer semantic variables (`--nbs-bg`, `--nbs-surface`, `--nbs-text`, `--nbs-border`, `--nbs-primary`, status colors, depth/motion tokens) and the provided `clamp()` scales. Do not hardcode theme surfaces where semantic variables exist.

## Workflow rules

### Agent actions
Use: inspect → plan → show add/modify/remove changes → risk/affected objects → approval when required → visible execution → verification → audit outcome.

Never expose raw stored secrets to an agent when a credential reference such as `secret://r2/production` is sufficient.

### Destructive actions
Explain scope, affected count, recoverability/grace, and audit consequence. Typed confirmation is reserved for genuinely high-risk actions.

### Data tables
Saved views describe operator intent. Sorting, density, and column visibility are presentation controls and must not silently change the underlying query meaning.

### Charts
Charts explain an operational question. Exact values must be available without relying on color or hover. Avoid decorative animation.

### Dates / timezones / schedules
Use absolute date/time near consequential actions. Show timezone explicitly. Relative labels (tomorrow, later, in 2 hours) may supplement but should not replace the resolved timestamp.

### Rollouts
Show current population, next stage, health evidence, and the consequence of promotion/pause before commitment. Do not turn rollout progress into a decorative progress bar with no population context.

### Files / releases
Show file name, size, provenance, release channel, signature/checksum state, and verification where relevant. Resting upload surfaces do not float; actual drag may lift.

### Webhooks
Preserve failed delivery evidence. A retry that succeeds does not erase the original failure. Inspector UI should expose request, response, status, attempt count, latency, and identifiers without leaking secrets.

### Partial failure
Multi-object work may finish partially. Keep successful work successful and isolate skipped/failed objects with next actions.

### Billing / commerce
Money-changing UI shows price, timing, capacity/entitlement consequence, and system boundary before commitment. When WooCommerce/EDD owns the payment object, show the handoff instead of pretending NeoLicenser owns that record.

### Teams / seats
Expose purchased, assigned, available, pending, and renewal consequences before changing capacity policy.

## Accessibility requirements

- semantic native elements first
- visible `:focus-visible`
- full keyboard operation for implemented behavior
- no hover-only information
- respect `prefers-reduced-motion`
- state cannot rely on color alone
- touch targets remain usable
- charts expose exact values to keyboard users
- upload works without drag
- dialogs manage focus and Escape
- destructive flows are understandable to assistive technology

Target: WCAG 2.2 AA wherever applicable.

## Quality expectations

Before calling a generated Soft component complete:
- use real Soft tokens/classes
- verify light and dark
- verify narrow layout/container behavior
- verify keyboard and touch semantics
- preserve tactile meaning
- avoid `transition: all`
- avoid upward hover lift
- show operational truth instead of hiding exceptions
- add/update agent-readable metadata when introducing a significant new pattern

The repository runs static conformance plus Playwright/axe browser QA. Do not weaken tests to make new UI pass; fix the UI unless the test is demonstrably incorrect.

## Flavor boundary

Do not silently turn Soft into Rivet, Raw, or Commerce. Soft uses shallow depth, warm neutral surfaces, controlled pastel accents, and restrained release motion.
