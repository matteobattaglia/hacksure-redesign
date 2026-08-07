import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { complianceFrameworks } from "@/lib/data/compliance";
import { securityServices } from "@/lib/data/services";
import { certifications } from "@/lib/data/certifications";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1, lastModified },
    { url: `${baseUrl}/compliance`, changeFrequency: "weekly" as const, priority: 0.9, lastModified },
    { url: `${baseUrl}/servizi`, changeFrequency: "weekly" as const, priority: 0.9, lastModified },
    { url: `${baseUrl}/certificazioni`, changeFrequency: "monthly" as const, priority: 0.8, lastModified },
    { url: `${baseUrl}/chi-siamo`, changeFrequency: "monthly" as const, priority: 0.7, lastModified },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.6, lastModified },
    { url: `${baseUrl}/contatti`, changeFrequency: "monthly" as const, priority: 0.8, lastModified },
    { url: `${baseUrl}/collabora`, changeFrequency: "monthly" as const, priority: 0.85, lastModified },
    { url: `${baseUrl}/sicurezza-informatica-azienda`, changeFrequency: "monthly" as const, priority: 0.9, lastModified },
    { url: `${baseUrl}/multa-gdpr-azienda`, changeFrequency: "monthly" as const, priority: 0.9, lastModified },
    { url: `${baseUrl}/obblighi-sicurezza-informatica-nis2`, changeFrequency: "monthly" as const, priority: 0.9, lastModified },
    { url: `${baseUrl}/pentest-azienda`, changeFrequency: "monthly" as const, priority: 0.9, lastModified },
    { url: `${baseUrl}/partner/kaspersky`, changeFrequency: "monthly" as const, priority: 0.85, lastModified },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.3, lastModified },
  ];

  const compliancePages = complianceFrameworks.map((f) => ({
    url: `${baseUrl}/compliance/${f.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified,
  }));

  const servicePages = securityServices.map((s) => ({
    url: `${baseUrl}/servizi/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified,
  }));

  const certPages = certifications.map((c) => ({
    url: `${baseUrl}/certificazioni/${c.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
    lastModified,
  }));

  return [...staticPages, ...compliancePages, ...servicePages, ...certPages];
}
