import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { certifications, getCertificationBySlug } from "@/lib/data/certifications";
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
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative h-40 w-40">
                <Image src={cert.image} alt={cert.alt} fill className="object-contain" sizes="160px" />
              </div>
              <p className="mt-4 text-sm font-medium text-brand-500">{cert.issuer}</p>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-semibold text-white">{cert.name}</h1>
              <p className="mt-4 leading-relaxed text-zinc-400">{cert.longDescription}</p>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Competenze validate
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {cert.skills.map((skill) => (
                  <li key={skill} className="text-sm text-zinc-300">— {skill}</li>
                ))}
              </ul>
              <Link href="/contatti" className="btn-primary mt-8 inline-flex">
                Parla con un consulente certificato
              </Link>
            </div>
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
