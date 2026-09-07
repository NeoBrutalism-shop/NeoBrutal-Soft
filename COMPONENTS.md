# NeoBrutal Soft — Component Matrix

## Implemented in 0.3.0-dev

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

### Licensing-specific patterns
- License card
- License metadata grid
- Activation meter
- Webhook row
- Activation/domain management row
- Release-channel status row
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

## Next high-value components

Prioritized by NeoLicenser usage rather than generic library completeness.

1. Radio group behavior
2. Date/date-range field
3. Date picker and calendar visual language
4. Customer identity row
5. Webhook delivery log
6. Agent connection card
7. Inline validation/result pattern
8. Upload/drop zone with semantic drag lift
9. File/release artifact row
10. Changelog/release-note block
11. Chart and data-visualization language
12. Advanced table sorting/column controls
13. Saved filter views
14. Batch-operation progress and partial-failure states
15. Organization/team member patterns
16. Seat allocation workflow
17. Subscription/renewal history
18. Billing/commerce handoff states
19. Empty/loading/error variants for every application workflow
20. Automated visual/accessibility regression tooling

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

Interactive components must obey **Compress, never float** unless their semantic physical model requires a different motion (for example drag-and-drop lift).

See `QUALITY.md` for the sellable-quality release gate.
