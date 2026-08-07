import type { Locale } from "@/lib/i18n/config";
import { certifications, certCategories } from "./certifications";
import { certificationsEn, certCategoriesEn } from "./certifications.en";
import { complianceFrameworks } from "./compliance";
import { complianceFrameworksEn } from "./compliance.en";
import { faqs, homeFaqs } from "./faq";
import { faqsEn, homeFaqsEn } from "./faq.en";
import { partnerTypes } from "./partners";
import { partnerTypesEn } from "./partners.en";
import { securityServices } from "./services";
import { securityServicesEn } from "./services.en";

export function getServices(locale: Locale) {
  return locale === "en" ? securityServicesEn : securityServices;
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getServices(locale).find((s) => s.slug === slug);
}

export function getFrameworks(locale: Locale) {
  return locale === "en" ? complianceFrameworksEn : complianceFrameworks;
}

export function getFrameworkBySlug(locale: Locale, slug: string) {
  return getFrameworks(locale).find((f) => f.slug === slug);
}

export function getCertifications(locale: Locale) {
  return locale === "en" ? certificationsEn : certifications;
}

export function getCertificationBySlug(locale: Locale, slug: string) {
  return getCertifications(locale).find((c) => c.slug === slug);
}

export function getCertCategories(locale: Locale) {
  return locale === "en" ? certCategoriesEn : certCategories;
}

export function getHomeFaqs(locale: Locale) {
  return locale === "en" ? homeFaqsEn : homeFaqs;
}

export function getFaqs(locale: Locale) {
  return locale === "en" ? faqsEn : faqs;
}

export function getPartnerTypes(locale: Locale) {
  return locale === "en" ? partnerTypesEn : partnerTypes;
}
