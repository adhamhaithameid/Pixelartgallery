# Pixel Art Icon Pack

A React + Vite pixel-art portfolio adapted for GitHub Pages publishing.

## Design Source

Figma: [Pixel Art Icon Pack](https://www.figma.com/design/YVoBhBQ2U258u45APVbzCO/Pixel-Art-Icon-Pack?node-id=0-1&t=UmBUqfkm34w8N21G-1)

## Tech Stack

- React 18
- TypeScript
- Vite 6
- React Router (hash routing for GitHub Pages)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This repo includes `.github/workflows/deploy-pages.yml`.

1. Push to `main`.
2. GitHub Actions builds and deploys `dist/` to Pages.
3. Ensure repository settings have Pages source set to **GitHub Actions**.

## Project Structure

- `src/app/components/` UI pages and components
- `src/app/routes.tsx` app routes
- `src/assets/` static image assets
- `vite.config.ts` Vite config with relative `base` for Pages
