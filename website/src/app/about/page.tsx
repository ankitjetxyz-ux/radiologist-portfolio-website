import type { Metadata } from "next";
import { FramerPageShell } from "@/components/FramerPageShell";
import { site } from "@/content/site";
import { getFramerPage } from "@/lib/framer-pages";

export const metadata: Metadata = {
  title: `Why Us | ${site.brand.name}`,
  description: site.brand.description,
};

export default function AboutPage() {
  const page = getFramerPage("about");
  return <FramerPageShell page={page} />;
}
