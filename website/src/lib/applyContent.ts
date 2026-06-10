import imageMap from "../../scripts/radiology-image-map.json";
import { site } from "@/content/site";

function replaceTextInNode(node: Text) {
  let text = node.nodeValue ?? "";
  let changed = false;

  for (const [from, to] of Object.entries(site.textReplacements)) {
    if (text.includes(from)) {
      text = text.split(from).join(to);
      changed = true;
    }
  }

  if (changed) node.nodeValue = text;
}

function patchLinks() {
  const { brand } = site;

  document.querySelectorAll("a[href]").forEach((anchor) => {
    const el = anchor as HTMLAnchorElement;
    const href = el.getAttribute("href") ?? "";
    const label = (el.textContent ?? "").trim().toLowerCase();

    if (href.includes("framer.com") && !href.includes("framerusercontent.com")) {
      el.href = brand.whatsappLink;
      el.target = "_blank";
      el.rel = "noreferrer";
    }

    if (href.includes("lemonsqueezy.com")) {
      el.href = brand.whatsappLink;
      el.target = "_blank";
      el.rel = "noreferrer";
    }

    if (href.startsWith("mailto:")) el.href = brand.emailHref;
    if (href.startsWith("tel:")) el.href = brand.phoneHref;

    const looksLikeCta =
      label.includes("book") ||
      label.includes("consult") ||
      label.includes("template") ||
      label.includes("inquiry");

    if (looksLikeCta && (!href || href === "#" || href.startsWith("javascript:"))) {
      el.href = brand.whatsappLink;
      el.target = "_blank";
      el.rel = "noreferrer";
    }

    if (label.includes("template") || label.includes("made in framer")) {
      el.remove();
    }
  });
}

function patchImages() {
  document.querySelectorAll("img[src]").forEach((img) => {
    const el = img as HTMLImageElement;
    const src = el.getAttribute("src") ?? "";

    for (const { id, file, alt } of imageMap) {
      if (src.includes(id) || src.includes(file)) {
        el.src = `/images/radiology/${file}`;
        el.removeAttribute("srcset");
        el.alt = alt;
        break;
      }
    }
  });
}

function removeFramerBadge() {
  document
    .querySelectorAll("#__framer-badge-container, .__framer-badge")
    .forEach((node) => node.remove());
}

function replaceTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!node.nodeValue || !parent) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach(replaceTextInNode);
}

/** Runtime safety net — primary content/images are baked in at build time. */
export function applySiteContent() {
  replaceTextNodes();
  patchLinks();
  patchImages();
  removeFramerBadge();
}

export function buildWhatsAppInquiryUrl(fields: {
  name: string;
  phone: string;
  company: string;
  message: string;
}) {
  const text = encodeURIComponent(
    `New MIPS inquiry from Vandan Distributors\nName: ${fields.name}\nPhone: ${fields.phone}\nCentre: ${fields.company}\nNeed: ${fields.message}`
  );
  return `https://wa.me/${site.brand.whatsappNumber}?text=${text}`;
}
