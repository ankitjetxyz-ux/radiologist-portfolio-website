import fs from "node:fs";
import path from "node:path";

const dir = path.resolve(import.meta.dirname, "../src/lib/framer-pages");
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "manifest.json")) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  const html = j.mainHtml + j.afterMainHtml;
  const local = [...html.matchAll(/\/images\/([A-Za-z0-9_-]+)/g)].map((m) => m[1]);
  const cdn = [...html.matchAll(/framerusercontent\.com\/images\/([A-Za-z0-9_-]+)/g)].map((m) => m[1]);
  console.log(file, [...new Set([...local, ...cdn])].slice(0, 12));
}
