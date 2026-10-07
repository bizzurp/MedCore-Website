# MedCore Website (v2 — Cedar-inspired)

Marketing landing page for MedCore. Same content as v1, rebuilt with a Cedar-style
design system: warm paper background, layered hero visuals (RCM dashboard chart,
live ledger, phone mock), logo marquee, bento platform grid, scroll-reveal motion.

## Local development

```bash
cd website
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Production build

```bash
npm run build    # outputs to website/dist/
npm run preview  # preview the production build locally
```

## Deploy to Vercel

- Push this `website/` folder's contents to a GitHub repo.
- In Vercel: **Add New Project → Import** the repo.
  - Framework preset: **Vite** (auto-detected via `vite.config.js`)
  - Root directory: repo root (if the repo *is* the website) — or set to `website`
    if you push the whole MedCore folder.
  - Build command: `npm run build`, output: `dist` (already in `vercel.json`).
- Every push to `main` redeploys automatically.

## Security

All external dashboard links (`https://vercel.app`) use
`target="_blank" rel="noopener noreferrer"`.
