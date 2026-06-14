"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { site } from "@/content/site";
import { downloads, downloadCategories } from "@/content/downloads";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function DownloadsClient() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? downloads : downloads.filter((d) => d.category === filter);

  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Downloads & Brochures"
        description="Product catalogues, brochures, and technical datasheets — including CT, MRI, and colour print samples."
      />

      <section className="medical-section">
        <div className="download-filters">
          {downloadCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={cn("download-filter-btn", filter === cat.id && "download-filter-btn--active")}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="downloads-grid">
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04}>
              <Card className="download-card glossy-card h-full border-0 ring-0">
                <CardHeader>
                  <div className="download-card__icon">
                    <FileText className="size-6" />
                  </div>
                  <Badge variant="secondary" className="w-fit capitalize">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    render={
                      <a href={item.file} target="_blank" rel="noreferrer" download>
                        <Download className="size-4" data-icon="inline-start" />
                        Download PDF
                      </a>
                    }
                    className="w-full cursor-pointer"
                  />
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection title="Need a custom product catalogue?" description={`Contact ${site.brand.name} for tailored brochures and technical documentation.`} />
    </PageShell>
  );
}
