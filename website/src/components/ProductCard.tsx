"use client";

import Image from "next/image";
import { Download, MessageCircle } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/content/site";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  category?: string;
  tags?: string[];
  brochure?: string;
  delay?: number;
};

export function ProductCard({
  title,
  description,
  image,
  category,
  tags,
  brochure,
  delay = 0,
}: ProductCardProps) {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    `Hello, I would like to inquire about ${title}.`
  )}`;

  return (
    <FadeIn delay={delay}>
      <Card className="product-card glossy-card flex h-full flex-col overflow-hidden border-0 py-0 ring-0">
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
          {category && (
            <Badge variant="secondary" className="absolute left-3 top-3 font-medium">
              {category}
            </Badge>
          )}
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="text-lg font-bold leading-snug">{title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardFooter className="mt-auto gap-2 pt-0">
          {brochure && (
            <Button
              render={
                <a href={brochure} target="_blank" rel="noreferrer" download>
                  <Download className="size-4" data-icon="inline-start" />
                  Brochure
                </a>
              }
              variant="outline"
              size="sm"
              className="cursor-pointer"
            />
          )}
          <Button
            render={
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" data-icon="inline-start" />
                Enquire
              </a>
            }
            size="sm"
            className="cursor-pointer flex-1"
          />
        </CardFooter>
      </Card>
    </FadeIn>
  );
}
