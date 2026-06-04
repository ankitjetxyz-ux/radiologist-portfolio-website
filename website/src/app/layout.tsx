import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: site.brand.title,
  description: site.brand.description,
  openGraph: {
    title: site.brand.title,
    description: site.brand.description,
    images: [site.brand.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand.title,
    description: site.brand.description,
    images: [site.brand.ogImage],
  },
  icons: {
    icon: "/images/iIUgE9ex8JcqtmtGy60uSlUIptE.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: site.brand.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
