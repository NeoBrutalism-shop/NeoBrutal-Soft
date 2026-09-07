# NeoBrutal Soft

**Soft Neo-Brutalism for SaaS, admin, developer tools, agent workflows, and operational software.**

NeoBrutal Soft is a member of the NeoBrutalism design-system family. It preserves the family's physical clarity while making borders, depth, motion, spacing, and color calm enough for all-day product interfaces.

> **Family law: Compress, never float.**

Ordinary interactive surfaces move **into** their depth on hover/press. They do not generically rise toward the user. Semantic lift is reserved for actions such as actually dragging an object.

## Status

`0.5.0-dev` — commercial-readiness milestone.

Soft is still pre-1.0, but it now includes the infrastructure required to evaluate it like a product rather than a component experiment.

## What exists

### Foundation
- light + dark themes
- fluid `clamp()` type, spacing, controls, and layout
- semantic depth and motion tokens
- visible focus treatment and reduced-motion behavior
- framework-agnostic CSS source

### Application UI
- forms, buttons, cards, choices, tabs, alerts
- app shell, responsive sidebar, topbar, navigation
- dialogs, drawers, menus, popovers, command palette
- search, filters, bulk actions, advanced tables and saved views
- progress, stepper, skeleton, empty, partial-failure states

### NeoLicenser / operational UI
- licenses, activations, domains, release channels
- agent plan/diff/approval, scopes, permission matrices, risk levels
- charts, meters, date ranges, calendars
- upload/drop, release artifacts, checksums
- webhook logs and request/response inspector
- batch operations with partial success
- customers, organizations, team members, seats, renewal history
- billing/payment/invoice and commerce-handoff patterns
- timezone-aware scheduling and staged rollout controls

### Distribution
- canonical CSS: `src/index.css`
- thin React primitives: `packages/react`
- shadcn source registry: `registry.json`
- machine-readable system manifest: `registry/manifest.json`
- agent instructions: `LLMS.md`

## Quick use

```html
<link rel="stylesheet" href="./src/index.css" />
<button class="nbs-button nbs-button--primary">Create product</button>
```

Theme:

```html
<html data-theme="light">
```

or `dark`.

React wrappers intentionally remain thin:

```js
import { Button, Card, Field, Input } from '@neobrutal/soft-react'
```

The CSS layer remains the source of truth; framework wrappers must not fork the visual system.

## shadcn registry

The root `registry.json` is a source registry. `soft-base` installs the complete Soft CSS contract and UI items such as `soft-button` and `soft-card` depend on that base.

This prevents an installer or coding agent from copying a visually similar primitive without the tokens, themes, focus rules, and tactile physics that define Soft.

## Quality

Static conformance:

```bash
npm run check
```

Browser QA:

```bash
npm run test:browser
```

v0.5 browser QA uses Playwright + axe to exercise desktop/mobile Chromium, run WCAG-oriented automated checks, verify key interactions, and attach light/dark full-page captures for review.

Visual captures are **review artifacts**, not yet blocking pixel-diff baselines. Approved baselines can become regression gates in a later milestone.

See [`QUALITY.md`](./QUALITY.md) for the sellable-quality gate and [`COMPONENTS.md`](./COMPONENTS.md) for the component matrix.

## Product principles

- Motion is information, not decoration.
- Static surfaces do not impersonate interactive ones.
- Complex actions expose intent, scope, risk, and outcome.
- Operational failures remain inspectable until resolved.
- Partial success is a valid result and should be represented honestly.
- Billing/seat/release changes show consequence before commitment.
- Agent interfaces expose reviewable changes rather than mysterious “AI did it” actions.
- Raw secrets are never required for an agent to understand configured state.

## Dogfood

NeoLicenser is Soft's first real application test bench. New components are accepted because a real workflow needs them—not to inflate the component count.

The default showcase is `demo/v05.html`.

## Family spec

Soft follows the shared family contract in [`NeoBrutalism-shop/spec`](https://github.com/NeoBrutalism-shop/spec).
