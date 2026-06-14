export const site = {
  brand: {
    name: "Accurate Medical Solutions",
    shortName: "Accurate",
    tagline: "Medical Imaging Print Solutions",
    title: "Accurate Medical Solutions | Radiology & Diagnostic Supplies",
    description:
      "Accurate Medical Solutions provides contrast media, X-ray films, medical imaging print solutions (MIPS), and diagnostic consumables for hospitals and diagnostic centres across India.",
    logo: "/images/brand/accurate-logo.jpg",
    ogImage: "/images/brand/accurate-logo.jpg",
    phone: "+91 810 810 0404",
    phoneAlt: "+91 91579 76333",
    phoneHref: "tel:+918108100404",
    email: "info@accuratemedical.in",
    emailHref: "mailto:info@accuratemedical.in",
    whatsappLink: "https://wa.me/918108100404",
    whatsappNumber: "918108100404",
    mapsLink: "https://maps.app.goo.gl/yE4MPrEjbc2gkEC4A",
    location: "Ahmedabad, Gujarat, India",
    themeColor: "#0c4a6e",
    accentColor: "#e85d26",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contact", href: "/contact" },
  ] as const,

  productNav: [
    { label: "Contrast Media", href: "/products/contrast-media" },
    { label: "X-Ray Films", href: "/products/x-ray-films" },
    { label: "Other Products", href: "/products/other-products" },
    { label: "Printing Solutions", href: "/products/printing-solutions" },
  ] as const,

  hero: {
    eyebrow: "Medical Imaging Print Solutions (MIPS)",
    headline: "Precision radiology supplies for accurate diagnostics.",
    lede:
      "Contrast media, diagnostic films, and end-to-end medical imaging print solutions — trusted by hospitals, diagnostic centres, and radiology teams since 2015.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Explore Products",
  },

  intro: {
    title: "Accurate Medical Print Solutions",
    body:
      "Started operations in June 2015, Accurate Medical Solutions is promoted by professionals with vast experience in printing, medical imaging, and IT. We deliver high-quality, cost-effective MIPS to hospitals, diagnostic centres, radiologists, sonologists, nuclear medicine centres, and mobile healthcare units.",
    highlight:
      "Our MIPS model is an end-to-end solution with no capital expense — printer, software, ink, media, maintenance, and services included. You pay only per print.",
  },

  whyChooseUs: [
    {
      title: "Per-Print Billing",
      body: "No capital expenditure. Pay only for what you print with maintenance and service included.",
    },
    {
      title: "Multi-Modality Coverage",
      body: "MRI, CT, PET-CT, Ultrasound, X-Ray, and OPG workflows supported from a single platform.",
    },
    {
      title: "Trusted Product Range",
      body: "JB Pharma contrast media, Fuji & Agfa X-ray films, and a complete catalogue of diagnostic consumables.",
    },
    {
      title: "Pan-India Reach",
      body: "Strong distribution across Gujarat and major states with responsive technical and commercial support.",
    },
  ],

  metrics: [
    { value: "2015", label: "Operating since" },
    { value: "Per print", label: "Billing model" },
    { value: "30+", label: "States served" },
  ],

  about: {
    overview:
      "Accurate Medical Solutions is a specialist radiology and diagnostic supplies company focused on contrast media, X-ray films, medical imaging print solutions, and hospital consumables. Since June 2015, we have partnered with healthcare facilities to reduce printing costs while improving output quality.",
    mission:
      "To deliver reliable, cost-effective medical imaging solutions that help clinicians make accurate diagnoses without capital burden on healthcare providers.",
    vision:
      "To be India's most trusted partner for radiology departments — from contrast media and films to complete MIPS deployments.",
    values: [
      { title: "Clinical Accuracy", body: "Products and print output engineered for diagnostic confidence." },
      { title: "Transparency", body: "Clear per-print pricing with no hidden maintenance or software costs." },
      { title: "Responsiveness", body: "Fast inquiry handling via WhatsApp, phone, and direct email support." },
      { title: "Partnership", body: "Long-term relationships built on consistent supply and technical guidance." },
    ],
    experience:
      "Our leadership team brings decades of combined experience in medical imaging, radiology workflow software, and healthcare distribution — enabling us to advise on film compatibility, contrast selection, and MIPS deployment.",
    trustPoints: [
      "Preferred supplier for hospitals and diagnostic chains",
      "Authorized distribution for JB Pharma contrast media",
      "Fuji, Agfa, and VMS X-ray film availability",
      "End-to-end MIPS with software, printer, ink, and service",
    ],
  },

  contact: {
    headline: "Ready to discuss your radiology requirements?",
    subheadline: "Reach our team for product enquiries, MIPS demos, or bulk supply quotes.",
    ctaWhatsApp: "Chat on WhatsApp",
    ctaMaps: "View on Google Maps",
    ctaConsultation: "Send Inquiry",
  },

  footer:
    "© 2026 Accurate Medical Solutions. Contrast media, diagnostic films & medical imaging print solutions.",

  textReplacements: {} as Record<string, string>,

  compatibilityData: {
    Fuji: [
      {
        printer: "Fuji Drypix Lite (2000 / 3500)",
        films: ["Fuji DI-HL (Blue Base) Film", "Fuji DI-AL (Clear Base) Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Thermal head technology, DICOM-compatible diagnostic finish",
      },
      {
        printer: "Fuji Drypix 4000 / 6000 / 7000",
        films: ["Fuji DI-HL (Blue Base) Film", "Fuji DI-ML (Mammography) Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Laser exposure technology, high optical density (Dmax ≥ 3.3)",
      },
    ],
    Agfa: [
      {
        printer: "Agfa Drystar 5300 / 5302",
        films: ["Agfa DT2B (Blue Base) Film", "Agfa DT2C (Clear Base) Film"],
        sizes: ['8" x 10"', '10" x 12"', '11" x 14"', '14" x 17"'],
        spec: "Direct Digital Imaging (DDI) technology, 320 DPI resolution",
      },
      {
        printer: "Agfa Drystar AXYS / 5503",
        films: ["Agfa DT2B (Blue Base) Film", "Agfa DT2M (Mammography) Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Ultra-high resolution (508 DPI), multi-format print engines",
      },
    ],
    Carestream: [
      {
        printer: "Carestream DryView 5700 / 5950",
        films: ["Carestream DVB (Blue Base) Film", "Carestream DVM+ (Mammography) Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Laser dry imaging, photo-sensitive thermal processing",
      },
      {
        printer: "Carestream DryView 6850 / 6950",
        films: ["Carestream DVB (Blue Base) Film", "Carestream DVM+ (Mammography) Film"],
        sizes: ['8" x 10"', '10" x 12"', '11" x 14"', '14" x 17"'],
        spec: "Premium high-volume multi-size sorting, continuous throughput",
      },
    ],
    Konica: [
      {
        printer: "Konica Drypro 832 / 873",
        films: ["Konica SD-Q (Blue Base) Film", "Konica SD-QM (Mammography) Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Semiconductor laser technology, stable temperature control systems",
      },
    ],
    Sony: [
      {
        printer: "Sony UP-DF500 / UP-DF550 / UP-DF750",
        films: ["Sony UPT-517BL (Blue Base) Film", "Sony UPT-512BL Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Direct thermal printing, high optical density coating",
      },
    ],
  },
} as const;

export type SiteContent = typeof site;
export type BrandName = keyof typeof site.compatibilityData;
