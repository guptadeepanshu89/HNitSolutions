import { useEffect } from "react";

const SITE = import.meta.env.VITE_SITE_URL || "https://hnitsolutions.com";

export default function SEO({
  title = "HNitSolutions | Build. Grow. Scale.",
  description = "HNitSolutions builds software, websites, mobile apps and growth systems for ambitious businesses.",
  path = "/",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (key, value, property = false) => {
      const attr = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `${SITE}${path}`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE}${path}`);
  }, [title, description, path]);

  return null;
}
