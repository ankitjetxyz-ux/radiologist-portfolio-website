"use client";

import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import type { Testimonial } from "@/content/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  delay?: number;
};

export function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  return (
    <FadeIn delay={delay}>
      <Card className="testimonial-card glossy-card h-full border-0 ring-0">
        <CardContent className="flex h-full flex-col gap-4 p-6">
          <Quote className="size-8 text-[var(--color-accent)] opacity-60" />
          <blockquote className="testimonial-card__quote flex-1 text-base leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="testimonial-card__author">
            <strong>{testimonial.author}</strong>
            <span>
              {testimonial.role}, {testimonial.facility}
            </span>
            {testimonial.modality && (
              <Badge variant="secondary" className="mt-2 w-fit font-medium">
                {testimonial.modality}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
