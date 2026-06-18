import type { Metadata } from "next";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: `Testimonials | ${site.brand.name}`,
  description: "Customer reviews and success stories from hospitals and diagnostic centres using Vandan Distributors.",
};

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Client Feedback"
        title="Testimonials"
        description="Hospitals, diagnostic centres, and radiology departments share their experience with Vandan Distributors products and MIPS services."
      />

      <section className="medical-section">
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.08} />
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
