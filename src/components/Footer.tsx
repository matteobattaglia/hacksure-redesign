import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/seo";
import { mainNavigation } from "@/lib/navigation";

export function Footer() {
  const complianceNav = mainNavigation.find((n) => n.label === "Compliance");
  const serviziNav = mainNavigation.find((n) => n.label === "Servizi");

  return (
    <footer className="border-t border-zinc-800 bg-surface-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/images/Hacksure-White.png"
              alt="HackSure"
              width={150}
              height={25}
              className="mb-4 h-6 w-auto"
            />
            <p className="text-sm leading-relaxed text-zinc-500">
              Divisione cybersecurity di {siteConfig.legalName}. Servizi professionali per PMI
              italiane: compliance, penetration testing e protezione infrastrutture.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Compliance
            </h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              {complianceNav?.children?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Servizi
            </h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              {serviziNav?.children?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Contatti
            </h3>
            <ul className="space-y-2 text-sm text-zinc-500">
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
              <li>{siteConfig.address}</li>
            </ul>
            <div className="mt-4 flex gap-3 text-sm text-zinc-500">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">LinkedIn</a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Instagram</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-xs text-zinc-600 sm:flex-row sm:justify-between">
          <p>{siteConfig.legalName} — P.IVA {siteConfig.vat} — Cap. soc. {siteConfig.capital}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-400">Privacy Policy</Link>
            <span>© {new Date().getFullYear()} HackSure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
