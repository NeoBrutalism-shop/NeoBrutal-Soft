# NeoBrutal Soft — Resilience Contract

v0.6 treats production resilience as part of the design system, not as application-specific cleanup.

## Required environments

Soft must remain understandable and operable under:

- light and dark themes
- keyboard-only input
- touch-first input
- `prefers-reduced-motion: reduce`
- `forced-colors: active`
- increased contrast preference where supported
- left-to-right and right-to-left document direction
- narrow/mobile containers
- long translated labels and customer-generated identifiers

## Forced colors / high contrast

`src/resilience.css` remaps Soft semantic tokens to system colors when forced colors are active.

Rules:

- borders must survive when shadows disappear
- state cannot depend on pastel fills alone
- focus uses the system highlight color
- primary/status surfaces may use `Highlight` + `HighlightText`
- tactile controls retain a small inward press even when the depth shadow is unavailable
- do not opt entire components out of forced-color adjustment merely to preserve brand colors

## Bidirectional layout

Prefer CSS logical properties for direction-sensitive geometry:

- `margin-inline`, `padding-inline`
- `inset-inline-start` / `inset-inline-end`
- `border-inline-*`
- `text-align: start/end`

Do not assume `left` means “start”. v0.6 converts switch thumb travel to logical inset geometry.

Directional icons can opt into mirroring with:

```html
<span class="nbs-icon--directional" aria-hidden="true">→</span>
```

Do **not** mirror universal/non-directional symbols such as checkmarks, plus/minus, download, close, play/pause, or brand marks.

Use `.nbs-bidi-isolate` or `.nbs-bidi-plaintext` for user-generated identifiers that mix scripts or direction.

## Localization

Text expansion is expected.

- controls must tolerate labels materially longer than English
- operational identifiers must wrap instead of creating viewport overflow
- do not truncate consequential text by default
- if truncation is necessary, preserve the complete value through an accessible detail/reveal path
- fixed widths must not be required for labels, badges, or action groups to remain usable

The resilience browser fixture deliberately includes long German copy, Arabic RTL content, and an unbroken machine identifier.

## Composite keyboard behavior

A composite component is not complete because its children happen to be tabbable.

For tabs, v0.6 requires:

- selected tab has `tabIndex=0`; inactive tabs use `-1`
- Arrow Left/Right navigate horizontal tabs
- Arrow Up/Down navigate vertical tabs
- Home/End jump to boundaries
- horizontal arrow meaning follows RTL direction
- keyboard navigation also changes the selected panel

Any future command palette, listbox, tree, grid, menu, or combobox promoted to a reusable package must document and test its complete keyboard model.

## Visual regression

Full flagship pages remain human review captures because their product storytelling will evolve.

A smaller deterministic reference plate is the blocking visual contract. It covers the core visual grammar in light and dark and is compared by Playwright with a narrow pixel-difference tolerance.

Do not update a baseline merely because CI failed. First classify the difference:

1. intended token/component change → review screenshot → update baseline
2. rendering noise → stabilize the fixture/test
3. accidental drift → fix the implementation

## Performance budgets

`npm run check:budget` enforces source-level budgets for:

- total design-system CSS
- React wrapper package
- registry metadata
- largest individual component stylesheet

A budget increase requires an architectural reason. Prefer splitting or simplifying a component before increasing the threshold.

## Release gate

Before a v0.6+ change is considered sellable:

1. static conformance passes
2. size budgets pass
3. browser interaction QA passes
4. axe/WCAG scans pass
5. forced-colors resilience passes
6. RTL + long-string overflow checks pass
7. blocking visual reference plate passes
8. full-page review captures remain available
