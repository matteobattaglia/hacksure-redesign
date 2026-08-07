"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  italianOnlyPaths,
  localeNames,
  localeShortNames,
  localizeHref,
  locales,
  stripLocale,
} from "@/lib/i18n/config";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

export function LanguageSwitcher({ className = "", onNavigate }: Props) {
  const pathname = usePathname();
  const { locale: current, path } = stripLocale(pathname);

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-zinc-700 bg-surface-900/60 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((locale) => {
        const active = locale === current;
        // Italian-only landing pages have no English counterpart: fall back home.
        const target =
          locale !== "it" && italianOnlyPaths.includes(path)
            ? localizeHref(locale, "/")
            : localizeHref(locale, path);

        return (
          <Link
            key={locale}
            href={target}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
            className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-brand-600 text-white"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <span className="sr-only">{localeNames[locale]}</span>
            <span aria-hidden="true">{localeShortNames[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
