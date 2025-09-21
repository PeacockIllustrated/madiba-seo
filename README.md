
# Madiba – SEO Overhaul Static Site (Deploy to Netlify)

A fast, accessible, SEO‑optimised static site that mirrors Madiba’s brand and information architecture with improved copy, schema and interactivity.

## Highlights
- Semantic HTML with clean H1/H2 hierarchy and descriptive anchors.
- JSON‑LD: Organization, WebSite (with SearchAction), FAQPage, BreadcrumbList.
- Interactive components: reveal-on-scroll, animated proof counters, Readiness self‑assessment.
- Netlify-ready contact form (`data-netlify="true"`), sitemap & robots.
- System fonts only (fast); compressed inline SVGs as placeholders.
- Brand tokens: navy `#0a2a3f`, blue `#1d80b9`, green `#60c659`.

## Structure
```
/
  index.html
  robots.txt
  sitemap.xml
  netlify.toml
  /assets
    /css/styles.css
    /js/main.js
    /img/logo.svg
  /services
    s4hana.html
    rise-grow.html
    analytics.html
    btp.html
    managed.html
  /solutions
    active.html
    snap.html
    finex.html
  /insights/index.html
  /about/index.html
  /contact/index.html
```

## Deploy
1. Push this folder to GitHub.
2. In Netlify → **New site from Git**, select the repo.
3. Build command: *(empty)*, Publish directory: `/`.
4. Add custom domain and enable HTTPS.

## Next steps
- Replace SVG placeholders with real logos, images and case study graphics.
- Wire the Readiness Tool to a backend if desired.
- Add more Insights articles and link them back to services using exact‑match anchors.
