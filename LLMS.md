# NeoBrutal Soft — LLM / Agent Instructions

Use this file when generating interfaces with NeoBrutal Soft.

## Intent

NeoBrutal Soft is for SaaS products, dashboards, admin panels, setup flows, developer tools, agent workflows, operational data, and long-session application interfaces.

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

The primary exception is **semantic drag lift**: when a user is actively carrying a draggable file/object, a temporary lift may communicate that the object has left its resting surface. Do not use that exception for ordinary hover.

## Prefer these classes

Core:
- `.nbs-button`, `.nbs-card`, `.nbs-input`, `.nbs-textarea`, `.nbs-select`
- `.nbs-badge`, `.nbs-switch`, `.nbs-check`, `.nbs-radio`, `.nbs-tabs`, `.nbs-alert`, `.nbs-table`
- `.nbs-inset`, `.nbs-stack`, `.nbs-cluster`, `.nbs-grid`

Application/workflow:
- `.nbs-command`, `.nbs-command__item`, `.nbs-combobox`
- `.nbs-filterbar`, `.nbs-filter-chip`, `.nbs-bulkbar`, `.nbs-data-table`
- `.nbs-domain-row`, `.nbs-release-channel`
- `.nbs-scope-card`, `.nbs-permission-grid`, `.nbs-risk`, `.nbs-confirm`
- `.nbs-agent-diff`, `.nbs-agent-run`

Data/time/files/operations:
- `.nbs-chart-card`, `.nbs-chart`, `.nbs-chart-bar`, `.nbs-chart-legend`, `.nbs-sparkline`, `.nbs-meter`
- `.nbs-date-field`, `.nbs-date-input`, `.nbs-date-range`, `.nbs-calendar`, `.nbs-calendar__day`, `.nbs-time-row`
- `.nbs-dropzone`, `.nbs-file-row`, `.nbs-artifact`
- `.nbs-operation`, `.nbs-operation-step`, `.nbs-webhook-log`, `.nbs-webhook-event`, `.nbs-partial-failure`
- `.nbs-identity-row`, `.nbs-avatar`, `.nbs-team-card`, `.nbs-member`, `.nbs-seat-meter`, `.nbs-subscription-history`

## Theme

Set `data-theme="light"` or `data-theme="dark"` on a root ancestor. Do not hardcode application surfaces when semantic variables exist.

Use `--nbs-bg`, `--nbs-surface`, `--nbs-surface-muted`, `--nbs-text`, `--nbs-text-muted`, `--nbs-border`, `--nbs-shadow`, `--nbs-primary`, `--nbs-success`, `--nbs-warning`, and `--nbs-danger`.

## Fluid UI

Prefer the provided `clamp()`-based spacing, type, and control tokens. Avoid replacing the system with fixed pixel scales unless a component genuinely requires a fixed physical dimension.

## Motion semantics

Use `--nbs-motion-instant`, `--nbs-motion-fast`, `--nbs-motion-standard`, `--nbs-motion-slow`, `--nbs-ease-press`, `--nbs-ease-release`, and `--nbs-ease-standard`. Do not use `transition: all` in production components.

## Raised vs recessed

Raised/tactile: buttons, actionable cards, switches, checkboxes, radios, filter chips, permission/scope cards, physical action controls.

Recessed/seated: inputs, textareas, search fields, filters/data wells, inset panels.

Do not make every surface tactile. Motion signals interactivity.

## Advanced workflow rules

### Agent actions
Never reduce a configuration-changing agent workflow to a generic Run button. Prefer: inspect → plan → show add/modify/remove changes → show risk/affected objects → approval when required → visible execution → verification → audit outcome.

### Permissions
Do not use one opaque full-access switch when meaningful scopes exist. Surface permissions with clear names and risk levels. High-risk and critical powers require stronger approval.

### Destructive actions
Explain impact, affected object count, recoverability/grace behavior, and audit consequences. Typed confirmation is for genuinely high-risk actions, not routine reversible work.

### Secrets
Agents should operate on credential references such as `secret://r2/production`, never raw stored secrets. Communicate configured state without revealing sensitive values unnecessarily.

### Data workflows
For bulk actions, show selection count and affected scope before action. Search/filter/selection state must remain understandable without relying on color alone.

## v0.4 operational rules

### Data visualization
Charts are explanatory UI, not decoration. Every chart must answer a concrete operational question and expose exact values to pointer and keyboard users. Do not rely on color alone; use labels, numbers, legends, status text, or accessible names.

Prefer restrained bars, meters, sparklines, and grids over ornamental gradients or animated chart effects. Motion may acknowledge inspection, but should not distract from comparison.

### Dates and ranges
Show explicit start/end boundaries, the current timezone where relevant, and the scope affected by the selected range. Calendar selection must remain keyboard-visible and cannot rely only on a filled color.

### Files and releases
Release UI should expose provenance and verification: file name, size, channel, checksum/signature state, source/uploader, and verification action where relevant. Dragging a file may lift because the user is semantically carrying it; the resting drop zone should not float on hover.

### Webhooks and retries
Do not replace a failed delivery with a green success row after retry. Preserve delivery history and show the retry/recovery outcome so operators can understand what happened.

### Batch operations
Do not model multi-object work as one binary spinner. Show affected count, progress, steps when useful, and isolated exceptions. Partial success is a valid completion state. Successful objects should not be visually treated as failed because one object needs retry.

### Teams and seats
Expose purchased capacity, assigned seats, available seats, pending states, and renewal consequences. If a policy change affects future billing or capacity, forecast the result before save.

## Accessibility requirements

- use semantic native elements first
- preserve visible `:focus-visible`
- support keyboard activation
- command palettes support arrow navigation, Enter, and Escape
- dialogs/alertdialogs trap focus and restore it on close
- charts expose exact values without requiring hover
- calendar selections remain visible to keyboard users
- file upload remains operable without drag-and-drop
- do not require hover
- respect `prefers-reduced-motion`
- use descriptive labels for icon-only controls
- maintain adequate touch targets
- do not use color as the only state signal
- destructive actions must remain understandable to assistive technology

## SaaS layout guidance

Soft should feel calm and operational. Prefer clear app shells, restrained borders, inset data areas, strong hierarchy, compact statuses, local progress feedback, meaningful micro-interactions, explicit risk/permission communication, and persistent operational truth.

Avoid excessive stickers, decoration, giant shadows, random rotation, or constant animation. Those belong to louder NeoBrutal flavors.

## Flavor boundary

Do not silently turn Soft into Rivet, Raw, or Commerce. Soft uses shallow depth, warm neutral surfaces, controlled pastel accents, and quiet release motion.
