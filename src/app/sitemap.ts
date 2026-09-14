import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { complianceFrameworks } from "@/lib/data/compliance";
import { securityServices } from "@/lib/data/services";
import { certifications } from "@/lib/data/certifications";
import { italianOnlyPaths, localizeHref } from "@/lib/i18n/config";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const entries: Entry[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/compliance", changeFrequency: "weekly", priority: 0.9 },
    { path: "/servizi", changeFrequency: "weekly", priority: 0.9 },
    { path: "/certificazioni", changeFrequency: "monthly", priority: 0.8 },
    { path: "/chi-siamo", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contatti", changeFrequency: "monthly", priority: 0.8 },
    { path: "/collabora", changeFrequency: "monthly", priority: 0.85 },
    { path: "/partner/kaspersky", changeFrequency: "monthly", priority: 0.85 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    ...italianOnlyPaths.map((path) => ({
      path,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...complianceFrameworks.map((f) => ({
      path: `/compliance/${f.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...securityServices.map((s) => ({
      path: `/servizi/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...certifications.map((c) => ({
      path: `/certificazioni/${c.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  // Italian URLs only: English mirrors stay reachable via hreflang on the page.
  // Listing both locales in the sitemap doubled crawl demand without adding demand.
  return entries.map((entry) => {
    const italianOnly = italianOnlyPaths.includes(entry.path);
    const itUrl = `${baseUrl}${localizeHref("it", entry.path)}`;
    const enUrl = `${baseUrl}${localizeHref("en", entry.path)}`;

    return {
      url: itUrl,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {
        languages: italianOnly
          ? { "it-IT": itUrl, it: itUrl }
          : { "it-IT": itUrl, it: itUrl, en: enUrl, "x-default": itUrl },
      },
    };
  });
}
