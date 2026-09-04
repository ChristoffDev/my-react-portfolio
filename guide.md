# Monochrome Sumi-Ink Portfolio — Complete Development Guide

## 01 — Project Direction

Build a minimalist professional portfolio using the existing:

* React
* Vite
* TypeScript
* Tailwind CSS

The visual direction is:

> **Modern monochrome portfolio with subtle Japanese editorial and sumi-ink influences.**

The portfolio should feel:

* Minimal
* Professional
* Quiet
* Elegant
* Editorial
* Personal
* Technical
* Deliberately designed

The design should **not** look like a generic developer portfolio.

Avoid common portfolio patterns such as:

* Generic "Hi, I'm..." hero sections
* Gradient backgrounds
* Glassmorphism
* Floating cards everywhere
* Excessive rounded corners
* Giant animated text
* Generic developer illustrations
* Excessive technology badges
* Oversized custom cursors
* Excessive animations
* Stereotypical Japanese decorations

### Core Principle

> **Modern monochrome first. Sumi-ink second.**

Sumi-ink should be treated as a **subtle interaction and visual accent**, not as the primary design theme.

The portfolio should still look complete and professional if all sumi-ink effects are disabled.

---

# 02 — Visual Foundation

Establish the visual system before building the detailed sections.

## Color Palette

Use a restrained monochrome palette inspired by washi paper and sumi ink.

| Purpose            | Color          | Suggested Value |
| ------------------ | -------------- | --------------- |
| Background / Washi | Warm off-white | `#F5F2EA`       |
| Primary Ink        | Near black     | `#171717`       |
| Secondary Ink      | Dark gray      | `#4A4A46`       |
| Muted Text         | Gray           | `#77756F`       |
| Light Ink          | Light gray     | `#B8B5AD`       |
| Border             | Soft gray      | `#D8D5CC`       |
| White              | White          | `#FFFFFF`       |

### Color Rules

* Do not use bright colors.
* Do not use gradients.
* Avoid pure black as the dominant background.
* Use warm off-white as the primary canvas.
* Use near-black for primary text.
* Use gray for secondary information.
* Use light gray for borders and subtle visual elements.
* Keep project images and technology icons monochrome.

The website should feel like **ink on paper**, while remaining clearly contemporary.

---

# 03 — Typography

Use typography as one of the primary design elements.

## Primary Typeface

Use a modern, clean sans-serif for:

* Navigation
* Main headings
* Project titles
* Body text
* Buttons and links
* Interface elements

## Optional Serif

A refined serif may be used sparingly for:

* Editorial statements
* Short quotes
* Small moments of emphasis

Do not use a decorative Japanese font throughout the website.

## Monospace

Use monospace styling for technical metadata such as:

```text
01 / 05
2026
PHP · WORDPRESS · HTML · CSS
```

### Typography Rules

* Use spacing and scale to create hierarchy.
* Avoid excessive font weights.
* Give large headings enough whitespace.
* Keep body text readable.
* Avoid overly decorative typography.
* Use uppercase labels sparingly.

---

# 04 — Layout System

The overall layout should feel editorial rather than like a collection of UI cards.

Use:

* Generous whitespace
* Strong alignment
* Asymmetry where appropriate
* Thin borders
* Large margins
* Clear typographic hierarchy
* Simple grids
* Deliberate spacing

Avoid:

* Excessive cards
* Excessive shadows
* Floating glass panels
* Heavy containers
* Excessive rounded corners
* Dense layouts

The design should feel like a **modern personal archive or editorial publication**.

---

# 05 — Navigation

The main navigation should contain:

* About
* Tech Stack
* Project
* Contact

Keep the navigation visually quiet.

### Navigation Behavior

* Clearly identify the active section.
* Use subtle hover states.
* Maintain keyboard accessibility.
* Avoid large animated navigation effects.
* Keep navigation consistent across the experience.

The navigation should not compete with the main content.

---

# 06 — Opening / Identity Section

Do not use:

> "Hi, I'm..."

Do not use a generic introduction such as:

> "Welcome to my portfolio."

The opening should establish identity through composition.

Use:

* Name or initials
* Professional title
* Short professional descriptor
* Black-and-white photograph

Example structure:

```text
FDG

WEB DEVELOPER
PHP · WORDPRESS · FRONT-END


                         [ PHOTO ]
```

The opening should communicate:

> **Who I am + what I do**

without feeling like a résumé.

---

# 07 — Photography

Use a normal **black-and-white professional photograph**.

Do not transform the photograph into an ink painting.

The photo should feel:

* Editorial
* Professional
* Natural
* Monochromatic
* High quality

Avoid:

