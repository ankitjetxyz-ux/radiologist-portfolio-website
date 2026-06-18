export type PrintingSolution = {
  id: string;
  modality: string;
  title: string;
  description: string;
  features: string[];
  outputFormats: string[];
  image: string;
};

export const mipsOverview = {
  title: "Medical Imaging Print Solutions (MIPS)",
  subtitle: "Versatile DICOM printing on conventional films, white medical-grade films, and paper.",
  description:
    "Vandan Distributors MIPS is an end-to-end solution with zero capital expense. We provide the printer, DICOM software, ink, media, maintenance, and service — you pay only per print.",
  benefits: [
    "Save up to 50% on printing costs",
    "No capital expenditure — all-in-one per-print model",
    "Maintenance, software updates, and service included",
    "Connect to multiple modalities via DICOM",
    "Print on blue-base film, white medical film, or paper",
    "Customisable software with quick processing",
  ],
};

export const printingSolutions: PrintingSolution[] = [
  {
    id: "mri-printing",
    modality: "MRI",
    title: "MRI Report Printing",
    description:
      "High-resolution DICOM print output for brain, spine, and body MRI studies. Crisp grayscale reproduction on diagnostic film or paper for referring physicians and patient records.",
    features: [
      "DICOM SCP connectivity to MRI scanners",
      "Multi-series layout with annotations",
      "Film and paper output options",
      "Per-print billing with no capex",
    ],
    outputFormats: ['10" × 12"', '14" × 17"', "A4 Paper", "A3 Paper"],
    image: "/images/radiology/fresh-02-brain-mri-grid.jpeg",
  },
  {
    id: "ct-printing",
    modality: "CT",
    title: "CT Scan Report Printing",
    description:
      "Reliable CT image printing for high-volume diagnostic centres. Consistent window/level rendering and multi-slice layouts for thoracic, abdominal, and angiographic studies.",
    features: [
      "High-throughput DICOM print queue",
      "Customisable series selection and layout",
      "White film and blue-base film support",
      "Included maintenance and ink supply",
    ],
    outputFormats: ['8" × 10"', '10" × 12"', '14" × 17"', "A3 Paper", "A3 PVC"],
    image: "/images/radiology/fresh-01-xray-panel.jpeg",
  },
  {
    id: "ultrasound-printing",
    modality: "Ultrasound",
    title: "Ultrasound Report Printing",
    description:
      "Excellent image quality for obstetric, abdominal, and vascular ultrasound reports. Trusted by centres for sonography print output on film and paper.",
    features: [
      "Colour and grayscale ultrasound support",
      "Multi-image grid layouts",
      "Paper and glossy roll options",
      "Quick processing for busy OPD workflows",
    ],
    outputFormats: ["A4 Paper", "A3 Paper", "Glossy Roll", "Standard Roll"],
    image: "/images/products/WhatsApp-Image-2026-06-10-at-11.42.35-PM.jpeg",
  },
  {
    id: "xray-printing",
    modality: "X-Ray",
    title: "X-Ray Report Printing",
    description:
      "DICOM print solution for CR/DR X-ray systems. High-contrast bone and chest film output with flexible sizing for radiology departments and teleradiology centres.",
    features: [
      "DICOM print from CR/DR modalities",
      "Blue-base and white film output",
      "Multiple size formats including 13×17",
      "Zero capital expense model",
    ],
    outputFormats: ['8" × 10"', '10" × 12"', '13" × 17"', "A4", "A3 Paper", "A3 PVC"],
    image: "/images/radiology/fresh-04-shoulder-xray.jpeg",
  },
  {
    id: "pet-ct-printing",
    modality: "PET-CT",
    title: "PET-CT Report Printing",
    description:
      "Fusion image and multi-planar reconstruction printing for nuclear medicine and oncology centres requiring combined functional and anatomical documentation.",
    features: [
      "Fusion image layout support",
      "High-density film for PET-CT reads",
      "DICOM storage and SCP integration",
      "End-to-end service and maintenance",
    ],
    outputFormats: ['10" × 12"', '14" × 17"', "A3 Paper"],
    image: "/images/radiology/fresh-03-diagnostic-archive.jpeg",
  },
  {
    id: "opg-printing",
    modality: "OPG",
    title: "OPG & Dental Imaging Printing",
    description:
      "Panoramic and cephalometric image printing for dental imaging centres and maxillofacial radiology practices.",
    features: [
      "Panoramic image scaling and cropping",
      "Film and paper output",
      "Quick single-click printing",
      "Per-print cost model",
    ],
    outputFormats: ['8" × 10"', '10" × 12"', "A4 Paper"],
    image: "/images/radiology/fresh-05-foot-xray.jpeg",
  },
];

export const mipsIncludes = [
  { label: "Vandan Distributors Printer", detail: "Medical-grade DICOM print engine" },
  { label: "DICOM Software", detail: "Customisable layout and modality connectivity" },
  { label: "Ink & Media", detail: "Films, paper, and consumables supplied" },
  { label: "Maintenance", detail: "Full service and peace of mind" },
  { label: "Per-Print Billing", detail: "No capital expense, pay as you print" },
];

export const coverageStates = [
  "Andhra Pradesh", "Bihar", "Chhattisgarh", "Delhi/NCR", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

export const officeLocations = ["Ahmedabad", "Mumbai", "Delhi", "Bengaluru", "Kolkata", "Nagpur", "Pune", "Bhopal"];
