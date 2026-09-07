# NeoBrutal Soft — Quality Gate

NeoBrutal Soft is not considered sellable because it has many components. It is sellable only when the system is coherent, distinctive, reliable, and measurably useful in real products.

Every public release must pass the gates below.

## 1. Distinctive design language

- Must remain recognizably Neo-Brutalist without becoming visually exhausting.
- Must obey **Compress, never float** for ordinary tactile controls.
- Motion, shadows, borders, radii, typography, and color must feel like one physical system.
- New components must reuse semantic tokens instead of inventing local values.
- Static surfaces must not mimic interactive motion.
- Avoid generic "dashboard theme" styling that could belong to any library.

## 2. Real-product value

A component is accepted only when it solves a real interface problem.

Preferred evidence:

- used in the NeoLicenser prototype
- used in neobrutalism.shop
- requested by a real application workflow
- closes a known accessibility or usability gap

Do not add components solely to increase component count.

## 3. Interaction completeness

Where applicable, every interactive component must define:

- rest
- hover/contact
- focus-visible
- press/active
- selected/toggled
- loading
- disabled
- success/error result feedback
- keyboard behavior
- touch behavior
- reduced-motion behavior

The interaction must communicate cause -> action -> result.

## 4. Accessibility

- Semantic HTML first.
- Keyboard operation must be complete.
- Focus-visible must never be removed without a stronger replacement.
- Touch targets must remain comfortably usable.
- State cannot rely on color alone.
- `prefers-reduced-motion` must preserve meaning while reducing travel/rebound.
- Dialog-like examples must manage focus and support Escape.
- Disabled and loading states must remain understandable to assistive technology.

Target: WCAG 2.2 AA for components and examples wherever applicable.

## 5. Responsive quality

- No fixed desktop-only assumptions.
- Use fluid `clamp()` tokens where scaling benefits the layout.
- Components must survive narrow containers, not just narrow viewports.
- Long labels, URLs, license keys, product names, and translations must not destroy layouts.
- Horizontal scrolling is acceptable only where semantically appropriate, such as dense data tables.

## 6. Light and dark parity

A component is incomplete until both themes are intentionally designed.

Check:

- contrast
- border readability
- hard-shadow readability
- focus treatment
- status colors
- inset/recessed surfaces
- disabled states
- overlays

Dark mode must not be an inverted afterthought.

## 7. Motion quality

- Press acknowledgement should feel immediate.
- Routine interactions must not wait for decorative animation.
- Release may rebound, but Soft should remain restrained.
- Large layout transitions should be slower than direct-contact feedback.
- Dragging may lift because the user is semantically picking an object up; generic hover may not.
- Avoid `transition: all` in production components.

## 8. Engineering quality

- Framework-agnostic CSS foundation remains usable without React.
- Component CSS must be isolated and exported through `src/index.css`.
- Public class names use the `nbs-` namespace.
- Tokens use the `--nbs-` namespace.
- Avoid hidden global dependencies.
- Avoid remote assets required for core rendering.
- Prefer progressive enhancement over JavaScript-required basics.

## 9. Agent readability

Every significant component or pattern should be understandable by an LLM/coding agent through documentation and stable naming.

Documentation should state:

- component intent
- anatomy
- valid states
- when to use it
- when not to use it
- accessibility requirements
- tactile behavior

Machine consumers should never need to infer interaction meaning from appearance alone.

## 10. Performance and restraint

- Keep the CSS foundation lightweight.
- Do not add animation libraries for interactions achievable with CSS.
- Avoid expensive effects as defaults.
- Blur/backdrop effects should be limited to surfaces where hierarchy benefits.
- Preserve layout during loading to reduce visual movement.

## 11. Demo quality

The showcase is part of the product.

It must:

- use the actual package CSS, not duplicated fake styles
- demonstrate real workflows
- expose light/dark behavior
- demonstrate tactile interaction
- demonstrate keyboard-accessible overlays
- show useful application compositions
- make the value of the system obvious within seconds

## 12. Release definition

A component or milestone is **Done** only when:

1. visual design is coherent
2. interactions are complete
3. light/dark are complete
4. keyboard/touch behavior is considered
5. reduced motion is considered
6. responsive behavior is tested by design
7. documentation exists
8. it is exported correctly
9. it provides real product value
10. it does not violate the family spec

If one of these is missing, the component is still in development.
