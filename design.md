# Design System Inspired by Artemii Lebedev

## 1. Visual Theme & Atmosphere

This design system embodies a refined, minimalist aesthetic rooted in contemporary art direction and premium digital experiences. The atmosphere is sophisticated yet accessible, balancing stark contrasts with subtle gradations to create visual drama. Drawing from a portfolio of high-end design work, the system emphasizes clean typography, generous whitespace, and dramatic use of light and shadow. The brand projects confidence through restraint—avoiding ornament in favor of intentional, purposeful design choices. Photography and imagery serve as primary visual storytelling tools, with UI elements supporting rather than competing. The overall mood is professional, contemporary, and gallery-like, inviting users into a curated experience.

**Key Characteristics**

- Monochromatic foundation with near-black and pure white as primary anchors
- Subtle gray gradations for depth and hierarchy without color distraction
- Minimal ornamentation; emphasis on typography and whitespace
- High-contrast layouts for dramatic visual impact
- Photography-first approach to visual narrative
- Precision-driven spacing and alignment
- Modern, unadorned UI components with sharp edges
- Gallery or portfolio aesthetic applied to digital interface

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#FFFFFF`): Primary background, text on dark surfaces, maximum contrast surfaces
- **Pure Black** (`#000000`): Primary text color, high-emphasis elements, bold accents

### Neutral Scale
- **Near Black** (`#020202`): Subtle variant of black for layered depth, alternative background
- **Very Dark Gray** (`#090909`): Darkest neutral option for fine differentiation
- **Medium Gray** (`#5E5E5E`): Mid-tone for secondary text, disabled states, subtle UI separators
- **Light Gray** (`#A0A0A0`): Tertiary text, very subtle backgrounds, muted interactive states

### Surface & Borders
- **Off-White Overlay** (`#EFEFEF`): Semi-transparent button backgrounds, subtle overlays at 30% opacity
- **Charcoal Overlay** (`#090909`): Dark semi-transparent surfaces for depth layering

## 3. Typography Rules

### Font Family
**Primary Font: n-c** (Modern sans-serif with geometric precision)
Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**Secondary Font: p-g** (Contemporary sans-serif, similar weight and proportion)
Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | n-c | 72px | 500 | 57.6px | -1px | Hero headings, section titles |
| Heading 2 | n-c | 36.72px | 500 | 36.72px | -0.5px | Secondary headings, subsections |
| Body | n-c | 14.4px | 400 | 20.16px | 0px | Primary paragraph text |
| Body Emphasis | p-g | 14.4px | 500 | 20.16px | 0px | Highlighted body text, labels |
| Link | n-c | 14.4px | 500 | 20.16px | 0px | Hyperlinks at standard size |
| Link Small | n-c | 12.96px | 500 | 18.144px | 0px | Navigation links, smaller context |
| Button | n-c | 14.4px | 400 | 20.16px | 0px | Interactive button text |
| Button Small | n-c | 14.4px | 400 | 14.4px | 0px | Compact button labels |
| Caption | n-c | 12.96px | 400 | 18.144px | 0px | Captions, metadata, tertiary text |

### Principles

- **Clarity over decoration**: Typography drives hierarchy; minimal sizing variations maintain sophistication
- **Generous line height**: All text uses 1.4x line height minimum for readability and premium feel
- **Weight distinction**: 400 and 500 weights create clear hierarchy without additional size changes
- **Modern proportions**: Font sizes scale at consistent increments; no arbitrary variations
- **Monospace alternative**: Use code blocks with monospace for technical content at matching proportions

## 4. Component Stylings

### Buttons

**Button Primary (Solid Light)**
- Background: `#EFEFEF` (100% opacity)
- Text Color: `#FFFFFF`
- Font: n-c, 14.4px, weight 400
- Padding: `1px 6px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: 20.16px
- Hover State: Background opacity to `0.85`, text remains white
- Active State: Background darkens to `#D9D9D9`

**Button Secondary (Transparent/Ghost)**
- Background: `rgba(239, 239, 239, 0.3)` (30% opacity white)
- Text Color: `#FFFFFF`
- Font: n-c, 14.4px, weight 400
- Padding: `1px 6px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: 20.16px
- Hover State: Background opacity to `0.5`
- Active State: Background opacity to `0.7`

**Button Compact**
- Background: `#EFEFEF`
- Text Color: `#FFFFFF`
- Font: n-c, 14.4px, weight 400
- Padding: `1px 6px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: 14.4px
- Height: auto (content-driven)
- Width: auto (content-driven)

### Links

**Link Standard**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: n-c, 14.4px, weight 500
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: 20.16px
- Hover State: Text opacity to `0.7`
- Active State: Text opacity to `0.5`

**Link Small**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: n-c, 12.96px, weight 500
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: 18.144px
- Hover State: Text opacity to `0.7`

**Link Compact**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: n-c, 12.96px, weight 400
- Padding: `1px 2px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: 18.144px
- Hover State: Text opacity to `0.6`

### Inputs & Forms

