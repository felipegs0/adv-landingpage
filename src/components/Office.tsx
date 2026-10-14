import Image from "next/image";
import { Container } from "@/components/Container";

export function Office() {
  return (
    <section
      id="escritorio"
      className="scroll-mt-24 bg-navy py-20 text-cream sm:py-28"
      aria-labelledby="escritorio-title"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/ambiente.jpg"
              alt="Corredor de escritório com divisórias de vidro, piso contínuo e iluminação pontual."
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold">
              O escritório
            </p>
            <h2
              id="escritorio-title"
              className="mt-4 max-w-[16ch] font-serif text-4xl leading-[1.15] sm:text-[2.75rem]"
            >
              Proximidade no atendimento. Rigor na análise.
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
            <p className="mt-6 text-[1.05rem] leading-8 text-cream/72">
              O trabalho começa pela escuta. Organizamos as informações
              apresentadas, esclarecemos o contexto jurídico aplicável e
              acompanhamos cada etapa com transparência e responsabilidade
              profissional.
            </p>
            <p className="mt-4 text-[1.05rem] leading-8 text-cream/72">
              Não se trata de um discurso de superioridade, e sim de um modo de
              atuar: atenção ao caso concreto, comunicação objetiva e respeito
              aos limites da atividade advocatícia.
            </p>

            <div className="mt-8 grid gap-4 border-t border-cream/10 pt-6 sm:grid-cols-2">
              <div className="border-l-2 border-gold pl-3.5">
                <h3 className="font-serif text-lg text-cream">Rigor Analítico</h3>
                <p className="mt-1 text-xs leading-5 text-cream/70">
                  Estudo criterioso das teses e jurisprudência aplicáveis antes de qualquer orientação.
                </p>
              </div>
              <div className="border-l-2 border-gold pl-3.5">
                <h3 className="font-serif text-lg text-cream">Comunicação Transparente</h3>
                <p className="mt-1 text-xs leading-5 text-cream/70">
                  Relatórios periódicos e linguagem direta sobre riscos, prazos e andamento processual.
                </p>
              </div>
            </div>
            <p className="mt-8 border-l border-gold/70 pl-4 text-sm leading-6 text-cream/55">
              Projeto fictício de demonstração. Nomes, dados institucionais,
              endereços e canais de contato devem ser substituídos antes de
              qualquer uso comercial, observada a regulamentação da publicidade
              profissional da OAB e as normas de proteção de dados.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
