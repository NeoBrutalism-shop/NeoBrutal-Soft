# NeoBrutal Soft — Component Matrix

## Implemented in 0.5.0-dev

### Foundations
- Light and dark themes
- Fluid spacing, typography, control and layout tokens
- Structural borders/radii
- Tactile depth + semantic motion/easing
- Focus-visible and reduced-motion support
- Layout utilities: container, stack, cluster, grid
- Raised/tactile and recessed/inset surface utilities

### Core primitives
- Button: default, primary, success, warning, danger, quiet
- Button sizes: small, default, large; icon button
- Card: default, flat, muted, accent, interactive
- Input, textarea, select, label/help/invalid field
- Badge/status
- Switch, checkbox, radio/choice card
- Tabs, alerts, base data table

### Application shell + overlays
- App shell, responsive sidebar, topbar, mobile navigation
- Dialog, wide dialog, drawer/sheet
- Popover, dropdown/menu, destructive menu treatment
- Backdrop/overlay

### Feedback + progress
- Toast and toast region
- Progress bar and stepper
- Skeleton, empty state
- Batch-operation progress
- Operation step states
- Partial-success / partial-failure summary

### Navigation + discovery
- Search, breadcrumb, pagination, segmented control, tooltip
- Command palette with keyboard-selected states
- Combobox surfaces

### Data tables + operator control
- Filter bar and tactile filter chips
- Bulk-action toolbar
- Selectable rows and sticky headers
- Saved-view component
- Sortable column headers
- Column visibility menu
- Comfortable/compact table density

### Data visualization
- Bar-chart grammar
- Keyboard/pointer inspectable chart bars
- Chart legend
- Sparkline
- Segmented meter

### Date / time / scheduling
- Date field and range layout
- Calendar with today/selected/in-range/disabled states
- Time/event row
- Timezone selector/preview
- Explicit schedule card
- Staged release rollout control

### Files + releases
- Upload/drop zone with semantic drag lift
- File row
- Signed release artifact card
- Checksum/hash and provenance metadata
- Release-channel status row

### Operational status
- Webhook delivery log and event row
- Webhook request/response inspector
- Request/response tabs
- Retry history patterns
- Batch progress and isolated exceptions

### Billing + commerce
- Billing summary
- Payment-method row
- Invoice row/history
- Commerce handoff boundary pattern
- Consequence-first renewal treatment

### Agent + permission patterns
- Agent plan/approval card
- Add/modify/remove diff viewer
- Visible agent execution progress
- Agent scope card and permission matrix
- Risk levels: low, medium, high, critical
- Destructive confirmation with impact summary and typed phrase

### Customers / teams / licensing
- Customer identity row and avatar
- Team/workspace card
- Member row
- Seat allocation meter
- Subscription/renewal history
- License card and metadata grid
- Activation meter/domain management row
- Webhook row
- Renewal windows and release channels

### Distribution + machine consumption
- Framework-agnostic CSS entrypoint
- Thin React primitive package
- shadcn source registry with `registry:base`
- `soft-button` and `soft-card` registry items
- Machine-readable `registry/manifest.json`
- LLM/agent instructions

## Dogfood coverage

The demos now exercise:

- responsive application shell and overlays
- command palette keyboard flow
- license filtering, selection, bulk actions and destructive confirmation
- agent scopes, reviewable diffs and execution state
- charts, date ranges and calendar selections
- release ZIP upload/drop and artifact verification
- webhook retry and partial-success batch processing
- team seats and renewal forecasting
- advanced table saved views, sorting, density and columns
- billing/payment history and WooCommerce handoff
- timezone-aware scheduling and staged rollout promotion
- webhook request/response inspection
- CSS, React and shadcn distribution paths

The default commercial-readiness test bench is `demo/v05.html`.

## Next high-value work

1. Promote approved visual captures into blocking pixel-regression baselines
2. Expand automated accessibility coverage to interactive opened states and every public demo
3. Add keyboard-complete production behavior packages for complex primitives (calendar/combobox/dialog), not only visual contracts
4. Expand React wrappers for application primitives while keeping native semantics
5. Add more shadcn registry items and generated per-item JSON output
6. Add Storybook-equivalent or purpose-built public component documentation without bloating runtime dependencies
7. Add RTL and localization stress tests
8. Add forced-colors/high-contrast testing
9. Add performance/CSS-size budgets
10. Finalize public/free vs commercial license model before 1.0

## Conformance rule

A component is not complete until relevant rest, hover/contact, focus-visible, active/press, selected/toggled, loading, disabled, success/error, keyboard, touch, reduced-motion, light/dark, responsive, and agent-readable states are designed.

Interactive components obey **Compress, never float** unless the physical meaning requires an exception such as actual drag-and-drop lift.

See `QUALITY.md` for the sellable-quality gate.
