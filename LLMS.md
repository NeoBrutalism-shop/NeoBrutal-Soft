# NeoBrutal Soft — LLM / Agent Instructions

Use this file when generating interfaces with NeoBrutal Soft.

## Intent

NeoBrutal Soft is for SaaS products, dashboards, admin panels, setup flows, developer tools, and long-session application interfaces.

## Non-negotiable interaction rule

**Compress, never float.**

Do not generate generic hover styles such as:

```css
transform: translateY(-2px);
```

for buttons, tabs, chips, interactive cards, switches, or similar controls.

Raised controls should lose shadow depth as they move down/inward:

- rest: full depth
- hover: partial compression
- active: full compression

Use the semantic depth/motion tokens from `src/tokens.css`.

## Prefer these classes

- `.nbs-button`
- `.nbs-card`
- `.nbs-input`
- `.nbs-textarea`
- `.nbs-select`
- `.nbs-badge`
- `.nbs-switch`
- `.nbs-check`
- `.nbs-tabs` / `.nbs-tab`
- `.nbs-alert`
- `.nbs-table`
- `.nbs-inset`
- `.nbs-stack`
- `.nbs-cluster`
- `.nbs-grid`

## Theme

Set `data-theme="light"` or `data-theme="dark"` on a root ancestor. Do not hardcode white/black application surfaces when semantic variables exist.

Use semantic variables such as:

```css
var(--nbs-bg)
var(--nbs-surface)
var(--nbs-surface-muted)
var(--nbs-text)
var(--nbs-text-muted)
var(--nbs-border)
var(--nbs-shadow)
var(--nbs-primary)
var(--nbs-success)
var(--nbs-warning)
var(--nbs-danger)
```

## Fluid UI

Prefer the provided `clamp()`-based spacing, type, and control tokens. Avoid replacing the system with fixed pixel scales unless a component genuinely requires a fixed physical dimension.

## Motion semantics

Use:

```css
--nbs-motion-instant
--nbs-motion-fast
--nbs-motion-standard
--nbs-motion-slow
--nbs-ease-press
--nbs-ease-release
--nbs-ease-standard
```

Do not use `transition: all` in production components.

## Raised vs recessed

Raised/tactile:

- buttons
- actionable cards
- switches
- checkboxes
- physical action controls

Recessed/seated:

- inputs
- textareas
- filters
- data wells
- inset panels

Do not make every surface tactile. Motion signals interactivity.

## Accessibility requirements

- use semantic native elements first
- preserve visible `:focus-visible`
- support keyboard activation
- do not require hover
- respect `prefers-reduced-motion`
- use descriptive labels for icon-only controls
- maintain adequate touch targets
- do not use color as the only state signal for important states

## SaaS layout guidance

Soft should feel calm and operational. Prefer:

- clear app shells
- visible but restrained borders
- inset stat/data areas
- strong hierarchy
- compact statuses
- consistent card anatomy
- local loading/progress feedback
- meaningful micro-interactions

Avoid excessive stickers, decoration, giant shadows, random rotation, or constant animation. Those can belong to louder NeoBrutal flavors.

## Flavor boundary

Do not silently turn Soft into Rivet, Raw, or Commerce. Soft uses shallow depth, warm neutral surfaces, controlled pastel accents, and quiet release motion.
