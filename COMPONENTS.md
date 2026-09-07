# NeoBrutal Soft — Component Matrix

## Implemented in 0.4.0-dev

### Foundations
- Light theme
- Dark theme
- Fluid spacing tokens
- Fluid typography tokens
- Fluid control-size tokens
- Structural border/radius tokens
- Tactile depth tokens
- Semantic motion/easing tokens
- Focus-visible treatment
- Reduced-motion support
- Layout utilities: container, stack, cluster, grid
- Raised tactile utility
- Recessed/inset surface utility

### Core primitives
- Button: default, primary, success, warning, danger, quiet
- Button sizes: small, default, large
- Icon button
- Card: default, flat, muted, accent, interactive
- Input
- Textarea
- Select styling
- Field label/help/invalid state
- Badge/status
- Switch
- Checkbox
- Radio/choice card
- Tabs
- Alert: info, success, warning, danger
- Data table

### Application shell
- App shell
- Responsive sidebar
- Sidebar brand and sections
- Tactile navigation item
- Sticky topbar
- Responsive application content region
- Mobile navigation trigger

### Overlays
- Dialog
- Wide dialog
- Drawer / sheet
- Popover surface
- Dropdown/menu surface
- Menu item and destructive item treatment
- Backdrop/overlay

### Feedback and progress
- Toast
- Toast region
- Progress bar
- Stepper
- Skeleton
- Empty state
- Batch operation progress
- Operation-step states
- Partial-success / partial-failure summary

### Navigation and discovery
- Search field treatment
- Breadcrumb
- Pagination
- Segmented control
- Tooltip surface
- Command palette
- Keyboard-selected command state
- Combobox panel and option states

### Data and operational workflows
- Filter bar
- Tactile filter chip
- Bulk-action toolbar
- Selectable data-table rows
- Sticky data-table header
- Domain/activation row
- Release-channel row
- Bar-chart grammar
- Chart legend
- Sparkline
- Segmented meter
- Webhook delivery log
- Webhook event row
- Saved-view interaction example

### Date and time
- Date field
- Date input shell
- Date-range layout
- Calendar
- Calendar day states: today, selected, in-range, disabled
- Time/event row

### Files and releases
- Upload/drop zone
- Semantic drag-lift state
- File row
- Release artifact card
- Artifact checksum/hash treatment
- Package metadata

### Product/admin patterns
- Stat card and responsive stat grid
- Integration card
- Audit/activity timeline
- Secret/API-key field
- Agent change-plan / approval card

### Agent and permission patterns
- Agent change/diff viewer
- Add / modify / remove diff states
- Agent execution progress pattern
- Agent scope card
- Permission matrix
- Risk levels: low, medium, high, critical
- Destructive confirmation with impact summary and typed phrase

### Customer / team patterns
- Customer identity row
- Avatar
- Team/workspace card
- Member row
- Seat allocation meter
- Subscription/renewal history
- Renewal-policy choice example

### Licensing-specific patterns
- License card
- License metadata grid
- Activation meter
- Webhook row
- Activation/domain management row
- Release-channel status row
- Signed release artifact
- Renewal window
- Agent/API risk chip: read, write, critical

## Dogfood coverage

The demos currently exercise:

- responsive application shell
- product table
- stat cards
- release progress
- integrations
- audit trail
- secret handling
- dialog creation flow
- quick-setup drawer
- toast feedback
- agent review/approval workflow
- light/dark theme switching
- mobile sidebar behavior
- focus restoration, Escape close, and basic dialog focus trapping
- command palette with Cmd/Ctrl+K, filtering, arrows, Enter, and Escape
- searchable license table
- multi-row selection and bulk operations
- explicit destructive confirmation
- agent scope/risk selection
- reviewable AI change set
- activation/domain management
- stable/beta release channels
- keyboard/pointer-inspectable activation chart
- renewal date range and calendar selection
- release ZIP upload/drop behavior
- signed artifact metadata/checksum pattern
- webhook delivery retry while preserving history
- batch entitlement renewal with partial success and isolated exceptions
- team/member/seat capacity
- renewal-policy forecasting before save

## Next high-value components

Prioritized by NeoLicenser usage rather than generic library completeness.

1. Advanced table sorting and column controls
2. Saved filter-view component contract (beyond demo treatment)
3. Changelog/release-note block
4. Billing/commerce handoff states
5. Invoice/payment history
6. Customer organization hierarchy
7. Seat invite/pending/removed states
8. Date/time timezone selection
9. Recurring schedule editor
10. Chart line/area alternatives where a real use case requires them
11. Empty/loading/error variants for every application workflow
12. Inline validation/result pattern
13. Agent connection card
14. Webhook request/response inspector
15. Retry/backoff visualization
16. Release rollout controls and staged percentage updates
17. Artifact provenance/signature details
18. Automated visual regression tooling
19. Automated accessibility regression tooling
20. React/shadcn wrappers and registry metadata

## Conformance rule

A component is not considered complete until it defines, where applicable:

- rest
- hover/contact
- focus-visible
- active/press
- selected/toggled
- loading
- disabled
- success/error feedback
- keyboard behavior
- touch behavior
- reduced-motion behavior
- light and dark themes
- responsive behavior
- agent-readable intent

Interactive components must obey **Compress, never float** unless their semantic physical model requires a different motion (for example drag-and-drop lift while carrying a file).

See `QUALITY.md` for the sellable-quality release gate.
