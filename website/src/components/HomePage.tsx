"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  HeartPulse,
  Mail,
  MessageCircle,
  Printer,
  ScanLine,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { productCategories } from "@/content/products";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";

const printImages = {
  reportPrint: "/images/products/20250913_130304.jpg.jpeg",
  printMedia: "/images/products/20250913_131833.jpg.jpeg",
  contrastPrint: "/images/products/20250913_131936.jpg.jpeg",
  filmPack: "/images/products/WhatsApp Image 2026-06-10 at 11.41.55 PM.jpeg",
  xrayPrint: "/images/products/WhatsApp Image 2026-06-10 at 11.41.55 PM (1).jpeg",
  filmOutput: "/images/products/WhatsApp Image 2026-06-10 at 11.41.55 PM (2).jpeg",
  printSheet: "/images/products/WhatsApp Image 2026-06-02 at 10.04.29 PM.jpeg",
  printDetail: "/images/products/WhatsApp Image 2026-06-02 at 10.04.30 PM.jpeg",
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const heroSlides = [
  {
    eyebrow: "Medical imaging print solutions",
    title: "Premium radiology reports, films, and print workflows.",
    copy: "Vandan Distributors helps radiologists, hospitals, and diagnostic centres present MRI, CT, X-ray, and diagnostic reports with confidence.",
    image: printImages.reportPrint,
  },
  {
    eyebrow: "Printed CT scan reports",
    title: "Clean printed reports for confident clinical review.",
    copy: "Focused radiology supplies, contrast media, and printing solutions for teams that need quality, consistency, and responsive guidance.",
    image: printImages.printMedia,
  },
  {
    eyebrow: "X-ray and radiology films",
    title: "Clean diagnostic film output for everyday imaging.",
    copy: "Reliable film supply and compatibility-led support for dry imaging, manual workflows, and high-volume diagnostic departments.",
    image: printImages.filmPack,
  },
  {
    eyebrow: "MRI and CT reports",
    title: "Clear printed imaging reports for professional review.",
    copy: "Medical printing media and MIPS workflows designed around readable reports, practical cost control, and dependable service.",
    image: printImages.contrastPrint,
  },
];

const partnerStats = [
  { value: "2015", label: "Operating since" },
  { value: "MIPS", label: "Per-print model" },
  { value: "MRI / CT / X-Ray", label: "Workflow coverage" },
  { value: "Pan-India", label: "Supply support" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Healthcare-first reliability",
    copy: "A radiology-focused catalogue for departments where product quality and supply timing directly affect daily operations.",
  },
  {
    icon: ScanLine,
    title: "Modality-aware guidance",
    copy: "Support across MRI, CT, X-ray, ultrasound, PET-CT, OPG, contrast media, films, and printing workflows.",
  },
  {
    icon: Printer,
    title: "Cost-controlled MIPS",
    copy: "Printer, software, ink, media, service, and maintenance available through a practical per-print model.",
  },
  {
    icon: Truck,
    title: "Responsive distribution",
    copy: "Fast enquiry handling, clear product recommendations, and dependable procurement support for healthcare buyers.",
  },
];

const featuredProducts = [
  {
    title: "Dry Imaging Films",
    tag: "X-Ray Films",
    copy: "Diagnostic film supply for clear grayscale output and reliable clinical presentation.",
    image: printImages.xrayPrint,
    href: "/products/x-ray-films",
  },
  {
    title: "MRI / CT Print Media",
    tag: "Printing",
    copy: "Report and image print support for multimodality diagnostic centres.",
    image: printImages.printMedia,
    href: "/products/printing-solutions",
  },
  {
    title: "Contrast Media Portfolio",
    tag: "Contrast",
    copy: "CT, MRI, angiography, oral, and procedural contrast requirements.",
    image: printImages.contrastPrint,
    href: "/products/contrast-media",
  },
];

const categoryPrintImages: Record<string, string> = {
  "contrast-media": printImages.contrastPrint,
  "x-ray-films": printImages.filmPack,
  "other-products": printImages.printSheet,
  "printing-solutions": printImages.reportPrint,
};

const printingHighlights = [
  "No capital expense",
  "Per-print billing",
  "Software, ink, media, and service included",
  "MRI, CT, ultrasound, X-ray, PET-CT, and OPG workflows",
];

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((current) => (current + 1) % heroSlides.length);
  const previousSlide = () =>
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);

  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I want a product consultation for Vandan Distributors."
  )}`;

  return (
    <div className="vandan-home">
      <section className="vandan-hero" aria-label="Vandan Distributors homepage hero">
        <div className="vandan-hero__carousel" aria-roledescription="carousel">
          {heroSlides.map((slide, index) => (
            <article
              key={slide.title}
              className={`vandan-hero__slide ${index === activeSlide ? "vandan-hero__slide--active" : ""}`}
              aria-hidden={index !== activeSlide}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="vandan-hero__veil" />
              <div className="vandan-hero__content">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="vandan-eyebrow">{slide.eyebrow}</p>
                  <h1>{slide.title}</h1>
                  <p>{slide.copy}</p>
                  <div className="vandan-hero__actions">
                    <a className="vandan-btn vandan-btn--primary" href={whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" />
                      Request consultation
                    </a>
                    <Link className="vandan-btn vandan-btn--secondary" href="/products">
                      Explore products
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </article>
          ))}

          <button type="button" className="vandan-hero__arrow vandan-hero__arrow--prev" onClick={previousSlide} aria-label="Previous slide">
            <ArrowLeft className="size-5" />
          </button>
          <button type="button" className="vandan-hero__arrow vandan-hero__arrow--next" onClick={nextSlide} aria-label="Next slide">
            <ArrowRight className="size-5" />
          </button>

          <div className="vandan-hero__dots" role="tablist" aria-label="Choose hero slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                className={`vandan-hero__dot ${index === activeSlide ? "vandan-hero__dot--active" : ""}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.eyebrow}`}
                aria-selected={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="vandan-partner">
        <motion.div className="vandan-partner__intro" {...reveal}>
          <p className="vandan-eyebrow">Trusted healthcare partner</p>
          <h2>Vandan Distributors supports the imaging teams behind accurate diagnoses.</h2>
          <p>
            We specialize in radiology, diagnostic imaging products, X-ray films, contrast media,
            and medical printing solutions for doctors, radiologists, hospitals, and diagnostic centres.
          </p>
        </motion.div>
        <div className="vandan-stat-grid">
          {partnerStats.map((item, index) => (
            <motion.div className="vandan-stat-card" key={item.label} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="vandan-section">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Product categories</p>
          <h2>A focused portfolio for radiology procurement.</h2>
          <p>Clear category paths for healthcare buyers who need dependable products and quick guidance.</p>
        </motion.div>
        <div className="vandan-category-grid">
          {productCategories.map((category, index) => (
            <motion.article className="vandan-category-card" key={category.slug} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
              <Link href={category.href}>
                <div className="vandan-category-card__image">
                  <Image src={categoryPrintImages[category.slug] ?? printImages.reportPrint} alt={category.title} fill sizes="(max-width: 900px) 100vw, 25vw" className="object-cover" />
                </div>
                <div className="vandan-category-card__body">
                  <span>{category.tag}</span>
                  <h3>{category.title.replace("Vandan Distributors", "Medical")}</h3>
                  <p>{category.description.replaceAll("Vandan Distributors", "Vandan Distributors")}</p>
                  <small>View category <ArrowRight className="size-4" /></small>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="vandan-section vandan-section--soft">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Why choose us</p>
          <h2>Professional support built around real imaging workflows.</h2>
        </motion.div>
        <div className="vandan-reason-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article className="vandan-reason-card" key={item.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                <span><Icon className="size-5" /></span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="vandan-section">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Featured products</p>
          <h2>High-priority supplies for diagnostic centres and hospitals.</h2>
        </motion.div>
        <div className="vandan-featured-grid">
          {featuredProducts.map((item, index) => (
            <motion.article className="vandan-featured-card" key={item.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
              <Link href={item.href}>
                <div className="vandan-featured-card__image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="vandan-featured-card__body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="vandan-printing">
        <motion.div className="vandan-printing__media" {...reveal}>
          <Image
            src={printImages.reportPrint}
            alt="Medical imaging report printing presentation"
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div className="vandan-printing__copy" {...reveal}>
          <p className="vandan-eyebrow">Healthcare printing solutions</p>
          <h2>Professional medical printing without the capital burden.</h2>
          <p>
            Vandan Distributors MIPS brings printer, software, ink, media, maintenance, and service
            into one dependable workflow for MRI, CT, ultrasound, X-ray, PET-CT, and OPG output.
          </p>
          <div className="vandan-printing__list">
            {printingHighlights.map((item) => (
              <span key={item}><BadgeCheck className="size-4" />{item}</span>
            ))}
          </div>
          <Link className="vandan-btn vandan-btn--secondary" href="/products/printing-solutions">
            View printing solutions
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </section>

      <section className="vandan-section vandan-section--soft">
        <motion.div className="vandan-section__heading" {...reveal}>
          <p className="vandan-eyebrow">Customer testimonials</p>
          <h2>Trusted by imaging departments and healthcare buyers.</h2>
        </motion.div>
        <div className="vandan-testimonial-grid">
          {testimonials.slice(0, 3).map((item, index) => (
            <motion.article className="vandan-testimonial-card" key={item.id} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
              <div className="vandan-testimonial-card__stars" aria-label="Five star testimonial">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="size-4" />)}
              </div>
              <p>&ldquo;{item.quote.replaceAll("Vandan Distributors", "Vandan Distributors")}&rdquo;</p>
              <div>
                <strong>{item.role}</strong>
                <span>{item.facility} / {item.modality}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="vandan-cta">
        <motion.div className="vandan-cta__panel" {...reveal}>
          <span className="vandan-cta__icon"><HeartPulse className="size-6" /></span>
          <p className="vandan-eyebrow">Contact Vandan Distributors</p>
          <h2>Need radiology films, contrast media, consumables, or a MIPS quotation?</h2>
          <p>
            Tell us your modality, monthly print volume, film size, or contrast requirement.
            We will help you choose the right product path.
          </p>
          <div className="vandan-cta__actions">
            <a className="vandan-btn vandan-btn--primary" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
            <a className="vandan-btn vandan-btn--secondary" href={site.brand.emailHref}>
              <Mail className="size-4" />
              Email inquiry
            </a>
          </div>
        </motion.div>
      </section>

      <div className="floating-consult">
        <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Open WhatsApp consultation"><MessageCircle className="size-5" /></a>
        <a href={site.brand.emailHref} aria-label="Open email consultation"><Mail className="size-5" /></a>
      </div>
    </div>
  );
}
