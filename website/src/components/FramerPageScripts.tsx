"use client";

import { useEffect, useRef } from "react";
import { applySiteContent } from "@/lib/applyContent";
import type { FramerPageData } from "@/lib/framer-pages";

declare global {
  interface Window {
    __framerAnimatorLoaded?: boolean;
  }
}

function runIsolatedScript(code: string) {
  if (!code.trim()) return;
  new Function(code)();
}

function runScriptsFromHtml(html: string) {
  const container = document.createElement("div");
  container.innerHTML = html;
  container.querySelectorAll("script").forEach((node) => {
    runIsolatedScript(node.textContent ?? "");
  });
}

function appendHtmlElements(html: string) {
  const container = document.createElement("div");
  container.innerHTML = html;
  container.querySelectorAll(":scope > :not(script)").forEach((node) => {
    if (node instanceof HTMLElement) {
      const id = node.id;
      if (id && document.getElementById(id)) return;
      document.body.appendChild(node);
    }
  });
}

function appendGlobalScript(html: string) {
  const container = document.createElement("div");
  container.innerHTML = html;
  const source = container.querySelector("script");
  if (!source?.textContent?.trim()) return;

  const script = document.createElement("script");
  script.textContent = source.textContent;
  document.body.appendChild(script);
}

function revealRollingStrip() {
  document.querySelectorAll(".framer-5qft50-container").forEach((container) => {
    if (!(container instanceof HTMLElement)) return;
    container.style.opacity = "1";

    container.querySelectorAll("section").forEach((section) => {
      if (section instanceof HTMLElement) section.style.opacity = "1";
    });

    container.querySelectorAll('[data-framer-name="Card"]').forEach((card) => {
      if (!(card instanceof HTMLElement)) return;
      card.style.opacity = "1";
      card.style.transform =
        "perspective(1200px) translateX(0) translateY(0) scale(1) rotate(0deg) translateZ(0)";
    });
  });
}

/** Normalize marquee to duplicated cycles with gaps so the loop never shows empty space. */
function setupMarqueeLoop() {
  document.querySelectorAll(".framer-5qft50-container ul").forEach((ul) => {
    if (!(ul instanceof HTMLElement) || ul.dataset.vandanMarquee === "ready") return;

    const items = [...ul.children].filter((node) => node instanceof HTMLElement);
    if (items.length < 4) return;

    const cycle = items.slice(0, 4).map((item) => item.cloneNode(true) as HTMLElement);
    const track = [...cycle, ...cycle.map((item) => item.cloneNode(true) as HTMLElement)];

    ul.replaceChildren(...track, ...track.map((item) => item.cloneNode(true)));
    ul.style.gap = "20px";
    ul.style.setProperty("--vandan-marquee-shift", "-50%");
    ul.dataset.vandanMarquee = "ready";
  });
}

type FramerPageScriptsProps = {
  page: FramerPageData;
};

/** Client-only Framer inline scripts (animations). Does NOT load Framer React bundle. */
export function FramerPageScripts({ page }: FramerPageScriptsProps) {
  const appearRanFor = useRef<string | null>(null);

  useEffect(() => {
    document.body.className = page.bodyClass;
    return () => {
      document.body.className = "";
    };
  }, [page.bodyClass]);

  useEffect(() => {
    if (page.afterMainHtml) {
      runScriptsFromHtml(page.afterMainHtml);
      appendHtmlElements(page.afterMainHtml);
    }

    if (!window.__framerAnimatorLoaded && page.animatorScript) {
      appendGlobalScript(page.animatorScript);
      window.__framerAnimatorLoaded = true;
    }

    requestAnimationFrame(() => {
      if (page.appearScript && appearRanFor.current !== page.slug) {
        appearRanFor.current = page.slug;
        appendGlobalScript(page.appearScript);
      }
      revealRollingStrip();
      setupMarqueeLoop();
      applySiteContent();
    });
  }, [page]);

  return null;
}
