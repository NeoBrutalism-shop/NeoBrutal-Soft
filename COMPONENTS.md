# NeoBrutal Soft — Component Matrix

## Implemented in 0.2.0-dev

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

### Product/admin patterns
- Stat card and responsive stat grid
- Integration card
- Audit/activity timeline
- Secret/API-key field
- Agent change-plan / approval card

### Licensing-specific patterns
- License card
- License metadata grid
- Activation meter
- Webhook row
- Agent/API risk chip: read, write, critical

## Dogfood coverage

The interactive demo currently exercises:

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

## Next high-value components

Prioritized by NeoLicenser usage rather than generic library completeness.

1. Command palette behavior
2. Combobox behavior
3. Radio group
4. Date/date-range field
5. Filter bar
6. Bulk-action toolbar
7. Advanced data-table states
8. License list row
9. Customer identity row
10. Release card
11. Release-channel selector
12. Webhook delivery log
13. Activation/domain row
14. Change/diff viewer
15. Permission matrix
16. Agent connection card
17. Agent scope selector
18. Destructive confirmation pattern
19. Inline validation/result pattern
20. Upload/drop zone
21. File/release artifact row
22. Changelog/release-note block
23. Chart visual language
24. Calendar/date-picker visual language
25. Pagination behavior examples

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
