# aerobeat-web-style

Frutiger Aero inspired design tokens, base styles, and theme primitives for AeroBeat web.

## Responsibility

This repo owns CSS custom properties, reset/base styles, generic visual-role tokens, surface treatment, and style guidance consumed by AeroBeat Web Components and serializable theme projection.

It does not own Web Component behavior, gameplay rendering/layout, timing, judgement, recipes, calibration, camera/CV, input, content conversion, session policy, or assembly wiring.

## Public API

- `src/aero-theme.css` defines Frutiger Aero base tokens and generic gameplay roles for left, right, guard, obstacle, receptor, safe cells, backgrounds, feedback, hatching and dim overlays.
- `aeroGameplayVisualTokenNames` exposes public CSS custom-property names.
- `aeroGameplayVisualTokenDefaults` exposes serializable defaults for theme projection.
- `aeroThemeCssPath` identifies the CSS entry point.

WebGL does not read CSS or import this package directly. Assembly resolves theme precedence and supplies serializable public theme tokens to `aerobeat-web-renderer`. DOM SVG consumers use `currentColor` with these variables.

## Boundaries

Runtime JavaScript may import documented public package exports only. CSS uses `--aero-*` properties and avoids coupling to UI internals. Obstacles have a non-color-only hatch token in addition to their role color. Visual tokens remain runtime-swappable and contain no scoring or converter policy.

## Validation

```bash
npm run check
npm test
npm run test:browser
npm pack --dry-run
```

Validation enforces JSDoc/no-escape posture, public import boundaries, component-only scenes, console-noise policy, package allowlisting, required public CSS declarations, and absence of gameplay-policy token names.

Implementation decisions live under `docs/decisions/`; public contributor docs belong in `aerobeat-web-docs` after the visual direction is accepted.
