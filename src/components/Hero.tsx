import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] bg-navy text-cream"
      aria-labelledby="hero-title"
    >
      <div className="grid min-h-[100svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:px-16 lg:pt-24 xl:px-24">
          <p className="animate-fade-up text-[0.68rem] font-medium uppercase tracking-[0.34em] text-gold">
            Assessoria jurídica
          </p>
          <h1
            id="hero-title"
            className="animate-fade-up delay-1 mt-6 max-w-[16ch] font-serif text-[2.15rem] leading-[1.12] tracking-[-0.02em] text-cream sm:text-5xl lg:text-[3.35rem]"
          >
            Estratégia jurídica. Atendimento próximo. Relações de confiança.
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-[42ch] text-[1.02rem] leading-7 text-cream/72">
            Atuação jurídica orientada por análise criteriosa, comunicação
            transparente e atenção às particularidades de cada caso.
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#atuacao" variant="solid">
              Conheça nossa atuação
            </ButtonLink>
            <ButtonLink href="#contato" variant="outline">
              Fale com o escritório
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[46vh] lg:min-h-full">
          <div
            className="absolute left-0 top-16 z-10 hidden h-[calc(100%-8rem)] w-px bg-gold/70 lg:block"
            aria-hidden="true"
          />
          <Image
            src="/images/hero-escritorio.jpg"
            alt="Fachada de edifícios corporativos fotografada em contra-plongée, com volumes de vidro e estrutura metálica."
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-navy/30 via-transparent to-navy/40 lg:bg-linear-to-l lg:from-transparent lg:to-navy/35" />
        </div>
      </div>
    </section>
  );
}
