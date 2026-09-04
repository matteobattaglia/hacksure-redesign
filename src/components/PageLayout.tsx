import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { localizeHref, type Locale } from "@/lib/i18n/config";
export { CtaBanner } from "@/components/CtaBanner";

type Props = {
  // Accepted for a uniform page-primitive API; the header renders only prop-provided copy.
  locale: Locale;
  label: string;
  title: string;
  description?: string;
};

export function PageHeader({ label, title, description }: Props) {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06] bg-surface-900/80">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 via-transparent to-transparent" />
      <div className="mesh-bg absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="section-label">{label}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">{description}</p>
          )}
        </AnimateIn>
      </div>
    </div>
  );
}

type BreadcrumbProps = {
  locale: Locale;
  items: { label: string; href?: string }[];
};

export function Breadcrumb({ locale, items }: BreadcrumbProps) {
  return (
    <nav className="border-b border-white/[0.04] bg-surface-950" aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link
                  href={localizeHref(locale, item.href)}
                  className="transition-colors duration-150 ease hover:text-brand-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-300">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
