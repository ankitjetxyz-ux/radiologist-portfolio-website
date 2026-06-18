import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `About Us | ${site.brand.name}`,
  description: site.about.overview,
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Vandan Distributors"
        title="Radiology supplies built on clinical trust"
        description={site.about.overview}
      />

      <section className="medical-section">
        <div className="about-grid">
          <FadeIn>
            <SectionHeading title="Our Mission" description={site.about.mission} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading title="Our Vision" description={site.about.vision} />
          </FadeIn>
        </div>
      </section>

      <section className="medical-section medical-section--alt">
        <SectionHeading title="Our Values" description="Principles that guide every product recommendation and service commitment." />
        <StaggerGrid className="values-grid">
          {site.about.values.map((v) => (
            <StaggerItem key={v.title}>
              <Card className="glossy-card h-full border-0 ring-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{v.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{v.body}</CardDescription>
                </CardHeader>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="medical-section">
        <SectionHeading title="Industry Experience" description={site.about.experience} />
        <FadeIn delay={0.1}>
          <ul className="trust-list">
            {site.about.trustPoints.map((point) => (
              <li key={point}>
                <CheckCircle2 className="size-5 shrink-0 text-[var(--color-medical)]" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className="medical-section medical-section--alt">
        <div className="about-cta-row">
          <div>
            <h2>Why customers trust us</h2>
            <p>
              From contrast media supply to complete MIPS deployments, Vandan Distributors delivers end-to-end support with
              transparent per-print pricing and responsive technical guidance.
            </p>
          </div>
          <Button
            render={
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Link>
            }
            size="lg"
            className="cursor-pointer shrink-0"
          />
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
