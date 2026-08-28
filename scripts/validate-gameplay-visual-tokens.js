// @ts-check

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { aeroGameplayVisualTokenDefaults, aeroGameplayVisualTokenNames } from "../src/index.js";

const css = readFileSync(new URL("../src/aero-theme.css", import.meta.url), "utf8");
for (const [role, property] of Object.entries(aeroGameplayVisualTokenNames)) {
  assert.match(property, /^--aero-/u, `${role} must use the public AeroBeat prefix`);
  assert.ok(css.includes(`${property}:`), `${property} must be declared in the theme CSS`);
}
for (const forbidden of ["score", "timing", "judgement", "recipe", "ruleset", "session", "calibrationHold", "reachRate"]) {
  assert.equal(Object.keys(aeroGameplayVisualTokenNames).some((key) => key.toLowerCase().includes(forbidden.toLowerCase())), false);
}
assert.equal(aeroGameplayVisualTokenDefaults.left, "#2693ff");
assert.equal(aeroGameplayVisualTokenDefaults.obstacleHatchOpacity, 0.72);
assert.match(css, /--aero-role-obstacle:\s*#[0-9a-f]{6}/iu);
console.log("Generic gameplay visual token validation passed.");
