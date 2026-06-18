import type { Metadata } from "next";
import { site } from "@/content/site";
import { productCategories } from "@/content/products";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { CategoryCard } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Products | ${site.brand.name}`,
  description: "Contrast media, X-ray films, MIPS, and diagnostic consumables for hospitals and diagnostic centres.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Product Catalogue"
        title="Complete radiology product range"
        description="Browse our categories - from contrast media and diagnostic films to end-to-end medical imaging print solutions."
      />

      <section className="medical-section">
        <div className="category-grid">
          {productCategories.map((cat, i) => (
            <CategoryCard key={cat.slug} {...cat} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
