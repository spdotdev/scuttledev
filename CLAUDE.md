# Scuttle Development Website

## Project
- Single-page Vite static site, all content in `index.html`
- Live at https://scuttle.dev (deployed via GitHub Pages on push to `main`)
- Styles in `src/style.css`, uses CSS variables for theming (dark mode support)

## Dev
- `npm run dev` to start local Vite server
- `npm run generate-pdfs` to regenerate legal PDFs from markdown
- `npm run build` runs PDF generation then Vite build
- SVG icons are inline in HTML (not an icon library)
- Puppeteer (used by md-to-pdf) requires `--no-sandbox` flag on this system

## Structure
- `docs/terms_conditions/claude/` — T&C markdown sources (EN + NL)
- `docs/nda/claude/` — NDA markdown sources (EN + NL)
- `docs/*/gemini/` — original Gemini-generated drafts (reference only)
- `scripts/generate-pdfs.js` — converts all markdown legal docs to styled PDFs
- `public/legal/` — generated PDFs served as static assets
- Footer only links English T&C; Dutch versions exist as PDFs but aren't linked

## Git
- Push to `main` triggers GitHub Actions deploy
- Repo: https://github.com/spdotdev/scuttledev.git
