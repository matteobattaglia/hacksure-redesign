"use client";

import { createContext, useContext } from "react";
import { defaultLocale, localizeHref, type Locale } from "./config";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** Prefixes internal paths with the active locale. */
export function useHref() {
  const locale = useLocale();
  return (path: string) => localizeHref(locale, path);
}