* Circular profile avatars
* Heavy photo borders
* Generic profile cards
* Excessive image filters
* Artificial ink effects

The photograph should provide the personal element while the surrounding design remains restrained.

---

# 08 — About Section

The About section should explain the person behind the work.

It should communicate:

* Professional background
* Areas of focus
* Type of work you do
* Development interests
* Working philosophy
* Approach to solving problems

Keep the writing concise and authentic.

Avoid generic statements such as:

> "I am passionate about technology."

Instead, communicate specific interests and professional strengths.

### Visual Direction

Use:

* Large whitespace
* Editorial text composition
* Simple typography
* Small metadata
* Minimal decoration

The section should feel personal without becoming informal.

---

# 09 — Tech Stack Section

Present the technologies using **normal recognizable technology icons**.

Possible technologies include:

* HTML
* CSS
* JavaScript
* TypeScript
* React
* Tailwind CSS
* PHP
* WordPress
* Git
* DOMPDF

Only include technologies that can genuinely be demonstrated or discussed.

## Icon Treatment

All icons should follow the monochrome design system.

Use:

* Black
* Dark gray
* Light gray

Do not use:

* Original brand colors
* Glowing icons
* 3D icons
* Large animated logos
* Excessive icon effects

### Suggested Presentation

Each technology can contain:

```text
[ ICON ]

TECHNOLOGY NAME

Short description
```

Keep descriptions concise.

The Tech Stack section should communicate technical range without becoming a wall of logos.

---

# 10 — Project Section

The Project section should use a **featured-project carousel** rather than displaying every project vertically.

This keeps the portfolio compact even when the number of projects grows.

The carousel should feel like a **minimal editorial work archive**, not a conventional website carousel.

---

## Project Layout

Use a two-column composition.

### Left — Project Information

Display:

* Project number
* Current project count
* Year
* Project title
* Short description
* Technologies
* View Project link

Example:

```text
PROJECT                                      01 / 05


CUSTOM FORM SYSTEM

A concise description explaining
the purpose of the project and
the work performed.


PHP · WORDPRESS · HTML · CSS


VIEW PROJECT →
```

### Right — Project Thumbnail

Display:

* Large project screenshot
* Consistent aspect ratio
* Grayscale/monochrome treatment
* Clean cropping
* High-quality image

Avoid placing the screenshot inside a generic floating card.

The image should feel integrated into the composition.

---

# 11 — Project Carousel

The carousel should allow users to browse all projects without creating a long page.

Example:

```text
01 / 05
```

The user should be able to move through:

```text
01 / 05
02 / 05
03 / 05
04 / 05
05 / 05
```

## Navigation

Use simple controls such as:

```text
←                         →
```

or a combination of:

```text
01 / 05

←                         →
```

The controls should be small and understated.

Avoid:

* Large circular arrow buttons
* Large pagination dots
* Oversized navigation
* Decorative carousel controls

The `01 / 05` indicator is preferred because it fits the work-log/editorial aesthetic.

---

# 12 — Project Carousel Animation

When changing projects, use a subtle transition.

Recommended behavior:

```text
Current project
      ↓
Information fades/slides
      ↓
Image transitions
      ↓
New image appears
      ↓
New information appears
```

The transition should be:

* Smooth
* Fast
* Quiet
* Elegant
* Deliberate

Avoid:

* Bouncy animations
* Dramatic scaling
* 3D effects
* Large rotations
* Flashing
* Excessive parallax

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled, use simple fades or no animation.

---

# 13 — Project Data

The carousel should be data-driven.

Project information should support:

```text
ID
Year
Title
Description
Technologies
Thumbnail
Project Link
```

Adding another project should not require modifying the carousel's visual implementation.

The carousel should automatically understand the total number of projects.

For example:

```text
01 / 08
```

should automatically become:

```text
02 / 08
03 / 08
...
08 / 08
```

when additional projects are added.

Use React state for the active project.

Do not introduce unnecessary state-management libraries.

---

# 14 — View Project

The primary project action should be a minimalist text link:

```text
VIEW PROJECT →
```

Do not use a large conventional button.

Possible interaction:

* Slight arrow movement
* Subtle underline
* Small opacity change
* Very small position change

Keep it understated.

The link must remain accessible to keyboard users.

---

# 15 — Project Detail View

The carousel should function as the **project preview**.

The detailed project information should appear separately when the user selects:

```text
VIEW PROJECT →
```

The detailed project view can contain:

* Project title
* Year
* Overview
* Challenge
* My role
* Implementation
* Technologies
* Screenshots
* Result
* Optional lessons learned

The detailed view should maintain the same monochrome visual language.

Do not put all case-study content inside the carousel.

The carousel should remain concise.

