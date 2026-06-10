import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../..");
const assetsDir = path.join(repoRoot, "assests");
const dest = path.join(repoRoot, "website/public/images/vandan-logo.svg");

const directCandidates = [
  "logo.svg",
  "vandan-logo.svg",
];

for (const file of directCandidates) {
  const src = path.join(assetsDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> ${dest}`);
    process.exit(0);
  }
}

const ppt = path.join(assetsDir, "Accurate PPT.pptx");
const extractedLogo = path.join(repoRoot, "website/public/images/_ppt-extract/ppt/media/image1.svg");

if (fs.existsSync(extractedLogo)) {
  fs.copyFileSync(extractedLogo, dest);
  console.log(`Copied PPT logo -> ${dest}`);
  process.exit(0);
}

if (!fs.existsSync(ppt)) {
  console.warn("Brand logo not found in assests/");
  process.exit(0);
}

const zipCopy = path.join(repoRoot, "website/public/images/_ppt-temp.zip");
const extractDir = path.join(repoRoot, "website/public/images/_ppt-extract");

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(ppt, zipCopy);

import { execFileSync } from "node:child_process";
execFileSync(
  "powershell.exe",
  [
    "-NoProfile",
    "-Command",
    `Expand-Archive -Path '${zipCopy.replace(/'/g, "''")}' -DestinationPath '${extractDir.replace(/'/g, "''")}' -Force`,
  ],
  { stdio: "inherit" }
);

fs.rmSync(zipCopy, { force: true });

const logoFromPpt = path.join(extractDir, "ppt/media/image1.svg");
if (!fs.existsSync(logoFromPpt)) {
  console.warn("No SVG logo found in assests/ or Accurate PPT.pptx; leaving existing logo asset in place.");
  process.exit(0);
}

fs.copyFileSync(logoFromPpt, dest);
console.log(`Extracted logo from PPT -> ${dest}`);
