export type FilmVariant = {
  size: string;
  packSize: string;
};

export type FilmProduct = {
  id: string;
  brand: string;
  name: string;
  description: string;
  variants: FilmVariant[];
  specs: string;
  image: string;
};

export const fujiAgfaProducts: FilmProduct[] = [
  {
    id: "fuji-dihl",
    brand: "Fuji",
    name: "Fuji DI-HL (Blue Base) Film",
    description:
      "Premium blue-base dry imaging film for laser imagers. High optical density, low fog, and consistent grayscale for diagnostic X-ray and CT output.",
    variants: [
      { size: '8" × 10"', packSize: "150 sheets/box" },
      { size: '10" × 12"', packSize: "150 sheets/box" },
      { size: '11" × 14"', packSize: "150 sheets/box" },
      { size: '14" × 17"', packSize: "100 sheets/box" },
    ],
    specs: "Blue polyester base, Dmax ≥ 3.2, anti-static coating, DICOM-compatible thermal dry imagers.",
    image: "/images/radiology/rad-10-blue-medical-film.png",
  },
  {
    id: "fuji-diht",
    brand: "Fuji",
    name: "Fuji DI-HT Film",
    description:
      "High-transparency dry imaging film designed for high-contrast viewing and reliable output on Fuji Drypix laser imagers.",
    variants: [
      { size: '8" × 10"', packSize: "100 sheets/box" },
      { size: '10" × 12"', packSize: "100 sheets/box" },
      { size: '11" × 14"', packSize: "100 sheets/box" },
      { size: '14" × 17"', packSize: "100 sheets/box" },
    ],
    specs: "High spatial resolution, stable tone reproduction, compatible with Fuji Drypix Lite and 4000/6000/7000 series.",
    image: "/images/radiology/rad-04-print-films.png",
  },
  {
    id: "agfa-dt2b",
    brand: "Agfa",
    name: "Agfa DT2B (Blue Base) Film",
    description:
      "Direct digital imaging film for Agfa Drystar laser imagers. Excellent bone and soft-tissue differentiation for daily radiology workloads.",
    variants: [
      { size: '8" × 10"', packSize: "100 sheets/box" },
      { size: '10" × 12"', packSize: "100 sheets/box" },
      { size: '11" × 14"', packSize: "100 sheets/box" },
      { size: '14" × 17"', packSize: "100 sheets/box" },
    ],
    specs: "DDI technology, 320–508 DPI resolution support, archival life >20 years, blue diagnostic hue.",
    image: "/images/radiology/rad-02-xray-lightbox.png",
  },
];

export const vmsManualFilms = {
  brand: "VMS",
  title: "Manual X-Ray Films",
  description:
    "VMS medical X-ray films for manual processing and conventional darkroom workflows. Available in multiple standard sizes for general radiography.",
  variants: [
    { size: '6.5" × 8.5"', packSize: "50 sheets/box" },
    { size: '8" × 10"', packSize: "50 sheets/box" },
    { size: '10" × 12"', packSize: "50 sheets/box" },
    { size: '12" × 12"', packSize: "50 sheets/box" },
    { size: '12" × 15"', packSize: "50 sheets/box" },
    { size: '14" × 17"', packSize: "50 sheets/box" },
  ],
  specs:
    "Green-sensitive emulsion for manual processing, high contrast, compatible with standard developer/fixers. Suitable for general radiography and mobile X-ray units.",
  image: "/images/radiology/fresh-01-xray-panel.jpeg",
};
