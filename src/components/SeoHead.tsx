import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  ogType?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Updates <title> and meta tags for the current page.
 * Works in SPAs (no SSR needed) — sufficient for Googlebot which executes JS.
 */
export default function SeoHead({ title, description, keywords, path, ogType = "website", schema }: SeoHeadProps) {
  useEffect(() => {
    const BASE_URL = "https://swingenieria.com"; // update when domain is live
    const fullTitle = `${title} | SW Ingeniería`;
    const canonicalUrl = path ? `${BASE_URL}${path}` : BASE_URL;

    // Title
    document.title = fullTitle;

    // Helper to set meta tags
    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = attr.split("=");
        el.setAttribute(attrName, attrVal.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', 'name=description', description);
    if (keywords) setMeta('meta[name="keywords"]', 'name=keywords', keywords);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', description);
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);
    setMeta('meta[property="og:type"]', 'property=og:type', ogType);

    // Canonical link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // JSON-LD Schema.org
    const existingSchemas = document.querySelectorAll('script[data-swi-schema]');
    existingSchemas.forEach(el => el.remove());
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const scriptEl = document.createElement("script");
        scriptEl.setAttribute("type", "application/ld+json");
        scriptEl.setAttribute("data-swi-schema", "true");
        scriptEl.textContent = JSON.stringify(s);
        document.head.appendChild(scriptEl);
      });
    }

    // Cleanup: restore defaults when component unmounts
    return () => {
      document.title = "SW Ingeniería | Soluciones Industriales";
      document.querySelectorAll('script[data-swi-schema]').forEach(el => el.remove());
    };
  }, [title, description, keywords, path, schema]);

  return null;
}
