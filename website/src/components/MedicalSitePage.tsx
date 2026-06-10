"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import { site } from "@/content/site";
import { AmbientBackground } from "@/components/AmbientBackground";
import { PremiumRotatingRing } from "@/components/PremiumRotatingRing";
import { ImageMarquee } from "@/components/ImageMarquee";
import { ProcessJourney } from "@/components/ProcessJourney";
import { WhyUsSection } from "@/components/WhyUsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type MedicalSitePageProps = {
  variant?: "home" | "about";
};

const heroSlides = [
  { image: "/images/radiology/fresh-02-brain-mri-grid.jpeg", alt: "Brain MRI diagnostic film output" },
  { image: "/images/radiology/fresh-01-xray-panel.jpeg", alt: "Multi-view X-ray diagnostic film panel" },
  { image: "/images/radiology/rad-10-blue-medical-film.png", alt: "Blue medical printing film stack" },
  { image: "/images/radiology/fresh-03-diagnostic-archive.jpeg", alt: "Diagnostic film archive display" },
  { image: "/images/radiology/fresh-08-skull-profile.jpeg", alt: "Skull profile X-ray on diagnostic film" },
  { image: "/images/radiology/fresh-04-shoulder-xray.jpeg", alt: "Shoulder joint X-ray diagnostic film" },
];

const productCards = [
  {
    title: "MRI Films",
    description: "Dry imaging film featuring high spatial resolution and optimal clarity for soft-tissue diagnostics.",
    image: "/images/radiology/rad-04-print-films.png",
    alt: "MRI Films",
  },
  {
    title: "CT Scan Films",
    description: "Consistent grayscale reproduction, low fog rates, and reliable output for heavy scanning schedules.",
    image: "/images/radiology/rad-10-blue-medical-film.png",
    alt: "CT Scan Films",
  },
  {
    title: "X-Ray Films",
    description: "Diagnostic-grade dry laser imaging film providing high contrast, durable bases, and sharp bone details.",
    image: "/images/radiology/rad-02-xray-lightbox.png",
    alt: "X-Ray Films",
  },
];

const industries = [
  { title: "Hospitals", emoji: "🏥", image: "/images/radiology/fresh-01-xray-panel.jpeg" },
  { title: "Diagnostic Centers", emoji: "🔬", image: "/images/radiology/fresh-02-brain-mri-grid.jpeg" },
  { title: "Radiology Clinics", emoji: "🧠", image: "/images/radiology/fresh-05-foot-xray.jpeg" },
  { title: "Medical Distributors", emoji: "📦", image: "/images/radiology/rad-26-imaging-supplies.png" },
];


const brands = ["Fuji", "Agfa", "Carestream", "Konica", "Sony"] as const;
type BrandName = (typeof brands)[number];

const heroStats = [
  { value: "2015", label: "Operating Since" },
  { value: "5+", label: "Imager Brands" },
  { value: "Gujarat", label: "Pan-State Supply" },
];

