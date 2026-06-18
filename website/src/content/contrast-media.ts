export type ContrastProduct = {
  id: string;
  name: string;
  activeIngredient: string;
  category: "x-ray" | "mri" | "oral";
  subcategory: string;
  description: string;
  iodineConc?: string;
  packs: string[];
  image: string;
  brochure?: string;
};

export const contrastCategories = [
  {
    id: "x-ray",
    title: "X-Ray Contrast Agents",
    description:
      "Radiographic contrast media for X-ray, CT scan, cath labs, and digital subtraction angiography (DSA) — improving visibility of internal organs and structures.",
  },
  {
    id: "mri",
    title: "MRI Contrast Agents",
    description:
      "Gadolinium-based contrast agents for magnetic resonance imaging — enhancing tissue differentiation and lesion detection.",
  },
  {
    id: "oral",
    title: "Oral Contrast Media",
    description:
      "Oral contrast preparations for gastrointestinal imaging and CT enterography protocols.",
  },
] as const;

/** Vandan Distributors contrast media product catalogue */
export const contrastProducts: ContrastProduct[] = [
  {
    id: "lek-pamidol",
    name: "Lek-Pamidol Injection",
    activeIngredient: "Iopamidol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "Non-ionic iodinated contrast medium for intravenous use in CT, angiography, and urography. Low osmolality profile for improved patient tolerance.",
    iodineConc: "300 / 340 / 370 mg/mL",
    packs: ["20 mL amp", "50 mL vial", "100 mL vial"],
    image: "/images/radiology/rad-26-imaging-supplies.png",
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "contrapaque",
    name: "Contrapaque Injection",
    activeIngredient: "Iohexol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "Widely used non-ionic contrast agent for CT, IV urography, angiocardiography, and peripheral angiography with excellent safety profile.",
    iodineConc: "300 / 350 mg/mL",
    packs: ["20 mL amp", "50 mL vial", "100 mL vial", "200 mL vial"],
    image: "/images/radiology/rad-10-blue-medical-film.png",
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "trazograf-76",
    name: "Trazograf 76% Injection",
    activeIngredient: "Meglumine & Sodium Diatrizoate",
    category: "x-ray",
    subcategory: "Ionic Contrast Media",
    description:
      "High-concentration ionic contrast medium for angiography, IV urography, and CT applications requiring 370 mg/mL iodine.",
    iodineConc: "370 mg/mL",
    packs: ["20 mL amp", "50 mL vial", "100 mL vial"],
    image: "/images/radiology/rad-04-print-films.png",
  },
  {
    id: "trazograf-60",
    name: "Trazograf 60% Injection",
    activeIngredient: "Meglumine Diatrizoate",
    category: "x-ray",
    subcategory: "Ionic Contrast Media",
    description:
      "Ionic contrast agent at 282 mg/mL iodine concentration for general radiographic and urographic procedures.",
    iodineConc: "282 mg/mL",
    packs: ["20 mL amp", "50 mL vial", "100 mL vial"],
    image: "/images/radiology/rad-04-print-films.png",
  },
  {
    id: "cardiolek",
    name: "Cardiolek Injection",
    activeIngredient: "Iodixanol",
    category: "x-ray",
    subcategory: "Iso-Osmolar Contrast Media",
    description:
      "Iso-osmolar contrast medium ideal for cardiac angiography, coronary interventions, and high-risk patients requiring optimal tolerability.",
    iodineConc: "320 mg/mL",
    packs: ["50 mL vial", "100 mL vial"],
    image: "/images/radiology/fresh-02-brain-mri-grid.jpeg",
  },
  {
    id: "gastrolek",
    name: "Gastrolek Oral Contrast",
    activeIngredient: "Sodium Diatrizoate",
    category: "oral",
    subcategory: "Oral Contrast Media",
    description:
      "Oral contrast preparation for upper GI and abdominal CT studies requiring bowel opacification.",
    iodineConc: "249.64 mg/mL",
    packs: ["30 mL bottle", "100 mL bottle"],
    image: "/images/products/20250913_130304.jpg.jpeg",
  },
  {
    id: "trazogastro",
    name: "Trazogastro Oral Contrast",
    activeIngredient: "Meglumine & Sodium Diatrizoate",
    category: "oral",
    subcategory: "Oral Contrast Media",
    description:
      "High-density oral contrast medium for gastrointestinal radiography and CT enterography protocols.",
    iodineConc: "370 mg/mL",
    packs: ["30 mL bottle", "100 mL bottle"],
    image: "/images/products/20250913_131833.jpg.jpeg",
  },
  {
    id: "magnilek",
    name: "Magnilek Injection",
    activeIngredient: "Gadopentetate Dimeglumine",
    category: "mri",
    subcategory: "MRI Contrast Media",
    description:
      "Gadolinium-based MRI contrast agent for enhancement of lesions, vascular structures, and inflammatory tissue in brain and body MRI.",
    iodineConc: "0.5 mmol/mL",
    packs: ["10 mL vial", "20 mL vial"],
    image: "/images/radiology/fresh-02-brain-mri-grid.jpeg",
  },
  {
    id: "gadotrast",
    name: "Gadotrast Injection",
    activeIngredient: "Gadoteric Acid (Macrocyclic)",
    category: "mri",
    subcategory: "Macrocyclic MRI Contrast Media",
    description:
      "Macrocyclic gadolinium chelate offering high stability and excellent contrast enhancement for MRI across body regions.",
    iodineConc: "0.5 mmol/mL",
    packs: ["10 mL vial", "20 mL vial"],
    image: "/images/radiology/fresh-03-diagnostic-archive.jpeg",
  },
];

export const contrastSpecsTable = [
  { product: "Lek-Pamidol Injection", ingredient: "Iopamidol 61.2% w/v", iodine: "300 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Lek-Pamidol Injection", ingredient: "Iopamidol 69.4% w/v", iodine: "340 mg/mL", pack: "50 mL vial, 100 mL vial" },
  { product: "Lek-Pamidol Injection", ingredient: "Iopamidol 75.5% w/v", iodine: "370 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Contrapaque Injection", ingredient: "Iohexol 64.7% w/v", iodine: "300 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial, 200 mL vial" },
  { product: "Contrapaque Injection", ingredient: "Iohexol 75.5% w/v", iodine: "350 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial, 200 mL vial" },
  { product: "Trazograf 76% Injection", ingredient: "Meglumine & Sodium Diatrizoate", iodine: "370 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Trazograf 60% Injection", ingredient: "Meglumine Diatrizoate 60% w/v", iodine: "282 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Cardiolek Injection", ingredient: "Iodixanol", iodine: "320 mg/mL", pack: "50 mL vial, 100 mL vial" },
  { product: "Magnilek Injection", ingredient: "Gadopentetate Dimeglumine", iodine: "0.5 mmol/mL", pack: "10 mL vial, 20 mL vial" },
  { product: "Gadotrast Injection", ingredient: "Gadoteric Acid (Macrocyclic)", iodine: "0.5 mmol/mL", pack: "10 mL vial, 20 mL vial" },
  { product: "Trazogastro Oral", ingredient: "Meglumine & Sodium Diatrizoate", iodine: "370 mg/mL", pack: "30 mL / 100 mL bottle" },
  { product: "Gastrolek Oral", ingredient: "Sodium Diatrizoate", iodine: "249.64 mg/mL", pack: "30 mL / 100 mL bottle" },
];
