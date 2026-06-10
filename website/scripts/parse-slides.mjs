import fs from "node:fs";
import path from "node:path";

const slidesDir = "./public/images/_ppt-extract/ppt/slides";
if (!fs.existsSync(slidesDir)) {
  console.log("Directory public/images/_ppt-extract/ppt/slides not found. Please run npm run prepare:framer or copy-brand-logo first.");
  process.exit(0);
}

const files = fs.readdirSync(slidesDir)
  .filter((f) => f.startsWith("slide") && f.endsWith(".xml"))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

for (const file of files) {
  const content = fs.readFileSync(path.join(slidesDir, file), "utf8");
  const texts = [];
  const matches = content.matchAll(/<a:t>([^<]+)<\/a:t>/g);
  for (const match of matches) {
    const txt = match[1].trim();
    if (txt) texts.push(txt);
  }
  if (texts.length > 0) {
    console.log(`=== ${file} ===`);
    console.log(texts.join(" | "));
    console.log();
  }
}
