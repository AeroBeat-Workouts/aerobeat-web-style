# AeroBeat Gameplay Icon Generation Brief

I’m designing a set of gameplay icons for a rhythm fitness web game called **AeroBeat**. I want you to help me **generate and iterate on the icon imagery**, one icon at a time, until we land on a final visual language.

## Project context

AeroBeat is a **web-based rhythm workout game** with a **Frutiger Aero-inspired** visual identity. It uses a webcam and lightweight body tracking to detect the athlete’s **wrists, elbows, shoulders, and nose**. Gameplay occurs in a visible **4x3 grid**, and notes/obstacles appear in that grid in time with the music.

The game has two gameplay modes:

- **Flow** = directional swipes / movement gestures
- **Boxing** = punches, hooks, uppercuts, guard, and obstacles

These icons represent the gameplay “notes” and “obstacles” shown inside the grid.

## Important production intent

These should be designed as **clean white icon shapes** that can later be:

- recolored in CSS / WebGL
- shaded or glowed dynamically
- rasterized as needed
- converted into SVG-style production assets

So the icon imagery should look like **single-color white glyphs** with:

- no baked-in gradients
- no embedded colors
- no heavy shading
- no background scene
- no text labels
- no decorative UI chrome

Use a **transparent background** if possible, or otherwise a plain dark neutral background only for visibility.

## Core art direction

Even though these are simple glyphs, they should feel compatible with **Frutiger Aero**:

- soft / rounded forms
- clean and modern
- slightly energetic
- smooth, premium, game-readable
- not aggressive, gritty, or militaristic
- not skeuomorphic
- not comic/cartoonish
- not flat corporate iconography

Think: **sleek, soft, readable, motion-oriented, and glow-friendly**.

## Core design constraints

The icons must be readable **extremely quickly** during gameplay.

Please prioritize:

1. **Instant silhouette readability**
2. **Strong semantic clarity**
3. **Consistency across the whole family**
4. **Simple forms that survive downscaling**
5. **Shapes that still read clearly when surrounded by a timing ring**

### General icon rules

- single-color white icon
- centered composition
- square-ish footprint
- clean silhouette
- minimal interior detail
- no tiny fragile lines
- no busy ornament
- no typography
- no visible timing ring baked into the icon
- no color coding baked into the artwork

The game itself will color notes later using gameplay logic:

- **Blue** = Left Hand
- **Green** = Right Hand
- **Purple** = Guard / Defensive
- **Red** = Obstacle

So the icon shape should communicate action **independently of color**.

## Semantic families

Please maintain a coherent visual language using these three families:

### 1. Motion icons

Used for actions where the player moves a hand through space.

Examples:

- directional swipe
- uppercut
- hook

### 2. Position / strike icons

Used for actions where the player should place or hold a body part, or punch in a specific way.

Examples:

- straight punch
- guard

### 3. Avoidance icons

Used for areas the player should avoid with their nose/body.

Examples:

- obstacle

# Icon set to design

## FLOW MODE

### 1) Directional Arrow Icon

**Purpose:** tells the player which direction to swipe their hand.

#### Requirements

- supports 8 directions via rotation
- should be a single canonical icon that can be rotated
- should look like a motion arrow, not just generic UI navigation
- should feel fast and directional
- should be rounded and clean

#### Recommended look

- rounded arrowhead
- short strong stem
- optional subtle motion tail / trailing chevrons
- soft, readable silhouette

#### Avoid

- thin line arrows
- overly generic keyboard-arrow look
- highly technical / signage style

### 2) Any Direction Icon

**Purpose:** tells the player they can strike/swing this note from any direction.

#### Requirements

- must be visually distinct from the directional arrow
- must not be confused with the timing ring
- must feel omnidirectional

#### Recommended look

- central circular core with outward directional energy
- radial burst
- omnidirectional target
- circular icon with small outward arrow/chevron accents

#### Avoid

- plain circle by itself
- anything that looks too similar to a beat timing ring

### 3) Obstacle Icon

**Purpose:** tells the player to keep their nose/body out of that grid cell when the beat arrives.

#### Requirements

- should work as the universal obstacle icon across both Flow and Boxing
- should pair well with a red grid cell
- should communicate hazard / forbidden area / avoidance

#### Recommended look

- rounded hazard triangle with exclamation mark
- or a strong soft “warning / no-go” glyph
- simple, clean, universal

#### Avoid

- skull as the primary first-choice concept unless needed as a later variation
- anything gory, dark, or death-themed
- cluttered warning iconography

## BOXING MODE

### 4) Uppercut Icon

**Purpose:** tells the player to move from a lower cell upward into the target.

