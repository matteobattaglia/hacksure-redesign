import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { getPartnerTypes } from "@/lib/data/localized";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    label: "Partnership",
    title: "Collabora con noi",
    text: "Studi legali, web agency e fornitori di elettronica: costruiamo collaborazioni concrete per crescere insieme.",
    cta: "Collabora con noi",
    discover: "Scopri →",
  },
  en: {
    label: "Partnership",
    title: "Partner with us",
    text: "Law firms, web agencies and electronics suppliers: we build practical partnerships to grow together.",
    cta: "Partner with us",
    discover: "Learn more →",
  },
} as const;

export function HomeCollaborate({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const href = (path: string) => localizeHref(locale, path);
  const partnerTypes = getPartnerTypes(locale);

  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="section-label">{t.label}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {t.text}
              </p>
            </div>
            <Link href={href("/collabora")} className="btn-outline shrink-0">
              {t.cta}
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {partnerTypes.map((partner, i) => (
            <AnimateIn key={partner.id} delay={i * 50}>
              <Link
                href={href(`/collabora?tipo=${partner.id}`)}
                className="card-hover block h-full p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {partner.eyebrow}
                </p>
                <h3 className="mt-2 font-semibold tracking-tight text-white">{partner.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">{partner.summary}</p>
                <span className="mt-5 inline-flex text-sm font-medium text-brand-500">
                  {t.discover}
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
