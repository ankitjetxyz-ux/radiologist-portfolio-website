import type { Metadata } from "next";
import { site } from "@/content/site";
import { otherProducts, otherProductCategories } from "@/content/other-products";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Other Products | ${site.brand.name}`,
  description: "Barium preparations, injector accessories, ultrasound gel, ECG paper, endoscopy rolls, and radiology consumables.",
};

export default function OtherProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Diagnostic Consumables"
        title="Other Products"
        description="Complete range of radiology and diagnostic consumables — from barium preparations and injector accessories to ultrasound gel and ECG paper."
      />

      {otherProductCategories.map((category) => {
        const products = otherProducts.filter((p) => p.category === category);
        if (products.length === 0) return null;
        return (
          <section key={category} className="medical-section">
            <SectionHeading title={category} description={`Professional ${category.toLowerCase()} for hospitals and diagnostic centres.`} />
            <div className="product-grid">
              {products.map((p, i) => (
                <ProductCard
                  key={p.id}
                  title={p.name}
                  description={p.description}
                  image={p.image}
                  brochure={p.brochure}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </section>
        );
      })}

      <CTASection title="Looking for a specific consumable?" description="All other X-ray films and products are available — contact us to check stock at the time of enquiry." />
    </PageShell>
  );
}
