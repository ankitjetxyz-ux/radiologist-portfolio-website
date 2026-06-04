export const site = {
  brand: {
    name: "Vandan Distributors",
    tagline: "Print Design Portfolio",
    title: "Vandan Distributors | Radiology Print & Imaging Solutions",
    description:
      "Vandan Distributors provides high-trust radiology print and imaging workflow materials for hospitals, diagnostic centres, and radiology chains — built for MRI, CT, PET-CT, X-ray, OPG, and multi-modality workflows.",
    ogImage: "/images/radiology/rad-05-diagnostic-lobby.png",
    phone: "+91 91579 76333",
    phoneHref: "tel:+919157976333",
    email: "vandaninnovations@gmail.com",
    emailHref: "mailto:vandaninnovations@gmail.com",
    whatsappLink: "https://wa.link/x8qk31",
    whatsappNumber: "919157976333",
    mapsLink: "https://maps.app.goo.gl/yE4MPrEjbc2gkEC4A",
    location: "Ahmedabad, Gujarat",
    themeColor: "#164a7a",
  },

  hero: {
    eyebrow: "Print Design Portfolio",
    headline:
      "Premium medical print solutions designed to attract serious healthcare clients.",
    lede: "Vandan Distributors creates reliable, efficient, and high-trust print solutions for hospitals, diagnostic centres, and radiology chains that want better output and faster inquiries.",
    ctaPrimary: "Start Project Discussion",
    ctaSecondary: "See Selected Work",
  },

  modalities:
    "Built for MRI, CT, PET-CT, X-Ray, OPG, Ultrasound, and multi-modality workflows.",

  trust: [
    { title: "Fast response", detail: "WhatsApp, call, or email" },
    { title: "Premium feel", detail: "Clean, modern, reliable" },
    { title: "Decision-ready", detail: "For healthcare buyers comparing options" },
    { title: "Inquiry-first", detail: "Designed for conversion" },
  ],

  metrics: [
    { value: "30-50%", label: "cost reduction" },
    { value: "100+", label: "healthcare partners" },
    { value: "24/7", label: "support available" },
  ],

  portfolio: [
    {
      slug: "iphone-15",
      campaign: "Campaign 01",
      title: "Medical Imaging Print Solution",
      summary: "Focused on cost savings, clarity, and trust.",
      replacesTemplate: "iphone-15",
    },
    {
      slug: "unsweetned",
      campaign: "Campaign 02",
      title: "Blue Base Medical Film",
      summary: "High-contrast output for dependable diagnostics.",
      replacesTemplate: "unsweetned",
    },
    {
      slug: "actr-acre",
      campaign: "Campaign 03",
      title: "Founder-Led Consulting",
      summary: "Personal, credible, and service-first positioning.",
      replacesTemplate: "actr-acre",
    },
    {
      slug: "editorial",
      campaign: "Campaign 04",
      title: "Radiology Workflow Materials",
      summary: "Print systems aligned to multi-modality centres.",
      replacesTemplate: "editorial",
    },
  ],

  whyUs: [
    {
      title: "Innovative",
      body: "A modern layout and strong visual hierarchy make the brand feel current and forward-looking.",
    },
    {
      title: "Reliable",
      body: "Clear messaging, real imagery, and direct contact points help build trust quickly.",
    },
    {
      title: "Efficient",
      body: "Lead capture is built into the page so visitors can contact the team without friction.",
    },
    {
      title: "Premium",
      body: "Muted colours, clean spacing, and softer surfaces create a high-end corporate impression.",
    },
  ],

  process: [
    {
      step: "01",
      title: "See the portfolio",
      body: "Visitors immediately understand the company and its visual standard.",
    },
    {
      step: "02",
      title: "Build trust",
      body: "Real imagery, concise benefits, and healthcare-focused language reduce doubt.",
    },
    {
      step: "03",
      title: "Send inquiry",
      body: "WhatsApp, call, and the short form keep the contact path direct and easy.",
    },
  ],

  audience: {
    headline:
      "Built for hospitals, diagnostic centres, and radiology chains that expect a polished vendor experience.",
    body: "This portfolio speaks directly to decision-makers who want quality output, dependable service, and a premium partner.",
    segments: [
      "Diagnostic centres",
      "Hospitals and clinics",
      "Radiology chains",
      "Scaling facilities",
    ],
  },

  contact: {
    headline: "Ready to talk about your next project?",
    ctaWhatsApp: "Chat on WhatsApp",
    ctaMaps: "View on Google Maps",
    ctaConsultation: "Book Consultation",
  },

  footer: "© 2026 Vandan Distributors. Innovative, reliable, efficient, premium.",

  nav: {
    portfolio: "Portfolio",
    whyUs: "Why Us",
    contact: "Contact",
    cta: "Book Consultation",
  },

  /** Template string replacements applied to Framer DOM text nodes (runtime safety net) */
  textReplacements: {
    "Sealed Edition": "Vandan Distributors",
    SEALED_EDITION: "Vandan Distributors",
    "Framer Portfolio Template": "Print Design Portfolio",
    "Premium Framer Portfolio Template": "premium medical print solutions",
    "Crafted exclusively for small Studio/Agency and Freelancers":
      "Built for hospitals, diagnostic centres, and radiology chains",
    "(Art director, Designer, Photographer)": "",
    "My Framer Site": "Vandan Distributors",
    "Get in touch": "Contact",
    About: "Why Us",
    Services: "Why Us",
    Work: "Portfolio",
    Projects: "Portfolio",
    "GET TEMPLATE": "Book Consultation",
    "Elevate your online presence":
      "Premium medical print solutions designed to attract serious healthcare clients.",
    "cedrick.lachot@gmail.com": "vandaninnovations@gmail.com",
    "Bronx, NY": "Ahmedabad, Gujarat",
    "Brand Identity": "Medical Print Solutions",
    "Product Design": "Diagnostic Print Systems",
    "Print & Packaging": "Radiology Workflow Materials",
    "We work with": "Trusted by healthcare partners",
    ">SEALED<": ">Vandan<",
    "sealed.edition": "vandan.distributors",
    "Cedrick Lachot": "Vandan Distributors",
    "Art Director & Designer": "Radiology Print Specialists",
    Nike: "Apollo Hospitals",
    Meta: "Fortis Healthcare",
    Google: "Manipal Hospitals",
    Apple: "Dr. Lal PathLabs",
    Nvidia: "Max Healthcare",
    Tesla: "Metropolis Healthcare",
    Spotify: "Medanta",
  },
} as const;

export type SiteContent = typeof site;
