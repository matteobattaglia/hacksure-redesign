import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { securityServices, getSecurityServiceBySlug } from "@/lib/data/services";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return securityServices.map((s) => ({ slug: s.slug }));
}

const seoDescriptionBySlug: Record<string, string> = {
  "penetration-testing":
    "Scopri quanto è facile entrare nella tua azienda prima che lo facciano gli hacker. Penetration test professionale per PMI in Italia.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getSecurityServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: seoDescriptionBySlug[slug] ?? service.description,
    path: `/servizi/${slug}`,
  });
}

export default async function ServizioDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getSecurityServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            serviceType: service.title,
            description: service.description,
            path: `/servizi/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Servizi", url: "/servizi" },
            { name: service.title, url: `/servizi/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Servizi", href: "/servizi" },
            { label: service.title },
          ]}
        />
        <div className="border-b border-zinc-800 bg-surface-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">{service.category}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{service.title}</h1>
            <p className="mt-4 max-w-3xl text-zinc-400">{service.longDescription}</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Cosa include</h2>
              <ul className="mt-4 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Metodologia</h2>
              <ol className="mt-4 space-y-4">
                {service.methodology.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-xs font-medium text-brand-500">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/contatti" className="btn-primary">
              {service.cta}
            </Link>
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
