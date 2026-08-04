import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: unknown;
}

const SITE = "https://www.renegadereformer.co.uk";

function setTag(selector: string, create: () => HTMLElement, apply: (el: HTMLElement) => void) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

function meta(attr: "name" | "property", key: string, content: string) {
  setTag(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  }, (el) => el.setAttribute("content", content));
}

/**
 * Lightweight head manager. Route meta is already baked into each prerendered
 * HTML file at build time, so this only keeps the head in sync during
 * client-side navigation. Written without react-helmet-async so the library
 * stays out of the critical-path bundle (it delayed the homepage LCP paint).
 */
export const SEO = ({ title, description, path, image, jsonLd }: SEOProps) => {
  const url = `${SITE}${path}`;
  const img = image ?? `${SITE}/og-image.png`;
  const ld = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    document.title = title;
    meta("name", "description", description);
    setTag('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }, (el) => el.setAttribute("href", url));
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", url);
    meta("property", "og:type", "website");
    meta("property", "og:image", img);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);
    meta("name", "twitter:image", img);
  }, [title, description, url, img]);

  useEffect(() => {
    if (!ld) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.rrSeo = "true";
    script.textContent = ld;
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [ld]);

  return null;
};

export default SEO;
