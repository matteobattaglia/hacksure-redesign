import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import { certifications, getCertificationBySlug, certCategories } from "@/lib/data/certifications";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertificationBySlug(slug);
  if (!cert) return {};
  return createMetadata({
    title: cert.name,
    description: cert.description,
    path: `/certificazioni/${slug}`,
  });
}

export default async function CertificazioneDetailPage({ params }: Props) {
  const { slug } = await params;
  const cert = getCertificationBySlug(slug);
  if (!cert) notFound();

  const categoryLabel = certCategories[cert.category].label;

  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Certificazioni", href: "/certificazioni" },
            { label: cert.name },
          ]}
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <AnimateIn className="flex flex-col items-center lg:items-start">
              <CertBadge src={cert.image} alt={cert.alt} size={140} className="p-2" />
              <p className="mt-4 text-sm font-medium text-brand-500">{cert.issuer}</p>
              <span className="mt-2 rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                {categoryLabel}
              </span>
            </AnimateIn>
            <AnimateIn delay={100} className="lg:col-span-2">
              <h1 className="text-3xl font-semibold text-white">{cert.name}</h1>
              {cert.subtitle && (
                <p className="mt-1 text-lg text-zinc-400">{cert.subtitle}</p>
              )}
              <p className="mt-5 leading-relaxed text-zinc-400">{cert.longDescription}</p>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Competenze validate
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {cert.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {skill}
                  </li>
                ))}
              </ul>
              <Link href="/contatti" className="btn-primary mt-8 inline-flex">
                Parla con un consulente certificato
              </Link>
            </AnimateIn>
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
