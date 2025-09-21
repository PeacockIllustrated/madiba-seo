
# Madiba – SEO Overhaul Static Site v2 (Deploy to Netlify)

A fast, accessible, SEO‑optimised static site with **advanced micro‑interactions**: magnetic buttons + ripple, 3D tilt cards, scroll progress bar, animated hero orbs, readiness progress, and a back‑to‑top FAB. All guarded by `prefers-reduced-motion` for accessibility.

## Highlights
- Semantic HTML with strong H1/H2 hierarchy; descriptive anchors.
- JSON‑LD: Organization, WebSite+SearchAction, FAQPage, BreadcrumbList.
- **Micro‑interactions**: reveal-on-scroll, magnetic buttons, ripple on click, tilt cards, progress bar, FAB, readiness progressline.
- Netlify-ready contact form; sitemap & robots; OpenGraph/Twitter cards.
- Brand-consistent: navy `#0a2a3f`, blue `#1d80b9`, green `#60c659`.

## Structure
(identical to v1; see file tree)

## Deploy
1. Push this folder to GitHub.
2. Netlify → New site from Git → select repo.
3. Build command: (empty), Publish directory: `/`.
4. Add domain + HTTPS.

## Notes
- Interactions are **SEO-safe** (no content hidden from crawlers, performance-light, motion respects `prefers-reduced-motion`).
- Replace SVG placeholders with real assets before go-live.
