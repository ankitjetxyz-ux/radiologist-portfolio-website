(() => {
  const BRAND = {
    name: "Vandan Distributors",
    title: "Vandan Distributors | Radiology Print & Imaging Solutions",
    description:
      "Vandan Distributors provides high-trust radiology print and imaging workflow materials for hospitals, diagnostic centres, and radiology chains — built for MRI, CT, PET-CT, X-ray, OPG, and multi-modality workflows.",
    ogImage:
      "https://d1yei2z3i6k35z.cloudfront.net/12789932/695e58903a6ca_Untitleddesign12.png",
    phone: "+91 91579 76333",
    phoneHref: "tel:+919157976333",
    email: "vandaninnovations@gmail.com",
    emailHref: "mailto:vandaninnovations@gmail.com",
    whatsappLink: "https://wa.link/x8qk31",
    mapsLink: "https://maps.app.goo.gl/yE4MPrEjbc2gkEC4A",
    location: "Ahmedabad, Gujarat",
  };

  const TEXT_REPLACEMENTS = new Map([
    ["Sealed Edition", BRAND.name],
    ["Framer Portfolio Template", "Print Design Portfolio"],
    ["Premium Framer Portfolio Template", "premium medical print solutions"],
    ["Crafted exclusively for small Studio/Agency and Freelancers", "Built for hospitals, diagnostic centres, and radiology chains"],
    ["(Art director, Designer, Photographer)", ""],
    ["My Framer Site", BRAND.name],

    // Project 1 core messaging
    ["Get in touch", "Contact"],
    ["Contact", "Contact"],
    ["About", "Why Us"],
    ["Services", "Why Us"],
    ["Work", "Portfolio"],
    ["Projects", "Portfolio"],

    // Strong headline-style swaps (best-effort if template contains these phrases)
    ["Elevate your online presence", "Premium medical print solutions designed to attract serious healthcare clients."],
  ]);

  const setMeta = (selector, value, attr = "content") => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.setAttribute(attr, value);
  };

  const updateHeadBranding = () => {
    // Title
    if (document.title && (document.title.includes("Sealed") || document.title.includes("My Framer Site"))) {
      document.title = BRAND.title;
    }

    // Meta descriptions/titles/images
    setMeta('meta[name="description"]', BRAND.description);
    setMeta('meta[property="og:title"]', BRAND.title);
    setMeta('meta[property="og:description"]', BRAND.description);
    setMeta('meta[property="og:image"]', BRAND.ogImage);
    setMeta('meta[name="twitter:title"]', BRAND.title);
    setMeta('meta[name="twitter:description"]', BRAND.description);
    setMeta('meta[name="twitter:image"]', BRAND.ogImage);
  };

  const replaceTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
        // Skip script/style-ish text nodes
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const toUpdate = [];
    while (walker.nextNode()) toUpdate.push(walker.currentNode);

    for (const node of toUpdate) {
      let text = node.nodeValue;
      let changed = false;
      for (const [from, to] of TEXT_REPLACEMENTS.entries()) {
        if (text.includes(from)) {
          text = text.split(from).join(to);
          changed = true;
        }
      }
      if (changed) node.nodeValue = text;
    }
  };

  const patchCommonLinks = () => {
    // Update obvious CTA destinations if they exist
    const anchors = document.querySelectorAll("a[href]");
    anchors.forEach(a => {
      const href = a.getAttribute("href") || "";

      // If template links to Framer marketing, keep UX but stop leaking template branding
      if (href.includes("framer.com") && !href.includes("framerusercontent.com")) {
        a.setAttribute("href", BRAND.whatsappLink);
        a.setAttribute("rel", "noreferrer");
        a.setAttribute("target", "_blank");
      }

      // If any placeholder mail/tel exists, normalize to Project 1 details
      if (href.startsWith("mailto:")) a.setAttribute("href", BRAND.emailHref);
      if (href.startsWith("tel:")) a.setAttribute("href", BRAND.phoneHref);
    });

    // Ensure any CTA-like anchors point to WhatsApp when they were placeholders.
    anchors.forEach(a => {
      const label = (a.textContent || "").trim().toLowerCase();
      const href = a.getAttribute("href") || "";
      const looksLikeCta =
        label.includes("book") ||
        label.includes("schedule") ||
        label.includes("consult") ||
        label.includes("get started") ||
        label.includes("start") ||
        label.includes("inquiry") ||
        label.includes("message") ||
        label.includes("chat");

      if (looksLikeCta && (!href || href === "#" || href.startsWith("javascript:"))) {
        a.setAttribute("href", BRAND.whatsappLink);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noreferrer");
      }
    });
  };

  const patchImages = () => {
    // Replace obvious hero/preview images from the template with Project 1’s real hero image.
    const imgs = document.querySelectorAll("img[src]");
    imgs.forEach(img => {
      const src = img.getAttribute("src") || "";
      if (!src) return;

      // Keep local framer assets if you want, but swap the common social preview image.
      if (src.includes("926MoWsulwhZN0KvlVofNrWtpFY")) {
        img.setAttribute("src", BRAND.ogImage);
      }
    });
  };

  const run = () => {
    updateHeadBranding();
    replaceTextNodes();
    patchCommonLinks();
    patchImages();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();

