# Backup — legacy source files

This folder holds **archived source material** used during development.  
The live site is **`website/`** (Next.js). You normally do not need to open these files.

| Folder | What it is |
|--------|------------|
| `original-static-portfolio/` | Original Project 1 HTML/CSS/JS (Vandan content source) |
| `framer-mirror/` | HTTrack mirror of the Framer UI template (Project 2) |
| `merged-repo-static/` | Duplicate static files from an earlier git merge (`index.html`, PDFs in `resources/`) |

To re-extract Framer pages into the Next.js app:

```powershell
cd website
npm run prepare:framer
```