export function MedicalSitePage({ variant = "home" }: MedicalSitePageProps) {
  const [selectedBrand, setSelectedBrand] = useState<BrandName>("Fuji");
  type GalleryProduct = (typeof site.galleryProducts)[number];
  const [activeProduct, setActiveProduct] = useState<GalleryProduct | null>(null);
  const [isHubActive, setIsHubActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getWhatsAppLink = (message: string) =>
    `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(message)}`;

  const defaultHeroWhatsApp = getWhatsAppLink(
    "Hello,\nI would like to know more about your MRI/CT scan printing materials."
  );

  return (
    <div className="medical-site">
      <AmbientBackground />

      {/* Sticky Header */}
      <motion.header
        className={cn("medical-header", scrolled && "medical-header--scrolled")}
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link className="medical-brand" href="/">
          <Image src={site.brand.logo} alt="Vandan Distributors" width={44} height={44} priority />
          <span>
            <strong>{site.brand.name}</strong>
            <small>{site.brand.tagline}</small>
          </span>
        </Link>

        <nav className="medical-nav" aria-label="Primary">
          <a href="#what-we-offer">Offer</a>
          <a href="#compatibility">Compatibility</a>
          <a href="#gallery">Gallery</a>
          <a href="#why-us">Why Us</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
        </nav>

        <Button
          render={
            <a href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" data-icon="inline-start" />
              Consult on WhatsApp
            </a>
          }
          size="lg"
          className="cursor-pointer bg-[#25d366] text-white shadow-lg shadow-[#25d366]/25 hover:bg-[#20ba56]"
        />
      </motion.header>

      {/* Hero Section */}
      <section className="medical-hero">
        <motion.div
          className="medical-hero__content"
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            <motion.span
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title__line"
            >
              Precision Imaging Films
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="hero-title__line"
            >
              for Accurate Diagnostics
            </motion.span>
          </h1>
          <p className="medical-lede">
            High-contrast diagnostic films and consumables for clinical imaging departments. Delivering reliable
            results and seamless vendor support.
          </p>

          <div className="medical-hero__actions">
            <Button
              render={
                <a href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" data-icon="inline-start" />
                  Consult on WhatsApp
                </a>
              }
              size="lg"
              className="min-h-12 min-w-44 cursor-pointer bg-[#25d366] text-base text-white shadow-lg shadow-[#25d366]/25 hover:bg-[#20ba56]"
            />
            <Button
              render={
                <a href={site.brand.emailHref}>
                  <Mail className="size-4" data-icon="inline-start" />
                  Email Us
                </a>
              }
              variant="outline"
              size="lg"
              className="min-h-12 min-w-36 cursor-pointer text-base backdrop-blur-sm"
            />
          </div>
        </motion.div>

        <div className="medical-hero__visual-column">
          <motion.div
            className="medical-hero__visual"
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-carousel-frame">
              <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
                className="h-full w-full"
              >
                <CarouselContent className="ml-0 h-full">
                  {heroSlides.map((slide, idx) => (
                    <CarouselItem key={idx} className="relative h-full min-h-0 basis-full pl-0">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 1024px) 96vw, 62vw"
                        priority={idx === 0}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>

          <motion.div
            className="hero-stats hero-stats--below-visual"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ImageMarquee />

      {/* What We Offer */}
      <section className="medical-section medical-section--alt" id="what-we-offer">
        <SectionHeading
          title="Core medical printing consumables"
          description="Durable grayscale film products designed to align with professional diagnostic requirements."
        />

        <StaggerGrid className="medical-products">
          {productCards.map((product) => (
            <StaggerItem key={product.title}>
              <Card className="glossy-card group/card h-full overflow-hidden border-0 py-0 ring-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={product.image} alt={product.alt} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover transition-transform duration-500 group-hover/card:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    render={
                      <a href="#compatibility">
                        View Details
                        <ChevronRight className="size-4" data-icon="inline-end" />
                      </a>
                    }
                    variant="ghost"
                    className="cursor-pointer font-semibold text-primary"
                  />
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <WhyUsSection />

      {/* Film Compatibility Finder */}
      <section className="medical-section medical-section--dark medical-section--compatibility" id="compatibility">
        <PremiumRotatingRing />
        <SectionHeading
          title="Find the correct film for your imager"
          description="Select your print manufacturer below to verify compatible films, print sizes, and performance details instantly."
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
                      href={getWhatsAppLink(`Hello, I would like to verify film compatibility for my ${selectedBrand} imager.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Confirm {selectedBrand} Compatibility
                    </a>
                  }
                  size="lg"
                  className="cursor-pointer bg-[#25d366] text-white hover:bg-[#20ba56]"
                />
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      {/* Product Gallery Carousel */}
      <section className="medical-section medical-section--gallery" id="gallery">
        <SectionHeading
          title="High-resolution visual directory"
          description="Click any visual card below to display sizes, density specs, and printer compatibility information."
        />

        <FadeIn delay={0.1}>
          <Carousel opts={{ align: "start", loop: true }} className="gallery-carousel w-full">
            <CarouselContent className="-ml-5">
              {site.galleryProducts.map((p) => (
                <CarouselItem
                  key={p.id}
                  className="basis-[90vw] pl-5 sm:basis-[74vw] md:basis-[58vw] lg:basis-[42vw] xl:basis-[34vw]"
                >
                  <Card
                    className="gallery-carousel-item group/card cursor-pointer overflow-hidden border-0 py-0 ring-0"
                    onClick={() => setActiveProduct(p)}
                  >
                    <div className="relative aspect-[16/10] min-h-[15rem] w-full sm:min-h-[18rem] lg:min-h-[22rem] xl:min-h-[26rem]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 58vw, 34vw"
                        className="object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
                      />
                      <div className="gallery-card__overlay absolute inset-0 flex items-end bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/25 to-transparent p-5 opacity-100 transition-opacity sm:p-6">
                        <div className="gallery-card__info text-white">
                          <h3 className="mb-1.5 text-xl font-bold text-white sm:text-2xl">{p.title}</h3>
                          <span className="text-sm text-white/85 sm:text-base">Sizes: {p.sizes.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="gallery-carousel__nav left-3 border-primary/20 bg-white/85 backdrop-blur-md shadow-md" />
            <CarouselNext className="gallery-carousel__nav right-3 border-primary/20 bg-white/85 backdrop-blur-md shadow-md" />
          </Carousel>
        </FadeIn>
      </section>

      {/* Gallery Dialog */}
      <Dialog open={!!activeProduct} onOpenChange={(open) => !open && setActiveProduct(null)}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden p-0 sm:max-w-3xl" showCloseButton>
          {activeProduct && (
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square min-h-[16rem] md:aspect-auto md:min-h-[24rem]">
                <Image src={activeProduct.image} alt={activeProduct.title} fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{activeProduct.title}</DialogTitle>
                  <DialogDescription className="sr-only">Product specifications and compatibility</DialogDescription>
                </DialogHeader>
                <div className="modal-spec-grid flex flex-col gap-4">
                  <div className="modal-spec-item">
                    <strong className="mb-2 block text-sm font-bold uppercase tracking-wide text-muted-foreground">Available Sizes</strong>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.sizes.map((size, idx) => (
                        <Badge key={idx} variant="secondary">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="modal-spec-item">
                    <strong className="mb-1 block text-sm font-bold uppercase tracking-wide text-muted-foreground">Specifications</strong>
                    <p className="text-sm leading-relaxed">{activeProduct.specs}</p>
                  </div>
                  <div className="modal-spec-item">
                    <strong className="mb-1 block text-sm font-bold uppercase tracking-wide text-muted-foreground">Compatibility</strong>
                    <p className="text-sm leading-relaxed">{activeProduct.compatibility}</p>
                  </div>
                </div>
                <Button
                  render={
                    <a
                      href={getWhatsAppLink(
                        `Hello, I would like to inquire about specifications and bulk pricing for ${activeProduct.title}.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="size-4" data-icon="inline-start" />
                      Inquire on WhatsApp
                    </a>
                  }
                  size="lg"
                  className="mt-auto cursor-pointer bg-[#25d366] text-white hover:bg-[#20ba56]"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Industries We Serve */}
      <section className="medical-section" id="industries">
        <SectionHeading
          title="Supporting local healthcare centers"
          description="Providing specialized materials for various radiology departments, chains, and distributors."
        />

        <StaggerGrid className="industries-grid">
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <div className="industry-card group">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="industry-card__overlay" />
                <h3>
                  {industry.emoji} {industry.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Process */}
      <section className="medical-section medical-section--process" id="process">
        <SectionHeading
          className="section-heading--attached"
          title="Simple supply timeline"
          description="We streamline the procurement workflow to get film sheets delivered with minimal delays."
        />

        <ProcessJourney />
      </section>

      {/* CTA Banner */}
      <FadeIn className="medical-section">
        <div className="medical-cta-banner">
          <h2>Need Medical Imaging Films?</h2>
          <p>Get expert assistance today.</p>
          <div className="medical-cta-actions">
            <Button
              render={
                <a href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
                  WhatsApp Consultation
                </a>
              }
              size="lg"
              className="cursor-pointer bg-[#25d366] text-white hover:bg-[#20ba56]"
            />
            <Button
              render={
                <a href={site.brand.emailHref}>
                  <Mail className="size-4" data-icon="inline-start" />
                  Email Consultation
                </a>
              }
              variant="outline"
              size="lg"
              className="cursor-pointer border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            />
            <Button
              render={
                <a href={site.brand.phoneHref}>
                  <Phone className="size-4" data-icon="inline-start" />
                  Call Now
                </a>
              }
              variant="outline"
              size="lg"
              className="cursor-pointer border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            />
          </div>
        </div>
      </FadeIn>

      {/* Floating Contact Hub */}
      <div className="floating-action-hub">
        <AnimatePresence>
          {isHubActive && (
            <motion.div
              className="floating-hub-menu active"
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <a className="floating-hub-item floating-hub-item--whatsapp" href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
                <span className="floating-hub-item__icon">💬</span>
                WhatsApp
              </a>
              <a className="floating-hub-item floating-hub-item--email" href={site.brand.emailHref}>
                <span className="floating-hub-item__icon">✉</span>
                Email Us
              </a>
              <a className="floating-hub-item floating-hub-item--call" href={site.brand.phoneHref}>
                <span className="floating-hub-item__icon">☎</span>
                Call Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className={cn("floating-hub-trigger", isHubActive && "active")}
          onClick={() => setIsHubActive(!isHubActive)}
          aria-label="Toggle contact menu"
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
        >
          📱
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="medical-footer">
        <div className="medical-footer__left">
          <strong>{site.brand.name}</strong>
          <p>{site.footer}</p>
        </div>
        <div className="medical-footer__links">
          <a href="#what-we-offer">Offer</a>
          <a href="#compatibility">Compatibility</a>
          <a href="#gallery">Gallery</a>
          <a href="#why-us">Why Us</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
        </div>
      </footer>
    </div>
  );
}
