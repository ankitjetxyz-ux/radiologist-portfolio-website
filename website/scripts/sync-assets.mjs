import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../..");
const assetsDir = path.join(repoRoot, "assests");
const publicDir = path.join(repoRoot, "website/public");

const downloadsDest = path.join(publicDir, "downloads");
const productsDest = path.join(publicDir, "images/products");
const brandDest = path.join(publicDir, "images/brand");

for (const dir of [downloadsDest, productsDest, brandDest]) {
  fs.mkdirSync(dir, { recursive: true });
}

function slugify(name) {
  return name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9._-]/g, "");
}

// Logo from Accurate PPT (in assets folder)
const pptLogo = path.join(publicDir, "images/_ppt-extract/ppt/media/image1.jpg");
const assetLogo = path.join(assetsDir, "image.png");

if (fs.existsSync(pptLogo)) {
  fs.copyFileSync(pptLogo, path.join(brandDest, "accurate-logo.jpg"));
  console.log("Copied Accurate logo from PPT");
} else if (fs.existsSync(assetLogo)) {
  fs.copyFileSync(assetLogo, path.join(brandDest, "logo.png"));
  console.log("Copied logo.png from assets");
}

// PDFs
for (const file of fs.readdirSync(assetsDir)) {
  if (!file.toLowerCase().endsWith(".pdf")) continue;
  const destName = slugify(file);
  fs.copyFileSync(path.join(assetsDir, file), path.join(downloadsDest, destName));
  console.log(`PDF: ${destName}`);
}

// Images
const imageSources = [
  assetsDir,
  path.join(assetsDir, "images"),
];

for (const srcDir of imageSources) {
  if (!fs.existsSync(srcDir)) continue;
  for (const file of fs.readdirSync(srcDir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const destName = slugify(file);
    fs.copyFileSync(path.join(srcDir, file), path.join(productsDest, destName));
    console.log(`Image: ${destName}`);
  }
}

console.log("Asset sync complete");

// Populate radiology folder from PPT slides and asset photos
const radiologyDest = path.join(publicDir, "images/radiology");
fs.mkdirSync(radiologyDest, { recursive: true });

const pptMedia = path.join(publicDir, "images/_ppt-extract/ppt/media");
const radiologyMappings = [
  ["image16.jpeg", "fresh-02-brain-mri-grid.jpeg"],
  ["image17.jpeg", "fresh-01-xray-panel.jpeg"],
  ["image18.jpeg", "fresh-03-diagnostic-archive.jpeg"],
  ["image19.png", "rad-10-blue-medical-film.png"],
  ["image20.jpeg", "fresh-04-shoulder-xray.jpeg"],
  ["image21.jpeg", "fresh-05-foot-xray.jpeg"],
  ["image22.jpeg", "fresh-08-skull-profile.jpeg"],
  ["image35.png", "rad-04-print-films.png"],
  ["image37.png", "rad-02-xray-lightbox.png"],
  ["image48.png", "rad-26-imaging-supplies.png"],
  ["image55.png", "rad-03-mri-wide.png"],
  ["image59.png", "rad-06-radiologist-desk.png"],
];

for (const [src, dest] of radiologyMappings) {
  const srcPath = path.join(pptMedia, src);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(radiologyDest, dest));
    console.log(`Radiology: ${dest}`);
  }
}

// Fallback: copy any asset jpeg to remaining rad-* slots
const fallbacks = fs.readdirSync(productsDest).filter((f) => /\.jpe?g$/i.test(f));
let fi = 0;
for (const name of ["rad-01-ct-scanner-room.png", "rad-07-ultrasound-probe.png", "rad-08-pet-ct-suite.png"]) {
  const destPath = path.join(radiologyDest, name);
  if (!fs.existsSync(destPath) && fallbacks[fi]) {
    fs.copyFileSync(path.join(productsDest, fallbacks[fi]), destPath.replace(".png", ".jpeg"));
    console.log(`Radiology fallback: ${name}`);
    fi++;
  }
}
