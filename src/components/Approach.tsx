import { Container } from "@/components/Container";
import { approachSteps } from "@/lib/site";

export function Approach() {
  return (
    <section
      id="abordagem"
      className="scroll-mt-24 border-b border-navy/8 bg-cream py-20 sm:py-28"
      aria-labelledby="abordagem-title"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold">
            Abordagem
          </p>
          <h2
            id="abordagem-title"
            className="mt-4 font-serif text-4xl leading-[1.15] text-navy sm:text-[2.75rem]"
          >
            Um percurso claro, sem promessas de resultado.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {approachSteps.map((step) => (
            <li key={step.number} className="border-t border-navy/12 pt-8">
              <span className="font-serif text-3xl text-gold">{step.number}</span>
              <h3 className="mt-4 font-serif text-[1.55rem] text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
