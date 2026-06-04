# Vandan Distributors — Next.js Website

See the [root README](../README.md) for project structure and run instructions.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run prepare:framer` | Re-extract HTML/images from `backup/framer-mirror/` |

## Key files

- `src/content/site.ts` — all business content
- `src/lib/applyContent.ts` — applies content to Framer DOM
- `src/components/FramerPageShell.tsx` — server-rendered Framer HTML (Vandan content baked in)
- `src/components/FramerPageScripts.tsx` — inline Framer animation scripts (no Framer React bundle)
- `src/lib/framer-pages/*.json` — extracted Framer page markup (generated)
