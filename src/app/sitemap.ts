import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { complianceFrameworks } from "@/lib/data/compliance";
import { securityServices } from "@/lib/data/services";
import { certifications } from "@/lib/data/certifications";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/compliance`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/servizi`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/certificazioni`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/chi-siamo`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contatti`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const compliancePages = complianceFrameworks.map((f) => ({
    url: `${baseUrl}/compliance/${f.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePages = securityServices.map((s) => ({
    url: `${baseUrl}/servizi/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const certPages = certifications.map((c) => ({
    url: `${baseUrl}/certificazioni/${c.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...compliancePages, ...servicePages, ...certPages];
}
