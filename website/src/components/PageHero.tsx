"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({ eyebrow, title, description, align = "left", className }: PageHeroProps) {
  return (
    <section className={cn("page-hero", align === "center" && "page-hero--center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__desc">{description}</p>
      </motion.div>
    </section>
  );
}
