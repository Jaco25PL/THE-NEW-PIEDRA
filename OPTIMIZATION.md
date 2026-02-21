# Optimization Plan — Piedra Construcciones

Goal: mobile LCP < 2.5s, CLS < 0.1, initial transfer < 2MB.
Measure with Lighthouse (mobile, incognito) + PageSpeed Insights after each phase.

---

## What's Already Done

- PNG/JPG assets in `public/images` converted to `.webp`
- Hero slider (PiedraHero): only current + previous images rendered; next image prefetched; slider pauses when off-screen
- Route-level code splitting via `React.lazy` + `Suspense` in `src/App.jsx`
- Below-the-fold lazy mounting on `Construir`, `Remodelar`, and `Nosotros` via `LazySection`
- Removed duplicate Montserrat `@font-face`; `font-display: swap` on all remaining fonts
- Removed unused font families (TaiHeritage, LinuxLibertine) from `src/index.css`
- Long-term cache headers added in `vercel.json` for `/images`, `/fonts`, `/assets`
- Meta Pixel deferred to `DOMContentLoaded` in `index.html`
- Vite manual chunk splitting for react, react-dom, react-router-dom, react-helmet-async
- CSS background images replaced with `<picture>` elements in CTA, FAQ, and Contacto
- CLS prevention: `aspect-ratio: 4/3` on AboutUs image containers; `width`/`height` added to all `<img>` tags across components

---

## Pending Work — Split by Who Does It

### I (Claude) can implement these directly

*(All code-side items are complete. Only the items below requiring external tools remain.)*

---

### You need to do these (requires tooling outside the codebase)

**G. Generate AVIF versions + responsive sizes**
- For every image in `public/images` generate three sizes: 480w, 960w, 1440w in AVIF (primary) and WebP (fallback)
- Tool options: `sharp` CLI, `squoosh-cli`, or `imagemagick`
- Example with sharp CLI:
  ```bash
  npx @squoosh/cli --avif '{}' --webp '{}' --resize '{width:480}' -d public/images/480 public/images/works/*.webp
  ```
- After generating, update `<img srcset="..." sizes="...">` in components (I can write the JSX once you have the files)

**H. Subset fonts to WOFF2**
- Tools: `pyftsubset` (fonttools) or `glyphhanger`
- Keep only weights actually used: Montserrat (400, 600), SabonNext (400, 900, italic), AbhayaLibre (400, 700)
- Subset to Latin + Spanish glyphs only (`--unicodes=U+0020-007E,U+00A0-00FF,U+00C0-017F`)
- Target: all fonts combined < 300KB
- After subsetting, update `@font-face` src in `src/index.css` to point to the new `.woff2` files (I can update the CSS once you have them)

**I. Confirm Vercel has Brotli/Gzip enabled**
- Vercel serves Brotli automatically for text assets — no action needed
- But verify by checking response headers on a deployed asset: `curl -I -H "Accept-Encoding: br" https://piedraconstrucciones.com.uy/assets/...`

---

## Performance Budgets (Targets)

| Metric | Target |
|---|---|
| Mobile LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Initial transfer | < 2MB |
| Hero image | < 200KB (AVIF) / < 350KB (WebP) |
| Total fonts | < 300KB (WOFF2, subset) |
| JS initial bundle | < 200KB gzip |

---

## Measurement Checklist

Run after each phase:
- Lighthouse mobile (incognito) on `/` and `/construir`
- PageSpeed Insights for both
- `vite build --mode production` then check `dist/` bundle sizes

---

## File Map (Key Files)

| File | What needs changing |
|---|---|
| `vite.config.js` | Manual chunking, compression plugin |
| `index.html` | Defer Meta Pixel |
| `src/index.css` | Remove TaiHeritage + LinuxLibertine @font-face; update to WOFF2 when ready |
| `src/pages/Home.jsx` | Add LazySection for below-fold content |
| `src/pages/Nosotros.jsx` | Add LazySection for below-fold content |
| `src/components/features/CTA/CTA.jsx` | Replace CSS bg with `<picture>` |
| `src/components/features/FAQ/FAQ.jsx` | Replace CSS bg with `<picture>` |
| `src/pages/Contacto.jsx` | Replace CSS bg with `<picture>` |
| All JSX with `<img>` | Add width/height for CLS |
