# MedCore — Public Marketing Site

The public-facing marketing website for **MedCore**, the financial intelligence and
multi-payer reconciliation layer for Philippine healthcare. This is a standalone
single-page site, separate from the operational dashboard in `../MedCore1-main/`.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin. There is no
  `tailwind.config.js` or `postcss.config.js` — v4 is CSS-first, so all design tokens
  live in an `@theme` block inside `src/index.css`.
- **oxlint** for linting
- No external icon or animation library — icons are an inline SVG set in
  `src/components/Icon.jsx`, and motion is plain CSS keyframes.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # run oxlint
```

Requires Node 18+ (developed on Node 24).

## Structure

```
website/
├── index.html                 # document head: title, meta description, OG tags, fonts, favicon
├── vite.config.js             # Vite + React + Tailwind v4 plugins
├── .oxlintrc.json             # lint config
└── src/
    ├── main.jsx               # React entry point
    ├── index.css              # Tailwind import + @theme design tokens + keyframes
    ├── App.jsx                # composes all sections in order
    └── components/
        ├── Icon.jsx           # inline SVG icon set (no dependency)
        ├── Navbar.jsx         # sticky nav, scroll-aware background, mobile menu
        ├── Hero.jsx           # headline, CTAs, dashboard mockup with waterfall
        ├── StatsBar.jsx       # sourced market statistics
        ├── Problem.jsx        # four-card problem grid
        ├── Pillars.jsx        # the 5-pillar value engine
        ├── Modules.jsx        # eight product modules
        ├── Pricing.jsx        # three SaaS tiers + value-linked usage streams
        ├── Compliance.jsx     # regulatory alignment (RA statutes, PhilHealth circulars)
        ├── Contact.jsx        # demo-request form (client-side validated)
        └── Footer.jsx         # link columns + legal line
```

## Design system

Colors, typography, and interaction patterns follow `../design.md` (a Cedar-inspired
healthcare financial system): brand navy/blue with orange, green, yellow, and teal
accents; **Inter** for UI text and **JetBrains Mono** for financial figures. The tokens
are declared once in `src/index.css` and consumed via Tailwind utilities such as
`bg-navy`, `text-brand`, and `text-accent-green`.

## Editing content

All copy is component-local — there is no CMS. To change a section, edit the data
array or JSX at the top of the matching file in `src/components/`. The navigation
links in `Navbar.jsx` and `Footer.jsx` point at section `id`s defined in each section
component, so keep those in sync when renaming a section.

Copy is grounded in the project's `.brain/PROJECT_CONTEXT.md` and the
`MedCore_Vault/BUSINESS/` documents. The market statistics in `StatsBar.jsx` cite PSA,
the Insurance Commission, and PHAPi.

## Deployment

The build output in `dist/` is fully static and can be hosted anywhere (Netlify,
Vercel, GitHub Pages, S3, etc.):

```bash
npm run build      # emits dist/
npm run preview    # sanity-check the build before deploying
```

For single-page hosting there are no server routes to configure. If you add client-side
routing later, point all paths to `index.html`.

## Notes

- The contact form validates on the client and shows a success state, but has **no
  backend**. Wire the `onSubmit` handler in `Contact.jsx` to your endpoint or a form
  service (Formspree, Netlify Forms, etc.) before going live.
- Animations respect `prefers-reduced-motion` (see the media query in `index.css`).
- The site includes a skip-to-content link, semantic landmarks, and labeled form
  controls for baseline accessibility.
