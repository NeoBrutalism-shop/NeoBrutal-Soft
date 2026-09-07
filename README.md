# NeoBrutal Soft

**Soft Neo-Brutalism for SaaS, dashboards, admin tools, and long-session product interfaces.**

NeoBrutal Soft is a member of the NeoBrutalism design-system family. It keeps the family's tactile, structural interaction model while reducing visual aggression for dense application interfaces.

> **Family law:** Compress, never float.

Interactive surfaces move **into** their shadow on hover/press. They never generically rise toward the user.

## Why Soft exists

Most Neo-Brutalist UI kits are expressive but difficult to use for dense, all-day applications. Soft keeps the physical clarity—structural borders, visible depth, decisive state changes, tactile controls—while making the palette, spacing, radii, motion, and hierarchy calm enough for serious SaaS and admin software.

NeoLicenser is the first dogfood application. Components are prioritized by real licensing, commerce, release, integration, and agent workflows rather than by component-count marketing.

## Goals

- Production-ready light and dark themes
- Fluid UI using `clamp()` for type, space, size, and layout
- Tactile micro-interactions with semantic motion/depth tokens
- Framework-agnostic CSS foundation
- Accessible pointer, keyboard, and touch states
- Calm enough for all-day SaaS/admin use while remaining unmistakably Neo-Brutalist
- Machine-readable conventions for humans and coding agents
- Real application patterns beyond generic primitives

## Status

`0.2.0-dev` — application-system milestone.

Implemented coverage now includes:

- core form and control primitives
- app shell, responsive sidebar, topbar, navigation
- dialogs, drawers, menus, popovers
- toast, progress, stepper, skeleton, empty state
- search, breadcrumb, pagination, segmented controls
- stat cards, integration cards, activity timeline, secret fields
- agent change-plan/approval pattern
- license card, activation meter, webhook row, permission-risk chips
- interactive NeoLicenser admin prototype

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
    app-shell.css
    overlay.css
    feedback.css
    navigation.css
    product.css
    license.css

demo/
  index.html
  preview.css
  demo.js

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

## Quality check

The repository includes a zero-dependency conformance check:

```bash
npm run check
```

It currently verifies that every component stylesheet is exported, blocks upward `translateY(-…)` patterns, blocks `transition: all`, and performs a basic CSS brace sanity check.

## Family spec

This implementation follows the shared NeoBrutalism family contract in [`NeoBrutalism-shop/spec`](https://github.com/NeoBrutalism-shop/spec).
