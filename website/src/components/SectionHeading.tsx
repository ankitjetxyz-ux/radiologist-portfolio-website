"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "medical-section__heading section-heading",
        align === "center" && "section-heading--center mx-auto text-center",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="section-heading__title">{title}</h2>
      <p className="section-heading__desc">{description}</p>
      <div className={cn("section-heading__line", align === "center" && "mx-auto")} />
    </motion.div>
  );
}