---

# 16 — Project Image Treatment

Project images should follow a consistent visual treatment.

Use:

* Grayscale
* Consistent aspect ratios
* High-quality screenshots
* Clean cropping
* Appropriate contrast

Avoid:

* Colorful screenshots dominating the interface
* Heavy image borders
* Excessive shadows
* Decorative frames

The project image should be one of the strongest visual elements in the carousel.

---

# 17 — Sumi-Ink Visual Language

Sumi ink should appear only in selected moments.

The portfolio should NOT become an ink painting.

### Appropriate Uses

* Loading animation
* Cursor trail
* Page transition
* Occasional separator
* Small decorative mark
* Subtle interaction

### Avoid

* Ink behind every heading
* Ink around every project
* Large ink backgrounds
* Traditional Japanese paintings
* Excessive kanji
* Cherry blossoms
* Torii gates
* Red sun graphics
* Traditional ornamental patterns

The sumi influence should be something users **discover through interaction**.

---

# 18 — Ink Cursor

Create a custom cursor interaction.

The cursor itself should remain minimal.

When the user moves the mouse, it should leave a **soft sumi-ink trail**.

The trail should feel like wet ink briefly touching paper.

### Behavior

```text
Mouse movement
      ↓
Soft ink appears
      ↓
Trail follows movement
      ↓
Ink disperses
      ↓
Trail fades
```

### Visual Characteristics

The ink trail should have:

* Soft edges
* Low opacity
* Slight blur
* Organic irregularity
* Natural variation
* Short persistence
* Gradual fading

Avoid making it look like a digital drawing line.

### Movement Response

Slow movement:

* Smaller
* Fainter
* More delicate

Fast movement:

* Slightly wider
* Slightly longer
* Slightly more visible

The trail must never obstruct important content.

---

# 19 — Cursor States

The cursor should react subtly to interaction.

### Normal

Small and understated.

### Link Hover

Change subtly to indicate interaction.

### Project Hover

Can display a small:

```text
VIEW
```

or:

```text
VIEW →
```

Do not use the common oversized circle cursor.

The ink trail is the primary cursor signature.

### Touch Devices

The custom cursor and ink trail should not be required on touch devices.

Provide a clean touch-friendly experience instead.

---

# 20 — Ink Loading State

Use a **sumi-inspired circular brush stroke** as the loading indicator.

The circle should be:

* Irregular
* Hand-painted in appearance
* Organic
* Monochrome
* Minimal

Do not use a perfect CSS circle.

### Animation

The loading animation should feel like a brush completing a stroke.

```text
Start
  ↓
Stroke begins
  ↓
Circle gradually forms
  ↓
Circle completes
  ↓
Ink softly fades
  ↓
Content appears
```

Do not make it behave like a conventional spinning loader.

---

# 21 — Page / Section Transitions

Use sumi-inspired transitions sparingly.

Possible transition:

```text
Current content
      ↓
Fade
      ↓
Ink circle appears
      ↓
Ink expands / dissolves
      ↓
New content appears
```

Only use this where it adds to the experience.

Do not animate every element or every scroll movement.

---

# 22 — Contact Section

Keep the Contact section very minimal.

Include:

* Email
* GitHub
* LinkedIn or other relevant professional links
* Optional contact form

Avoid generic marketing language such as:

> "Let's create something amazing together!"

Use direct and professional language.

The Contact section should feel like the quiet ending of the work log.

A very subtle ink detail may be used as a closing visual.

---

# 23 — Responsive Design

The portfolio must work naturally across:

* Large desktop
* Desktop
* Laptop
* Tablet
* Mobile

## Desktop Project Layout

Use:

```text
PROJECT INFORMATION          PROJECT IMAGE
──────────────────           ──────────────

Project number               Large image
Title
Description
Technologies
View Project
```

## Mobile Project Layout

Stack naturally:

```text
Project number
Project title
Description
Technologies

Project image

View Project

Previous / Next
```

Do not force the desktop two-column layout onto mobile.

The mobile version should preserve the same minimalist character.

---

# 24 — Accessibility

Ensure the portfolio remains accessible.

Include:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* Descriptive image alt text
* Proper form labels
* Sufficient contrast
* Accessible navigation
* Accessible carousel controls
* Reduced-motion support

Carousel controls must be real interactive controls.

Do not make essential functionality dependent on hover.

---

# 25 — Reduced Motion

Respect user motion preferences.

When:

```text
prefers-reduced-motion: reduce
```

is enabled:

* Disable or greatly reduce the ink cursor.
* Reduce page transitions.
* Simplify carousel animation.
* Simplify loading animation.
* Remove unnecessary movement.

