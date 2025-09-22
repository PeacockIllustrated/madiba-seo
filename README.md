# Madiba SEO Site

> **Static, SEO-first marketing site** for Madiba (SAP S/4HANA, RISE, Analytics, BTP, Managed Services, Solutions).  
> Built for **speed, accessibility, crawlability, and long-term search authority**.  
> Deployed to **Netlify**.

---

## 🚀 Tech Stack

- **Vanilla HTML + CSS + JS** (no frameworks → fast + crawlable).
- **Netlify** for deploys, redirects, and hosting.
- **Design tokens** centralised in CSS (`:root`).
- **Micro-interactions only** (magnetic buttons, tilt cards, reveal on scroll).

---

## 📂 Project Structure

```
/
├─ index.html
├─ services/           # All service detail pages
├─ solutions/          # Solution pages (ACTIVE, SNAP, FINEX)
├─ insights/           # Insights hub
├─ about/              # Company overview
├─ contact/            # Contact form
├─ assets/
│  ├─ css/styles.css   # Tokens, layout, components, forms
│  ├─ js/main.js       # Interactions, scroll bar, FAB
│  └─ img/             # Logos & illustrations
├─ sitemap.xml
├─ robots.txt
├─ netlify.toml
└─ README.md (this file)
```

---

## 🎨 Design & Brand

- **Colors**:  
  - Blue `#1d80b9`  
  - Green `#60c659`  
  - Navy `#0a2a3f`  
- **Typography**: System UI stack (fast + neutral).
- **Spacing**: CSS grid with `.container`, `.grid`, `.section`.
- **Components**: `.card`, `.btn`, `.tilt`, `.reveal`, `.accordion`.

---

## ♿ Accessibility & Motion

- **Focus**: Always visible via custom focus rings.  
- **Contrast**: WCAG AA+ maintained.  
- **Reduced motion**: Respects `prefers-reduced-motion`.  
- **ARIA**: Used for nav, live regions, and labelled regions.

---

## 🔎 SEO Rules

- Each page must have:
  - Unique `<title>` + `<meta description>`.
  - One `<h1>`, logical heading hierarchy.
  - `<link rel="canonical">` pointing to production domain.
  - OpenGraph + Twitter card tags.
  - JSON-LD schema:
    - `Organization` on every page.
    - `WebSite + SearchAction` on homepage.
    - `FAQPage` for FAQs.
    - `BreadcrumbList` on inner pages.
- **Internal links**: descriptive text (no “read more”).  
- **Images**: `alt` text + `width/height`.  
- **Sitemap/robots**: update after new pages.

---

## 🧰 Interactions (JS)

- **Reveal on scroll** (IntersectionObserver).  
- **Magnetic buttons + ripple** click effect.  
- **3D tilt** cards.  
- **Scroll progress bar**.  
- **Back-to-top FAB**.  
- **Readiness progressline** in forms.

---

## 📋 Forms

- Use `<form class="card">` for distinct styling.  
- Inputs/selects: strong focus rings, generous padding.  
- Radios/checkboxes: wrap in `.choice` for scannable cards.

```html
<div class="choice-group">
  <label class="choice">
    <input type="radio" name="q1" value="2" required>
    <span><strong>Mostly standardised</strong><span class="sub">Stable processes</span></span>
  </label>
</div>
```

- Contact form = **Netlify form**.  

---

## ➕ Adding a New Page

1. Duplicate an existing page.  
2. Update `<title>`, `<meta description>`, canonical.  
3. Ensure single H1 + proper H2/H3.  
4. Add internal links.  
5. Add images with alt + dimensions.  
6. Update `sitemap.xml`.  
7. Commit → deploy → verify in Search Console.

---

## 🔀 Redirects & Authority

- Use **301 redirects** in `netlify.toml` if URLs change.

```toml
[[redirects]]
  from = "/old-slug/"
  to   = "/services/s4hana.html"
  status = 301
```

- Never mass-redirect to homepage.  
- Always point to the closest topical match.  

---

## 📊 Performance Targets

- **LCP < 2.5s** (mobile).  
- **CLS < 0.05**.  
- **TBT < 150ms**.  
- No heavy libs (>10KB gzipped).  

---

## 📝 QA Checklist

- [ ] Unique title/meta description.  
- [ ] One H1.  
- [ ] Canonical set.  
- [ ] JSON-LD valid (Rich Results Test).  
- [ ] All images alt + size set.  
- [ ] Anchor text descriptive.  
- [ ] Lighthouse ≥90 across Perf, A11y, SEO.  
- [ ] Keyboard nav works.  
- [ ] Sitemap updated.  
- [ ] Redirects added (if paths changed).  

---

## 📈 Tooling

- **Lighthouse** for performance/SEO.  
- **Google Search Console** for coverage + sitemap.  
- **ScreamingFrog** for crawl checks.  
- **Rich Results Test** for schema.  

---

## 🛣️ Roadmap

- Industry pages → on domain, interlink with services.  
- Case studies with outcome metrics + `CaseStudy` schema.  
- Insights blog scale-out.  
- Replace placeholder visuals with final brand assets.  

---

## 👤 Contact

- For SEO/content → check this README before changes.  
- For design/UX → stick to tokens; propose updates via PR.  
- For migrations → map old → new URLs + test redirects.  

---

👉 **Golden Rule**: Keep it **fast, semantic, stable URLs, and SEO-rich**. Everything else is secondary.  
