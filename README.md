# aerobeat-web-style

Frutiger Aero inspired design tokens, base styles, and theme primitives for AeroBeat web.

## Responsibility

This repo owns CSS custom properties, reset/base styles, theme primitives, visual tokens, surface treatment, and style guidance consumed by AeroBeat Web Components and scenes.

It does not own Web Component behavior, screens, gameplay rendering, camera/CV logic, input routing, content conversion, or assembly wiring.

## Public API Surface

- `src/index.js` exports the package marker and token module path constants.
- `src/aero-theme.css` defines the first Frutiger Aero token set with glassy surfaces, aquatic highlights, crisp focus rings, and restrained motion-ready colors.

## Adjacent Repos

- `aerobeat-web-ui` consumes these tokens in `aero-*` components.
- `aerobeat-web-assembly` applies the final product theme.
- `aerobeat-web-renderer` will own WebGL2 gameplay visuals and should consume theme decisions through explicit contracts.

## Allowed Imports

Runtime JavaScript may import public exports from `@aerobeat/web-contracts` only when shared names are needed. CSS should expose `--aero-*` custom properties and avoid private coupling to UI internals.

## Testbed Shape

Style scenes must use `aero-*` components or documented style samples instead of one-off scene controls. Generated `.testbed/node_modules/@aerobeat/web-this-repo` is local state and must be recreated with:

```bash
npm run testbed:link-self
```

Do not commit installed `node_modules` folders or generated testbed symlinks.

## Validation

Run before handoff:

```bash
npm run check
npm test
npm run test:browser
```

The current validators are placeholder-level checks for JSDoc/no-escape posture, public import boundaries, component-only scenes, and console-noise expectations.

## Documentation Handoff

Keep repo-local decisions in `docs/decisions/`. Public contributor docs belong in `aerobeat-web-docs` after the visual direction is accepted.
