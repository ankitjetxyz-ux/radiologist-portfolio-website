"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = site.contact.headline,
  description = site.contact.subheadline,
}: CTASectionProps) {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    "Hello, I would like to discuss my radiology requirements with Vandan Distributors."
  )}`;

  return (
    <FadeIn className="medical-section">
      <div className="medical-cta-banner">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="medical-cta-actions">
          <Button
            render={
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" data-icon="inline-start" />
                {site.contact.ctaWhatsApp}
              </a>
            }
            size="lg"
            className="cursor-pointer"
          />
          <Button
            render={
              <a href={site.brand.emailHref}>
                <Mail className="size-4" data-icon="inline-start" />
                Email Inquiry
              </a>
            }
            variant="outline"
            size="lg"
            className="cursor-pointer"
          />
          <Button
            render={
              <a href={site.brand.phoneHref}>
                <Phone className="size-4" data-icon="inline-start" />
                {site.brand.phone}
              </a>
            }
            variant="outline"
            size="lg"
            className="cursor-pointer"
          />
        </div>
      </div>
    </FadeIn>
  );
}
