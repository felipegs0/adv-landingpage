import { ArrowUpRight, BriefcaseBusiness, Building2, ScrollText, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { practiceAreas } from "@/lib/site";

const icons = [ScrollText, Building2, Users, BriefcaseBusiness] as const;

export function PracticeAreas() {
  return (
    <section
      id="atuacao"
      className="scroll-mt-24 border-b border-navy/8 bg-cream py-20 sm:py-28"
      aria-labelledby="atuacao-title"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold">
            Áreas de atuação
          </p>
          <h2
            id="atuacao-title"
            className="mt-4 font-serif text-4xl leading-[1.15] text-navy sm:text-[2.75rem]"
          >
            Orientação jurídica em demandas selecionadas.
          </h2>
        </div>

        <ul className="mt-14 grid gap-px bg-navy/10 sm:grid-cols-2">
          {practiceAreas.map((area, index) => {
            const Icon = icons[index];
            return (
              <li key={area.title} className="bg-cream p-8 sm:p-10">
                <Icon
                  className="text-gold"
                  size={22}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-serif text-[1.65rem] text-navy">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[0.98rem] leading-7 text-muted">
                  {area.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-navy/8 pt-5 text-sm text-navy/85">
                  {area.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span className="leading-6">{topic}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-navy transition-colors hover:text-gold"
                >
                  Consultar sobre esta área
                  <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
