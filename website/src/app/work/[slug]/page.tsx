import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FramerPageShell } from "@/components/FramerPageShell";
import { site } from "@/content/site";
import { getFramerPage, getWorkSlugs } from "@/lib/framer-pages";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = site.portfolio.find((entry) => entry.slug === slug);
  if (!item) return { title: site.brand.title };

  return {
    title: `${item.title} | ${site.brand.name}`,
    description: item.summary,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;

  if (!getWorkSlugs().includes(slug)) {
    notFound();
  }

  const page = getFramerPage(slug);
  return <FramerPageShell page={page} />;
}
