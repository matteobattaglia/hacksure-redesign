import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

type TeamMember = {
  nome: string;
  ruolo: string;
  certificazioni: string[];
  linkedin?: string;
  foto?: string;
};

// TODO: sostituire con nomi, foto reali (/public/assets/team/*.jpg) e link LinkedIn
// prima del go-live. Senza `foto` viene mostrato un avatar con le iniziali.
const team: TeamMember[] = [
  {
    nome: "Lead Penetration Tester",
    ruolo: "Offensive Security",
    certificazioni: ["eCPPT", "CompTIA PenTest+", "eJPT"],
  },
  {
    nome: "Security & Network Engineer",
    ruolo: "Infrastruttura & Difesa",
    certificazioni: ["CompTIA Security+", "Cisco CCNA", "Sophos Firewall Engineer"],
  },
  {
    nome: "Compliance Specialist",
    ruolo: "NIS2 · GDPR · ISO 27001",
    certificazioni: ["SecurityX", "CNVP", "EICTA IS"],
  },
];

function initials(label: string) {
  return label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function TeamSection() {
  return (
    <section className="mt-16">
      <AnimateIn>
        <h2 className="text-lg font-semibold text-white">Il nostro team</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Specialisti certificati che seguono direttamente ogni progetto: dall&apos;analisi
          offensiva alla difesa delle infrastrutture fino alla conformità normativa.
        </p>
      </AnimateIn>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <AnimateIn key={member.nome} delay={i * 90}>
            <div className="card-hover flex h-full flex-col p-6">
              <div className="flex items-center gap-4">
                {member.foto ? (
                  <Image
                    src={member.foto}
                    alt={member.nome}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/15 text-lg font-bold text-brand-400">
                    {initials(member.nome)}
                  </span>
                )}
                <div>
                  <p className="font-semibold text-white">{member.nome}</p>
                  <p className="text-sm text-brand-500">{member.ruolo}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {member.certificazioni.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-zinc-700 bg-surface-950 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:text-brand-400"
                >
                  LinkedIn →
                </a>
              )}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
