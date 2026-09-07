# NeoBrutal Soft

**Soft Neo-Brutalism for SaaS, dashboards, admin tools, and long-session product interfaces.**

NeoBrutal Soft is a member of the NeoBrutalism design-system family. It keeps the family's tactile, structural interaction model while reducing visual aggression for dense application interfaces.

> **Family law:** Compress, never float.

Interactive surfaces move **into** their shadow on hover/press. They never generically rise toward the user.

## Goals

- Production-ready light and dark themes
- Fluid UI using `clamp()` for type, space, size, and layout
- Tactile micro-interactions with semantic motion/depth tokens
- Framework-agnostic CSS foundation
- Accessible pointer, keyboard, and touch states
- Calm enough for all-day SaaS/admin use while remaining unmistakably Neo-Brutalist
- Machine-readable conventions for humans and coding agents

## Status

`0.1.0-dev` — foundation and first primitives.

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
    badge.css
    switch.css

demo/
  index.html
  demo.js

DESIGN.md
LLMS.md
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

## Family spec

This implementation follows the shared NeoBrutalism family contract in `NeoBrutalism-shop/spec`.
