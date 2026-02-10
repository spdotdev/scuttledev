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
- `scripts/generate-pdfs.js` — converts markdown T&Cs to styled PDFs
- `public/legal/` — generated PDFs served as static assets
- `docs/nda/` — NDA documents

## Git
- Push to `main` triggers GitHub Actions deploy
- Repo: https://github.com/spdotdev/scuttledev.git
