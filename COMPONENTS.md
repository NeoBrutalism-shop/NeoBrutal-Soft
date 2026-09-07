# NeoBrutal Soft — Component Matrix

## Implemented in 0.1.0-dev

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

### Primitives
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

## Next application primitives

These are prioritized by NeoLicenser usage rather than by generic component-library completeness.

1. App shell
2. Sidebar navigation
3. Topbar
4. Dropdown menu
5. Popover
6. Tooltip
7. Dialog
8. Drawer / sheet
9. Toast
10. Command palette
11. Search field
12. Select / combobox behavior
13. Radio group
14. Segmented control
15. Pagination
16. Breadcrumb
17. Progress / stepper
18. Skeleton
19. Empty state
20. Stat card
21. Integration card
22. Activity / audit timeline
23. API key / secret field
24. Copy action feedback
25. Webhook row
26. License status card
27. Activation counter
28. Agent action preview
29. Change/diff panel
30. Approval card

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

Interactive components must obey **Compress, never float** unless their semantic physical model requires a different motion (for example drag-and-drop lift).
