"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

type MedicalSitePageProps = {
  variant?: "home" | "about";
};

export function MedicalSitePage({ variant = "home" }: MedicalSitePageProps) {
  // Hero slider state
  const heroSlides = [
    {
      image: "/images/radiology/rad-03-mri-wide.png",
      alt: "MRI scanner room diagnostics",
    },
    {
      image: "/images/radiology/rad-01-ct-scanner-room.png",
      alt: "CT scanner room diagnostics",
    },
    {
      image: "/images/radiology/rad-10-blue-medical-film.png",
      alt: "Blue medical printing film stack",
    },
    {
      image: "/images/radiology/rad-09-imaging-control.png",
      alt: "Medical imaging workflow environment",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto transition hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Compatibility finder state
  const brands = ["Fuji", "Agfa", "Carestream", "Konica", "Sony"] as const;
  type BrandName = (typeof brands)[number];
  const [selectedBrand, setSelectedBrand] = useState<BrandName>("Fuji");

  // Gallery Modal state
  type GalleryProduct = (typeof site.galleryProducts)[number];
  const [activeProduct, setActiveProduct] = useState<GalleryProduct | null>(null);

  // Floating Hub state
  const [isHubActive, setIsHubActive] = useState(false);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // WhatsApp prefilled message utility
  const getWhatsAppLink = (message: string) => {
    return `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(message)}`;
  };

  const defaultHeroWhatsApp = getWhatsAppLink(
    "Hello,\nI would like to know more about your MRI/CT scan printing materials."
  );

  return (
    <div className="medical-site">
      {/* Sticky Header */}
      <header className="medical-header">
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

        <a className="medical-header__cta" href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
          📱 Consult on WhatsApp
        </a>
      </header>

      {/* Hero Section */}
      <section className="medical-hero">
        <div className="medical-hero__content">
          <p className="medical-eyebrow">MRI • CT • X‑Ray Printing Solutions</p>
          <h1>Precision Imaging Films for Accurate Diagnostics</h1>
          <p className="medical-lede">
            High-contrast diagnostic films and consumables for clinical imaging departments. Delivering reliable results and seamless vendor support.
          </p>

          <div className="medical-hero__actions">
            <a className="medical-button medical-button--primary" href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
              📱 Consult on WhatsApp
            </a>
            <a className="medical-button medical-button--ghost" href={site.brand.emailHref}>
              📧 Email Us
            </a>
          </div>
        </div>

        {/* Hero Slide Show */}
        <div className="medical-hero__visual">
          <div className="medical-hero__slider-container">
            {heroSlides.map((slide, idx) => (
              <div key={idx} className={`medical-hero__slide ${idx === activeSlide ? "active" : ""}`}>
                <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" priority={idx === 0} />
              </div>
            ))}
          </div>
          <div className="medical-hero__slider-nav">
            {heroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`medical-hero__dot ${idx === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
                role="button"
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: What We Offer */}
      <section className="medical-section fade-in-section" id="what-we-offer">
        <div className="medical-section__heading">
          <p className="medical-eyebrow">What We Offer</p>
          <h2>Core medical printing consumables</h2>
          <p>Durable grayscale film products designed to align with professional diagnostic requirements.</p>
        </div>

        <div className="medical-products">
          <article className="medical-product-card">
            <div className="medical-product-card__media">
              <Image src="/images/radiology/rad-04-print-films.png" alt="MRI Films" fill sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
            <h3>MRI Films</h3>
            <p>Dry imaging film featuring high spatial resolution and optimal clarity for soft-tissue diagnostics.</p>
            <a href="#compatibility" className="medical-button medical-button--ghost">
              View Details
            </a>
          </article>

          <article className="medical-product-card">
            <div className="medical-product-card__media">
              <Image src="/images/radiology/rad-10-blue-medical-film.png" alt="CT Scan Films" fill sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
            <h3>CT Scan Films</h3>
            <p>Consistent grayscale reproduction, low fog rates, and reliable output for heavy scanning schedules.</p>
            <a href="#compatibility" className="medical-button medical-button--ghost">
              View Details
            </a>
          </article>

          <article className="medical-product-card">
            <div className="medical-product-card__media">
              <Image src="/images/radiology/rad-02-xray-lightbox.png" alt="X-Ray Films" fill sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
            <h3>X-Ray Films</h3>
            <p>Diagnostic-grade dry laser imaging film providing high contrast, durable bases, and sharp bone details.</p>
            <a href="#compatibility" className="medical-button medical-button--ghost">
              View Details
            </a>
          </article>
        </div>
      </section>

      {/* Section 3: Why Professionals Choose Us */}
      <section className="medical-section fade-in-section" id="why-us">
        <div className="medical-section__heading">
          <p className="medical-eyebrow">Why Professionals Choose Us</p>
          <h2>Strict diagnostic standards</h2>
          <p>Delivering consistent print behavior and supportive logistical workflows directly to clinical teams.</p>
        </div>

        <div className="medical-features">
          <div className="medical-feature-card">
            <div className="medical-feature-icon">✓</div>
            <span className="medical-feature-text">Premium Quality</span>
          </div>
          <div className="medical-feature-card">
            <div className="medical-feature-icon">✓</div>
            <span className="medical-feature-text">Fast Delivery</span>
          </div>
          <div className="medical-feature-card">
            <div className="medical-feature-icon">✓</div>
            <span className="medical-feature-text">Bulk Supply</span>
          </div>
          <div className="medical-feature-card">
            <div className="medical-feature-icon">✓</div>
            <span className="medical-feature-text">Technical Support</span>
          </div>
          <div className="medical-feature-card">
            <div className="medical-feature-icon">✓</div>
            <span className="medical-feature-text">Consistent Results</span>
          </div>
          <div className="medical-feature-card">
            <div className="medical-feature-icon">✓</div>
            <span className="medical-feature-text">Trusted by Clinics</span>
          </div>
        </div>
      </section>

      {/* Standout Feature: Film Compatibility Finder */}
      <section className="medical-section fade-in-section" id="compatibility">
        <div className="medical-section__heading">
          <p className="medical-eyebrow">Film Compatibility Finder</p>
          <h2>Find the correct film for your imager</h2>
          <p>Select your print manufacturer below to verify compatible films, print sizes, and performance details instantly.</p>
        </div>

        <div className="compatibility-finder">
          <div className="compatibility-finder__selector">
            {brands.map((brand) => (
              <button
                key={brand}
                className={`compatibility-brand-btn ${selectedBrand === brand ? "active" : ""}`}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="compatibility-results">
            <div className="compatibility-row header">
              <div>Imager Model</div>
              <div>Compatible Film Type</div>
              <div>Available Sizes</div>
              <div>Technical Specifications</div>
            </div>
            {site.compatibilityData[selectedBrand].map((row, idx) => (
              <div key={idx} className="compatibility-row">
                <div className="compat-printer" data-label="Imager Model">
                  {row.printer}
                </div>
                <div className="compat-film" data-label="Compatible Film Type">
                  {row.films.map((film, fIdx) => (
                    <span key={fIdx} className="compat-film-tag">
                      {film}
                    </span>
                  ))}
                </div>
                <div className="compat-sizes" data-label="Available Sizes">
                  {row.sizes.map((size, sIdx) => (
                    <span key={sIdx} className="compat-size-tag">
                      {size}
                    </span>
                  ))}
                </div>
                <div className="compat-spec" data-label="Technical Specifications">
                  {row.spec}
                </div>
              </div>
            ))}
          </div>

          <div className="compatibility-finder__footer">
            <p>
              Don't see your specific printer listed here? We support a wide range of legacy and modern thermal imagers. Reach out to our technical team to verify compatibility.
            </p>
            <a
              className="medical-button medical-button--primary"
              href={getWhatsAppLink(`Hello, I would like to verify film compatibility for my ${selectedBrand} imager.`)}
              target="_blank"
              rel="noreferrer"
            >
              🟢 Confirm {selectedBrand} Compatibility
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Product Gallery */}
      <section className="medical-section fade-in-section" id="gallery">
        <div className="medical-section__heading">
          <p className="medical-eyebrow">Product Gallery</p>
          <h2>High-resolution visual directory</h2>
          <p>Click any visual card below to display sizes, density specs, and printer compatibility information.</p>
        </div>

        <div className="gallery-grid">
          {site.galleryProducts.map((p) => (
            <div key={p.id} className="gallery-card" onClick={() => setActiveProduct(p)}>
              <Image src={p.image} alt={p.title} fill sizes="(max-width: 1024px) 50vw, 30vw" />
              <div className="gallery-card__overlay">
                <div className="gallery-card__info">
                  <h3>{p.title}</h3>
                  <span>Sizes: {p.sizes.join(", ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Modal overlay */}
      {activeProduct && (
        <div className="modal-overlay" onClick={() => setActiveProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveProduct(null)} aria-label="Close modal">
              ✕
            </button>
            <div className="modal-image-panel">
              <Image src={activeProduct.image} alt={activeProduct.title} fill sizes="(max-width: 1024px) 100vw, 35vw" />
            </div>
            <div className="modal-info-panel">
              <h2>{activeProduct.title}</h2>
              <div className="modal-spec-grid">
                <div className="modal-spec-item">
                  <strong>Available Sizes</strong>
                  <div className="modal-sizes-tags">
                    {activeProduct.sizes.map((size, idx) => (
                      <span key={idx} className="modal-size-badge">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-spec-item">
                  <strong>Specifications</strong>
                  <p>{activeProduct.specs}</p>
                </div>
                <div className="modal-spec-item">
                  <strong>Compatibility</strong>
                  <p>{activeProduct.compatibility}</p>
                </div>
              </div>
              <a
                className="medical-button medical-button--primary"
                href={getWhatsAppLink(`Hello, I would like to inquire about specifications and bulk pricing for ${activeProduct.title}.`)}
                target="_blank"
                rel="noreferrer"
              >
                💬 Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Section 5: Industries We Serve */}
      <section className="medical-section fade-in-section" id="industries">
        <div className="medical-section__heading">
          <p className="medical-eyebrow">Industries We Serve</p>
          <h2>Supporting local healthcare centers</h2>
          <p>Providing specialized materials for various radiology departments, chains, and distributors.</p>
        </div>

        <div className="industries-grid">
          <div className="industry-card">
            <Image src="/images/radiology/rad-11-hospital-radiology.png" alt="Hospitals" fill sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="industry-card__overlay" />
            <h3>🏥 Hospitals</h3>
          </div>
          <div className="industry-card">
            <Image src="/images/radiology/rad-05-diagnostic-lobby.png" alt="Diagnostic Centers" fill sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="industry-card__overlay" />
            <h3>🔬 Diagnostic Centers</h3>
          </div>
          <div className="industry-card">
            <Image src="/images/radiology/rad-06-radiologist-desk.png" alt="Radiology Clinics" fill sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="industry-card__overlay" />
            <h3>🧠 Radiology Clinics</h3>
          </div>
          <div className="industry-card">
            <Image src="/images/radiology/rad-26-imaging-supplies.png" alt="Medical Distributors" fill sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="industry-card__overlay" />
            <h3>📦 Medical Distributors</h3>
          </div>
        </div>
      </section>

      {/* Section 6: Process */}
      <section className="medical-section fade-in-section" id="process">
        <div className="medical-section__heading">
          <p className="medical-eyebrow">Our Process</p>
          <h2>Simple supply timeline</h2>
          <p>We streamline the procurement workflow to get film sheets delivered with minimal delays.</p>
        </div>

        <div className="process-timeline">
          <div className="process-step">
            <div className="process-step__number">1️⃣</div>
            <h3>Contact Us</h3>
            <p>Connect with our team via WhatsApp, phone call, or email.</p>
          </div>
          <div className="process-step">
            <div className="process-step__number">2️⃣</div>
            <h3>Discuss Requirements</h3>
            <p>Specify the printer models, sizing, and quantity needed.</p>
          </div>
          <div className="process-step">
            <div className="process-step__number">3️⃣</div>
            <h3>Get Quotation</h3>
            <p>Receive a clear bulk price quotation tailored to your clinic.</p>
          </div>
          <div className="process-step">
            <div className="process-step__number">4️⃣</div>
            <h3>Receive Products</h3>
            <p>Supplies are shipped out fast to ensure uninterrupted imaging.</p>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Banner (Large Dark Banner) */}
      <section className="medical-section fade-in-section">
        <div className="medical-cta-banner">
          <h2>Need Medical Imaging Films?</h2>
          <p>Get expert assistance today.</p>
          <div className="medical-cta-actions">
            <a className="medical-button medical-button--whatsapp" href={defaultHeroWhatsApp} target="_blank" rel="noreferrer">
              🟢 WhatsApp Consultation
            </a>
            <a className="medical-button medical-button--email" href={site.brand.emailHref}>
              📧 Email Consultation
            </a>
            <a className="medical-button medical-button--phone" href={site.brand.phoneHref}>
              ☎ Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Floating Contact Experience Hub */}
      <div className="floating-action-hub">
        <div className={`floating-hub-menu ${isHubActive ? "active" : ""}`}>
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
        </div>
        <button
          className={`floating-hub-trigger ${isHubActive ? "active" : ""}`}
          onClick={() => setIsHubActive(!isHubActive)}
          aria-label="Toggle contact menu"
        >
          📱
        </button>
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