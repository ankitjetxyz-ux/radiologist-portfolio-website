import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";
import "./site-pages.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    icon: site.brand.logo,
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
