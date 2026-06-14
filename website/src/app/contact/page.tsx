import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Contact | ${site.brand.name}`,
  description: "Contact Accurate Medical Solutions for product enquiries, MIPS demos, and bulk supply quotes.",
};

export default function ContactPage() {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I would like to get in touch with Accurate Medical Solutions."
  )}`;

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description={site.contact.subheadline}
      />

      <section className="medical-section">
        <div className="contact-grid">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="contact-info">
              <Card className="contact-info-card glossy-card border-0 ring-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Company Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="contact-info-item">
                    <Phone className="size-5 text-[var(--color-medical)]" />
                    <div>
                      <strong>Phone</strong>
                      <a href={site.brand.phoneHref}>{site.brand.phone}</a>
                      <a href={`tel:${site.brand.phoneAlt.replace(/\s/g, "")}`}>{site.brand.phoneAlt}</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <Mail className="size-5 text-[var(--color-medical)]" />
                    <div>
                      <strong>Email</strong>
                      <a href={site.brand.emailHref}>{site.brand.email}</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <MapPin className="size-5 text-[var(--color-medical)]" />
                    <div>
                      <strong>Location</strong>
                      <span>{site.brand.location}</span>
                      <a href={site.brand.mapsLink} target="_blank" rel="noreferrer">
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                  <Button
                    render={
                      <a href={whatsappHref} target="_blank" rel="noreferrer">
                        <MessageCircle className="size-4" data-icon="inline-start" />
                        WhatsApp Inquiry
                      </a>
                    }
                    size="lg"
                    className="w-full cursor-pointer bg-[#25d366] text-white hover:bg-[#20ba56]"
                  />
                </CardContent>
              </Card>

              <div className="contact-map-placeholder">
                <iframe
                  title="Accurate Medical Solutions location"
                  src="https://maps.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: "16px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
