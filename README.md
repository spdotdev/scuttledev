# Scuttle Development

Professional landing page for Scuttle Development.

- <https://spdotdev.github.io/scuttledev/>
- <https://scuttle.dev>

## Features

- **Modern Design**: Sleek, responsive interface with glassmorphism effects and smooth gradients.
- **Dark/Light Mode**: Fully functional theme toggle with persistence.
- **Responsive**: Adapts to all screen sizes.
- **Performance**: Built with Vite for optimal speed.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Legal Documents (PDF Generation)

The Terms & Conditions and Algemene Voorwaarden are maintained as Markdown in `docs/terms_conditions/claude/` and converted to styled PDFs for the website.

```bash
# Generate PDFs (outputs to public/legal/)
npm run generate-pdfs
```

This runs automatically as part of `npm run build`. The generated PDFs are served at `/legal/TERMS_AND_CONDITIONS.pdf` and `/legal/ALGEMENE_VOORWAARDEN.pdf`.

To update the documents, edit the Markdown sources and re-run the command.

## Deployment (GitHub Pages)

To deploy to GitHub Pages:

1. Update `vite.config.js` (create if missing) to set the base path to your repository name:
   ```js
   // vite.config.js
   export default {
     base: '/<REPO_NAME>/',
   }
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Push the content of the `dist` folder to a `gh-pages` branch, or configure GitHub Pages to deploy from the root of a branch containing the build artifacts.
   
   *Alternative:* Use a GitHub Action to build and deploy automatically.

