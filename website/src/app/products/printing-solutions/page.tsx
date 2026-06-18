import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";
import {
  mipsOverview,
  printingSolutions,
  mipsIncludes,
  coverageStates,
  officeLocations,
} from "@/content/printing-solutions";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: `Printing Solutions | ${site.brand.name}`,
  description: "Medical Imaging Print Solutions (MIPS) — MRI, CT, Ultrasound, X-Ray, PET-CT, and OPG printing with per-print billing and zero capex.",
};

export default function PrintingSolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Medical Imaging Print Solutions"
        title={mipsOverview.title}
        description={mipsOverview.description}
      />

      {/* MIPS Overview */}
      <section className="medical-section">
        <div className="mips-overview">
          <FadeIn>
            <h2 className="mips-overview__subtitle">{mipsOverview.subtitle}</h2>
            <ul className="mips-benefits">
              {mipsOverview.benefits.map((b) => (
                <li key={b}>
                  <CheckCircle2 className="size-5 shrink-0 text-[var(--color-medical)]" />
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mips-includes">
              {mipsIncludes.map((item) => (
                <div key={item.label} className="mips-include-card">
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Modality Solutions */}
      <section className="medical-section medical-section--alt">
        <SectionHeading
          title="Modality print solutions"
          description="Dedicated DICOM print workflows for every major imaging modality."
        />
        <div className="printing-solutions-grid">
          {printingSolutions.map((solution, i) => (
            <FadeIn key={solution.id} delay={i * 0.08}>
              <Card className="printing-solution-card glossy-card h-full overflow-hidden border-0 ring-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <Badge className="absolute left-4 top-4 bg-[#e85d26] text-white">{solution.modality}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="feature-list">
                    {solution.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div>
                    <strong className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Output Formats
                    </strong>
                    <div className="flex flex-wrap gap-2">
                      {solution.outputFormats.map((fmt) => (
                        <Badge key={fmt} variant="outline">
                          {fmt}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="medical-section">
        <SectionHeading
          title="Pan-India customer base"
          description="Serving healthcare facilities across major states with offices in key cities."
        />
        <StaggerGrid className="coverage-grid">
          {coverageStates.map((state) => (
            <StaggerItem key={state}>
              <span className="coverage-chip">{state}</span>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <FadeIn delay={0.2}>
          <div className="office-locations">
            <strong>Vandan Distributors Offices:</strong>
            {officeLocations.map((city) => (
              <Badge key={city} variant="secondary">
                {city}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </section>

      <CTASection
        title="Ready to save up to 50% on printing costs?"
        description="Book a MIPS demo — zero capital expense, per-print billing, and full maintenance included."
      />
    </PageShell>
  );
}
