import fs from "node:fs";
import path from "node:path";

const imageMapPath = path.resolve(import.meta.dirname, "radiology-image-map.json");
export const imageMap = JSON.parse(fs.readFileSync(imageMapPath, "utf8"));

export const BRAND_THEME = {
  logo: "/images/vandan-logo.svg",
  bg: "#f7fbfe",
  text: "#18263b",
  accent: "#0b5fa5",
  accentSoft: "rgba(11, 95, 165, 0.1)",
};

const TEXT_REPLACEMENTS = [
  ["GET TEMPLATE", "Book Consultation"],
  [">Work<", ">Portfolio<"],
  [">About<", ">Why Us<"],
  ["Sealed Edition", "Vandan Distributors"],
  ["Framer Portfolio Template", "Print Design Portfolio"],
  ["Premium Framer Portfolio Template", "premium medical print solutions"],
  ["Crafted exclusively for small Studio/Agency and Freelancers", "Built for hospitals, diagnostic centres, and radiology chains"],
  ["(Art director, Designer, Photographer)", ""],
  ["My Framer Site", "Vandan Distributors"],
  ["Elevate your online presence", "Premium medical print solutions designed to attract serious healthcare clients."],
  ["cedrick.lachot@gmail.com", "vandaninnovations@gmail.com"],
  ["Bronx, NY", "Ahmedabad, Gujarat"],
  ["Brand Identity", "Medical Print Solutions"],
  ["Product Design", "Diagnostic Print Systems"],
  ["Print & Packaging", "Radiology Workflow Materials"],
  ["We work with", "Trusted by healthcare partners"],
  [">SEALED<", ">Vandan<"],
  ["sealed.edition", "vandan.distributors"],
  ["https://www.instagram.com/sealed.edition/", "https://wa.link/x8qk31"],
  ["https://www.behance.net/sealededition", "https://wa.link/x8qk31"],
  ["Cedrick Lachot", "Vandan Distributors"],
  ["Art Director & Designer", "Radiology Print Specialists"],
  [">Nike<", ">Apollo Hospitals<"],
  [">Meta<", ">Fortis Healthcare<"],
  [">Google<", ">Manipal Hospitals<"],
  [">Apple<", ">Dr. Lal PathLabs<"],
  [">Nvidia<", ">Max Healthcare<"],
  [">Tesla<", ">Metropolis Healthcare<"],
  [">Spotify<", ">Medanta<"],
];

const VANDAN_HERO = `<div class="framer-a0hw9u vandan-brand-hero" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:20px 24px;"><img src="${BRAND_THEME.logo}" alt="Vandan Distributors" class="vandan-logo-hero" width="280" height="360" style="max-height:min(320px,55vh);width:auto;max-width:min(280px,70vw);object-fit:contain;" /></div>`;

const NAV_LOGO = `<a class="vandan-nav-logo" href="/" aria-label="Vandan Distributors home"><img src="${BRAND_THEME.logo}" alt="" width="48" height="60" /></a>`;

const TEXT_HERO_PATTERN =
  /<div class="framer-a0hw9u vandan-brand-hero" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;"><p class="framer-text"[\s\S]*?<\/p><\/div>/g;

function patchThemeHtml(html) {
  let out = html;

  out = out.replaceAll(
    "background-color:rgba(255, 255, 255, 0.12)",
    `background-color:${BRAND_THEME.accentSoft}`
  );

  out = out.replaceAll(
    "--variable-reference-z28qjXcHg-ExCco3bnO:rgb(255, 255, 255)",
    `--variable-reference-z28qjXcHg-ExCco3bnO:${BRAND_THEME.text}`
  );

  out = out.replace(
    /(<a[^>]*href="https:\/\/wa\.link[^"]*"[\s\S]*?data-framer-name="Rectangle 18" style="[^"]*background-color:)[^;"]+/g,
    `$1${BRAND_THEME.accent}`
  );

  if (!out.includes("vandan-nav-logo")) {
    out = out.replace(
      /^(<!--\$-->)?<div class="framer-[^"]+"[^>]*>/,
      (match) => `${match}${NAV_LOGO}`
    );
  }

  return out;
}

