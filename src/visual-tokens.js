// @ts-check

/**
 * Generic visual-role custom properties. These describe color and treatment only;
 * gameplay timing, judgement, recipes, session state, and layout policy stay with
 * their owning runtime packages.
 */
export const aeroGameplayVisualTokenNames = Object.freeze({
  left: "--aero-role-left",
  right: "--aero-role-right",
  guard: "--aero-role-guard",
  obstacle: "--aero-role-obstacle",
  receptor: "--aero-role-receptor",
  safe: "--aero-role-safe",
  backgroundStart: "--aero-playfield-background-start",
  backgroundEnd: "--aero-playfield-background-end",
  receptorOpacity: "--aero-playfield-receptor-opacity",
  obstacleHatchOpacity: "--aero-playfield-obstacle-hatch-opacity",
  hitFlash: "--aero-feedback-hit-flash",
  missDesaturate: "--aero-feedback-miss-desaturate",
  overlayDimOpacity: "--aero-overlay-dim-opacity"
});

/** Default serializable values mirrored by `aero-theme.css`. */
export const aeroGameplayVisualTokenDefaults = Object.freeze({
  left: "#2693ff", right: "#39c96b", guard: "#9a67ea", obstacle: "#e5484d", receptor: "#d9f5ff", safe: "#56d6c9",
  backgroundStart: "#071426", backgroundEnd: "#153b5d", receptorOpacity: 0.22, obstacleHatchOpacity: 0.72,
  hitFlash: "#ffffff", missDesaturate: 0.82, overlayDimOpacity: 0.62
});
