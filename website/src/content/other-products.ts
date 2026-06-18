export type OtherProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  brochure?: string;
};

export const otherProductCategories = [
  "Barium & GI Contrast",
  "Injector Accessories",
  "Ultrasound & ECG Consumables",
  "Endoscopy Media",
  "Radiology Accessories",
] as const;

export const otherProducts: OtherProduct[] = [
  {
    id: "microbar-300",
    name: "Microbar 300 mg",
    description: "Barium sulphate contrast preparation for GI radiography and fluoroscopy studies.",
    category: "Barium & GI Contrast",
    image: "/images/radiology/rad-26-imaging-supplies.png",
    brochure: "/downloads/broucher-120825.pdf",
  },
  {
    id: "microbar-suspension",
    name: "Microbar Suspension 1 Ltr",
    description: "Ready-to-use barium suspension for upper and lower GI tract examinations.",
    category: "Barium & GI Contrast",
    image: "/images/products/20250913_131936.jpg.jpeg",
    brochure: "/downloads/broucher-120825.pdf",
  },
  {
    id: "microbar-powder",
    name: "Microbar 3.5 kg Powder",
    description: "Bulk barium powder for hospital compounding and high-volume GI imaging departments.",
    category: "Barium & GI Contrast",
    image: "/images/radiology/rad-26-imaging-supplies.png",
  },
  {
    id: "injector-syringe",
    name: "Injector Syringe",
    description: "Universal contrast injector syringes compatible with all major CT injector systems.",
    category: "Injector Accessories",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM.jpeg",
  },
  {
    id: "extension-tube-150",
    name: "Extension Tube 150 cm",
    description: "High-pressure extension tubing for contrast injection systems in CT and angiography suites.",
    category: "Injector Accessories",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM-1.jpeg",
  },
  {
    id: "extension-tube-200",
    name: "Extension Tube 200 cm",
    description: "Extended-length contrast delivery tubing for flexible injector positioning in cath labs.",
    category: "Injector Accessories",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.41.55-PM-2.jpeg",
  },
  {
    id: "olympus-normal-roll",
    name: "Normal Thermal Roll",
    description: "Standard-grade thermal paper roll for endoscopy and ultrasound report printing.",
    category: "Endoscopy Media",
    image: "/images/radiology/rad-04-print-films.png",
  },
  {
    id: "olympus-glossy-roll",
    name: "High Glossy Thermal Roll",
    description: "Premium glossy thermal roll for high-definition endoscopic image documentation.",
    category: "Endoscopy Media",
    image: "/images/radiology/rad-10-blue-medical-film.png",
  },
  {
    id: "standard-thermal-roll",
    name: "Standard Thermal Roll",
    description: "Standard thermal paper for compatible medical printers in ultrasound and endoscopy workflows.",
    category: "Endoscopy Media",
    image: "/images/radiology/rad-04-print-films.png",
  },
  {
    id: "high-gloss-thermal-roll",
    name: "High Glossy Thermal Roll",
    description: "High-gloss thermal media for premium image presentation on compatible medical printers.",
    category: "Endoscopy Media",
    image: "/images/radiology/rad-10-blue-medical-film.png",
  },
  {
    id: "ultrasound-jelly",
    name: "Ultrasound Jelly",
    description: "Acoustic coupling gel for ultrasound examinations — bacteriostatic, non-staining formula.",
    category: "Ultrasound & ECG Consumables",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.42.35-PM.jpeg",
  },
  {
    id: "kiran-jelly",
    name: "Kiran Jelly USG",
    description: "Premium ultrasound coupling gel for diagnostic and interventional sonography.",
    category: "Ultrasound & ECG Consumables",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.43.13-PM.jpeg",
  },
  {
    id: "ecg-gel",
    name: "ECG Gel",
    description: "Conductive gel for ECG electrode application ensuring clear signal acquisition.",
    category: "Ultrasound & ECG Consumables",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.43.41-PM.jpeg",
  },
  {
    id: "ecg-paper",
    name: "ECG Paper",
    description: "Thermal ECG recording paper rolls for standard 3/6/12-channel ECG machines.",
    category: "Ultrasound & ECG Consumables",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.43.54-PM.jpeg",
  },
  {
    id: "tmt-paper",
    name: "TMT Paper",
    description: "Thermal paper for treadmill test (TMT) systems and stress ECG monitoring.",
    category: "Ultrasound & ECG Consumables",
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.44.59-PM.jpeg",
  },
  {
    id: "arihant-developer",
    name: "Arihant Developer",
    description: "X-ray film developer solution for manual processing darkroom workflows.",
    category: "Radiology Accessories",
    image: "/images/radiology/rad-02-xray-lightbox.png",
  },
  {
    id: "arihant-fixer",
    name: "Arihant Fixer",
    description: "Film fixer for manual X-ray processing — rapid fixing with long bath life.",
    category: "Radiology Accessories",
    image: "/images/radiology/fresh-08-skull-profile.jpeg",
  },
  {
    id: "kiran-apron",
    name: "Kiran Head Apron",
    description: "Lead-equivalent protective apron for radiation shielding in fluoroscopy and interventional suites.",
    category: "Radiology Accessories",
    image: "/images/products/PHOTO-2026-01-07-18-14-53.jpg.jpeg",
  },
];