**Text Input Default**
- Background: `#090909`
- Text Color: `#FFFFFF`
- Font: n-c, 12.96px, weight 400
- Padding: `12px 14px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Height: 52px
- Line Height: 18.5px
- Placeholder Text Color: `#5E5E5E`
- Focus State: Border `1px solid #FFFFFF`
- Error State: Background `#090909`, border `1px solid #FF6B6B`

**Text Input Disabled**
- Background: `#020202`
- Text Color: `#5E5E5E`
- Opacity: `0.5`
- Cursor: `not-allowed`

### Cards & Containers

**Project Card**
- Background: `#000000`
- Border Radius: `0px`
- Padding: `0px` (flush layout)
- Border: `0px none`
- Box Shadow: `none`
- Hover State: Opacity shift to `0.95` on image, slight scale `1.02`

**Content Container**
- Background: `#000000`
- Padding: Contextual (112px horizontal, 168px vertical for sections)
- Max Width: Full bleed or content-constrained per section
- Border: `0px none`
- Box Shadow: `none`

### Navigation

**Navigation Link (Header)**
- Background: transparent
- Text Color: `#FFFFFF`
- Font: n-c, 14.4px, weight 500
- Padding: `0px 12px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Hover State: Text opacity to `0.7`
- Active State: Text remains `#FFFFFF` at full opacity with underline `1px solid #FFFFFF`

**Navigation Container**
- Background: `#000000`
- Padding: `20px 24px`
- Border: `0px none`
- Box Shadow: `none`
- Display: flex, justify-content: space-between, align-items: center

## 5. Layout Principles

### Spacing System

**Base Unit: 4px**

**Spacing Scale:**
- **Extra Small (xs)**: 4px — Fine adjustments, internal component spacing
- **Small (sm)**: 8px — Padding between inline elements
- **Medium (md)**: 12px — Local component spacing
- **Large (lg)**: 20px — Section padding, card internal spacing
- **Extra Large (xl)**: 24px — Container padding, major sections
- **2XL**: 44px — Spacing between content blocks
- **3XL**: 52px — Section separators, major vertical rhythm
- **4XL**: 112px — Large padding for content areas
- **5XL**: 152px — Major section gaps
- **6XL**: 168px — Page-level vertical spacing
- **7XL**: 180px — Hero and primary section margins

### Grid & Container

**Max Width Strategy:**
- Full bleed for hero and hero-adjacent sections (100% viewport width)
- Constrained content width of `1200px` for portfolio grids and case studies
- Flexible width for full-screen image galleries
- Padding applied consistently at `24px` on sides, scaling to `112px` on larger breakpoints

**Column Strategy:**
- Multi-column grids use consistent 2-4 column layouts depending on content type
- Project cards use CSS Grid with `repeat(auto-fit, minmax(300px, 1fr))` or fixed 2-column layouts
- Horizontal scrolling grids for mobile showcase galleries

**Section Patterns:**
- Hero sections: Full-width image with centered text overlay
- Gallery sections: Grid of cards with consistent aspect ratios
- Detail sections: Text left, image right (or full width with alternating alignment)
- Footer sections: Horizontal card layout with flex wrapping

### Whitespace Philosophy

This system employs generous whitespace as a primary design tool. Large top and bottom margins (168px–180px) isolate major content sections, creating visual breathing room. Internal padding within containers (112px) ensures content never feels cramped. The foundation rests on the principle that empty space communicates as effectively as filled space—silence speaks.

### Border Radius Scale

- **No Radius**: `0px` — All UI components, containers, buttons, inputs, cards. Sharp edges reinforce modern precision.
- Alternative radius (if needed): `2px` — Not currently used; reserved for future micro-interactions
- Image and photography: `0px` — Maintain sharp cropping

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Surface | No shadow, solid background `#000000` or `#FFFFFF` | Primary content, buttons, inputs, cards |
| Overlay | `box-shadow: none`, opacity `0.3–0.5` on `rgba(239, 239, 239, 0.3)` or `rgba(9, 9, 9, 0.5)` | Modal overlays, semi-transparent accents |
| Hover State | No shadow change; optical feedback via opacity or scale (`transform: scale(1.02)`) | Interactive elements on hover |
| Modal/Dialog | `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8)` | Floating dialogs, modals above main content |

**Shadow Philosophy:**

This design system avoids traditional drop shadows in favor of strategic opacity and scale changes. Elevation is communicated through layering and proximity rather than shadow blur. When shadows are necessary (modals, floating elements), they are dark and deliberate—reinforcing the high-contrast aesthetic. Opacity overlays (`rgba()`) replace soft shadows to maintain the sharp, gallery-like aesthetic while retaining visual hierarchy.

## 7. Do's and Don'ts

### Do

- **Use sharp edges** (`border-radius: 0px`) consistently across all components—it reinforces the modern, precise brand identity
- **Rely on whitespace** as a design element; embrace large vertical margins to separate content blocks
- **Maintain high contrast**; text on dark backgrounds should remain pure white (`#FFFFFF`) for maximum legibility
- **Scale typography intentionally**; use the predefined hierarchy table; do not create arbitrary font sizes
- **Prioritize imagery** in layout decisions; photographs and visual content drive the storytelling
- **Apply consistent padding** using the defined spacing scale; avoid arbitrary measurements
- **Use opacity shifts** (not shadows) for hover and interactive states to maintain the flat aesthetic
- **Center and align precisely**; leverage grid systems and flush edges for professional alignment
- **Implement responsive scaling** proportionally; maintain aspect ratios and compositional balance across breakpoints
- **Test text contrast** to ensure WCAG AA compliance (minimum 4.5:1 for body text, 3:1 for large text)