export function patchFramerHtml(html) {
  let out = html;

  for (const [from, to] of TEXT_REPLACEMENTS) {
    out = out.split(from).join(to);
  }

  out = out.replace(
    /<div data-framer-component-type="SVG" data-framer-name="SEALED_EDITION"[\s\S]*?<\/div>\s*<\/div>/g,
    VANDAN_HERO
  );

  out = out.replace(TEXT_HERO_PATTERN, VANDAN_HERO);

  out = out.replace(
    /href="https:\/\/sealed\.lemonsqueezy\.com[^"]*"/g,
    'href="https://wa.link/x8qk31" target="_blank" rel="noreferrer"'
  );

  for (const { id, file } of imageMap) {
    const local = `/images/radiology/${file}`;
    const framerImage = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out = out.replaceAll(
      new RegExp(`https://framerusercontent\\.com/images/${framerImage}(?:\\.webp|\\.jpg|a3fc\\.jpg)?(?:\\?[^"'\\s>]*)?`, "g"),
      local
    );
    out = out.replaceAll(`../framerusercontent.com/images/${id}a3fc.jpg`, local);
    out = out.replaceAll(`../framerusercontent.com/images/${id}.jpg`, local);
    out = out.replaceAll(`../framerusercontent.com/images/${id}.webp`, local);
    out = out.replaceAll(`../framerusercontent.com/images/${id}`, local);
    out = out.replaceAll(`/images/${id}a3fc.jpg`, local);
    out = out.replaceAll(`/images/${id}.jpg`, local);
    out = out.replaceAll(`/images/${id}.webp`, local);
  }

  out = out.replace(
    /https:\/\/framerusercontent\.com\/images\/radiology\/([^"'\s>]+\.png)\.webp/g,
    "/images/radiology/$1"
  );

  out = out.replace(/(\/images\/radiology\/[a-z0-9-]+\.png)\?[^"'\s>]*/gi, "$1");

  out = patchRollingStripHtml(out);
  out = patchThemeHtml(out);

  out = out.replaceAll("/images/vandan-logo.png", BRAND_THEME.logo);
  out = out.replace(
    /<div class="framer-a0hw9u vandan-brand-hero"[\s\S]*?<\/div>/g,
    VANDAN_HERO
  );

  out = out.replace(/\ssrcset="[^"]*"/g, "");
  out = out.replace(/data-framer-original-sizes="[^"]*"/g, "");

  return out;
}

/** Homepage portfolio strip starts hidden until Framer hydrates — force visible without React bundle. */
function patchRollingStripHtml(html) {
  if (!html.includes("framer-5qft50-container")) return html;

  return html
    .replace(/opacity:0\.001;/g, "opacity:1;")
    .replace(
      /list-style-type:none;text-indent:none;opacity:0;overflow:hidden"><ul style="display:flex;width:100%;height:100%;max-width:100%;max-height:100%;place-items:center;margin:0;padding:0;list-style-type:none;text-indent:none;gap:0;position:relative;flex-direction:row;will-change:transform/g,
      'list-style-type:none;text-indent:none;opacity:1;overflow:hidden"><ul style="display:flex;width:100%;height:100%;max-width:100%;max-height:100%;place-items:center;margin:0;padding:0;list-style-type:none;text-indent:none;gap:20px;position:relative;flex-direction:row;will-change:transform'
    )
    .replace(/translateY\(-550px\)/g, "translateY(0px)")
    .replace(/translateY\(550px\)/g, "translateY(0px)")
    .replace(/translateY\(160px\)/g, "translateY(0px)")
    .replace(/translateY\(-70px\)/g, "translateY(0px)");
}

function patchThemeColors(css) {
  return css
    .replace(
      /--token-ee6300b5-cc31-4611-a75b-336a67149361:\s*rgb\(18,\s*18,\s*18\)/g,
      "--token-ee6300b5-cc31-4611-a75b-336a67149361: rgb(247, 251, 254)"
    )
    .replace(
      /--token-5964880c-b4e9-4844-98e3-0bf21f0e0f26:\s*rgb\(255,\s*255,\s*255\)/g,
      "--token-5964880c-b4e9-4844-98e3-0bf21f0e0f26: rgb(24, 38, 59)"
    )
    .replaceAll("#121212", BRAND_THEME.bg)
    .replaceAll("rgb(18, 18, 18)", "rgb(247, 251, 254)")
    .replaceAll("rgb(244, 247, 251)", "rgb(247, 251, 254)");
}

const ROLLING_STRIP_CSS = `
.framer-mOgdg .framer-5qft50-container,.framer-mOgdg .framer-5qft50-container section{opacity:1!important;visibility:visible!important;overflow:hidden!important}
.framer-mOgdg .framer-5qft50-container [data-framer-name="Card"]{opacity:1!important;transform:perspective(1200px) translateX(0) translateY(0) scale(1) rotate(0deg) translateZ(0)!important;border-radius:12px;overflow:hidden}
.framer-mOgdg .framer-5qft50-container [data-framer-name^="Cms-Img"]{width:444px;min-width:444px;height:100%;flex-shrink:0;padding:0 2px}
.framer-mOgdg .framer-5qft50-container ul{display:flex!important;gap:20px!important;animation:vandan-marquee var(--vandan-marquee-duration,55s) linear infinite;width:max-content!important;will-change:transform;padding-right:20px}
.framer-mOgdg .framer-5qft50-container li{flex:0 0 auto;width:444px;height:100%;list-style:none}
.framer-mOgdg [data-framer-name="Container-Title"],.framer-mOgdg [data-framer-name="Menu"]{transform:perspective(1200px) translateX(0) translateY(0) scale(1) rotate(0deg) translateZ(0)!important}
@keyframes vandan-marquee{from{transform:translateX(0)}to{transform:translateX(var(--vandan-marquee-shift,-50%))}}
@media (prefers-reduced-motion:reduce){.framer-mOgdg .framer-5qft50-container ul{animation:none;transform:translateX(0)!important}}
`;

const THEME_CSS = `
:root{
  --vandan-bg:${BRAND_THEME.bg};
  --vandan-text:${BRAND_THEME.text};
  --vandan-accent:${BRAND_THEME.accent};
  --vandan-accent-soft:${BRAND_THEME.accentSoft};
}
html{scroll-behavior:smooth}
body{
  background:
    radial-gradient(circle at top left, rgba(11, 95, 165, 0.08), transparent 28%),
    radial-gradient(circle at top right, rgba(220, 74, 47, 0.08), transparent 24%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfe 48%, #eef5fb 100%) !important;
  color:var(--vandan-text) !important;
  font-family:Inter, "Segoe UI", Arial, sans-serif !important;
  line-height:1.5 !important;
  text-rendering:optimizeLegibility;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
#main{position:relative;overflow-x:clip}
#main > div:first-child{width:min(100%,1440px);margin-inline:auto}
#main [data-framer-name="Container-Page"],#main [data-framer-name="Main"],#main [data-framer-name="Hero"],#main [data-framer-name="Container-Title"],#main [data-framer-name="Container-title"]{width:100%}
#main [class*="framer-"]{background-color:transparent}
#main [class*="framer-"]{max-width:100%}
#main [data-framer-component-type="Section"],#main [data-framer-component-type="Frame"],#main [data-framer-component-type="Stack"]{border-radius:28px}
#main [data-framer-name="Card"],#main [data-framer-name^="Cms-"],#main [data-framer-name*="Card"],#main [data-framer-name="Rectangle 17"],#main [data-framer-name="Rectangle 18"]{border-radius:24px;box-shadow:0 18px 48px rgba(45, 18, 21, 0.09)}
#main [data-framer-name="Rectangle 18"]{box-shadow:0 16px 36px rgba(171, 33, 45, 0.24)}
#main h1,#main h2,#main h3,#main h4{letter-spacing:-0.03em;text-wrap:balance}
#main h1{font-size:clamp(2.45rem,5vw,4.6rem)!important;line-height:0.96!important}
#main h2{font-size:clamp(1.65rem,3vw,2.6rem)!important;line-height:1.05!important}
#main h3{font-size:clamp(1.15rem,2vw,1.55rem)!important;line-height:1.15!important}
#main p,#main li,#main a,#main span{font-size:clamp(0.98rem,1.1vw,1.06rem)}
#main p.framer-text,#main li.framer-text,#main span.framer-text{line-height:1.65!important}
#main a[href]{transition:transform 160ms ease,box-shadow 160ms ease,opacity 160ms ease}
#main a[href]:hover{opacity:0.98}
#main img{border-radius:18px}
#main button,#main [role="button"]{border-radius:999px}
#main p.framer-text,#main h1.framer-text,#main h2.framer-text,#main h3.framer-text,#main span.framer-text{
  color:var(--vandan-text) !important;
  --framer-text-color:var(--vandan-text) !important;
}
[data-framer-name="Menu"] .framer-text,[data-framer-name="Tab"] .framer-text{
  color:var(--vandan-accent) !important;
  --framer-text-color:var(--vandan-accent) !important;
}
a[href*="wa.link"] .framer-text,a[href*="wa.link"] p.framer-text{
  color:#fff !important;
  --framer-text-color:#fff !important;
}
a[href*="wa.link"] [data-framer-name="Rectangle 18"]{
  background-color:var(--vandan-accent) !important;
  border:1px solid rgba(171,33,45,0.2) !important;
}
[data-framer-name="Rectangle 17"]{border:1px solid rgba(171,33,45,0.12) !important}
.vandan-nav-logo{
  position:fixed;
  top:20px;
  left:20px;
  z-index:50;
  width:56px;
  height:72px;
  padding:6px;
  border-radius:14px;
  overflow:hidden;
  background:#fff;
  border:1px solid rgba(171,33,45,0.12);
  box-shadow:0 12px 30px rgba(45,18,21,0.1);
  transition:transform .2s ease,box-shadow .2s ease;
}
.vandan-nav-logo:hover{
  transform:translateY(-1px);
  box-shadow:0 16px 36px rgba(45,18,21,0.14);
}
.vandan-nav-logo img{display:block;width:100%;height:100%;object-fit:contain}
.vandan-brand-hero .framer-text{display:none!important}
@media (max-width:720px){
  .vandan-nav-logo{width:48px;height:62px;top:14px;left:14px;padding:5px}
  #main > div:first-child{width:min(100%,100vw)}
  #main h1{font-size:clamp(2rem,10vw,3rem)!important}
  #main h2{font-size:clamp(1.4rem,7vw,2rem)!important}
}
`;

export function patchFramerStyles(css) {
  const themedCss = patchThemeColors(css);
  const stripCss = css.includes("framer-5qft50") ? ROLLING_STRIP_CSS : "";
  return `${themedCss}${stripCss}${THEME_CSS}\n#__framer-badge-container,.__framer-badge{display:none!important;visibility:hidden!important;pointer-events:none!important;}`;
}
