import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__brand-lockup">
            <Image src={site.brand.logo} alt={site.brand.name} width={56} height={56} />
            <strong>{site.brand.name}</strong>
          </div>
          <p>{site.footer}</p>
          <p className="site-footer__contact">
            <a href={site.brand.phoneHref}>{site.brand.phone}</a>
            <span> / </span>
            <a href={site.brand.emailHref}>{site.brand.email}</a>
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/downloads">Downloads</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="site-footer__col">
          <h4>Products</h4>
          {site.productNav.map((p) => (
            <Link key={p.href} href={p.href}>
              {p.label}
            </Link>
          ))}
        </div>

        <div className="site-footer__col">
          <h4>Solutions</h4>
          <Link href="/products/printing-solutions">MRI Printing</Link>
          <Link href="/products/printing-solutions">CT Scan Printing</Link>
          <Link href="/products/printing-solutions">Ultrasound Printing</Link>
          <Link href="/products/contrast-media">Contrast Media</Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>{site.brand.location}</p>
        <a href={site.brand.mapsLink} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
      </div>
    </footer>
  );
}
