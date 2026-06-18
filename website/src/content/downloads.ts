export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  category: "catalogue" | "brochure" | "datasheet" | "presentation";
  file: string;
  size?: string;
};

export const downloads: DownloadItem[] = [
  {
    id: "main-brochure",
    title: "Vandan Distributors Product Brochure",
    description: "Complete product catalogue covering contrast media, films, MIPS, and diagnostic consumables.",
    category: "catalogue",
    file: "/downloads/broucher-120825.pdf",
  },
  {
    id: "eskay-iodine",
    title: "Eskay Iodine / Contrast Media Brochure",
    description: "Technical brochure for iodinated contrast media products and specifications.",
    category: "brochure",
    file: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "ct-mono-1",
    title: "CT Print Solution — Mono Layout 1",
    description: "Sample CT report print layout — monochrome format.",
    category: "datasheet",
    file: "/downloads/1-CT-MONO.pdf",
  },
  {
    id: "mri-mono-2",
    title: "MRI Print Solution — Mono Layout",
    description: "Sample MRI report print layout — monochrome format.",
    category: "datasheet",
    file: "/downloads/2-MRI-MONO.pdf",
  },
  {
    id: "ct-color-3",
    title: "CT Print Solution — Colour Layout",
    description: "Sample CT report print layout — colour format.",
    category: "datasheet",
    file: "/downloads/3-CT-COLOR.pdf",
  },
  {
    id: "ct-1",
    title: "CT Report Sample 1",
    description: "CT diagnostic report print sample for client reference.",
    category: "datasheet",
    file: "/downloads/CT-1.pdf",
  },
  {
    id: "ct-2",
    title: "CT Report Sample 2",
    description: "CT diagnostic report print sample — alternate layout.",
    category: "datasheet",
    file: "/downloads/CT-2.pdf",
  },
  {
    id: "ct-3",
    title: "CT Report Sample 3",
    description: "CT diagnostic report print sample — multi-series layout.",
    category: "datasheet",
    file: "/downloads/CT-3.pdf",
  },
  {
    id: "mri-1",
    title: "MRI Report Sample 1",
    description: "MRI diagnostic report print sample for client reference.",
    category: "datasheet",
    file: "/downloads/MRI-1.pdf",
  },
  {
    id: "mri-2",
    title: "MRI Report Sample 2",
    description: "MRI diagnostic report print sample — brain study layout.",
    category: "datasheet",
    file: "/downloads/MRI-2.pdf",
  },
  {
    id: "mri-3",
    title: "MRI Report Sample 3",
    description: "MRI diagnostic report print sample — spine study layout.",
    category: "datasheet",
    file: "/downloads/MRI-3.pdf",
  },
  {
    id: "color-1",
    title: "Colour Print Sample 1",
    description: "Colour medical imaging print output sample.",
    category: "datasheet",
    file: "/downloads/COLOR-1.pdf",
  },
  {
    id: "color-2",
    title: "Colour Print Sample 2",
    description: "Colour medical imaging print output sample — alternate format.",
    category: "datasheet",
    file: "/downloads/COLOR-2.pdf",
  },
  {
    id: "color-3",
    title: "Colour Print Sample 3",
    description: "Colour ultrasound/endoscopy print sample.",
    category: "datasheet",
    file: "/downloads/COLOR-3.pdf",
  },
  {
    id: "color-4",
    title: "Colour Print Sample 4",
    description: "Colour medical report print sample.",
    category: "datasheet",
    file: "/downloads/COLOR-4.pdf",
  },
  {
    id: "color-5",
    title: "Colour Print Sample 5",
    description: "Colour diagnostic print output reference.",
    category: "datasheet",
    file: "/downloads/COLOR-5.pdf",
  },
  {
    id: "color-6",
    title: "Colour Print Sample 6",
    description: "Colour diagnostic print output reference — extended layout.",
    category: "datasheet",
    file: "/downloads/COLOR-6.pdf",
  },
];

export const downloadCategories = [
  { id: "all", label: "All Downloads" },
  { id: "catalogue", label: "Product Catalogues" },
  { id: "brochure", label: "Brochures" },
  { id: "datasheet", label: "Technical Datasheets" },
] as const;
