import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { dryFilmProducts, vmsManualFilms } from "@/content/xray-films";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { XRayCompatibility } from "@/components/XRayCompatibility";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: `X-Ray Films | ${site.brand.name}`,
  description: "Dry imaging films and manual X-ray films for laser imagers, thermal imagers, and conventional processing.",
};

export default function XRayFilmsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Diagnostic Films"
        title="X-Ray Films"
        description="Dry imaging films for compatible laser and thermal imagers, plus manual X-ray films for conventional darkroom workflows."
      />

      <section className="medical-section">
        <SectionHeading
          title="Dry Imaging Films"
          description="Diagnostic-grade films in all standard sizes - available for immediate supply across Gujarat and pan-India."
        />
        <div className="product-grid">
          {dryFilmProducts.map((film) => (
            <FadeIn key={film.id}>
              <Card className="film-product-card glossy-card h-full overflow-hidden border-0 ring-0">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src={film.image} alt={film.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <Badge className="absolute left-3 top-3 bg-white/90 text-[#7a6a43]">{film.brand}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{film.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{film.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <strong className="mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Available Sizes</strong>
                    <div className="flex flex-wrap gap-2">
                      {film.variants.map((v) => (
                        <Badge key={v.size} variant="outline">
                          {v.size} - {v.packSize}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{film.specs}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <XRayCompatibility />

      <section className="medical-section medical-section--alt">
        <SectionHeading
          title={vmsManualFilms.title}
          description={vmsManualFilms.description}
        />
        <FadeIn>
          <Card className="vms-section glossy-card overflow-hidden border-0 ring-0">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[16rem] md:min-h-[24rem]">
                <Image
                  src={vmsManualFilms.image}
                  alt="Manual X-Ray Films"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="flex flex-col justify-center gap-5 p-8">
                <Badge className="w-fit bg-[var(--color-primary)] text-white">Brand: {vmsManualFilms.brand}</Badge>
                <h3 className="text-2xl font-bold">Available Sizes & Variants</h3>
                <div className="flex flex-wrap gap-2">
                  {vmsManualFilms.variants.map((v) => (
                    <Badge key={v.size} variant="secondary" className="font-medium">
                      {v.size} - {v.packSize}
                    </Badge>
                  ))}
                </div>
                <div>
                  <strong className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Technical Information
                  </strong>
                  <p className="text-sm leading-relaxed">{vmsManualFilms.specs}</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </FadeIn>
      </section>

      <CTASection title="Need X-ray films for your imager?" description="Contact us for film availability, compatibility verification, and bulk pricing." />
    </PageShell>
  );
}
