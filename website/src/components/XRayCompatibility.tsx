"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { site, type BrandName } from "@/content/site";
import { PremiumRotatingRing } from "@/components/PremiumRotatingRing";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const brands = [
  "Compact dry imagers",
  "Department imagers",
  "High-volume imagers",
  "Specialty imagers",
  "Thermal output systems",
] as const;

export function XRayCompatibility() {
  const [selectedBrand, setSelectedBrand] = useState<BrandName>("Compact dry imagers");

  const getWhatsAppLink = (message: string) =>
    `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className="medical-section medical-section--dark medical-section--compatibility" id="compatibility">
      <PremiumRotatingRing />
        <SectionHeading
        title="Find the correct film for your imager"
        description="Select your imager category below to verify compatible films, print sizes, and performance details instantly."
      />

      <FadeIn delay={0.1}>
        <Card className="glossy-card compatibility-finder border-0 ring-0">
          <CardContent className="p-0">
            <Tabs value={selectedBrand} onValueChange={(v) => setSelectedBrand(v as BrandName)}>
              <div className="compatibility-finder__selector px-6 pt-6">
                <TabsList className="flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
                  {brands.map((brand) => (
                    <TabsTrigger
                      key={brand}
                      value={brand}
                      className="cursor-pointer rounded-full border border-border/60 px-5 py-2 text-sm font-semibold data-active:border-primary data-active:bg-primary data-active:text-white data-active:shadow-md"
                    >
                      {brand}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {brands.map((brand) => (
                <TabsContent key={brand} value={brand} className="mt-0">
                  <div className="compatibility-results">
                    <div className="compatibility-row header">
                      <div>Imager Model</div>
                      <div>Compatible Film Type</div>
                      <div>Available Sizes</div>
                      <div>Technical Specifications</div>
                    </div>
                    {site.compatibilityData[brand].map((row, idx) => (
                      <motion.div
                        key={idx}
                        className="compatibility-row"
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="compat-printer" data-label="Imager Model">
                          {row.printer}
                        </div>
                        <div className="compat-film" data-label="Compatible Film Type">
                          {row.films.map((film, fIdx) => (
                            <Badge key={fIdx} variant="secondary" className="compat-film-tag font-medium">
                              {film}
                            </Badge>
                          ))}
                        </div>
                        <div className="compat-sizes" data-label="Available Sizes">
                          {row.sizes.map((size, sIdx) => (
                            <Badge key={sIdx} variant="outline" className="compat-size-tag font-medium">
                              {size}
                            </Badge>
                          ))}
                        </div>
                        <div className="compat-spec" data-label="Technical Specifications">
                          {row.spec}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="compatibility-finder__footer">
              <p>
                Don&apos;t see your specific printer listed here? We support a wide range of legacy and modern thermal
                imagers. Reach out to our technical team to verify compatibility.
              </p>
              <Button
                render={
                  <a
                    href={getWhatsAppLink(`Hello, I would like to verify film compatibility for my ${selectedBrand}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Confirm Compatibility
                  </a>
                }
                size="lg"
                className="cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
