# NeoBrutal Soft

**Soft Neo-Brutalism for SaaS, dashboards, admin tools, agent workflows, and long-session product interfaces.**

NeoBrutal Soft is a member of the NeoBrutalism design-system family. It keeps the family's tactile, structural interaction model while reducing visual aggression for dense application interfaces.

> **Family law:** Compress, never float.

Interactive surfaces move **into** their shadow on hover/press. They never generically rise toward the user.

## Why Soft exists

Most Neo-Brutalist UI kits are expressive but difficult to use for dense, all-day applications. Soft keeps the physical clarity—structural borders, visible depth, decisive state changes, tactile controls—while making the palette, spacing, radii, motion, and hierarchy calm enough for serious SaaS and admin software.

NeoLicenser is the first dogfood application. Components are prioritized by real licensing, commerce, release, integration, security, data, time, customer, and agent workflows rather than by component-count marketing.

## Goals

- Production-ready light and dark themes
- Fluid UI using `clamp()` for type, space, size, and layout
- Tactile micro-interactions with semantic motion/depth tokens
- Framework-agnostic CSS foundation
- Accessible pointer, keyboard, and touch states
- Calm enough for all-day SaaS/admin use while remaining unmistakably Neo-Brutalist
- Machine-readable conventions for humans and coding agents
- Real application patterns beyond generic primitives
- Risk-aware UI for agent and destructive workflows
- Operational interfaces that expose progress, exceptions, time, provenance, and verification clearly

## Status

`0.4.0-dev` — data, time, files, and operational-status milestone.

Implemented coverage now includes:

- core form and control primitives
- app shell, responsive sidebar, topbar, navigation
- dialogs, drawers, menus, popovers
- toast, progress, stepper, skeleton, empty state
- search, breadcrumb, pagination, segmented controls
- command palette and combobox surfaces
- filter bars, bulk actions, selectable operational tables
- stat cards, integration cards, activity timeline, secret fields
- agent change-plan, diff, scope, risk, and approval patterns
- typed destructive confirmation with impact summary
- license cards, activation/domain rows, activation meters, webhook rows
- release-channel patterns
- radio/choice patterns
- chart, bar, legend, sparkline, and segmented-meter language
- date fields, date ranges, calendar and time-row patterns
- upload/drop zone with semantic drag lift
- file rows and signed release-artifact patterns
- webhook delivery logs
- batch-operation progress and partial-failure states
- customer identity, teams, members, seats, and subscription-history patterns
- interactive NeoLicenser v0.4 Operations Center test bench

See [`COMPONENTS.md`](./COMPONENTS.md) for the detailed matrix and [`QUALITY.md`](./QUALITY.md) for the release gate.

## Structure

```text
src/
  index.css
  tokens.css
  base.css
  components/
    button.css
    card.css
    input.css
    ...
    command.css
    workflows.css
    permissions.css
    agent-diff.css
    radio.css
    data-viz.css
    date-time.css
    file.css
    operations.css
    identity.css

demo/
  index.html
  v03.html
  v04.html
  preview.css
  v03.css
  v04.css
  demo.js
  v03.js
  v04.js

scripts/
  check.mjs

DESIGN.md
LLMS.md
COMPONENTS.md
QUALITY.md
```

## Quick use

```html
<link rel="stylesheet" href="./src/index.css" />
<button class="nbs-button nbs-button--primary">Create product</button>
```

Set a theme on the root element:

```html
<html data-theme="light">
```

or:

```html
<html data-theme="dark">
```

## Interaction principle

A Soft control at rest has shallow structural depth. Hover partially compresses that depth. Active press fully or nearly fully seats the control into the surface. Release restores depth with a short, restrained rebound.

Soft should feel like **coated, soft-touch hardware**: calm, precise, responsive, and physical.

## Advanced workflow principle

Complex actions should expose intent, risk, scope, and outcome before asking for commitment.

Examples:

- agent changes are reviewable as add / modify / remove operations
- destructive actions explain impact and require stronger confirmation when risk is high
- permissions are scoped and visible instead of hidden behind a generic admin toggle
- bulk operations surface selection count and affected objects
- secrets are represented as references instead of being exposed to agents

## Operational UI principle

Infrastructure software should never hide operational truth for the sake of visual cleanliness.

- charts answer specific questions and expose exact values to keyboard/pointer users
- date ranges show explicit boundaries and affected counts
- release artifacts show provenance, size, channel, signature/checksum state, and verification actions
- drag-and-drop may visually lift only while the user is actually carrying a file
- webhook retries remain in the delivery history instead of replacing the failed event
- batch work can finish with partial success; successful items stay applied while exceptions remain inspectable
- team and seat changes should expose capacity and renewal consequences before save

## Quality check

The repository includes a zero-dependency conformance check:

```bash
npm run check
```

It verifies component exports, protects the no-hover-lift interaction law, blocks `transition: all`, performs basic CSS structure checks, and syntax-checks the interactive demo JavaScript.

## Family spec

This implementation follows the shared NeoBrutalism family contract in [`NeoBrutalism-shop/spec`](https://github.com/NeoBrutalism-shop/spec).
