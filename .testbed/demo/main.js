// @ts-check

import { aeroGameplayVisualTokenNames } from "../../src/index.js";

const styles = getComputedStyle(document.documentElement);
globalThis.__AERO_STYLE_TEST__ = Object.freeze({
  ready: true,
  values: Object.freeze(Object.fromEntries(Object.entries(aeroGameplayVisualTokenNames).map(([name, property]) => [name, styles.getPropertyValue(property).trim()])))
});
