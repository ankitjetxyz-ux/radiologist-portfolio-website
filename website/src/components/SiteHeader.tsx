"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X, ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I would like to know more about Vandan Distributors products."
  )}`;

  return (
    <header className={cn("site-header", scrolled && "site-header--scrolled")}>
      <Link className="site-brand" href="/" onClick={() => setMobileOpen(false)}>
        <Image
          src={site.brand.logo}
          alt={site.brand.name}
          width={48}
          height={48}
          priority
          className="site-brand__logo"
        />
        <span className="site-brand__text">
          <strong>{site.brand.shortName}</strong>
          <small>{site.brand.tagline}</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {site.nav.map((item) =>
          item.href === "/products" ? (
            <div
              key={item.href}
              className="site-nav__dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link href={item.href} className="site-nav__link">
                {item.label}
                <ChevronDown className="size-3.5 opacity-60" />
              </Link>
              {productsOpen && (
                <div className="site-nav__menu">
                  <Link href="/products">All Products</Link>
                  {site.productNav.map((p) => (
                    <Link key={p.href} href={p.href}>
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          )
        )}
      </nav>

      <div className="site-header__actions">
        <Button
          render={
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" data-icon="inline-start" />
              WhatsApp
            </a>
          }
          size="lg"
          className="site-header__cta hidden cursor-pointer sm:inline-flex"
        />
        <button
          type="button"
          className="site-header__menu-btn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="site-mobile-nav">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="site-mobile-nav__divider" />
          {site.productNav.map((p) => (
            <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} className="site-mobile-nav__sub">
              {p.label}
            </Link>
          ))}
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="site-mobile-nav__whatsapp">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
