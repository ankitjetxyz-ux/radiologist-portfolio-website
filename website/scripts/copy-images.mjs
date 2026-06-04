import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "../..");
const framerMirrorRoot = path.join(repoRoot, "backup", "framer-mirror");
const mirrorDir = fs
  .readdirSync(framerMirrorRoot, { withFileTypes: true })
  .find((entry) => entry.isDirectory() && entry.name.startsWith("My Web Sites"));

if (!mirrorDir) {
  throw new Error("Could not find backup/framer-mirror/My Web Sites* directory");
}

const sourceDir = path.join(
  framerMirrorRoot,
  mirrorDir.name,
  "project3",
  "framerusercontent.com",
  "images"
);

const destDir = path.resolve(import.meta.dirname, "../public/images");

fs.mkdirSync(destDir, { recursive: true });

for (const file of fs.readdirSync(sourceDir)) {
  const src = path.join(sourceDir, file);
  const dest = path.join(destDir, file);
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file}`);
  }
}

console.log("Images ready in public/images");
