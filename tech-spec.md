# GlassGuard — Technical Specification

## Dependencies

- Google Fonts: Inter (300, 400, 500, 600, 700)
- No external CSS frameworks — all styling is custom in `style.css`
- No JavaScript libraries — all interactions use vanilla JS

## Component Inventory

### Layout
- **Navigation Bar** — Fixed, scroll-aware background, shared across both pages
- **Footer** — Shared across both pages

### Sections (Page-specific)
- **Hero** — `index.html` only
- **Benefits** — `index.html` only
- **How It Works** — `index.html` only
- **About** — `about.html` only
- **Contact Form** — `about.html` only

### Reusable Components
- **Card** — Benefits cards (3 instances)
- **Section Header** — eyebrow + H2 pattern used on every section
- **CTA Button** — Primary gradient button (used in Hero + Contact Form)
- **Step Item** — Numbered step in How It Works (3 instances)
- **Form Field** — Label + input/textarea pattern (4 instances)
- **Success State** — Contact form submission confirmation

## Animation Implementation

| Animation | Library | Implementation Approach |
|-----------|---------|------------------------|
| Hero entrance sequence | Vanilla JS | `setTimeout` chain with class toggling, delays at 200ms intervals |
| Scroll-reveal fade-in | Vanilla JS + IntersectionObserver | CSS class `.reveal` toggled by observer at threshold 0.15 |
| Benefits card stagger | CSS transition-delay | Each card gets incremental `transition-delay` (0ms, 150ms, 300ms) |
| How It Works split reveal | IntersectionObserver + CSS | Left: `translateX(-30px)`, Right: `scale(0.9)`, toggled by observer |
| Nav scroll background | IntersectionObserver or scroll listener | Toggle `.scrolled` class when scrollY > 100 |
| Scroll indicator pulse | CSS @keyframes | `scrollPulse` animation, infinite loop |
| Card hover lift | CSS | `translateY(-6px)` + shadow transition |
| Button hover | CSS | `translateY(-2px)` + shadow intensify |
| Form success transition | Vanilla JS | Fade out form, swap DOM, fade in success |
| Decorative ring | CSS | Static conic-gradient, no animation needed |

## Other Key Decisions

- **File structure**: 3 files total — `index.html`, `about.html`, `style.css` (JS embedded inline at bottom of each HTML)
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` throughout
- **Responsive**: 3 breakpoints (desktop 1024+, tablet 768-1023, mobile 767-)
- **Form handling**: Native HTML5 validation (`required`, `type="email"`, `type="tel"`) + JS preventDefault for success demo
