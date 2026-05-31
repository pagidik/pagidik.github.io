# Design System — kishorepagidi.com

## Product Context
- **What this is:** Personal portfolio for an AI Product Manager
- **Who it's for:** Recruiters, collaborators, engineers, industry peers, journalists
- **Space/industry:** AI, product management, engineering software (CAD), robotics
- **Project type:** Personal portfolio / editorial site

## Aesthetic Direction
- **Direction:** Bold Minimal with engineering undertones
- **Decoration level:** Intentional (warm neutral surfaces, subtle accent usage)
- **Mood:** Confident and technical. A PM with real taste and real patents. Not SaaS, not corporate, not a template. A person who coined a trademark and shipped it.
- **Reference sites:** nicolasbackal.com, olhalazarieva.com, samsy.ninja (character + speed)

## Typography
- **Display/Hero:** Syne 700/800 — geometric, futuristic, strong personality; distinctive in the PM/eng space
- **Body:** Plus Jakarta Sans 300–600 — warm, humanist grotesque, highly readable
- **Mono:** JetBrains Mono 400/500 — for stats, labels, dates, patent numbers; signals technical credibility
- **Loading:** Google Fonts CDN (Syne + Plus Jakarta Sans + JetBrains Mono, display=swap)
- **Scale:** hero 4–8.5rem | h2 2–3rem | body 1rem | small 0.875rem | label 0.6875rem

## Color
- **Approach:** Restrained (one accent, warm neutrals, high contrast)
- **Background:** `#F8F7F3` — warm off-white, not clinical
- **Background alt:** `#EDEBE4` — slightly warmer surface
- **Ink:** `#111111` — near-black, confident
- **Ink mid:** `#3D3D3D`
- **Ink muted:** `#6A6A6A`
- **Ink faint:** `#B8B0A6`
- **Accent:** `#E8450A` — burnt orange, distinctive in tech/PM space; not generic blue, not "startup purple"
- **Border:** `#E2DDD6`
- **White:** `#FFFFFF`
- **Dark section:** `#111111` bg, white type (Impact section)

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Section padding:** 6rem block (4rem on mobile)
- **Gap between cards:** 1.25rem

## Layout
- **Approach:** Grid-disciplined with editorial card compositions
- **Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Max content width:** 1160px (container) / 1380px (container--wide)
- **Border radius:** sm:6px md:12px lg:20px full:100px

## Motion
- **Approach:** Intentional — fast entrance animations, smooth state transitions
- **Hero:** CSS `@keyframes heroIn` — fires on load, no JS dependency, no invisible flash
- **Scroll:** IntersectionObserver `.animate-fade-up` — 0.35s ease, below-fold only
- **Transitions:** 0.15s (fast UI), 0.28s (hover), 0.45s (slow)
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — snappy spring feel
- **Typewriter:** JS-driven cycling (55ms/char type, 28ms/char delete), 3 phrases

## Section Order
1. Hero (CSS animated, immediately visible)
2. Writing / Blog (featured, prominent at top)
3. Selected Work (projects)
4. Impact (dark section, stats)
5. About
6. Research
7. Contact
8. Footer

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-30 | Chose Syne over Fraunces | Fraunces felt literary/lifestyle; Syne reads technical+bold — right for AI PM with engineering background |
| 2026-05-30 | Replaced terracotta with `#E8450A` | More distinctive and energetic; fits "Vibe CADing" energy and engineering world |
| 2026-05-30 | Hero uses CSS keyframes not .animate-fade-up | Eliminated blank hero flash — hero must be visible instantly without JS |
| 2026-05-30 | Writing section moved to top (position 2) | User explicitly requested blogs prominent at top; active thought leadership should be first impression |
| 2026-05-30 | JetBrains Mono for labels/stats | Adds technical credibility; fits the robotics+patents+CAD background |
| 2026-05-30 | Fixed blog-data.js syntax error | Orphaned content after IIFE close caused parse failure, breaking all blog routing |
| 2026-05-30 | Stat changed 3.7M to 8M+ | User correction — actual SOLIDWORKS user base is 8M+ professionals |
