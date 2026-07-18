import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import type { SecurityService } from "@/lib/data/services";

type Props = {
  service: SecurityService;
};

export function ServiceDetail({ service }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <AnimateIn>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Cosa include
          </h2>
          <ul className="mt-4 space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {f}
              </li>
            ))}
          </ul>
        </AnimateIn>
        <AnimateIn delay={80}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Metodologia
          </h2>
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
        </AnimateIn>
      </div>

      {service.audience && service.audience.length > 0 && (
        <section className="mt-14">
          <AnimateIn>
            <h2 className="text-xl font-semibold text-white">Per chi è pensato</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {service.audience.map((item) => (
                <div key={item} className="card p-5 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>
      )}

      {service.deliverables && service.deliverables.length > 0 && (
        <section className="mt-14">
          <AnimateIn>
            <h2 className="text-xl font-semibold text-white">Deliverable</h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {d}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </section>
      )}

      {service.useCases && service.useCases.length > 0 && (
        <section className="mt-14">
          <AnimateIn>
            <h2 className="text-xl font-semibold text-white">Casi d&apos;uso tipici</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.useCases.map((uc) => (
                <div key={uc} className="card-hover p-5 text-sm leading-relaxed text-zinc-400">
                  {uc}
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="mt-14">
          <AnimateIn>
            <h2 className="text-xl font-semibold text-white">Domande frequenti</h2>
            <div className="mt-5 space-y-3">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="card p-5">
                  <h3 className="text-sm font-medium text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </section>
      )}

      {service.relatedLinks && service.relatedLinks.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3">
          {service.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-brand-600/50 hover:text-brand-400"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}

      {service.disclaimer && (
        <p className="mt-10 rounded-lg border border-zinc-800 bg-surface-900/60 px-4 py-3 text-xs leading-relaxed text-zinc-500">
          {service.disclaimer}
        </p>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/contatti" className="btn-primary">
          {service.cta}
        </Link>
        <Link href="/servizi" className="btn-secondary">
          Tutti i servizi
        </Link>
      </div>
    </div>
  );
}
