export const site = {
  brand: {
    name: "Vandan Distributors",
    shortName: "Vandan Distributors",
    tagline: "Radiology & Imaging Solutions",
    title: "Vandan Distributors | Radiology & Diagnostic Supplies",
    description:
      "Vandan Distributors provides contrast media, X-ray films, medical imaging print solutions (MIPS), and diagnostic consumables for hospitals and diagnostic centres across India.",
    logo: "/images/brand/logo.png",
    ogImage: "/images/brand/logo.png",
    phone: "+91 810 810 0404",
    phoneAlt: "+91 91579 76333",
    phoneHref: "tel:+918108100404",
    email: "info@accuratemedical.in",
    emailHref: "mailto:info@accuratemedical.in",
    whatsappLink: "https://wa.me/918108100404",
    whatsappNumber: "918108100404",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=14%20First%20Floor%2C%20Municipal%20Market%2C%20G.D%20Road%2C%20Opp.%20Maruti%20Nandan%20Complex%2C%20Vijay%20Para%2C%20Visnagar%2C%20Gujarat%20384315%2C%20India",
    location: "14 First Floor, Municipal Market, G.D Road, Opp. Maruti Nandan Complex, Vijay Para, Visnagar, Gujarat 384315, India",
    themeColor: "#7a6a43",
    accentColor: "#b89552",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Downloads", href: "/downloads" },
    { label: "Testimonials", href: "/testimonials" },
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
      "Contrast media, diagnostic films, and end-to-end medical imaging print solutions - trusted by hospitals, diagnostic centres, and radiology teams since 2015.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Explore Products",
  },

  intro: {
    title: "Vandan Distributors",
    body:
      "Started operations in June 2015, Vandan Distributors is promoted by professionals with vast experience in printing, medical imaging, and IT. We deliver high-quality, cost-effective MIPS to hospitals, diagnostic centres, radiologists, sonologists, nuclear medicine centres, and mobile healthcare units.",
    highlight:
      "Our MIPS model is an end-to-end solution with no capital expense - printer, software, ink, media, maintenance, and services included. You pay only per print.",
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
      body: "Contrast media, diagnostic films, manual X-ray films, and a complete catalogue of radiology consumables under Vandan Distributors guidance.",
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
      "Vandan Distributors is a specialist radiology and diagnostic supplies company focused on contrast media, X-ray films, medical imaging print solutions, and hospital consumables. Since June 2015, we have partnered with healthcare facilities to reduce printing costs while improving output quality.",
    mission:
      "To deliver reliable, cost-effective medical imaging solutions that help clinicians make accurate diagnoses without capital burden on healthcare providers.",
    vision:
      "To be India's most trusted partner for radiology departments - from contrast media and films to complete MIPS deployments.",
    values: [
      { title: "Clinical Accuracy", body: "Products and print output engineered for diagnostic confidence." },
      { title: "Transparency", body: "Clear per-print pricing with no hidden maintenance or software costs." },
      { title: "Responsiveness", body: "Fast inquiry handling via WhatsApp, phone, and direct email support." },
      { title: "Partnership", body: "Long-term relationships built on consistent supply and technical guidance." },
    ],
    experience:
      "Our leadership team brings decades of combined experience in medical imaging, radiology workflow software, and healthcare distribution - enabling us to advise on film compatibility, contrast selection, and MIPS deployment.",
    trustPoints: [
      "Preferred supplier for hospitals and diagnostic chains",
      "Curated contrast media portfolio for CT, MRI, angiography, and oral imaging workflows",
      "Diagnostic dry and manual X-ray film availability",
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
    "(c) 2026 Vandan Distributors. Contrast media, diagnostic films & medical imaging print solutions.",

  textReplacements: {} as Record<string, string>,

  compatibilityData: {
    "Compact dry imagers": [
      {
        printer: "Compact thermal dry imager",
        films: ["Blue Base Dry Imaging Film", "Clear Base Dry Imaging Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Thermal head technology, DICOM-compatible diagnostic finish",
      },
      {
        printer: "Mid-volume laser dry imager",
        films: ["Blue Base Dry Imaging Film", "Mammography Grade Dry Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Laser exposure technology, high optical density, stable grayscale output",
      },
    ],
    "Department imagers": [
      {
        printer: "Department dry imager",
        films: ["Premium Blue Base Diagnostic Film", "Clear Base Dry Imaging Film"],
        sizes: ['8" x 10"', '10" x 12"', '11" x 14"', '14" x 17"'],
        spec: "Direct digital imaging technology, high-resolution output",
      },
      {
        printer: "Multi-format dry imager",
        films: ["Premium Blue Base Diagnostic Film", "Mammography Grade Dry Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Ultra-high-resolution support, multi-format print engines",
      },
    ],
    "High-volume imagers": [
      {
        printer: "High-volume laser dry imager",
        films: ["Blue Base Dry Imaging Film", "Mammography Grade Dry Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Laser dry imaging, photo-sensitive thermal processing",
      },
      {
        printer: "Premium high-volume dry imager",
        films: ["Blue Base Dry Imaging Film", "Mammography Grade Dry Film"],
        sizes: ['8" x 10"', '10" x 12"', '11" x 14"', '14" x 17"'],
        spec: "Premium high-volume multi-size sorting, continuous throughput",
      },
    ],
    "Specialty imagers": [
      {
        printer: "Specialty dry imager",
        films: ["Blue Base Dry Imaging Film", "Mammography Grade Dry Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Semiconductor laser technology, stable temperature control systems",
      },
    ],
    "Thermal output systems": [
      {
        printer: "Direct thermal medical output system",
        films: ["Blue Base Thermal Film", "Standard Thermal Film"],
        sizes: ['8" x 10"', '10" x 12"', '14" x 17"'],
        spec: "Direct thermal printing, high optical density coating",
      },
    ],
  },
} as const;

export type SiteContent = typeof site;
export type BrandName = keyof typeof site.compatibilityData;
