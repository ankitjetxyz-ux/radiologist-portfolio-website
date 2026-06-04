import fs from "node:fs";
import path from "node:path";
import { patchFramerHtml, patchFramerStyles } from "./vandan-patch.mjs";

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
  "sealed-studio.framer.website"
);

const outputDir = path.resolve(import.meta.dirname, "../src/lib/framer-pages");

const PAGE_MAP = {
  "index.html": { slug: "index", route: "/" },
  "About.html": { slug: "about", route: "/about" },
  "iphone-15.html": { slug: "iphone-15", route: "/work/iphone-15" },
  "unsweetned.html": { slug: "unsweetned", route: "/work/unsweetned" },
  "actr-acre.html": { slug: "actr-acre", route: "/work/actr-acre" },
  "editorial.html": { slug: "editorial", route: "/work/editorial" },
};

function rewriteHtml(html) {
  return patchFramerHtml(
    html
      .replace(/href="index\.html"/g, 'href="/"')
      .replace(/href="About\.html"/g, 'href="/about"')
      .replace(/href="iphone-15\.html"/g, 'href="/work/iphone-15"')
      .replace(/href="unsweetned\.html"/g, 'href="/work/unsweetned"')
      .replace(/href="actr-acre\.html"/g, 'href="/work/actr-acre"')
      .replace(/href="editorial\.html"/g, 'href="/work/editorial"')
      .replace(/href="https:\/\/(www\.)?framer\.com[^"]*"/g, 'href="https://wa.link/x8qk31" target="_blank" rel="noreferrer"')
  );
}

function extractPage(fileName) {
  const html = fs.readFileSync(path.join(sourceDir, fileName), "utf8");

  const styleMatch = html.match(
    /<style data-framer-css-ssr-minified=""[^>]*>([\s\S]*?)<\/style>/
  );
  const styles = patchFramerStyles(styleMatch?.[1] ?? "");

  const bodyClassMatch = html.match(/<body class="([^"]+)"/);
  const bodyClass = bodyClassMatch?.[1] ?? "";

  const mainBlockMatch = html.match(
    /<div id="main"[^>]*>([\s\S]*?)<!--\/\$--><\/div>\s*<script>performance\.mark\("framer-rewrite-breakpoints-start"\)/
  );
  if (!mainBlockMatch) {
    throw new Error(`Could not extract #main from ${fileName}`);
  }
  let mainHtml = rewriteHtml(mainBlockMatch[1]);

  const afterMainMatch = html.match(
    /<script>performance\.mark\("framer-rewrite-breakpoints-start"\)[\s\S]*?<\/script>[\s\S]*?(?=<div id="__framer-badge-container">)/
  );
  const afterMainHtml = rewriteHtml(afterMainMatch?.[0] ?? "");

  const animatorScriptMatch = html.match(
    /<script>"use strict";var animator=[\s\S]*?<\/script>/
  );
  const animatorScript = animatorScriptMatch?.[0] ?? "";

  const appearScriptMatch = html.match(
    /<script data-framer-appear-animation="no-preference">[\s\S]*?<\/script>/
  );
  const appearScript = appearScriptMatch?.[0] ?? "";

  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);

  return {
    slug: PAGE_MAP[fileName].slug,
    route: PAGE_MAP[fileName].route,
    title: titleMatch?.[1] ?? "",
    description: descMatch?.[1] ?? "",
    bodyClass,
    styles,
    mainHtml,
    afterMainHtml,
    animatorScript,
    appearScript,
  };
}

fs.mkdirSync(outputDir, { recursive: true });

const manifest = [];

for (const fileName of Object.keys(PAGE_MAP)) {
  const page = extractPage(fileName);
  const outPath = path.join(outputDir, `${page.slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(page));
  manifest.push({ slug: page.slug, route: page.route, file: `${page.slug}.json` });
  console.log(`Extracted ${fileName} -> ${outPath}`);
}

fs.writeFileSync(path.join(outputDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("Done.");
