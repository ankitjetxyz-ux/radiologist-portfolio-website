import fs from "node:fs";
import path from "node:path";
import imageMap from "./radiology-image-map.json" with { type: "json" };

const repoRoot = path.resolve(import.meta.dirname, "../..");
const destDir = path.join(repoRoot, "website/public/images/radiology");

const assetSources = [
  path.join(process.env.USERPROFILE ?? "", ".cursor/projects/c-Users-ankit-OneDrive-Desktop-project3/assets"),
  path.join(repoRoot, "website/public/images"),
];

fs.mkdirSync(destDir, { recursive: true });

for (const { file } of imageMap) {
  let copied = false;
  for (const srcDir of assetSources) {
    const src = path.join(srcDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(destDir, file));
      copied = true;
      break;
    }
  }
  console.log(copied ? `OK ${file}` : `MISSING ${file}`);
}

console.log(`Done -> ${destDir}`);
