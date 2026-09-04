"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNavigation } from "@/lib/navigation";
import { localizeHref, stripLocale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const copy = {
  it: {
    mainNav: "Navigazione principale",
    mobileNav: "Menu mobile",
    viewAll: "Vedi tutti →",
    collaborate: "Collabora con noi",
    contact: "Contatti",
    home: "Home",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
  },
  en: {
    mainNav: "Main navigation",
    mobileNav: "Mobile menu",
    viewAll: "View all →",
    collaborate: "Partner with us",
    contact: "Contact",
    home: "Home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
} as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = useLocale();

  const t = copy[locale];
  const navigation = getNavigation(locale);
  const href = (path: string) => localizeHref(locale, path);
  const { path: currentPath } = stripLocale(pathname);

  const isActive = (target: string) =>
    target === "/" ? currentPath === "/" : currentPath.startsWith(target);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-surface-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href={href("/")} className="shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/assets/images/Hacksure-White.png"
            alt="Hacksure"
            width={150}
            height={25}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.mainNav}>
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={href(item.href)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ease ${
                    isActive(item.href)
                      ? "text-brand-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div
                  className={`absolute left-0 top-full z-50 origin-top-left pt-1 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
                    openDropdown === item.label
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
                  }`}
                >
                  <div className="max-h-[min(70vh,28rem)] w-72 overflow-y-auto overscroll-contain rounded-xl border border-white/[0.08] bg-surface-900/95 py-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={href(child.href)}
                        className="block px-4 py-2.5 text-sm text-zinc-300 transition-colors duration-150 ease hover:bg-white/[0.04] hover:text-white"
                      >
                        <span className="font-medium">{child.label}</span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs text-zinc-500">{child.description}</span>
                        )}
                      </Link>
                    ))}
                    <div className="sticky bottom-0 border-t border-white/[0.06] bg-surface-900/95 px-4 py-2">
                      <Link
                        href={href(item.href)}
                        className="text-xs font-medium text-brand-500 hover:text-brand-400"
                      >
                        {t.viewAll}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={href(item.href)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ease ${
                  isActive(item.href) ? "text-brand-400" : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={href("/collabora")}
            className={`ml-2 btn-outline !py-2 !px-3 !text-sm ${
              isActive("/collabora") ? "!bg-brand-600/15" : ""
            }`}
          >
            {t.collaborate}
          </Link>
          <Link href={href("/contatti")} className="ml-2 btn-primary !py-2 !px-4 !text-sm">
            {t.contact}
          </Link>
          <LanguageSwitcher className="ml-3" />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher onNavigate={() => setMobileOpen(false)} />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 transition-[transform,border-color] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
          >
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`block h-0.5 bg-white transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  mobileOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-opacity duration-150 ease ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <nav
        className={`origin-top overflow-hidden border-t border-white/[0.06] transition-[max-height,opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none lg:hidden ${
          mobileOpen
            ? "max-h-[calc(100dvh-3.75rem)] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
        }`}
        aria-label={t.mobileNav}
        aria-hidden={!mobileOpen}
      >
        <div className="max-h-[calc(100dvh-3.75rem)] space-y-1 overflow-y-auto overscroll-contain px-4 py-4 pb-6">
          <Link
            href={href("/")}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-200"
            onClick={() => setMobileOpen(false)}
          >
            {t.home}
          </Link>
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={href(item.href)}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 border-l border-white/[0.06] pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={href(child.href)}
                      className="block py-1.5 text-sm text-zinc-400 hover:text-brand-400"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={href("/collabora")}
            className="btn-outline mt-3 w-full"
            onClick={() => setMobileOpen(false)}
          >
            {t.collaborate}
          </Link>
          <Link
            href={href("/contatti")}
            className="btn-primary mt-2 w-full"
            onClick={() => setMobileOpen(false)}
          >
            {t.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
