import Image from "next/image";
import { Container } from "@/components/Container";

export function Presentation() {
  return (
    <section
      className="border-b border-navy/8 bg-cream py-20 sm:py-28"
      aria-labelledby="apresentacao-title"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold">
              Apresentação
            </p>
            <h2
              id="apresentacao-title"
              className="mt-4 max-w-[14ch] font-serif text-4xl leading-[1.15] text-navy sm:text-[2.75rem]"
            >
              Cada caso merece atenção individual.
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
            <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-8 text-muted">
              Nosso trabalho parte da compreensão das necessidades de cada
              cliente, com análise cuidadosa, comunicação clara e acompanhamento
              responsável das questões jurídicas.
            </p>
          </div>

          <figure className="relative">
            <div
              className="absolute -left-3 -top-3 hidden h-24 w-24 border border-gold/50 lg:block"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/reuniao.jpg"
                alt="Conversa profissional em mesa clara, com documentos sendo apresentados e escuta atenta."
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.78rem] tracking-wide text-muted">
              Atendimento pautado por escuta e organização — imagem ilustrativa.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
