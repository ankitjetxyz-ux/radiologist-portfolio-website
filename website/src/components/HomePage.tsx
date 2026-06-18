"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { site } from "@/content/site";
import { productCategories } from "@/content/products";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  ShieldCheck,
  Zap,
  Layers,
  Globe,
} from "lucide-react";

const heroSlides = [
  { image: "/images/radiology/fresh-02-brain-mri-grid.jpeg", alt: "MRI diagnostic report printing" },
  { image: "/images/radiology/fresh-01-xray-panel.jpeg", alt: "Multi-view X-ray diagnostic film panel" },
  { image: "/images/radiology/rad-10-blue-medical-film.png", alt: "Blue medical printing film" },
  { image: "/images/radiology/fresh-03-diagnostic-archive.jpeg", alt: "Diagnostic imaging archive" },
  { image: "/images/radiology/fresh-04-shoulder-xray.jpeg", alt: "X-ray diagnostic film output" },
];

const whyIcons = [ShieldCheck, Zap, Layers, Globe];

export function HomePage() {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I would like to know more about Accurate Medical Solutions."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="medical-hero">
        <motion.div
          className="medical-hero__content"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero-eyebrow">{site.hero.eyebrow}</p>
          <h1 className="hero-title">
            <span className="hero-title__line">{site.hero.headline.split(".")[0]}.</span>
            <span className="hero-title__line hero-title__line--accent">
              Trusted radiology partner since 2015.
            </span>
          </h1>
          <p className="medical-lede">{site.hero.lede}</p>

          <div className="medical-hero__actions">
            <Button
              render={
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" data-icon="inline-start" />
                  {site.hero.ctaPrimary}
                </a>
              }
              size="lg"
              className="min-h-12 cursor-pointer bg-[#25d366] text-base text-white shadow-lg shadow-[#25d366]/25 hover:bg-[#20ba56]"
            />
            <Button
              render={
                <Link href="/products">
                  {site.hero.ctaSecondary}
                  <ArrowRight className="size-4" data-icon="inline-end" />
                </Link>
              }
              variant="outline"
              size="lg"
              className="min-h-12 cursor-pointer text-base backdrop-blur-sm"
            />
          </div>

          <div className="hero-stats hero-stats--inline">
            {site.metrics.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="medical-hero__visual-column">
          <motion.div
            className="medical-hero__visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-carousel-frame">
              <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]} className="h-full w-full">
                <CarouselContent className="ml-0 h-full">
                  {heroSlides.map((slide, idx) => (
                    <CarouselItem key={idx} className="relative h-full min-h-0 basis-full pl-0">
                      <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 1024px) 96vw, 62vw" priority={idx === 0} className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/50 via-transparent to-transparent" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="medical-section">
        <div className="intro-grid">
          <FadeIn>
            <SectionHeading title={site.intro.title} description={site.intro.body} />
            <p className="intro-highlight">{site.intro.highlight}</p>
            <Button
              render={
                <Link href="/about">
                  Learn about us
                  <ArrowRight className="size-4" data-icon="inline-end" />
                </Link>
              }
              variant="outline"
              className="mt-6 cursor-pointer"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="intro-visual">
              <Image
                src={site.brand.logo}
                alt="Accurate Medical Solutions"
                width={280}
                height={280}
                className="intro-visual__logo"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="medical-section medical-section--alt">
        <SectionHeading
          title="Featured product categories"
          description="Contrast media, diagnostic films, MIPS, and hospital consumables — organised for quick navigation."
        />
        <div className="category-grid">
          {productCategories.map((cat, i) => (
            <CategoryCard key={cat.slug} {...cat} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="medical-section">
        <SectionHeading
          title="Why choose Accurate"
          description="A radiology-focused partner — not a generic medical supplier."
        />
        <StaggerGrid className="why-choose-grid">
          {site.whyChooseUs.map((item, i) => {
            const Icon = whyIcons[i] ?? ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <Card className="why-choose-card glossy-card h-full border-0 ring-0">
                  <CardHeader>
                    <div className="why-choose-card__icon">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.body}</CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </section>

      {/* Testimonials Preview */}
      <section className="medical-section medical-section--alt">
        <SectionHeading
          title="Trusted by healthcare partners"
          description="Radiology departments and diagnostic centres across India rely on Accurate for quality and service."
        />
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.1} />
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <Button
            render={
              <Link href="/testimonials">
                Read all testimonials
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Link>
            }
            variant="outline"
            size="lg"
            className="cursor-pointer"
          />
        </FadeIn>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
