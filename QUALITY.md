# NeoBrutal Soft — Quality Gate

NeoBrutal Soft is sellable only when it is coherent, distinctive, reliable, installable, testable, and measurably useful in real products.

Component count is not a quality metric.

## 1. Distinctive design language
- Recognizably Neo-Brutalist without becoming exhausting.
- **Compress, never float** for ordinary tactile controls.
- Shadows, borders, radii, typography, motion, and color behave like one physical system.
- Static surfaces do not impersonate interactive ones.
- New components reuse semantic tokens instead of local one-off values.

## 2. Real-product value
A component should solve a real workflow, ideally dogfooded in NeoLicenser or neobrutalism.shop. Do not add components only to increase library size.

## 3. Interaction completeness
Where applicable define rest, hover/contact, focus-visible, press, selected/toggled, loading, disabled, success/error, keyboard, touch, and reduced-motion states.

Cause → action → result must remain understandable.

## 4. Accessibility
Target WCAG 2.2 AA wherever applicable.

Requirements include semantic HTML first, visible focus, keyboard operation, usable touch targets, no color-only critical state, reduced-motion support, accessible dialogs, non-hover access to chart data, and file upload without requiring drag.

### Automated accessibility gate
`npm run test:browser` runs Playwright + axe scans against representative public demos on desktop and mobile Chromium.

Automated scans do **not** replace manual accessibility review. They are a floor, not a certification.

## 5. Responsive quality
- No desktop-only assumptions.
- Use fluid `clamp()` tokens where useful.
- Survive narrow containers, long names/URLs/keys, and translated copy.
- Horizontal scrolling only where semantically justified, such as dense tables.

## 6. Light/dark parity
Every public component must be intentionally designed in both themes: contrast, borders, hard shadows, focus, statuses, inset surfaces, disabled states, overlays, charts, code/inspection surfaces.

## 7. Motion quality
- Press feedback is immediate.
- Routine actions do not wait for decoration.
- Soft release motion stays restrained.
- Actual dragging may lift; generic hover may not.
- No `transition: all` in production components.

## 8. Engineering quality
- CSS remains framework-agnostic.
- Component CSS is isolated and exported by `src/index.css`.
- Public classes use `nbs-`; tokens use `--nbs-`.
- Core rendering has no mandatory remote asset dependency.
- Progressive enhancement is preferred over JavaScript-required basics.

## 9. Distribution integrity
Commercial readiness requires more than source CSS.

The supported paths are:
- canonical CSS source
- thin React wrappers
- shadcn source registry
- machine-readable manifest
- LLM/agent instructions

Framework wrappers may map props/semantics to Soft classes but must not fork Soft styling.

`npm run check` validates registry source paths and required distribution files.

## 10. Agent readability
Significant patterns must expose intent, valid states, accessibility needs, tactile behavior, and when-not-to-use guidance through stable naming/documentation/manifest data.

Machine consumers should not need to infer interaction meaning from appearance alone.

## 11. Operational truth
Infrastructure UI does not hide important exceptions for visual cleanliness.

- failed webhook history remains inspectable after retry
- partial success remains partial success
- billing shows money/timing consequences
- schedule/release UI shows timezone and absolute timing
- rollout UI shows population/stage/health
- secret values are not exposed unnecessarily

## 12. Browser interaction gate
Playwright smoke tests exercise representative state changes, including theme switching, saved views, table density/columns, rollout promotion, inspector tabs, and tactile contact behavior.

If a browser test fails because the UI is wrong, fix the UI. Do not weaken the assertion merely to get green CI.

## 13. Visual review
CI captures full-page light/dark screenshots of the current showcase as review artifacts.

In v0.5 these are **visual captures**, not blocking pixel-diff regression baselines. Once captures are explicitly approved, a later milestone can promote them into stable regression references.

## 14. Performance and restraint
- Keep runtime CSS/JS small and dependency-light.
- Do not add animation libraries for CSS-solvable interactions.
- Limit blur/backdrop effects.
- Avoid layout shifts during loading.
- Add explicit CSS/performance budgets before 1.0.

## 15. Demo quality
The showcase is part of the product. It uses actual package CSS, demonstrates realistic workflows, supports light/dark, exposes tactile behavior, and must make Soft's value obvious quickly.

## 16. Release definition
A milestone is **Done** only when relevant visual, interaction, theme, keyboard/touch, reduced-motion, responsive, documentation, export, distribution, and automated quality requirements pass.

If one is materially missing, the feature is still in development.
