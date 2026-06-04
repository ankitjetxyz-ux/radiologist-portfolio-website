import { FramerPageScripts } from "@/components/FramerPageScripts";
import type { FramerPageData } from "@/lib/framer-pages";

type FramerPageShellProps = {
  page: FramerPageData;
};

/**
 * Server-rendered Framer HTML with Vandan content baked in at build time.
 * Avoids client hydration of #main so the first paint shows Vandan, not the Framer template.
 */
export function FramerPageShell({ page }: FramerPageShellProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      <div id="main" dangerouslySetInnerHTML={{ __html: page.mainHtml }} />
      <FramerPageScripts page={page} />
    </>
  );
}