The website must remain fully functional without animation.

---

# 26 — Performance

The minimalist design should also be technically fast.

Optimize:

* Portrait image
* Project thumbnails
* Project screenshots
* SVG assets
* JavaScript
* Canvas rendering
* Animations

Prefer:

* AVIF
* WebP
* Optimized SVG

Avoid unnecessarily large images.

The ink cursor should not consume excessive CPU.

Animation should use efficient browser rendering techniques.

---

# 27 — SEO

Establish professional SEO fundamentals.

Include:

* Meaningful page title
* Meta description
* Semantic headings
* Descriptive image alt text
* Open Graph metadata
* Favicon
* Social sharing image

The portfolio should clearly communicate your professional identity to search engines and when shared.

---

# 28 — Technical Implementation Principles

Continue using the existing:

* React
* Vite
* TypeScript
* Tailwind CSS

Do not replace the current stack.

Do not introduce another framework unless there is a strong technical reason.

Avoid unnecessary dependencies.

If an animation library is already installed, evaluate whether it can be reused before adding another one.

If animation functionality is needed, GSAP may be used selectively.

Use:

* React for component/state management
* TypeScript for maintainable application logic
* Tailwind for layout and styling
* SVG for the ink loading/transition artwork
* Canvas for the cursor ink trail
* GSAP only where complex animation sequencing genuinely benefits from it

Do not use animation libraries simply for basic CSS transitions.

---

# 29 — Content Principles

The portfolio content should be concise.

Every section should answer a clear question.

### About

> Who is this person and how do they work?

### Tech Stack

> What technologies can they actually use?

### Project

> What have they actually built or worked on?

### Contact

> How can they be reached?

Avoid filling empty space with unnecessary copy.

The minimalist design depends on content discipline.

---

# 30 — Final Visual QA

Before considering the portfolio complete, review the design as a whole.

## Minimalism

* Is anything unnecessary?
* Is there enough whitespace?
* Does anything feel crowded?

## Typography

* Is hierarchy clear?
* Are headings appropriately sized?
* Is body text comfortable?

## Photography

* Does the B&W photo feel professional?
* Does it integrate naturally with the layout?

## Tech Stack

* Are icons consistent?
* Are they all appropriately monochrome?
* Is the section too crowded?

## Projects

* Is the carousel easy to understand?
* Can users quickly browse projects?
* Is the current project obvious?
* Does the thumbnail have enough visual presence?
* Is "VIEW PROJECT →" clear?

## Sumi

* Is the ink influence subtle?
* Does it feel intentional?
* Is it being overused?

## Cursor

* Does the ink trail feel organic?
* Does it fade quickly enough?
* Does it interfere with reading?

## Loading

* Does the ink circle feel like a brush stroke?
* Does it feel different from a generic spinner?
* Is the animation short and elegant?

## Professionalism

* Can a visitor understand your role quickly?
* Does the portfolio demonstrate your technical ability?
* Do the projects communicate real work rather than just screenshots?

---

# 31 — Final Design Rules

Keep these rules throughout development:

1. **Modern monochrome first.**
2. **Sumi-ink is an accent, not the entire theme.**
3. **Use a black-and-white professional photograph.**
4. **Use normal technology icons in monochrome.**
5. **Do not use the traditional "Hi, I'm..." introduction.**
6. **Let typography and whitespace create most of the visual identity.**
7. **Use projects as a compact featured carousel.**
8. **Keep the carousel simple and editorial.**
9. **Use "VIEW PROJECT →" instead of large buttons.**
10. **Keep detailed project information outside the carousel.**
11. **Use sumi primarily for cursor, loading, and transitions.**
12. **The cursor should leave a soft, fading ink-wash trail.**
13. **The loading state should use an imperfect ink circle.**
14. **Avoid stereotypical Japanese decorations.**
15. **Avoid unnecessary animation.**
16. **Respect reduced-motion preferences.**
17. **The design must remain usable without the sumi effects.**
18. **Keep the interface monochrome and restrained.**
19. **Prioritize real project work over decorative content.**
20. **Every visual element should have a purpose.**

---

# Target Experience

The finished portfolio should feel like:

> **A modern developer's personal work archive, presented through monochrome editorial design with subtle sumi-ink interactions.**

The visitor should experience:

```text
IDENTITY
   ↓
ABOUT
   ↓
TECH STACK
   ↓
FEATURED PROJECT
   ↓
BROWSE PROJECTS
   ↓
VIEW CASE STUDY
   ↓
CONTACT
```

The overall impression should be:

**Minimal. Quiet. Elegant. Technical. Personal.**

The sumi-ink elements should make the experience memorable without becoming the subject of the portfolio itself.
