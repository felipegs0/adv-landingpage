"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";
import { faqItems } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section
      id="duvidas"
      className="scroll-mt-24 border-b border-navy/8 bg-cream py-20 sm:py-28"
      aria-labelledby="faq-title"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold">
            Dúvidas frequentes
          </p>
          <h2
            id="faq-title"
            className="mt-4 font-serif text-4xl leading-[1.15] text-navy sm:text-[2.75rem]"
          >
            Perguntas comuns sobre atendimento e atuação.
          </h2>
          <p className="mt-4 text-[1.05rem] leading-8 text-muted">
            Transparência desde o primeiro contato. Reunimos aqui os principais
            esclarecimentos sobre procedimentos, etapas de análise e contratação.
          </p>
        </div>

        <div className="mt-14 max-w-3xl divide-y divide-navy/10 border-y border-navy/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-q-${index}`;
            const panelId = `${baseId}-a-${index}`;

            return (
              <div key={item.question} className="py-2">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold"
                >
                  <span className="font-serif text-xl sm:text-2xl text-navy">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-transform duration-300",
                      isOpen && "rotate-180 border-gold text-gold",
                    )}
                    aria-hidden="true"
                  >
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[65ch] text-[0.98rem] leading-7 text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-l-2 border-gold bg-navy/3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-lg text-navy">
              Possui uma dúvida específica sobre sua situação?
            </h3>
            <p className="mt-1 text-sm text-muted">
              Nossa equipe está à disposição para avaliar suas necessidades preliminares.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex min-h-11 shrink-0 items-center justify-center bg-navy px-5 text-[0.78rem] font-medium tracking-[0.14em] uppercase text-cream transition-colors hover:bg-navy-soft"
          >
            Fale conosco
          </a>
        </div>
      </Container>
    </section>
  );
}
