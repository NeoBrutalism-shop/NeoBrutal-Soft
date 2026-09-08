# NeoBrutal Soft — Component Matrix

## Implemented in 0.7.0-dev

### Foundations
- Light and dark themes
- Fluid spacing, typography, control and layout tokens
- Structural borders/radii
- Tactile depth + semantic motion/easing
- Focus-visible and reduced-motion support
- Forced-colors / high-contrast resilience
- RTL-safe interaction geometry and direction-aware utilities
- Long-label, identifier and localization wrapping rules
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
- Keyboard-complete React Tabs with RTL-aware navigation
- shadcn source registry with `registry:base`
- 7 UI registry items + base
- Machine-readable `registry/manifest.json`
- LLM/agent instructions
- Blocking light/dark visual reference plate
- Source-size budgets

### Public documentation + dogfood
- Product flagship: `index.html`
- Interactive component explorer: `components.html`
- NeoLicenser v0.7 application lab: `demo/v07.html`
- Component search and keyboard command palette
- Live dialogs, drawers, toasts, tabs, drag/drop and destructive-confirmation demonstrations
- Older v0.4/v0.5 engineering labs retained for regression coverage

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
- forced-colors, RTL and long-localization resilience
- public component discovery and realistic NeoLicenser navigation

The public component explorer is `components.html`. The current product dogfood lab is `demo/v07.html`.

## Next high-value work

1. Expand React wrappers for the application primitives proven by the v0.7 NeoLicenser lab
2. Generate per-component registry JSON and install examples from one canonical manifest
3. Add keyboard-complete production behavior packages for calendar/combobox/dialog rather than visual contracts only
4. Add component-level visual baselines for the highest-risk interactive states
5. Add real localization fixtures in Arabic/Hebrew plus long German/Japanese product copy
6. Add application-level performance budgets and CSS-unused analysis
7. Finalize public/free vs commercial license model before 1.0
8. Turn NeoLicenser from a dogfood prototype into the actual application frontend

## Conformance rule

A component is not complete until relevant rest, hover/contact, focus-visible, active/press, selected/toggled, loading, disabled, success/error, keyboard, touch, reduced-motion, light/dark, responsive, RTL/high-contrast resilience, and agent-readable states are designed.

Interactive components obey **Compress, never float** unless the physical meaning requires an exception such as actual drag-and-drop lift.

See `QUALITY.md` for the sellable-quality gate.
