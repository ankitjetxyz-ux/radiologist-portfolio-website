"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  Headphones,
  Package,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/FadeIn";

const highlights = [
  { value: "2015", label: "Serving Gujarat since" },
  { value: "5+", label: "Imager categories" },
  { value: "Pan-state", label: "Clinic & hospital supply" },
];

const features: {
  icon: LucideIcon;
  label: string;
  description: string;
  tag: string;
}[] = [
  {
    icon: ShieldCheck,
    label: "Premium Quality",
    description:
      "Diagnostic-grade films with sharp grayscale, low fog, and stable output built for accurate clinical reads.",
    tag: "Clinical-grade",
  },
  {
    icon: Truck,
    label: "Fast Delivery",
    description:
      "Responsive dispatch across Gujarat so radiology teams receive film stock before imaging schedules slip.",
    tag: "Quick turnaround",
  },
  {
    icon: Package,
    label: "Bulk Supply",
    description:
      "Volume-ready packaging and repeat orders for hospitals, diagnostic chains, and high-throughput imaging centres.",
    tag: "Bulk-ready",
  },
  {
    icon: Headphones,
    label: "Technical Support",
    description:
      "Compatibility guidance for dry and thermal imagers, plus sizing and specification clarification.",
    tag: "Expert help",
  },
  {
    icon: BarChart3,
    label: "Consistent Results",
    description:
      "Reliable print density and fewer reprints, keeping reporting workflows steady day after day.",
    tag: "Stable output",
  },
  {
    icon: Building2,
    label: "Trusted by Clinics",
    description:
      "Trusted by hospitals, standalone diagnostic labs, and radiology departments across the region.",
    tag: "Proven partner",
  },
];

export function WhyUsSection() {
  return (
    <section className="medical-section why-us-section" id="why-us">
      <SectionHeading
        title="Strict diagnostic standards"
        description="Delivering consistent print behavior and supportive logistical workflows directly to clinical teams."
      />

      <div className="why-us-panel">
        <div className="why-us-panel__intro">
          <div className="why-us-panel__intro-copy">
            <p className="why-us-panel__lead">
              From film selection to doorstep delivery, Vandan Distributors supports imaging departments with
              materials and service aligned to real clinical pressure - not generic supplier promises.
            </p>
          </div>
          <ul className="why-us-highlights" aria-label="Company highlights">
            {highlights.map((item) => (
              <li key={item.label} className="why-us-highlight">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <StaggerGrid className="why-us-grid">
          {features.map((feature, index) => (
            <StaggerItem key={feature.label}>
              <article className="why-us-card group">
                <div className="why-us-card__top">
                  <span className="why-us-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="why-us-card__tag">{feature.tag}</span>
                </div>
                <motion.div
                  className="why-us-card__icon"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                >
                  <feature.icon className="size-6" strokeWidth={2} />
                </motion.div>
                <h3 className="why-us-card__title">{feature.label}</h3>
                <p className="why-us-card__desc">{feature.description}</p>
                <div className="why-us-card__bar" aria-hidden />
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
