import type { Metadata } from "next";
import { site } from "@/content/site";
import { contrastProducts, contrastCategories, contrastSpecsTable } from "@/content/contrast-media";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: `Contrast Media | ${site.brand.name}`,
  description: "JB Pharma contrast media — non-ionic, ionic, iso-osmolar, and MRI contrast agents for CT, angiography, and MR imaging.",
};

export default function ContrastMediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="JB Pharma Radio Diagnostics"
        title="Contrast Media"
        description="Complete range of X-ray, CT, MRI, and oral contrast agents from JB Pharma — India's #2 contrast media manufacturer with 30+ years of experience."
      />

      {contrastCategories.map((cat) => {
        const products = contrastProducts.filter((p) => p.category === cat.id);
        if (products.length === 0) return null;
        return (
          <section key={cat.id} className="medical-section">
            <SectionHeading title={cat.title} description={cat.description} />
            <div className="product-grid">
              {products.map((p, i) => (
                <ProductCard
                  key={p.id}
                  title={p.name}
                  description={p.description}
                  image={p.image}
                  category={p.subcategory}
                  tags={[p.activeIngredient, ...(p.iodineConc ? [p.iodineConc] : []), ...p.packs.slice(0, 2)]}
                  brochure={p.brochure}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="medical-section medical-section--alt">
        <SectionHeading
          title="Product specifications"
          description="Detailed concentration and pack size reference for JB Pharma contrast media products."
        />
        <FadeIn>
          <Card className="glossy-card overflow-hidden border-0 ring-0">
            <CardContent className="p-0">
              <div className="spec-table">
                <div className="spec-table__row spec-table__row--header">
                  <div>Product</div>
                  <div>Active Ingredient</div>
                  <div>Concentration</div>
                  <div>Pack Sizes</div>
                </div>
                {contrastSpecsTable.map((row, idx) => (
                  <div key={idx} className="spec-table__row">
                    <div data-label="Product">{row.product}</div>
                    <div data-label="Active Ingredient">{row.ingredient}</div>
                    <div data-label="Concentration">
                      <Badge variant="secondary">{row.iodine}</Badge>
                    </div>
                    <div data-label="Pack Sizes">{row.pack}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      <CTASection title="Need contrast media for your facility?" description="Contact us for pricing, availability, and bulk supply quotes for JB Pharma products." />
    </PageShell>
  );
}
