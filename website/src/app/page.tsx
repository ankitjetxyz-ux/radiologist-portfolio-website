import { FramerPageShell } from "@/components/FramerPageShell";
import { getFramerPage } from "@/lib/framer-pages";

export default function HomePage() {
  const page = getFramerPage("index");
  return <FramerPageShell page={page} />;
}
