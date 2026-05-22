import { useEffect } from "react";

type SEOProps = {
  canonical?: string;
  description: string;
  jsonLd?: Record<string, unknown>;
  title: string;
};

const SITE_URL = "https://emev-labs.vercel.app";

const setMeta = (selector: string, attribute: string, value: string) => {
  const tag = document.head.querySelector(selector);

  if (tag) {
    tag.setAttribute(attribute, value);
  }
};

const SEO = ({ canonical = SITE_URL, description, jsonLd, title }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonical);

    const existingSchema = document.getElementById("emev-json-ld");
    existingSchema?.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "emev-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [canonical, description, jsonLd, title]);

  return null;
};

export default SEO;
export { SITE_URL };
