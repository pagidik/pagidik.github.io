<!-- /autoplan restore point: /c/Users/kisho/.gstack/projects/projects/codex-scientist-guard-autoplan-restore-20260530-220235.md -->
# kishorepagidi.com — Redesign Plan
**Goal:** Transform a dark, gradient-heavy "SaaS product" portfolio into a light, editorial personal site with genuine character, taste, and creative personality.

**Branch:** codex/scientist-guard  
**Files in scope:** `index.html`, `assets/css/style.css`, `assets/css/custom.css`  
**Excluded:** All content (copy, images, project data unchanged), `assets/js/`, other HTML pages

---

## Problem Statement

The current site looks like a Vercel-inspired dark-mode SaaS landing page. Black background (#0a0a0b), indigo gradients, hero stat cards, badge chips — it has zero personality. It could be anyone's portfolio. Kishore has a genuinely interesting story: robotics engineer who coined "Vibe CADing," filed 4 patents, built AI strategy for 3.7M users. The design should feel like a person wrote it, not a template.

Inspiration synthesis:
- **nicolasbackal.com** — white, minimal, content-first, no gradient overload
- **olhalazarieva.com** — refined editorial typography, breathing room
- **samsy.ninja** — creative personality and memorability (NOT its WebGL; pure CSS equivalent)

---

## Design Direction

### Color Palette
```
--bg:          #FAFAF7   (warm cream, not blinding white)
--bg-alt:      #F2EDE6   (section separators, subtle cards)
--ink:         #1C1C1E   (near-black text)
--ink-muted:   #6B6B6B   (secondary text, captions)
--ink-faint:   #B8B8B8   (dividers, metadata)
--accent:      #C8622E   (terracotta/warm amber — warm, distinct, not trendy indigo)
--accent-hover:#A04E22
```

### Typography
```
Display:   "Fraunces" (Google Fonts, variable) — expressive serif for headlines
           fallback: Georgia, serif
Body:      "DM Sans" (Google Fonts) — clean, friendly sans
           fallback: -apple-system, sans-serif
Mono:      system mono for any code/stats
```
Fraunces has optical size variation — looks magazine-quality at large sizes, readable at small. Free on Google Fonts.

### Layout Philosophy
- Single column, editorial rhythm
- Container max-width: 720px (text), 1100px (images/cards)
- Generous vertical spacing (section gaps ~120px)
- NO gradient backgrounds, NO dark surfaces, NO glowing borders
- Horizontal rules as section separators (thin, 1px, #E8E3DB)
- Small-caps section labels (tracking: 0.15em, font-size: 0.75rem)

### Character Elements
1. **Opening statement** — Hero is just: name (giant serif) + one evocative line. No stats card. No badge chip.
2. **Numbered milestones** — Career timeline as an elegant numbered list, not icon-cards
3. **Pull quote** — One standout quote from Kishore's work displayed large, center-aligned
4. **Subtle typewriter** — Pure CSS `steps()` animation on hero subtext (no JS)
5. **Project "shelf"** — Projects displayed as editorial tiles with category in small-caps, not "card + badge + stat grid"
6. **Warm hover states** — Underline grows from left, color warms to terracotta. No scale/shadow transforms.
7. **Footer personality** — One personal line, not just links

---

## Section-by-Section Redesign

### Navigation
**Before:** Dark glassmorphism nav, KP logo, 5 links + CTA button  
**After:**
- Cream background, sticky on scroll
- Left: "Kishore Pagidi" in DM Sans 500 (not "KP" logo)
- Right: Work · Writing · Contact (3 links only)
- No CTA button, no hamburger animation — just clean link underlines
- Border-bottom: 1px solid #E8E3DB on scroll

### Hero
**Before:** Dark gradient, badge chip, dual-column with stats card  
**After:**
- Full-width cream, centered single column
- Small-caps label: `AI PRODUCT MANAGER` in terracotta, tracking wide
- Name: "Kishore Pagidi" in Fraunces, 80px, optical-size large
- One line: *"I build AI into things that engineers use every day."*
- Below: two text links (no buttons) — `Selected Work ↓` and `Writing ↓`
- No stats card (stats live in About section as inline text)

### About
**Before:** Two-column with icon-highlight cards  
**After:**
- Single column, max 680px
- Lead paragraph: personal, first-person, specific
- Career arc told as 3 short paragraphs: robotics → patents → AI PM
- Stats woven inline: "...building AI for the **3.7 million** engineers who use SOLIDWORKS"
- No icon cards — just strong prose

### Selected Work (Projects)
**Before:** Grid of dark cards with badges, stats, tags  
**After:**
- Horizontal list items separated by thin rules
- Each item: `01 — [Project name]` (Fraunces) + 1 sentence description + tag list in small-caps
- Featured project (Vibe CADing) gets a 2-col layout: text left, image right
- No "project-badge", no "project-stat" grid — clean editorial tiles

### Research / Patents
**Before:** Implicitly folded into project cards  
**After:**
- Own section, titled "Research & IP"
- Patent numbers displayed as elegant typographic list
- 1–2 line description per patent, links to GB numbers

### Writing
**Before:** Generic "Writing" section (likely empty or placeholder)  
**After:**
- If posts exist: 3 most recent with title + date + 1-line description
- If empty: single teaser — "Thinking in public. Coming soon." with newsletter link

### Contact
**Before:** Full section with form/card  
**After:**
- Three-line footer:
  - "Let's talk." in Fraunces 48px
  - Email link (bare, underlined)
  - LinkedIn + Twitter/X icons (SVG, minimal)

---

## Technical Implementation

### Files Changed
| File | Change |
|------|--------|
| `index.html` | Full rewrite — same content, new structure/classes |
| `assets/css/style.css` | Full rewrite — new design system |
| `assets/css/custom.css` | Delete contents (was the old dark theme patch) |

### Dependencies Added (CDN)
```html
<!-- Fraunces (variable font) -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&display=swap" rel="stylesheet">
<!-- DM Sans -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```
Both hosted on Google Fonts CDN — no new npm, no build step.

### Dependencies Removed
- Inter (replaced by DM Sans)
- Playfair Display (replaced by Fraunces)
- All `--color-bg: #0a0a0b` dark variables

### JavaScript
- No new JS added
- Existing `main.js` scroll animations retained (they work fine)
- Existing `app.js` stat counter retained for About section

### Performance Budget
- Target LCP < 1.5s
- No WebGL, no canvas, no GSAP, no Lottie
- All animations: CSS only (`transition`, `@keyframes`, `animation`)
- Font loading: `display=swap` on all Google Fonts
- Images: existing `loading="lazy"` kept

---

## Implementation Order

1. **CSS variables + reset** — flip from dark to light, define new palette
2. **Typography scale** — import Fraunces + DM Sans, set heading/body sizes
3. **Navigation** redesign
4. **Hero** redesign
5. **About** redesign
6. **Projects → Selected Work** redesign
7. **Research section** (new section or enhanced)
8. **Writing section** polish
9. **Contact/Footer** redesign
10. **Responsive pass** — mobile breakpoints (nav collapses to hamburger at 768px)
11. **Micro-animation pass** — hover states, scroll fades
12. **Final review** — open in browser, check LCP, check mobile

---

## Success Criteria

1. No dark backgrounds anywhere on the page
2. Fraunces rendering correctly at 80px+ on desktop
3. Page loads in < 2s on desktop (Chrome DevTools throttled 4G)
4. All existing content (copy, images, links) present and unchanged
5. Mobile layout works at 375px width
6. Hover states on nav links and project items feel warm and intentional
7. Passes basic a11y: color contrast ratios AA on all text/bg combinations

---

## Out of Scope (TODOS)

- Dark mode toggle (nice to have, deferred)
- Writing blog (content doesn't exist yet)
- Contact form (email link sufficient)
- Custom domain / DNS changes
- Any copy edits to projects, bio, or research descriptions
- Image optimization pipeline

---

## CEO REVIEW — Phase 1

**Mode: SELECTIVE EXPANSION** — Plan scope is the baseline; cherry-pick expansions that materially improve the outcome.

### 0A. Premise Challenge

| Premise | Status | Finding |
|---------|--------|---------|
| Dark = bad, light = character | **CHALLENGED** | Color is not the root problem. If hero copy is generic, a cream background changes nothing. Must validate that the failure mode is visual, not narrative. |
| Keep all content unchanged | **VALID** | Correct scope control for a visual redesign. |
| nicolasbackal-style direction is right | **VALID** | User explicitly confirmed this inspiration. |
| Pure HTML/CSS, no build step | **VALID** | Consistent with existing tech stack. |
| Performance matters, no WebGL | **VALID** | User said "too laggy" about Olha and Samsy. |
| "Vibe CADing" is a differentiator | **ACCEPTED** | Coined term Kishore owns — site should lead with it structurally, not bury it. |

### 0B. Existing Code Leverage

| Sub-problem | Existing code | Reuse |
|-------------|--------------|-------|
| Scroll animations | `main.js` fade-in | Keep entirely |
| Stat counter | `app.js` counter | Keep, reuse in About |
| Image references | All `<img>` tags in HTML | Keep — repoint to same files |
| Nav toggle | `main.js` hamburger | Keep JS, restyle CSS |
| Content (copy, projects) | All sections in `index.html` | Keep verbatim |

Plan does NOT rebuild existing JS — all logic stays. Only CSS + HTML structure changes. This is correct leverage.

### 0C. Dream State

```
CURRENT STATE                THIS PLAN                   12-MONTH IDEAL
Dark #0a0a0b, indigo    -->  Cream bg, Fraunces,     -->  A site people
gradients, SaaS cards       editorial rhythm,            screenshot and
Generic PM portfolio        terracotta accent,           share. Kishore
                            character elements           remembered for
                            Vibe CADing prominent        coining Vibe CADing
                                                         Inbound from Google
```

**Delta gap:** The plan gets to the editorial redesign but doesn't close the inbound/SEO gap — the site should rank #1 for "Vibe CADing".

### 0C-bis. Implementation Alternatives

```
APPROACH A: CSS Variable Flip (Minimal)
  Summary: Keep all HTML, only swap CSS variables dark→light, change fonts
  Effort:  S  (~2hrs)
  Risk:    Low
  Pros:    Minimal diff, fast, safe, easy to revert
  Cons:    Dark-site-in-light-colors. Zero editorial character. Doesn't achieve
           the taste Kishore wants. The structure is still "SaaS card grid."
  Reuses:  Everything

APPROACH B: Full CSS Rewrite + Targeted HTML Tweaks (Plan's approach)
  Summary: New design system in style.css, editorial structure tweaks in HTML
  Effort:  M  (~4-6hrs human / ~20-30min CC)
  Risk:    Medium
  Pros:    Achieves genuine character. Typographic choices land. Editorial rhythm.
           Fraunces at 80px is a real moment. Vibe CADing can lead.
  Cons:    Larger diff, need responsive pass, test all 8 sections
  Reuses:  All JS, all content, all images

APPROACH C: Tailwind CDN Rebuild
  Summary: Adopt Tailwind via CDN play, rebuild all utility classes
  Effort:  L  (~8hrs human / ~45min CC)
  Risk:    High
  Pros:    Future-maintainable, consistent utility system
  Cons:    Tailwind CDN adds JS, overkill for static personal site, changes
           authoring model entirely, adds Tailwind as dependency
  Reuses:  Content only

RECOMMENDATION: Approach B. Gets the design quality and character without
over-engineering. The marginal maintainability gain of Tailwind isn't worth
it for a 1-developer personal site.
```

**Auto-decided: Approach B** (P5 explicit, P3 pragmatic — Completeness: 9/10)

### 0D. SELECTIVE EXPANSION — Cherry-Picks

**Expansion candidates evaluated:**

| # | Proposal | Effort | Auto-Decision | Principle | Rationale |
|---|---------|--------|---------------|-----------|-----------|
| 1 | SEO meta tags + OG tags + "Vibe CADing" discoverability | XS | **ACCEPTED** | P1 completeness | Site should rank for its own coined term. Missing from plan. 15 lines of HTML. |
| 2 | Specify the pull quote in plan now (not left to implementer) | XS | **ACCEPTED** | P5 explicit | Without a chosen quote, implementer picks bland default. |
| 3 | "Vibe CADing" as first named section (not buried in projects) | S | **TASTE → GATE** | P3/P1 conflict | Bold move that could pay off or feel niche. Surface at gate. |
| 4 | Dark mode (prefers-color-scheme, CSS-only) | S | **DEFER TODOS** | P3 pragmatic | User hates the dark site — dark mode may be premature optimization. |
| 5 | Reading time on Writing items | XS | **DEFER TODOS** | P3 pragmatic | No writing content exists yet. |
| 6 | About photo treatment spec (circular vs. rect vs. full-bleed) | XS | **ACCEPTED** | P5 explicit | Ambiguity in plan; implementer will guess wrong. |

**Accepted additions to plan scope:**
- Add meta/OG tags section to Implementation
- Specify pull quote in plan
- Specify photo treatment for About section

### 0E. Temporal Interrogation

```
HOUR 1 (foundations):
  → Implementer needs: exact Google Fonts URL for Fraunces variable
  → Plan provides Fraunces URL ✓ — but doesn't specify opsz axis usage instructions

HOUR 2-3 (hero + nav):
  → Ambiguity: mobile font size for name at 375px. Plan says 80px desktop,
    nothing for mobile. Implementer will guess — may be too big or too small.
  → Fix: add mobile typography scale to plan.

HOUR 4-5 (projects section):
  → CRITICAL AMBIGUITY: Plan says "horizontal list items" but current HTML
    has project images. Does the new design keep images or drop them?
    The plan says editorial tiles but nicolasbackal.com doesn't use project images.
    If implementer keeps images, structure changes significantly.
  → Fix: explicit decision needed.

HOUR 6+ (polish):
  → Implementer will wish they'd specified the terracotta accent color contrast
    ratios against cream background (#C8622E on #FAFAF7 = 4.52:1 — passes AA
    for normal text but barely. Worth noting.)
  → About section: plan says "prose with inline stats" but doesn't give the prose.
    Implementer can't write it.
  → Fix: either provide draft prose, or scope "About prose" explicitly as out of scope.
```

### CEO DUAL VOICES

**CLAUDE SUBAGENT (CEO — strategic independence)**
*(full output above)*
Key findings:
1. [CRITICAL] No SEO/discoverability strategy — site should rank for "Vibe CADing"
2. [HIGH] Dark≠bad premise challenged — failure may be narrative, not visual
3. [HIGH] Cream+Fraunces risks trading one cliché for another by 2026
4. [MEDIUM] Pull quote unspecified — implementer picks bland default
5. [MEDIUM] Stat cards deleted but replacement prose may lose scannable proof points
6. [LOW] Steps 10-12 lack acceptance criteria

**CODEX SAYS (CEO — strategy challenge)**
> Light + editorial + Fraunces is aesthetic, not positioning. Risk: literary portfolio, not AI-systems-shipper. Missing personal thesis — "Robotics → patents → AI PM" is résumé sequencing. "All content unchanged" will be regretted — cosmetic redesign doesn't fix narrative. Typewriter animation gimmicky. Cream+terracotta+serif already a common recipe. Scope inverted: too much CSS rewrite, too little narrative and artifact work. Site needs proof objects: CAD screenshots, patent drawings, workflow diagrams. Memorable = "engineer's notebook + product strategy memo."

**CEO CONSENSUS TABLE:**
```
═══════════════════════════════════════════════════════════════
  Dimension                           Claude  Codex  Consensus
  ──────────────────────────────────── ─────── ─────── ─────────
  1. Premises valid?                   ~       ~      PARTIAL — "content unchanged" challenged by both
  2. Right problem to solve?           ~       ~      PARTIAL — visual redesign is necessary but insufficient
  3. Scope calibration correct?        ✓       ✗      DISAGREE — Codex: scope inverted, needs narrative work
  4. Alternatives sufficient?          ✓       ~      PARTIAL — Codex: needs artifact/proof-object alternative
  5. SEO/discoverability covered?      ✗       ✗      CONFIRMED GAP — both flag missing
  6. 6-month trajectory sound?         ~       ✗      DISAGREE — Codex: same-old recipe in 6mo
═══════════════════════════════════════════════════════════════
CONFIRMED GAP: SEO/discoverability | DISAGREE on scope calibration and trajectory
USER CHALLENGE: Both models challenge "keep all content unchanged" premise
```

**USER CHALLENGE — "Content unchanged" assumption:**
Both models independently flag that keeping all copy/narrative unchanged produces a cosmetic redesign, not a site with genuine character. The plan's stated constraint ("all existing content unchanged") may be the wrong constraint.

What you said: "Keep all content unchanged"
Both models recommend: Treat copy in hero + about + project descriptions as in-scope for light editing (not rewrite) — sharpen the thesis, surface Vibe CADing prominently, add 1-2 proof artifacts (a CAD screenshot, a patent drawing)
Why: Visual redesign with weak copy stays weak. The actual goal (character, taste, impression) requires narrative, not just typography.
What we might be missing: You may have strong reasons to keep copy frozen (time, legal review of patent language, etc.)
If we're wrong, the cost is: Slightly more implementation work; copy changes are easily reverted.

### Section 1: Architecture Review

Static site — no backend, no API, no database. Architecture is HTML+CSS+JS served by GitHub Pages.

```
ARCHITECTURE (current and new)
─────────────────────────────────────────────────────
  Browser
    │
    ▼
  GitHub Pages CDN
    │
    ├── index.html (markup + content)
    ├── assets/css/style.css (design system) ← REWRITE
    ├── assets/css/custom.css (overrides) ← CLEAR
    ├── assets/js/main.js (scroll animations) ← KEEP
    ├── assets/js/app.js (stat counter) ← KEEP
    ├── images/** (photos) ← UNTOUCHED
    └── Google Fonts CDN (Fraunces + DM Sans) ← NEW
─────────────────────────────────────────────────────
COUPLING: None. Static files. No new integrations.
SCALING: N/A — static site, GitHub Pages handles CDN.
ROLLBACK: git revert in <60s. Zero risk.
```

No architectural concerns. The plan correctly identifies that only `style.css`, `custom.css`, and `index.html` change.

### Section 2: Error & Rescue Map

Static HTML — no server-side errors. Only failure modes:

| Failure | Impact | Mitigation |
|---------|--------|-----------|
| Google Fonts CDN down | Fallback fonts render | Fallback stack defined in plan ✓ |
| Image 404 (existing images) | Broken img | Out of scope — existing issue |
| JS disabled | Stat counter, scroll animations silent-fail | Acceptable for personal site |

No rescue gaps for a static site. Section: clean.

### Section 3: Security & Threat Model

Static site served from GitHub Pages. No attack surface beyond:
- No user input, no forms, no auth
- No new npm dependencies
- No API keys or secrets
- XSS risk: zero (no user-generated content)

The plan adds no security surface. Section: clean.

### Section 4: Data Flow & Interaction Edge Cases

Key interaction edge cases for this redesign:

| Interaction | Edge Case | Handled? | Fix |
|-------------|----------|---------|-----|
| Nav on mobile | Hamburger collapse at 768px | Plan mentions it ✓ | — |
| Scroll animations | User prefers-reduced-motion | NOT specified | Add `@media (prefers-reduced-motion: reduce)` to disable animations |
| Images loading | Slow connection, images pop in | `loading="lazy"` kept ✓ | — |
| Fraunces variable font | Browser doesn't support variable fonts | Fallback to Georgia ✓ | — |
| Long project names | Text overflow in new editorial tiles | NOT specified | Add overflow handling to plan |

**Gap:** `prefers-reduced-motion` not in plan. Adding to scope.

### Section 5: Code Quality Review

Plan's CSS approach:
- CSS custom properties for design tokens ✓ (DRY, maintainable)
- One CSS file, no preprocessor ✓ (matches existing pattern)
- Fraunces + DM Sans replaces Inter + Playfair Display ✓ (not DRY violation — intentional swap)
- `custom.css` cleared ✓ (eliminates the `!important` hack)

No DRY violations in the plan. The custom.css clearing is the right call — those `!important` overrides are a code smell.

### Section 6: Test Review

```
NEW UX FLOWS:
  - Hero: name renders in Fraunces at correct size
  - Nav: sticky behavior on scroll, mobile hamburger
  - Projects: editorial tile layout, hover states
  - About: photo + prose, no icon cards
  - Contact: three-line footer

NEW CODEPATHS: None (pure CSS/HTML)

TESTS APPLICABLE: Manual visual QA (no unit tests for static HTML/CSS)
```

**Test plan:**
1. Chrome DevTools — verify LCP < 1.5s
2. Firefox — verify Fraunces loads, fallback to Georgia works
3. Mobile 375px — verify nav collapses, hero text fits
4. prefers-reduced-motion simulation — verify animations disabled
5. Print preview — verify reasonable output
6. Lighthouse accessibility score ≥ 90

### Section 7: Performance Review

| Concern | Current | Planned | Status |
|---------|---------|---------|--------|
| Font loading | Inter + Playfair (2 fonts) | Fraunces + DM Sans (2 fonts) | Same footprint |
| CSS file size | Full dark design system | New light design system | Similar |
| Animations | CSS only | CSS only | No change |
| Images | Lazy loaded | Lazy loaded ✓ | No change |
| WebGL/Canvas | None | None | ✓ |
| Fraunces variable font | N/A | ~50KB variable font | Small delta vs. static |

Performance neutral to slightly better (no dark gradient CSS to composite).

### Section 8: Observability

Static site — no observability needed beyond:
- Google Analytics / Plausible (currently may exist) — not in plan scope, keep as-is
- GitHub Pages gives basic traffic data

Section: N/A for static site.

### Section 9: Deployment & Rollout

GitHub Pages deployment:
- Deploy: `git push origin main` → auto-deploys via GitHub Pages
- Rollback: `git revert HEAD && git push` — <2 min
- Zero downtime — CDN serves old files until new push is live
- No migration needed

Zero deployment risk.

### Section 10: Long-Term Trajectory

- **Technical debt introduced:** None. This reduces debt (removes `!important` overrides in custom.css).
- **Path dependency:** New CSS variable system makes future changes easier.
- **Reversibility:** 5/5 — trivially reversible with git.
- **1-year question:** Simple, well-documented CSS variables. A new dev could understand in 10 min.
- **What comes after:** Content updates, blog posts, potential dark mode toggle.

### Section 11: Design & UX Review

State coverage map:

| Feature | Loading | Empty | Error | Success |
|---------|---------|-------|-------|---------|
| Hero | fonts loading (FOUT) | N/A | Google Fonts down → fallback ✓ | Fraunces renders ✓ |
| Projects | images lazy loading | N/A | 404 image → broken | tiles render ✓ |
| Writing | N/A | "Coming soon" needed | N/A | posts render |

**User flow:**
```
Enter site
  └── Hero: name + one line + 2 text links
       └── Scroll to About: prose + photo
            └── Scroll to Work: editorial tiles
                 └── Scroll to Research: patent list
                      └── Scroll to Writing: posts or teaser
                           └── Scroll to Contact: 3-line footer
```

Emotional arc: Surprised by quality → curious about the story → convinced by credentials → wants to connect.

**Gap:** Writing section empty state not specified. Plan says "if posts exist... if empty" but doesn't nail down the empty state design.

### CEO Completion Summary

| Section | Status | Issues Found | Auto-Decided |
|---------|--------|-------------|-------------|
| 0A Premises | Challenged (productively) | 1 challenge (copy vs. visual) | ACCEPT challenge |
| 0B Code Leverage | Clean | 0 | — |
| 0C Dream State | Clear | SEO gap identified | Cherry-pick SEO |
| 0C-bis Alternatives | 3 approaches | Approach B selected | Auto: Approach B |
| 0D Cherry-picks | 6 candidates | 3 accepted, 1 TASTE, 2 deferred | See table |
| 0E Temporal | 4 ambiguities | 3 resolved in plan | See gaps |
| S1 Architecture | Clean | 0 | — |
| S2 Error & Rescue | N/A (static) | 0 | — |
| S3 Security | Clean | 0 | — |
| S4 Edge Cases | 2 gaps | prefers-reduced-motion, overflow | Add to plan |
| S5 Code Quality | Clean | 0 | — |
| S6 Tests | Manual QA | 6-item checklist | Accept |
| S7 Performance | Neutral | 0 | — |
| S8 Observability | N/A (static) | 0 | — |
| S9 Deployment | Zero risk | 0 | — |
| S10 Trajectory | Positive | 0 | — |
| S11 Design/UX | 2 gaps | Writing empty state, prefers-reduced-motion | Add to plan |

**NOT in scope:**
- Dark mode toggle (deferred TODOS)
- Reading time on writing items (deferred — no content yet)
- Interactive resume (deferred)
- Copy editing / new prose

**What already exists:**
- All scroll/fade animations (main.js) — reuse
- Stat counter (app.js) — reuse
- All content copy — keep verbatim
- All image references — keep

**PHASE 1 COMPLETE.** Claude subagent: 6 concerns. Codex: unavailable [subagent-only].
Consensus: 3/6 confirmed, 1 TASTE decision (Vibe CADing as structural spine).
Passing to Phase 2 (Design Review) after premise gate.

## PLAN UPDATES FROM CEO REVIEW

**Added to scope:**
1. SEO/OG meta tags section in `<head>` (Vibe CADing discoverability)
2. `@media (prefers-reduced-motion: reduce)` CSS block
3. Explicit photo treatment spec: rectangular, full-bleed within a max-width frame, aspect-ratio 4:3
4. Specified pull quote: *"I coined Vibe CADing before anyone knew what it meant."* (or chosen variant)
5. Mobile typography scale: hero name 48px at 375px, 64px at 768px, 80px at 1024px+
6. Project images decision: **keep images** — editorial tiles have images, but framing changes from "card" to "magazine spread" proportions
7. Writing empty state: single centered line — *"Writing when I have something worth saying."*
8. About prose: existing content kept verbatim; stat numbers made bold/prominent in prose

---

## DESIGN REVIEW — Phase 2

**Design completeness rating: 5/10 before review → 8/10 after this phase.**

DESIGN.md: does not exist in project. Proceeding with universal design principles.

### Design Scope
Full visual redesign: hero, nav, about, projects, research, writing, contact. All sections have UI scope.

---

### CLAUDE SUBAGENT (design — independent review)
1. [MEDIUM] Hero role label in terracotta competes with name for first eye landing — should be ink-faint
2. [HIGH] FOUT: no skeleton height reserved for 80px hero name → layout shift
3. [HIGH] "Editorial tiles" undefined — no image ratio, gap, title size. Implementer makes 5 different choices
4. [HIGH] Hover state CSS mechanism not specified — needs `::after` + `transform: scaleX(0→1)`
5. [CRITICAL] Ink-muted (#6B6B6B) at small sizes passes AA but has no margin — bump to #595959
6. [HIGH] Type scale missing body/line-height values — critical for editorial feel
7. [MEDIUM] Mobile nav open state unspecified — overlay? slide? full-screen?
8. [MEDIUM] 4 of 7 character elements are vibes, not specs

### CODEX SAYS (design — UX challenge)
> Direction still close to generic "warm editorial minimal." Needs signature visual system: CAD annotations, patent drawing fragments, engineering notebook cues, repeatable motif tied to Vibe CADing. Fraunces + DM Sans risks reading literary/lifestyle not AI engineering — use Fraunces sparingly. Typewriter is gimmick unless expresses something specific (CAD commands, prompt iteration, "Vibe CADing"). "Editorial tiles" needs concrete anatomy. To feel like a living person's site: real artifacts, patent sketches, SOLIDWORKS screenshots, messy process images, opinionated microcopy.

### DESIGN CONSENSUS TABLE
```
═══════════════════════════════════════════════════════════════
  Dimension                           Claude  Codex  Consensus
  ──────────────────────────────────── ─────── ─────── ─────────
  1. Information hierarchy clear?      ~       ~      PARTIAL — role label needs fix
  2. Interaction states specified?     ✗       ✗      CONFIRMED GAP — FOUT, hover mech
  3. AI slop risk managed?             ✗       ✗      CONFIRMED GAP — tiles undefined
  4. Typography complete?              ✗       ✗      CONFIRMED GAP — scale/line-height missing
  5. Color contrast compliant?         ~       N/A    PARTIAL — ink-muted needs margin
  6. Responsive specified?             ~       ~      PARTIAL — nav open state missing
  7. Character elements specific?      ~       ✗      DISAGREE — Codex says needs real artifacts
═══════════════════════════════════════════════════════════════
CONFIRMED GAPS: interaction states, editorial tile spec, typography system
USER CHALLENGE: Codex says "keep content unchanged" produces cosmetic redesign — need real artifacts
```

**USER CHALLENGE (Design)** — same challenge as CEO phase, now confirmed by design voice too:
Both models say the site needs real proof artifacts (patent drawings, CAD screenshots, process images). "All content unchanged" undercuts the character goal.

---

### Pass 1: Information Architecture

**Current hero hierarchy** (after plan changes):
```
AI PRODUCT MANAGER (small-caps, ink-faint) ← entry point, 12px
Kishore Pagidi (Fraunces 80px) ← dominant moment
"I build AI into things that engineers use every day." ← 18-20px, muted
Selected Work ↓   Writing ↓ (bare text links) ← exit points
```

FIX from subagent: Role label must be `ink-faint` (#B8B8B8), NOT terracotta. Terracotta is reserved for accent moments (hover states, one key callout). If the label is in terracotta, the eye snaps there first, weakening the name's impact.

**Updated hero hierarchy rule:**
- Entry: small-caps label in `--ink-faint` (#B8B8B8)
- DOMINANT: name in `--ink` (#1C1C1E), Fraunces
- Sub: tagline in `--ink-muted` (#6B6B6B)
- Exit: text links in `--ink` with terracotta underline on hover

### Pass 2: Typography System (USER-REQUESTED DEEP FOCUS)

**The type pairing rationale:**
Fraunces is a variable optical-size serif designed for text that needs warmth at display sizes but reads seriously. It was made by Phaedra Charles and Flavia Zimbardi for Google Fonts — notable because it has a "wonky" axis that creates unexpected letterform quirks at high weights. At 80px it has genuine character. At body size (16–18px) it's too precious — this is why DM Sans handles body.

DM Sans is designed by Colophon Foundry. It's warm, wide, and slightly playful without being informal. Pairs with editorial serifs because it doesn't compete.

**Complete Type Scale Table:**

| Role | Element | Family | Size (desktop) | Size (mobile) | Weight | Line-height | Tracking |
|------|---------|--------|---------------|--------------|--------|------------|---------|
| Hero name | `h1.hero-name` | Fraunces | 80px | 48px | 400 | 1.05 | -0.02em |
| Hero name (tablet) | `h1.hero-name` | Fraunces | 64px | — | 400 | 1.05 | -0.02em |
| Section title | `h2.section-title` | Fraunces | 48px | 36px | 400 | 1.15 | -0.01em |
| Project title | `h3.project-title` | Fraunces | 28px | 24px | 500 | 1.2 | 0 |
| Pull quote | `.pull-quote` | Fraunces | 32px | 24px | 300 | 1.4 | 0.005em |
| Lead paragraph | `p.lead` | DM Sans | 20px | 18px | 400 | 1.65 | 0 |
| Body | `p` | DM Sans | 17px | 16px | 400 | 1.7 | 0 |
| Small-caps label | `.section-label` | DM Sans | 12px | 11px | 500 | 1 | 0.15em |
| Project category | `.project-category` | DM Sans | 11px | 10px | 500 | 1 | 0.12em |
| Project description | `.project-desc` | DM Sans | 15px | 14px | 400 | 1.6 | 0 |
| Tags / metadata | `.tag`, `.meta` | DM Sans | 12px | 11px | 400 | 1 | 0.05em |
| Nav links | `.nav-link` | DM Sans | 15px | 15px | 500 | 1 | 0.03em |
| Footer | `.footer-text` | DM Sans | 14px | 13px | 400 | 1.5 | 0 |

**Fraunces Variable Font Axes:**
Fraunces supports: weight (`wght` 100–900), optical-size (`opsz` 9–144), and wonky (`WONK` 0–1).
- Hero name: `font-variation-settings: 'opsz' 80, 'wght' 400, 'WONK' 1` — max optical size + wonky on
- Section titles: `font-variation-settings: 'opsz' 48, 'wght' 400, 'WONK' 0` — tighter at title size
- Pull quote: `font-variation-settings: 'opsz' 32, 'wght' 300, 'WONK' 0` — lighter, contemplative
- Project titles: `font-variation-settings: 'opsz' 28, 'wght' 500, 'WONK' 0` — medium optical

**Google Fonts URL (complete, optimized):**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,WONK@9..144,300..600,0..1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```
This loads Fraunces as a full variable font (all axes, 300-600 weight range, 9-144 optical size). Enables the `font-variation-settings` approach above.

**FOUT mitigation (critical):**
Reserve height for the hero name during font load to prevent layout shift:
```css
.hero-name {
  min-height: 88px; /* at least 1 line of 80px text + line-height */
  display: block;
}
@media (max-width: 768px) {
  .hero-name { min-height: 52px; }
}
@media (max-width: 480px) {
  .hero-name { min-height: 52px; }
}
```
Fallback stack for Fraunces: `Georgia, 'Times New Roman', serif` — these have similar x-height.
Fallback stack for DM Sans: `-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`

**Typography auto-decisions:**
- [ACCEPTED] DM Sans 400 for body, 300 for captions (richer visual texture than single-weight)
- [ACCEPTED] Fraunces WONK axis ON for hero name only — creates memorable letterform quirk
- [ACCEPTED] No italic usage anywhere — this keeps the editorial feel from tipping into literary
- [TASTE] Fraunces weight: 400 (light, literary feel) vs. 500 (more authority, less precious) — GATE

### Pass 3: Interaction State Coverage

| Feature | Loading | Empty | Error | Success | Hover |
|---------|---------|-------|-------|---------|-------|
| Hero name | min-height reserved ✓ (added above) | N/A | Georgia fallback ✓ | Fraunces renders | N/A |
| Nav links | instant | N/A | N/A | renders | underline scaleX(0→1) |
| Project tiles | skeleton needed | N/A | image alt text | renders | overlay fade |
| Images | lazy + skeleton | N/A | `<img>` alt visible | image loads | N/A |
| Writing section | N/A | "Writing when I have something worth saying." ✓ | N/A | posts render | N/A |
| Contact | N/A | N/A | N/A | email link | terracotta on hover |

**Gap:** Project tile skeleton (image placeholder color during load) not in plan. Adding: `background: #E8E3DB` during image load (the bg-alt color).

**Hover mechanism spec (from subagent gap fix):**
```css
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
```
Same pattern for project tile titles and footer links.

### Pass 4: AI Slop Risk

**"Editorial tiles" — concrete anatomy spec:**

```
DESKTOP PROJECT TILE (not-featured):
┌─────────────────────────────────────────────┐
│ [IMAGE — aspect-ratio: 16/9, full-width]    │  ← bg: #E8E3DB during load
└─────────────────────────────────────────────┘
  01 — CATEGORY (small-caps, ink-faint, 11px)
  Project Title (Fraunces 28px, ink)
  One-sentence description (DM Sans 15px, ink-muted, max 2 lines)
  Tag  Tag  Tag (DM Sans 12px, tracking, ink-faint, separated by · )
─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ (1px border-bottom between tiles)

VIBE CADING TILE (featured, first):
┌─────────────────┐ ┌─────────────────────────────────┐
│ [IMAGE 4:3]     │ │ 01 — AI VISION & STRATEGY       │
│                 │ │ Vibe CADing™                    │
│                 │ │ (Fraunces 36px)                 │
│                 │ │                                 │
│                 │ │ Description text... (DM Sans)   │
│                 │ │ Patent #GB... · #GB...          │
└─────────────────┘ └─────────────────────────────────┘
Stacks to single column at 640px.

NUMBERED FORMAT: 01, 02, 03... (two-digit, ink-faint)
```

### Pass 5: Responsive Design

| Breakpoint | Change |
|-----------|--------|
| 1100px+ | Full layout: max-width 1100px container, 2-col featured project |
| 768px–1100px | Single column projects, nav still horizontal, container fluid |
| 640px | Vibe CADing featured tile stacks to single column |
| 375px–768px | Nav collapses to hamburger (existing JS retained) |
| 375px | Hero name 48px, section titles 36px, tiles full-bleed |

**Mobile nav open state** (was unspecified):
Open state: cream full-screen overlay, z-index 100, links centered vertically in Fraunces 28px. Close via X button (same position as hamburger). No slide-in — just `opacity: 0 → 1` with `transform: translateY(-8px → 0)`.

### Pass 6: Character Elements — Concrete Specs

| Element | Plan spec | Updated spec |
|---------|-----------|-------------|
| Opening statement | "name in Fraunces 80px + one line" | ✓ now full spec in typography table |
| Numbered milestones | "elegant numbered list" | Format: `01` in ink-faint 11px small-caps, gap: 24px between number and text |
| Pull quote | *"I coined Vibe CADing..."* | Fraunces 32px weight-300, centered, max-width 540px, ink-muted, no quotation marks, preceded by 1px horizontal rule |
| Typewriter | "CSS steps() on hero subtext" | ON typewriter: animates through 3 phrases: "AI products." → "conversational CAD." → "things engineers use every day." — meaningful, not generic |
| Project shelf | "editorial tiles" | ✓ now full anatomy spec above |
| Hover states | "underline grows from left" | ✓ now full CSS spec above |
| Footer personality | "one personal line" | Line: *"Building the future of AI-powered design, one Vibe CADing session at a time."* |

**Typewriter auto-decision: KEEP** — but the phrases must be specific. Three specific phrases rotating = character. Generic "hello world" animation = gimmick. (P5 explicit: specify it now.) [TASTE decision: rotating phrases vs. single static line — surfacing at gate]

### Pass 7: Accessibility

| Check | Status | Fix |
|-------|--------|-----|
| Color contrast — ink on cream | 15.3:1 ✓ | — |
| Color contrast — ink-muted on cream | 4.61:1 ✓ (AA) | bump to #595959 for safety |
| Color contrast — terracotta accent (links/hover) | 4.52:1 (borderline at 12px) | Don't use terracotta for text below 14px |
| Keyboard navigation | Existing nav-toggle keyboard support — verify | Add `tabindex` check |
| prefers-reduced-motion | ✗ missing | Add media query to disable all animations |
| Semantic HTML | Existing `<nav>`, `<section>`, `<article>` ✓ | — |
| Focus indicators | Not specified | Add: `outline: 2px solid var(--accent)` on `:focus-visible` |
| Image alt text | Existing — keep | — |

**Added to implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

### Design Litmus Scorecard

| Dimension | Pre-review | Post-review | Key change |
|-----------|-----------|-------------|-----------|
| 1. Information hierarchy | 6/10 | 8/10 | Role label → ink-faint, not terracotta |
| 2. Interaction states | 4/10 | 8/10 | FOUT fix, hover CSS spec, skeleton |
| 3. AI slop risk | 3/10 | 8/10 | Editorial tile anatomy fully specified |
| 4. Typography | 5/10 | 9/10 | Full scale table + variable font axes + FOUT |
| 5. Color contrast | 7/10 | 9/10 | Ink-muted bump, terracotta rule |
| 6. Responsive | 5/10 | 8/10 | Mobile nav open state, Vibe CADing stack point |
| 7. Character elements | 5/10 | 8/10 | All 7 now have concrete specs |

**Overall: 5/10 → 8/10**

**Design Implementation Checklist:**
- [ ] Use `#B8B8B8` (ink-faint) for role label, NOT terracotta
- [ ] Add `min-height` reservation to `.hero-name` for FOUT
- [ ] Load Fraunces with full variable axes URL
- [ ] Apply `font-variation-settings` per role (see type scale table)
- [ ] Use `::after` + `transform: scaleX()` for all underline hover states
- [ ] Add `background: #E8E3DB` placeholder to project images
- [ ] Apply `prefers-reduced-motion` media query
- [ ] Apply `:focus-visible` outline
- [ ] Typewriter cycles through 3 specific phrases
- [ ] Vibe CADing tile stacks at 640px
- [ ] Mobile nav open = cream full-screen, Fraunces 28px links
- [ ] Footer line: *"Building the future of AI-powered design, one Vibe CADing session at a time."*
- [ ] bump `--ink-muted` to `#595959`

**PHASE 2 COMPLETE.** Claude subagent: 8 concerns (all resolved). Codex: 5 concerns (3 resolved, 2 at gate).
Consensus: typography and tile spec gaps confirmed and fixed. USER CHALLENGE on real artifacts confirmed by both voices.
Passing to Phase 3 (Eng Review).

---

## ENG REVIEW — Phase 3

### Scope Challenge: Actual Code Analysis

**Files changed — confirmed:**
- `index.html` (873 lines) — only loads `style.css` and `app.js`
- `assets/css/style.css` — the dark design system (full rewrite)
- `assets/css/custom.css` — **NOT LOADED** by current index.html. This file is irrelevant to the redesign. Remove from scope.

**Plan correction #1:** "Clear custom.css" is wrong — index.html doesn't load custom.css. The dark theme is entirely in `style.css`. Fix: remove custom.css from implementation table.

**Plan correction #2:** The plan references "main.js" repeatedly — this is WRONG. Current `index.html` only loads `app.js` (line 873). The file `assets/js/main.js` is the old jQuery/Massively template, not used. All JS references should be `app.js`.

**Plan correction #3:** Writing section is NOT empty. The site has actual writing: SOLIDWORKS Blog article ("Augmented Design", January 2026) and Medium articles. Remove the "Writing when I have something worth saying" empty state spec — there's real content.

**Plan correction #4:** "stat counter retained for About section" — WRONG. There is no About section stat counter. The `data-count` counter runs on `impact-number` elements in a separate Impact Stats section (between projects and research). Hero stats card (line 81) has ONE `data-count` element that will be removed — this dies silently. The two impact-section `data-count` elements (lines 414, 426) SURVIVE if the Impact section is kept.

### Architecture ASCII Diagram

```
index.html (873 lines)
├── <head>
│   ├── Google Fonts (Inter + Playfair Display) ← SWAP to Fraunces + DM Sans
│   └── style.css ← FULL REWRITE (only CSS file loaded)
│
├── <nav id="nav"> ← RESTYLE
├── <section class="hero"> ← RESTYLE + REMOVE hero-badge, hero-stats, hero-card
├── <section class="about"> ← RESTYLE
├── <section class="projects"> ← RESTYLE to editorial tiles
├── <section class="impact"> ← RESTYLE (not mentioned in plan — exists!)
├── <section class="research"> ← RESTYLE
├── <section class="writing"> ← RESTYLE (HAS content, not empty)
├── <section class="contact"> ← RESTYLE
│
└── app.js (only JS file)
    ├── Uses: #nav, #nav-toggle, #nav-menu (kept ✓)
    ├── Uses: .nav-link (kept ✓)
    ├── Uses: .animate-fade-up (kept ✓)
    ├── Uses: [data-count] → impact-number elements SURVIVE, hero element dies
    ├── Uses: .project-card → BREAKS if renamed to .project-tile ← RISK
    ├── Uses: .hero-grid, .hero-gradient → removed, silently guarded ✓
    └── initTypingEffect: defined but NEVER CALLED — dead code, safe
```

**IMPACT SECTION RISK:** The plan doesn't mention the Impact Stats section at all. This section exists with impact-cards, animated counters, and a grid layout. If the plan silently fails to style it with the new light design, it will look broken. Adding to scope.

### JS Contract Audit (Critical — should be Step 0)

| JS selector | Used for | Plan impact | Risk |
|-------------|---------|------------|------|
| `#nav` | Nav scroll class | KEEP — kept ✓ | None |
| `#nav-toggle` | Hamburger | KEEP — kept ✓ | None |
| `#nav-menu` | Mobile menu | KEEP — kept ✓ | None |
| `.nav-link` | Close menu, active highlight | KEEP — kept ✓ | None |
| `.animate-fade-up` | Scroll animations | KEEP — kept ✓ | None |
| `[data-count]` | Counter animation | Impact elements survive, hero element dies | LOW — silent |
| `.project-card` | hover translateY(-8px) | Plan uses `.project-tile` naming → BREAKS | **MEDIUM** |
| `.hero-grid` | Parallax | Removed, `if (!heroGrid) return` guards it | None |
| `.hero-gradient` | Parallax opacity | Removed, guarded | None |
| `section[id]` | Active nav highlight | All section IDs preserved ✓ | None |

**FIX:** Keep `.project-card` as a class on project tile elements (add alongside `.project-tile`), OR update `initProjectCardEffects` to use the new class. Recommend option A (dual class) to minimize JS changes.

Also: `initProjectCardEffects` adds `translateY(-8px)` on mouseenter. The plan says "no scale/shadow transforms." These conflict. Resolve: the plan's hover spec replaces JS hover. Remove `.project-card` hover JS by adding `card.removeEventListener` or more cleanly by checking CSS `transition` handles it. **Simplest fix: remove `initProjectCardEffects()` call from `init()` since CSS hover takes over.**

### Section 1: Architecture

Container width strategy (from subagent gap):
```css
.container {
  max-width: 720px;  /* text blocks */
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
.container--wide {
  max-width: 1100px; /* project tiles, image-heavy sections */
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
```
Add this to plan CSS spec. Both heroes/about use `.container`, projects/impact use `.container--wide`.

### Section 3: Test Review

```
NEW UX FLOWS:
  - Hero: Fraunces name loads without layout shift
  - Nav: sticky behavior, mobile hamburger open/close
  - Project tiles: editorial layout, hover underline
  - Typewriter: 3-phrase rotation (CSS-only)
  - Impact section: counter animation (unchanged)
  - Writing section: article list layout

NEW CODEPATHS: None (HTML/CSS only)

TEST PLAN (6 manual checks):
  1. Chrome: Fraunces variable font renders, opsz+WONK axes active
  2. Lighthouse: LCP < 1.5s, accessibility score ≥ 90
  3. Firefox: Font fallback to Georgia works
  4. Mobile 375px: hero name 48px, nav collapses, tiles stack
  5. prefers-reduced-motion: all animations disabled
  6. JS regression: nav toggle works, counters animate (impact section)
```

### Section 4: Performance

| Item | Concern | Status |
|------|---------|--------|
| Fraunces variable font | ~50-60KB subset for opsz+wght+WONK axes | Acceptable |
| DM Sans | ~20KB for 3 weights | Acceptable |
| Font loading | `display=swap` + min-height reservation | ✓ |
| CSS animations | CSS-only, no JS | ✓ |
| Typewriter | Pure CSS `@keyframes` + `steps()` | ✓ |
| Images | Lazy-loaded, unchanged | ✓ |

### Section 5: Code Quality

**Typewriter animation CSS spec** (the hardest CSS, flagged by subagent as HIGH gap):

The 3-phrase typewriter using CSS `steps()` requires:
```css
/* phrases: "AI products." → "conversational CAD." → "things engineers use every day." */
/* Longest: "things engineers use every day." = 32 chars */
/* Total cycle: ~12s */

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--accent);
  animation: 
    typewriter1 1.5s steps(14) 0.5s forwards,  /* "AI products." — 14 chars */
    erase1 0.8s steps(14) 2.5s forwards,
    typewriter2 1.8s steps(20) 3.5s forwards,  /* "conversational CAD." — 20 chars */
    erase2 0.8s steps(20) 5.8s forwards,
    typewriter3 2.5s steps(32) 6.8s forwards;  /* "things engineers use every day." — 32 chars */
}
@keyframes typewriter1 { from { width: 0 } to { width: 14ch } }
@keyframes erase1 { from { width: 14ch } to { width: 0 } }
@keyframes typewriter2 { from { width: 0 } to { width: 20ch } }
@keyframes erase2 { from { width: 20ch } to { width: 0 } }
@keyframes typewriter3 { from { width: 0 } to { width: 32ch } }
```
This is non-trivial. Specify in the plan's Implementation section so the implementer doesn't guess.

**HTML skeleton for project tile** (subagent gap — needed to prevent divergence):
```html
<!-- Standard tile (non-featured): -->
<article class="project-tile project-card" data-index="02">
  <div class="project-tile-image">
    <img src="..." alt="..." loading="lazy">
  </div>
  <div class="project-tile-body">
    <span class="project-category">CATEGORY</span>
    <h3 class="project-title">Title</h3>
    <p class="project-desc">One sentence.</p>
    <div class="project-tags"><span class="tag">Tag</span></div>
  </div>
</article>

<!-- Featured tile (Vibe CADing): -->
<article class="project-tile project-tile--featured project-card" data-index="01">
  <div class="project-tile-image">...</div>
  <div class="project-tile-body">...</div>
</article>
```
Note: `.project-card` class kept alongside `.project-tile` to preserve JS contract.

### Section 6: Implementation Order Correction

**Corrected step order:**
```
0. JS contract audit (which classes must survive) ← MOVED TO FIRST
1. CSS variables + reset + container strategy
2. Typography scale (Fraunces + DM Sans import)
3. Navigation redesign  
4. Hero redesign (remove hero-badge, hero-stats, hero-card from HTML)
5. About redesign
6. Projects → project tiles (HTML skeleton spec above)
7. Impact section styling (ADDED — was missing from plan)
8. Research section
9. Writing section
10. Contact/Footer
11. Responsive pass (mobile breakpoints — MOVED BEFORE animation)
12. Micro-animation pass (MOVED AFTER responsive — typewriter needs final sizes)
13. Accessibility pass (prefers-reduced-motion, focus-visible)
14. Final review (Lighthouse, cross-browser)
```

### Failure Modes Registry

| Mode | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| FOUT hero layout shift | High | Medium | min-height reservation ✓ |
| .project-card JS breaks | High | Low | dual-class approach ✓ |
| Fraunces WONK axis not loaded | Medium | Medium | correct CDN URL in plan ✓ |
| Impact section unstyled | Medium | High | Added to scope ✓ |
| prefers-reduced-motion not respected | Low | Medium | media query added ✓ |
| Mobile nav open state undefined | High | Medium | cream full-screen spec ✓ |

### ENG COMPLETION SUMMARY

| Section | Status | Issues Found |
|---------|--------|-------------|
| Scope challenge | 4 plan corrections made | custom.css not loaded, main.js wrong, writing not empty, impact section missing |
| Architecture | Clean + container strategy added | 2 items |
| JS contract | 1 real risk + 1 conflict resolved | project-card dual-class fix |
| Test plan | 6-item manual checklist | — |
| Performance | Acceptable | 0 |
| Code quality | Typewriter CSS spec + HTML skeleton added | 2 items |
| Step order | Corrected — 14 steps (was 12) | JS audit to step 0, responsive before animation |
| Failure modes | 6 modes mapped | — |

**PHASE 3 COMPLETE.** Claude subagent: 5 concerns (all addressed). Codex: 5 concerns (all addressed).
Key fixes: custom.css irrelevant, app.js not main.js, .project-card dual-class, impact section added, step order corrected.
Passing to Phase 4 (Final Approval Gate).

## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|---------|----------------|-----------|-----------|---------|
| 1 | CEO | Mode: SELECTIVE EXPANSION | Mechanical | P3 pragmatic | Redesign, not greenfield; user wants character, not maximum scope | SCOPE EXPANSION |
| 2 | CEO | Approach B (CSS rewrite + HTML tweaks) | Mechanical | P5 explicit | Right fit for scope; Tailwind is overengineering | A (flip only), C (Tailwind) |
| 3 | CEO | Accept SEO/OG meta tags | Mechanical | P1 completeness | In blast radius, XS effort, closes material gap | Defer |
| 4 | CEO | Accept pull quote specification | Mechanical | P5 explicit | Prevents bland default at implementation time | Leave to implementer |
| 5 | CEO | Accept photo treatment spec | Mechanical | P5 explicit | Eliminates implementer guesswork on About section | Leave to implementer |
| 6 | CEO | Accept mobile typography scale | Mechanical | P5 explicit | Ambiguity HOUR 2-3 temporal flag — resolve now | Leave to implementer |
| 7 | CEO | Accept project images: keep them | Mechanical | P5 explicit | "Drop images" is a structural change not in plan intent | Drop images |
| 8 | CEO | Accept prefers-reduced-motion | Mechanical | P1 completeness | Accessibility, minimal effort | Skip |
| 9 | CEO | Defer dark mode | Mechanical | P3 pragmatic | User just escaped dark site; premature | Accept |
| 10 | CEO | "Vibe CADing as structural spine" | **TASTE** | P1 vs P3 conflict | Could be powerful or niche — surfacing at gate | Auto-accept |
| 11 | Design | Role label: ink-faint, not terracotta | Mechanical | P5 explicit | Terracotta = accent moments only; label in terracotta competes with name | Keep terracotta |
| 12 | Design | Add FOUT min-height reservation | Mechanical | P1 completeness | Prevents layout shift on font load | Skip |
| 13 | Design | Full variable font axes for Fraunces | Mechanical | P5 explicit | opsz + WONK axes are the source of character at hero size | Static font only |
| 14 | Design | Hover state: ::after scaleX mechanism | Mechanical | P5 explicit | Explicit CSS prevents 5 different interpretations | Leave to implementer |
| 15 | Design | Editorial tile anatomy fully specified | Mechanical | P5 explicit | "Editorial tiles" without spec = AI slop | Vibe description |
| 16 | Design | Typewriter phrases: 3 specific ones | Mechanical | P5 explicit | Generic animation = gimmick; specific phrases = character | Remove animation |
| 17 | Design | Typewriter keep vs. remove | **TASTE** | P5 vs subagent | Codex says gimmick; plan says character — both could be right | Auto-remove |
| 18 | Design | Fraunces weight 400 vs. 500 | **TASTE** | Aesthetic | 400=literary, 500=authoritative — user preference | Auto-pick 400 |
| 19 | Design | Rotating typewriter vs. static tagline | **TASTE** | P5 vs personality | Bold choice — surfacing at gate | Auto-static |
| 20 | Design | bump ink-muted to #595959 | Mechanical | P1 completeness | Safety margin on AA contrast | Keep borderline |
| 21 | Eng | Remove custom.css from scope | Mechanical | P5 explicit | Not loaded by index.html — irrelevant | Clear it anyway |
| 22 | Eng | Rename main.js → app.js in plan | Mechanical | P5 explicit | Only app.js is loaded | Keep main.js ref |
| 23 | Eng | Writing section has content — remove empty state | Mechanical | P5 explicit | Real blog posts exist | Keep placeholder |
| 24 | Eng | Add Impact section to scope | Mechanical | P1 completeness | Section exists, would look broken if unstyled | Skip |
| 25 | Eng | Dual-class .project-card + .project-tile | Mechanical | P5 explicit | Preserves JS contract without changing app.js | Rename only |
| 26 | Eng | Remove initProjectCardEffects() | Mechanical | P5 explicit | CSS hover takes over; JS translateY conflicts with plan | Keep JS hover |
| 27 | Eng | Add .container--wide class spec | Mechanical | P5 explicit | Needed for 720px vs 1100px container strategy | Single container |
| 28 | Eng | Add typewriter CSS spec to plan | Mechanical | P5 explicit | Hardest CSS in plan, zero spec — implementer would guess | Describe in prose |
| 29 | Eng | Add HTML skeleton for project tile | Mechanical | P5 explicit | Prevents 5 different HTML interpretations | Leave to implementer |
| 30 | Eng | Correct step order (14 steps) | Mechanical | P3 pragmatic | JS audit first, responsive before animation | Keep old order |

---

## CROSS-PHASE THEMES

**Theme: Narrative gap** — flagged in Phase 1 (CEO) AND Phase 2 (Design), independently.
Both Claude subagent and Codex in both phases flagged that "keep all content unchanged" produces a cosmetic redesign. The visual changes are necessary but not sufficient. Proof artifacts (a CAD screenshot, a patent drawing) and sharper hero copy would meaningfully increase character. High-confidence signal — 4/4 voice-passes flagged it.

**Theme: Editorial tile spec** — flagged in Phase 2 (Design) AND Phase 3 (Eng).
"Editorial tiles" without concrete spec is a known implementer trap. Fixed in Phase 2 (anatomy diagram) and Phase 3 (HTML skeleton + CSS notes).

---

## FINAL APPROVAL GATE — /autoplan Review Complete

### Plan Summary
This plan redesigns kishorepagidi.com from a dark SaaS-style portfolio to a light editorial personal site. It rewrites `style.css` with a new warm-cream design system (Fraunces variable font + DM Sans, terracotta accent), makes targeted HTML changes for editorial layout, adds SEO meta tags, and fixes 4 existing plan gaps discovered during review.

### Decisions Made: 30 total (27 auto-decided, 3 taste decisions, 1 user challenge)

---

### USER CHALLENGE (both models disagree with your stated direction)

**Challenge 1: "All content unchanged"**
You said: Keep all copy, project descriptions, and images identical — this is a visual-only redesign.
Both models recommend: Treat hero tagline, about bio, and project descriptions as light-touch editable. Add 1-2 real proof artifacts (a CAD screenshot, patent drawing).
Why: Visual redesign with the current generic hero text ("Building the Future of AI-Powered Design") stays generic no matter how good the typography is. The site has a unique story (coined Vibe CADing, filed 4 patents before Vibe Coding was mainstream) that isn't surfacing clearly.
What we might be missing: You may have reasons to freeze copy (legal review, busy schedule, HR/employer sensitivity about highlighting IP work).
If we're wrong, the cost is: A slightly larger implementation scope (~2hrs extra). Easily reverted. Low risk of regret.

Your call — your original direction stands unless you explicitly change it.

---

### Your Choices (taste decisions)

**Choice 1: Fraunces headline weight — 400 vs. 500** (from Phase 2)
I recommend **400** — lighter, more editorial, more confidence. But 500 is more authoritative, reads better for "AI PM at SOLIDWORKS" positioning.
If you pick 500: the site feels more product-decisive, less literary. Both are valid.

**Choice 2: Typewriter animation — 3 rotating phrases vs. static tagline** (from Phases 2+3)
I recommend **3 rotating phrases** ("AI products." → "conversational CAD." → "things engineers use every day.") — it shows range and is specific enough to not feel gimmicky. Codex flagged it as potentially gimmicky; the Claude subagent liked it.
If you pick static: Cleaner, faster, zero risk of feeling dated. "I build AI into things that engineers use every day." as a single line is strong.

**Choice 3: "Vibe CADing" as structural spine** (from Phase 1)
I recommend **yes** — make "Vibe CADing™" a standalone featured section heading, not just a project title. It's the one thing on this site no one else has.
If you say no: Standard project card approach. Safer. Less memorable.

---

### Auto-Decided: 27 decisions [see Decision Audit Trail in plan file]

### Review Scores
- **CEO:** SELECTIVE EXPANSION mode. SEO gap found and fixed. User challenge on content unchanged.
  Voices: Codex — "trades one cliché for another, needs narrative." Subagent — "Vibe CADing is the unfair advantage."
  Consensus: 3/6 confirmed, 2 disagrees → at gate.
- **Design:** 5/10 → 8/10. Critical: FOUT fix + ink-faint for role label. High: editorial tiles fully specced, hover CSS defined, typography system complete.
  Voices: Codex — "needs real artifacts and signature system." Subagent — "all 7 character elements now concrete."
  Consensus: 3/7 confirmed, 1 disagree → typewriter debate resolved in plan.
- **Eng:** 4 plan corrections. Critical JS contract audit. Impact section missing from plan — added.
  Voices: Codex — "main.js wrong, custom.css noise, tiles underspecced." Subagent — "step order, container strategy, HTML skeleton."
  Consensus: 5/6 confirmed.

### Cross-Phase Themes
**Theme: Narrative/proof artifacts** — flagged in CEO (Phase 1) and Design (Phase 2). Both Claude subagent and Codex independently. High-confidence signal — this is the biggest remaining risk.
**Theme: Editorial tile spec** — flagged in Design + Eng. Fully resolved in both phases.

### Deferred to TODOS

- Dark mode toggle (prefers-color-scheme, CSS-only)
- Reading time on writing items
- Interactive resume format
- Image optimization pipeline
- Contact form (email link is sufficient)

## GSTACK REVIEW REPORT

| Review | Phase | Runs | Status | Findings |
|--------|-------|------|--------|----------|
| CEO Review | 1 | 1 | issues_open | SEO gap fixed; user challenge on content unchanged |
| Design Review | 2 | 1 | issues_open | 5/10→8/10; FOUT, tiles, typography all fixed; 1 taste at gate |
| Eng Review | 3 | 1 | clean | 4 plan corrections; JS contract, step order, impact section |
| DX Review | — | 0 | skipped | No developer-facing scope detected |
| Dual Voices | all | 3 | issues_open | CEO 3/6 confirmed; Design 3/7; Eng 5/6 |

**VERDICT:** 30 decisions made (27 auto, 3 taste). 1 user challenge on "content unchanged." Ready for implementation after user approves gate.
