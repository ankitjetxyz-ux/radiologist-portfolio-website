Vandan Distributors — Static Portfolio

This folder contains a single-page static portfolio site (HTML/CSS/JS).

Quick local preview:
1. Open `d:\project\vandan\index.html` in your browser.

Production export (Windows PowerShell):

```powershell
# Creates d:\project\vandan-deploy.zip containing the site
powershell -Command "Compress-Archive -Path 'd:\project\vandan\*' -DestinationPath 'd:\project\vandan-deploy.zip' -Force"
```

Hosting suggestions:
- Any static host will work (Netlify, Vercel, GitHub Pages, S3 + CloudFront).
- For best performance, replace the hero image with an optimized WebP at multiple sizes and serve via CDN.

Next steps I can do for you:
- Replace the hero image with a provided file and optimize (resize + WebP).
- Deploy to a host (Netlify/Vercel) and configure a simple CI workflow.
