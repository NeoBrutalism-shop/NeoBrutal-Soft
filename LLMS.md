# NeoBrutal Soft — LLM / Agent Instructions

Use this file when generating interfaces with NeoBrutal Soft.

## Intent

NeoBrutal Soft is for SaaS products, dashboards, admin panels, setup flows, developer tools, agent workflows, and long-session application interfaces.

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

Core:
- `.nbs-button`, `.nbs-card`, `.nbs-input`, `.nbs-textarea`, `.nbs-select`
- `.nbs-badge`, `.nbs-switch`, `.nbs-check`, `.nbs-tabs`, `.nbs-alert`, `.nbs-table`
- `.nbs-inset`, `.nbs-stack`, `.nbs-cluster`, `.nbs-grid`

Application/workflow:
- `.nbs-command`, `.nbs-command__item`, `.nbs-combobox`
- `.nbs-filterbar`, `.nbs-filter-chip`, `.nbs-bulkbar`, `.nbs-data-table`
- `.nbs-domain-row`, `.nbs-release-channel`
- `.nbs-scope-card`, `.nbs-permission-grid`, `.nbs-risk`, `.nbs-confirm`
- `.nbs-agent-diff`, `.nbs-agent-run`

## Theme

Set `data-theme="light"` or `data-theme="dark"` on a root ancestor. Do not hardcode application surfaces when semantic variables exist.

Use `--nbs-bg`, `--nbs-surface`, `--nbs-surface-muted`, `--nbs-text`, `--nbs-text-muted`, `--nbs-border`, `--nbs-shadow`, `--nbs-primary`, `--nbs-success`, `--nbs-warning`, and `--nbs-danger`.

## Fluid UI

Prefer the provided `clamp()`-based spacing, type, and control tokens. Avoid replacing the system with fixed pixel scales unless a component genuinely requires a fixed physical dimension.

## Motion semantics

Use `--nbs-motion-instant`, `--nbs-motion-fast`, `--nbs-motion-standard`, `--nbs-motion-slow`, `--nbs-ease-press`, `--nbs-ease-release`, and `--nbs-ease-standard`. Do not use `transition: all` in production components.

## Raised vs recessed

Raised/tactile: buttons, actionable cards, switches, checkboxes, filter chips, permission/scope cards, physical action controls.

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

## Accessibility requirements

- use semantic native elements first
- preserve visible `:focus-visible`
- support keyboard activation
- command palettes support arrow navigation, Enter, and Escape
- dialogs/alertdialogs trap focus and restore it on close
- do not require hover
- respect `prefers-reduced-motion`
- use descriptive labels for icon-only controls
- maintain adequate touch targets
- do not use color as the only state signal
- destructive actions must remain understandable to assistive technology

## SaaS layout guidance

Soft should feel calm and operational. Prefer clear app shells, restrained borders, inset data areas, strong hierarchy, compact statuses, local progress feedback, meaningful micro-interactions, and explicit risk/permission communication.

Avoid excessive stickers, decoration, giant shadows, random rotation, or constant animation. Those belong to louder NeoBrutal flavors.

## Flavor boundary

Do not silently turn Soft into Rivet, Raw, or Commerce. Soft uses shallow depth, warm neutral surfaces, controlled pastel accents, and quiet release motion.
