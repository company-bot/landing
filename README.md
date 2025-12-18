## Overview

SyZentric bridges complex engineering with intelligent, user-centric solutions. Acting as the "central nervous system" for digital ecosystems, it provides the logical structure that enables products to operate, scale, and evolve.

### Vision
Systemic Architecture × Zenith — our commitment to building stable, advanced, and extensible systems.

### Core Capabilities
- AI/ML: Deep learning, computer vision, NLP, and production deployment
- Data: Predictive analytics, statistical modeling, BI dashboards
- Software: Python/FastAPI, modular, secure architectures
- Web: API-first apps, dynamic UIs, modern frameworks
- Applied Math: Algorithms, optimization, probability, and logic

## Tech Stack

- React 19, TypeScript, Vite
- Tailwind (via CDN in index.html)
- Three.js, @react-three/fiber, @react-three/drei
- Framer Motion, Zustand

## Project Structure

```
App.tsx
index.html
index.tsx
package.json
vite.config.ts
types.ts
components/
	Capabilities.tsx
	Footer.tsx
	Hero.tsx
	Logo.tsx
	Navbar.tsx
	Scene3D.tsx
	Vision.tsx
	UI/GlassCard.tsx
logo/
	logo_1.png
store/
	useStore.ts
```

## Prerequisites

- Node.js 18+ (LTS recommended)

## Quick Start

```bash
npm install
npm run dev
```

Dev server runs on http://localhost:3000 (configurable in `vite.config.ts`).

## Scripts

- `npm run dev`: Start the Vite dev server
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview the production build locally

## Assets (Logo & Favicon)

- App logo component uses `logo/logo.png` via `components/Logo.tsx`.
- Favicon uses `logo/logo.png` (see `index.html`). For best results, use a PNG with a transparent background.

## Troubleshooting

- Port in use: adjust `server.port` in `vite.config.ts` or stop the conflicting process.
- Favicon cache: hard refresh (Ctrl+F5) or clear browser cache.

## Build & Deploy

1. Build
	 ```bash
	 npm run build
	 ```
2. Deploy the contents of `dist/` to any static host (Vercel, Netlify, Azure Static Web Apps, GitHub Pages, etc.).

Notes:
For server-side secrets, put API calls behind serverless functions or a backend rather than the client if needed.

## Links
- Vite: https://vitejs.dev
- React: https://react.dev