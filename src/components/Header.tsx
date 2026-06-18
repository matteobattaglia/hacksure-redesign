"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/lib/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-surface-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/images/Hacksure-White.png"
            alt="HackSure"
            width={150}
            height={25}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
          {mainNavigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className={`rounded-lg border border-zinc-800 bg-surface-900 py-2 shadow-xl shadow-black/40 ${
                      item.label === "Certificazioni" ? "max-h-80 w-72 overflow-y-auto" : "min-w-[240px]"
                    }`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                        >
                          <span className="font-medium">{child.label}</span>
                          {child.description && (
                            <span className="mt-0.5 block text-xs text-zinc-500">{child.description}</span>
                          )}
                        </Link>
                      ))}
                      <div className="mt-1 border-t border-zinc-800 px-4 pt-2">
                        <Link
                          href={item.href}
                          className="text-xs font-medium text-brand-500 hover:text-brand-400"
                        >
                          Vedi tutti →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-brand-400" : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link href="/contatti" className="ml-3 btn-primary !py-2 !px-4 !text-sm">
            Contatti
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          <div className="flex w-4 flex-col gap-1">
            <span className={`block h-0.5 bg-white transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-zinc-800 px-4 py-4 lg:hidden" aria-label="Menu mobile">
          <div className="space-y-1">
            <Link href="/" className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            {mainNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-zinc-800 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
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
            <Link href="/contatti" className="btn-primary mt-3 w-full" onClick={() => setMobileOpen(false)}>
              Contatti
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
