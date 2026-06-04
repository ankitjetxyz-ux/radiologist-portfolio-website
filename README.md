# Vandan Distributors — Website

Production website for **Vandan Distributors** (radiology print & imaging workflow materials).

Built with **Next.js + React**, using the Framer “Sealed Edition” UI layout and Vandan business content.

## Folder layout

```
project3/
├── website/          ← Main app (run & deploy this)
│   ├── src/
│   │   ├── app/          Routes (/, /about, /work/*)
│   │   ├── components/   Framer page shell
│   │   ├── content/      Business copy & contact info
│   │   └── lib/          Content patching + extracted Framer HTML
│   ├── public/images/    Site images
│   └── scripts/          Re-extract from backup (optional)
└── backup/           ← Legacy sources (archived, not used at runtime)
```

## Quick start

```powershell
cd website
npm install
npm run dev
```

Open **http://localhost:3000**

## Production

```powershell
cd website
npm run build
npm start
```

## Edit content

Update **`website/src/content/site.ts`** — brand name, hero text, contact details, portfolio labels, etc.

## Re-sync Framer HTML from backup

Only needed if you change files under `backup/framer-mirror/`:

```powershell
cd website
npm run prepare:framer
```

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home |
| `/about` | Why Us / services |
| `/work/iphone-15` | Portfolio item |
| `/work/unsweetned` | Portfolio item |
| `/work/actr-acre` | Portfolio item |
| `/work/editorial` | Portfolio item |
