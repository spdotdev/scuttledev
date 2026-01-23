# Scuttle Development

Professional landing page for Scuttle Development.

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
