# NeoBrutal Soft

**Soft Neo-Brutalism for SaaS, admin, developer tools, agent workflows, and operational software.**

NeoBrutal Soft is a member of the NeoBrutalism design-system family. It preserves the family's physical clarity while making borders, depth, motion, spacing, and color calm enough for all-day product interfaces.

> **Family law: Compress, never float.**

Ordinary interactive surfaces move **into** their depth on hover/press. They do not generically rise toward the user. Semantic lift is reserved for actions such as actually dragging an object.

## Live surfaces

**[Open the NeoBrutal Soft flagship →](https://neobrutalism-shop.github.io/NeoBrutal-Soft/)**

**[Browse the interactive component explorer →](https://neobrutalism-shop.github.io/NeoBrutal-Soft/components.html)**

**[Open the NeoLicenser v0.7 application lab →](https://neobrutalism-shop.github.io/NeoBrutal-Soft/demo/v07.html)**

The public surfaces use the actual Soft CSS source of truth and are covered by the same browser, interaction, responsive, and axe/WCAG quality gates as the engineering demos.

## Status

`0.7.0-dev` — application dogfood + public component-explorer milestone.

v0.7 turns Soft from a deep design-system implementation into something people can **learn by touching** and something we can stress-test as a real product application.

## What exists

### Foundation
- light + dark themes
- fluid `clamp()` type, spacing, controls, and layout
- semantic depth and motion tokens
- visible focus treatment and reduced-motion behavior
- forced-colors and increased-contrast support
- RTL-safe utilities and direction-aware icons
- long localization / identifier wrapping rules
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

### Public documentation surfaces
- flagship landing page: `index.html`
- full interactive component explorer: `components.html`
- NeoLicenser application dogfood: `demo/v07.html`
- older v0.4/v0.5 engineering labs retained for regression coverage

### Distribution
- canonical CSS: `src/index.css`
- React primitives + keyboard-complete tabs: `packages/react`
- shadcn source registry: `registry.json`
- machine-readable system manifest: `registry/manifest.json`
- agent instructions: `LLMS.md`
- resilience contract: `RESILIENCE.md`

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
import { Button, Card, Field, Input, Switch, Tabs, TabList, Tab, TabPanel } from '@neobrutal/soft-react'
```

The CSS layer remains the source of truth; framework wrappers must not fork the visual system.

## shadcn registry

The root `registry.json` is a source registry. `soft-base` installs the complete Soft CSS contract before UI items.

Current registry items:

- `soft-button`
- `soft-card`
- `soft-field`
- `soft-badge`
- `soft-alert`
- `soft-switch`
- `soft-tabs`

This prevents installers and coding agents from copying a visually similar primitive without the tokens, themes, focus rules, resilience layer, and tactile physics that define Soft.

## Quality

Static conformance + source budgets:

```bash
npm run check
```

Browser QA:

```bash
npm run test:browser
```

Blocking visual reference plate:

```bash
npm run test:visual
```

QA includes desktop/mobile Chromium, axe/WCAG scans, forced-colors checks, RTL + localization overflow checks, source-size budgets, blocking light/dark reference screenshots, and full-page review captures. v0.7 adds the component explorer and NeoLicenser lab to those browser gates.

See [`QUALITY.md`](./QUALITY.md), [`RESILIENCE.md`](./RESILIENCE.md), and [`COMPONENTS.md`](./COMPONENTS.md).

## Product principles

- Motion is information, not decoration.
- Static surfaces do not impersonate interactive ones.
- Complex actions expose intent, scope, risk, and outcome.
- Operational failures remain inspectable until resolved.
- Partial success is a valid result and should be represented honestly.
- Billing/seat/release changes show consequence before commitment.
- Agent interfaces expose reviewable changes rather than mysterious “AI did it” actions.
- Raw secrets are never required for an agent to understand configured state.
- LTR, light mode, and normal contrast are environments—not assumptions.
- Public documentation should demonstrate behavior, not replace it with screenshots.

## Dogfood

NeoLicenser is Soft's first real application test bench. New components are accepted because a real workflow needs them—not to inflate the component count.

The v0.7 lab exercises app-shell navigation, license filtering, staged release rollout, timezone-aware scheduling, integrations, secret references, agent scopes, approvals, typed destructive confirmation, mobile navigation, and local feedback.

## Hosting

The current GitHub Pages origin is:

`https://neobrutalism-shop.github.io/NeoBrutal-Soft/`

For the commercial/public product URL, the recommended custom domain is **`soft.neobrutalism.shop`** while keeping this repository as the Pages source.

## Family spec

Soft follows the shared family contract in [`NeoBrutalism-shop/spec`](https://github.com/NeoBrutalism-shop/spec).