#### Requirements

- should communicate upward striking motion
- should feel boxing-specific, not just a generic upward arrow
- could still share family resemblance with motion icons

#### Recommended look

- stacked ascending chevrons
- smaller lower chevrons moving into a larger upper destination chevron
- or a strong upward strike motif

#### Avoid

- just reusing the exact same directional arrow without boxing identity
- too much detail

### 5) Hook Icon

**Purpose:** tells the player to perform a horizontal hook motion.

#### Requirements

- should communicate curved horizontal striking motion
- should feel distinct from a normal directional swipe
- should be readable as a boxing hook

#### Recommended look

- curved directional arc
- sweeping sideways punch path
- can share DNA with uppercut icon, but should read differently
- may be mirrored for left/right variants

#### Avoid

- just rotating the uppercut icon and calling it done
- generic straight horizontal arrow

### 6) Straight Punch Icon

**Purpose:** tells the player to punch forward into the cell.

#### Requirements

- must be clearly distinct from “any direction”
- should feel like a forward punch toward the screen
- should be readable at small size

#### Recommended look

- simplified front-facing boxing glove or fist
- head-on strike icon
- compact knuckle-forward silhouette
- clean and iconic, not anatomically detailed

#### Avoid

- plain circle
- emoji-looking fist
- realistic hand anatomy
- political/protest fist symbolism

### 7) Guard Icon

**Purpose:** tells the player to hold a boxing guard posture.

#### Gameplay behavior

- guard icons always appear as a **pair**
- the two icons appear in **adjacent horizontal cells**
- each icon occupies one cell
- together they indicate “keep both hands up in guard position”

#### Requirements

- each individual icon should make sense on its own
- the pair should also visually read as a combined guard stance
- should communicate “hands up” more than abstract defense

#### Recommended look

- stylized raised forearm / glove icon
- mirrored left and right versions
- when placed side by side, they should suggest a boxer’s guard

#### Preferred approach

Use **arms/hands up** rather than shields.

#### Avoid

- medieval shield symbolism as the primary concept
- overly literal humanoid full-body drawings
- too much detail

# Design consistency guidance

Please make the icons feel like they belong to one coherent set.

That means consistent:

- stroke weight or silhouette thickness
- corner roundness
- level of simplification
- visual mass
- centered framing
- amount of detail

If a concept is part of a family, allow some shared DNA:

- Flow directional arrow, Uppercut, and Hook can all share motion-language ancestry
- Straight Punch and Guard can share body-action / glove language
- Obstacle should be its own universal hazard language

# Production asset guidance

The eventual production assets should follow a compact SVG contract:

```xml
viewBox="0 0 100 100"
fill="currentColor"
```

Prefer:

- filled silhouettes rather than delicate strokes
- no embedded colors
- no gradients
- no filters
- no background
- no clipping unless essential
- centered around the canvas
- roughly 8–12 units minimum feature thickness
- roughly 10 units of safe-zone around the edges

The **timing ring is a rendering primitive**, not part of the SVG.

Frutiger Aero styling such as hue, glow, bloom, grayscale-to-color transitions, and impact effects will be applied later in CSS/WebGL.

# What I want from you

Please help me iterate **one icon at a time**.

## Iteration workflow

For each icon:

1. Generate **3 visual variations** of that icon concept.
2. Keep all variations as white, isolated glyph concepts.
3. Focus on shape exploration, not polished UI presentation.
4. Clearly separate the three concepts for comparison.
5. Refer to them as:
   - Variation A
   - Variation B
   - Variation C
6. After generation, I will choose a direction and provide feedback.
7. Continue iterating that icon until it is approved before moving to the next icon.

## Priority order

Work in this order unless I tell you otherwise:

1. Directional Arrow
2. Any Direction
3. Obstacle
4. Uppercut
5. Hook
6. Straight Punch
7. Guard

# Output style instructions

When generating imagery:

- isolated icon(s) only
- white glyph(s)
- transparent background preferred
- if transparency is not possible, use a plain dark background only for contrast
- no mockup interface
- no extra text inside the image
- no colorful gradients or backgrounds
- no timing ring included
- no full scene or character art

If helpful, show multiple icon variations in one image sheet for comparison, as long as each variation is clearly separated.

# Success criteria

A successful icon should:

- read instantly during fast rhythm gameplay
- survive being small on screen
- remain clear when animated
- remain recognizable in pure white silhouette
- feel premium and modern
- fit a Frutiger Aero-inspired game
- be easy to recolor later
- feel like part of the same icon family

# First task

Start by generating **3 variations of the Directional Arrow Icon** for AeroBeat using all guidance above.
