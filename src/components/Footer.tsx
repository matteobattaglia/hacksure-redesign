"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/seo";
import { getNavigation } from "@/lib/navigation";
import { localizeHref } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const copy = {
  it: {
    about:
      "servizi professionali di cybersecurity per PMI italiane: compliance, penetration testing e protezione infrastrutture.",
    compliance: "Compliance",
    services: "Servizi",
    partnerGuides: "Partner & guide",
    contact: "Contatti",
    collaborate: "Collabora con noi",
    notarization: "Notarizzazione Blockchain",
    fraud: "SOS Truffe Online",
    addressLabel: siteConfig.addressLabel,
    addressSecondaryLabel: siteConfig.addressSecondaryLabel,
    vat: "P.IVA",
    capital: "Cap. soc.",
    privacy: "Privacy Policy",
  },
  en: {
    about:
      "professional cybersecurity services for Italian SMEs: compliance, penetration testing and infrastructure protection.",
    compliance: "Compliance",
    services: "Services",
    partnerGuides: "Partners & guides",
    contact: "Contact",
    collaborate: "Partner with us",
    notarization: "Blockchain Notarization",
    fraud: "Online Fraud Response",
    addressLabel: "Registered and operating office",
    addressSecondaryLabel: "Operating office",
    vat: "VAT no.",
    capital: "Share capital",
    privacy: "Privacy Policy",
  },
} as const;

export function Footer() {
  const locale = useLocale();
  const t = copy[locale];
  const navigation = getNavigation(locale);
  const href = (path: string) => localizeHref(locale, path);

  const complianceNav = navigation[0];
  const servicesNav = navigation[1];

  return (
    <footer className="border-t border-zinc-800 bg-surface-900" data-nosnippet>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/images/Hacksure-White.png"
              alt="Hacksure"
              width={150}
              height={25}
              className="mb-4 h-6 w-auto"
            />
            <p className="text-sm leading-relaxed text-zinc-500" data-nosnippet>
              {siteConfig.legalName} — {t.about}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t.compliance}
            </h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              {complianceNav?.children?.map((item) => (
                <li key={item.href}>
                  <Link href={href(item.href)} className="hover:text-brand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t.services}
            </h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              {servicesNav?.children?.map((item) => (
                <li key={item.href}>
                  <Link href={href(item.href)} className="hover:text-brand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t.partnerGuides}
            </h3>
            <ul className="mb-6 space-y-2 text-sm text-zinc-500">
              <li>
                <Link href={href("/collabora")} className="hover:text-brand-400">
                  {t.collaborate}
                </Link>
              </li>
              <li>
                <Link href={href("/partner/kaspersky")} className="hover:text-brand-400">
                  Kaspersky Partner
                </Link>
              </li>
              <li>
                <Link href={href("/servizi/notarizzazione-blockchain")} className="hover:text-brand-400">
                  {t.notarization}
                </Link>
              </li>
              <li>
                <Link href={href("/servizi/perizia-truffe-online")} className="hover:text-brand-400">
                  {t.fraud}
                </Link>
              </li>
            </ul>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {t.contact}
            </h3>
            <ul className="space-y-2 text-sm text-zinc-500" data-nosnippet>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-400">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-brand-400">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <span className="block text-zinc-600">{t.addressLabel}</span>
                {siteConfig.address}
              </li>
              <li>
                <span className="block text-zinc-600">{t.addressSecondaryLabel}</span>
                {siteConfig.addressSecondary}
              </li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm text-zinc-500">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">LinkedIn</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Instagram</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Facebook</a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-xs text-zinc-600 sm:flex-row sm:justify-between"
          data-nosnippet
        >
          <p>
            {siteConfig.legalName} — {t.vat} {siteConfig.vat} — {t.capital} {siteConfig.capital}
          </p>
          <div className="flex gap-4">
            <Link href={href("/privacy")} className="hover:text-zinc-400">{t.privacy}</Link>
            <span>© {new Date().getFullYear()} Hacksure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
