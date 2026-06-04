import fs from "node:fs";
import path from "node:path";

const imageMapPath = path.resolve(import.meta.dirname, "radiology-image-map.json");
export const imageMap = JSON.parse(fs.readFileSync(imageMapPath, "utf8"));

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

const VANDAN_HERO_FONT = "clamp(52px, 11vw, 120px)";

const VANDAN_HERO = `<div class="framer-a0hw9u vandan-brand-hero" style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;"><p class="framer-text" style="--framer-font-family:&quot;Inter-SemiBold&quot;, &quot;Inter&quot;, sans-serif;--framer-font-size:${VANDAN_HERO_FONT};--framer-font-weight:600;--framer-text-color:rgb(255,255,255);--framer-text-alignment:center;color:#fff;font-weight:600;text-align:center;margin:0;padding:0 24px;letter-spacing:-0.02em;font-size:${VANDAN_HERO_FONT};line-height:1.05;">Vandan Distributors</p></div>`;

export function patchFramerHtml(html) {
  let out = html;

  for (const [from, to] of TEXT_REPLACEMENTS) {
    out = out.split(from).join(to);
  }

  out = out.replace(
    /<div data-framer-component-type="SVG" data-framer-name="SEALED_EDITION"[\s\S]*?<\/div>\s*<\/div>/g,
    VANDAN_HERO
  );

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

  out = out.replace(
    /--framer-font-size:clamp\(36px,? ?8vw,? ?84px\)/g,
    `--framer-font-size:${VANDAN_HERO_FONT}`
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

const ROLLING_STRIP_CSS = `
.vandan-brand-hero .framer-text{font-size:clamp(52px,11vw,120px)!important;--framer-font-size:clamp(52px,11vw,120px)!important;line-height:1.05!important}
.framer-mOgdg .framer-5qft50-container,.framer-mOgdg .framer-5qft50-container section{opacity:1!important;visibility:visible!important;overflow:hidden!important}
.framer-mOgdg .framer-5qft50-container [data-framer-name="Card"]{opacity:1!important;transform:perspective(1200px) translateX(0) translateY(0) scale(1) rotate(0deg) translateZ(0)!important;border-radius:12px;overflow:hidden}
.framer-mOgdg .framer-5qft50-container [data-framer-name^="Cms-Img"]{width:444px;min-width:444px;height:100%;flex-shrink:0;padding:0 2px}
.framer-mOgdg .framer-5qft50-container ul{display:flex!important;gap:20px!important;animation:vandan-marquee var(--vandan-marquee-duration,55s) linear infinite;width:max-content!important;will-change:transform;padding-right:20px}
.framer-mOgdg .framer-5qft50-container li{flex:0 0 auto;width:444px;height:100%;list-style:none}
.framer-mOgdg [data-framer-name="Container-Title"],.framer-mOgdg [data-framer-name="Menu"]{transform:perspective(1200px) translateX(0) translateY(0) scale(1) rotate(0deg) translateZ(0)!important}
@keyframes vandan-marquee{from{transform:translateX(0)}to{transform:translateX(var(--vandan-marquee-shift,-50%))}}
@media (prefers-reduced-motion:reduce){.framer-mOgdg .framer-5qft50-container ul{animation:none;transform:translateX(0)!important}}
`;

export function patchFramerStyles(css) {
  const stripCss = css.includes("framer-5qft50") ? ROLLING_STRIP_CSS : "";
  return `${css}${stripCss}\n#__framer-badge-container,.__framer-badge{display:none!important;visibility:hidden!important;pointer-events:none!important;}`;
}
