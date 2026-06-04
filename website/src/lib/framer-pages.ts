import manifest from "./framer-pages/manifest.json";
import indexPage from "./framer-pages/index.json";
import aboutPage from "./framer-pages/about.json";
import iphone15Page from "./framer-pages/iphone-15.json";
import unsweetnedPage from "./framer-pages/unsweetned.json";
import actrAcrePage from "./framer-pages/actr-acre.json";
import editorialPage from "./framer-pages/editorial.json";

export type FramerPageData = {
  slug: string;
  route: string;
  title: string;
  description: string;
  bodyClass: string;
  styles: string;
  mainHtml: string;
  afterMainHtml: string;
  animatorScript: string;
  appearScript: string;
};

const pages: Record<string, FramerPageData> = {
  index: indexPage as FramerPageData,
  about: aboutPage as FramerPageData,
  "iphone-15": iphone15Page as FramerPageData,
  unsweetned: unsweetnedPage as FramerPageData,
  "actr-acre": actrAcrePage as FramerPageData,
  editorial: editorialPage as FramerPageData,
};

export function getFramerPage(slug: string): FramerPageData {
  const page = pages[slug];
  if (!page) throw new Error(`Unknown Framer page slug: ${slug}`);
  return page;
}

export function getAllFramerSlugs(): string[] {
  return manifest.map((entry) => entry.slug);
}

export function getWorkSlugs(): string[] {
  return manifest
    .filter((entry) => entry.route.startsWith("/work/"))
    .map((entry) => entry.slug);
}
