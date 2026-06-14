export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  facility: string;
  modality?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "sonography-ct",
    quote:
      "We have been using Accurate Medical Print Solutions for the last 4 months for printing sonography and CT scan images on films. The quality and service have been consistently excellent.",
    author: "Radiology Department",
    role: "Chief Radiologist",
    facility: "Multi-Speciality Diagnostic Centre",
    modality: "Ultrasound & CT",
  },
  {
    id: "ultrasound-quality",
    quote:
      "The printing solution provided by Accurate Medical Print Solutions for ultrasound scan modalities is excellent. We have observed that the quality of images is outstanding for clinical reporting.",
    author: "Sonology Unit",
    role: "Consultant Sonologist",
    facility: "Diagnostic Imaging Centre",
    modality: "Ultrasound",
  },
  {
    id: "mips-cost",
    quote:
      "Accurate's per-print MIPS model eliminated our capital expense on printers and maintenance. We saved significantly on our monthly imaging print costs while improving output quality.",
    author: "Hospital Administration",
    role: "Operations Manager",
    facility: "Private Hospital",
    modality: "Multi-Modality MIPS",
  },
  {
    id: "contrast-supply",
    quote:
      "Reliable supply of JB Pharma contrast media with competitive pricing and timely delivery. Accurate has become our preferred vendor for radiology consumables.",
    author: "Pharmacy & Radiology",
    role: "Purchase Head",
    facility: "Corporate Hospital Chain",
    modality: "Contrast Media",
  },
  {
    id: "xray-films",
    quote:
      "Fuji and Agfa film stock from Accurate has been consistent in quality. Their technical team helped us verify imager compatibility and optimize our reorder schedule.",
    author: "Imaging Department",
    role: "Senior Radiographer",
    facility: "Diagnostic Centre",
    modality: "X-Ray Films",
  },
  {
    id: "service-response",
    quote:
      "WhatsApp support and on-site service for our MIPS printer have been responsive. Downtime is minimal and the per-print model gives us predictable costs.",
    author: "Diagnostic Chain",
    role: "Centre Manager",
    facility: "Pan-Gujarat Diagnostic Network",
    modality: "MIPS Service",
  },
];