### Don't

- **Add rounded corners** to any UI component; the 0px radius is non-negotiable to the brand aesthetic
- **Introduce new colors**; restrict yourself to the defined neutral palette and grayscale approach
- **Use soft shadows** or blurred drop shadows; use opacity overlays instead
- **Mix font families** within a single component or section; maintain n-c and p-g separation
- **Create inconsistent spacing** by introducing arbitrary padding or margin values outside the defined scale
- **Reduce whitespace** for the sake of content density; generous spacing is a brand hallmark
- **Apply visual effects** (gradients, textures, patterns) that compete with photography
- **Use animation** for decoration; reserve motion for intentional state changes and micro-interactions
- **Crowd interactive elements**; maintain minimum spacing of 12px between buttons and clickable areas
- **Override component defaults** for one-off designs; maintain consistency across the entire system

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 320px–599px | Single-column layouts, full-width images, 24px padding, 52px margin between sections, 36.72px headings |
| Tablet | 600px–1199px | 2-column grids, 44px section padding, maintain 72px display size, stack navigation vertically on scroll |
| Desktop | 1200px+ | 2–4 column grids, 112px horizontal padding, 168px–180px vertical margins, fixed navigation |
| Large Desktop | 1600px+ | 4-column grids possible, maximum 1200px content width with centered alignment, extended side padding |

### Touch Targets

- **Minimum Interactive Size**: 44px × 44px (buttons, links, inputs)
- **Recommended**: 52px × 52px (form inputs, primary CTAs)
- **Spacing Between**: Minimum 12px horizontal and vertical
- **Text Links**: Minimum 44px height achieved through line-height and padding, not forced height inflation

### Collapsing Strategy

- **Typography**: Display heading (72px) scales to 48px on tablet, 36px on mobile while maintaining weight (500)
- **Grid**: 4-column desktop layout collapses to 2 columns on tablet, 1 column on mobile
- **Padding**: 112px horizontal padding reduces to 44px on tablet, 24px on mobile
- **Vertical Margins**: Section gaps reduce from 168px (desktop) to 52px (mobile)
- **Navigation**: Horizontal header nav remains visible on desktop; converts to hamburger menu below 600px with vertical stacking
- **Images**: Maintain aspect ratios through `object-fit: cover` and responsive `max-width: 100%`
- **Forms**: Full-width inputs on mobile (width: 100%), constrained to 470px on desktop
- **Layered Content**: Overlay text remains readable through opacity and text shadow (`text-shadow: 0 2px 8px rgba(0,0,0,0.8)`) on mobile

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary Text**: Pure White (`#FFFFFF`)
- **Primary Background**: Pure Black (`#000000`)
- **Secondary Background**: Near Black (`#020202`)
- **Secondary Text**: Medium Gray (`#5E5E5E`)
- **Accent/Overlay**: Off-White Semi-Transparent (`rgba(239, 239, 239, 0.3)`)
- **Interactive Hover**: Reduced opacity on existing color (0.7–0.85)
- **Disabled/Muted**: Light Gray (`#A0A0A0`) or reduced opacity

### Iteration Guide

1. **All components use sharp edges** — Set `border-radius: 0px` on buttons, inputs, cards, containers, and images.

2. **Maintain a strict monochromatic foundation** — Use only the neutral palette (`#FFFFFF`, `#000000`, `#020202`, `#5E5E5E`, `#A0A0A0`, `#090909`). Do not introduce additional brand colors.

3. **Typography hierarchy is fixed** — Use only sizes and weights from the hierarchy table. Do not create intermediate sizes; scale proportionally on responsive breakpoints.

4. **Spacing follows the base-4 scale** — Apply margin and padding exclusively from the defined values (4px, 8px, 12px, 20px, 24px, 44px, 52px, 112px, 152px, 168px, 180px). No arbitrary values.

5. **Whitespace is a design decision** — Large vertical margins (168px–180px) between major sections are non-negotiable. Avoid cramping content.

6. **Interactive feedback uses opacity and scale** — Hover states should reduce opacity (0.7–0.85) or apply a subtle scale transform (`1.02`). Do not add shadows or color changes.

7. **Images are full-bleed in gallery contexts** — Use `object-fit: cover` and `width: 100%` for responsive imagery. Maintain aspect ratios.

8. **Forms and inputs are minimal** — Input styling: dark background (`#090909`), white text, 12px 14px padding, 52px height, 0px border-radius, no shadow.

9. **Navigation and headers are fixed to grid** — Ensure navigation elements align to the spacing scale and maintain consistent padding (20px–24px).

10. **Responsive design scales proportionally** — Reduce font sizes, margins, and padding uniformly as breakpoints decrease. Maintain the aesthetic across all screen sizes without introducing exceptions.