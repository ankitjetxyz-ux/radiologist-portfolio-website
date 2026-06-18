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

export const dryFilmProducts: FilmProduct[] = [
  {
    id: "dry-blue-base",
    brand: "Vandan Distributors",
    name: "Blue Base Dry Imaging Film",
    description:
      "Premium blue-base dry imaging film for compatible laser and thermal imagers. High optical density, low fog, and consistent grayscale for diagnostic X-ray and CT output.",
    variants: [
      { size: '8" x 10"', packSize: "150 sheets/box" },
      { size: '10" x 12"', packSize: "150 sheets/box" },
      { size: '11" x 14"', packSize: "150 sheets/box" },
      { size: '14" x 17"', packSize: "100 sheets/box" },
    ],
    specs: "Blue polyester base, high optical density, anti-static coating, DICOM-compatible dry imager output.",
    image: "/images/radiology/rad-10-blue-medical-film.png",
  },
  {
    id: "dry-clear-base",
    brand: "Vandan Distributors",
    name: "Clear Base Dry Imaging Film",
    description:
      "High-transparency dry imaging film designed for high-contrast viewing and reliable output on compatible laser imagers.",
    variants: [
      { size: '8" x 10"', packSize: "100 sheets/box" },
      { size: '10" x 12"', packSize: "100 sheets/box" },
      { size: '11" x 14"', packSize: "100 sheets/box" },
      { size: '14" x 17"', packSize: "100 sheets/box" },
    ],
    specs: "High spatial resolution, stable tone reproduction, clear base finish for selected diagnostic print workflows.",
    image: "/images/radiology/rad-04-print-films.png",
  },
  {
    id: "premium-blue-base",
    brand: "Vandan Distributors",
    name: "Premium Blue Base Diagnostic Film",
    description:
      "Direct digital imaging film for compatible dry imagers. Excellent bone and soft-tissue differentiation for daily radiology workloads.",
    variants: [
      { size: '8" x 10"', packSize: "100 sheets/box" },
      { size: '10" x 12"', packSize: "100 sheets/box" },
      { size: '11" x 14"', packSize: "100 sheets/box" },
      { size: '14" x 17"', packSize: "100 sheets/box" },
    ],
    specs: "High-resolution output support, long archival life, consistent blue diagnostic hue.",
    image: "/images/radiology/rad-02-xray-lightbox.png",
  },
];

export const vmsManualFilms = {
  brand: "Vandan Distributors",
  title: "Manual X-Ray Films",
  description:
    "Medical X-ray films for manual processing and conventional darkroom workflows. Available in multiple standard sizes for general radiography.",
  variants: [
    { size: '6.5" x 8.5"', packSize: "50 sheets/box" },
    { size: '8" x 10"', packSize: "50 sheets/box" },
    { size: '10" x 12"', packSize: "50 sheets/box" },
    { size: '12" x 12"', packSize: "50 sheets/box" },
    { size: '12" x 15"', packSize: "50 sheets/box" },
    { size: '14" x 17"', packSize: "50 sheets/box" },
  ],
  specs:
    "Green-sensitive emulsion for manual processing, high contrast, compatible with standard developer/fixers. Suitable for general radiography and mobile X-ray units.",
  image: "/images/radiology/fresh-01-xray-panel.jpeg",
};
