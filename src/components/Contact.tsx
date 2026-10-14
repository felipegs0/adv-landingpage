import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { firm, WHATSAPP_NUMBER } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 border-b border-navy/8 bg-cream py-20 sm:py-28"
      aria-labelledby="contato-title"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold">
              Contato
            </p>
            <h2
              id="contato-title"
              className="mt-4 max-w-[14ch] font-serif text-4xl leading-[1.15] text-navy sm:text-[2.75rem]"
            >
              Vamos conversar sobre sua demanda?
            </h2>
            <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-8 text-muted">
              Entre em contato para apresentar sua questão e verificar as
              possibilidades de atendimento.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="tracking-[0.16em] uppercase text-gold">E-mail</dt>
                <dd className="mt-1 text-base text-navy">
                  <a
                    href={`mailto:${firm.email}`}
                    className="transition-colors hover:text-gold hover:underline underline-offset-4"
                  >
                    {firm.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] uppercase text-gold">Telefone</dt>
                <dd className="mt-1 text-base text-navy">
                  <a
                    href={`tel:${firm.phone.replace(/\D/g, "")}`}
                    className="transition-colors hover:text-gold hover:underline underline-offset-4"
                  >
                    {firm.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] uppercase text-gold">Horário de atendimento</dt>
                <dd className="mt-1 text-base text-navy">{firm.businessHours}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] uppercase text-gold">Endereço</dt>
                <dd className="mt-1 text-base text-navy">{firm.address}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] uppercase text-gold">WhatsApp</dt>
                <dd className="mt-1 text-base text-navy">
                  {WHATSAPP_NUMBER ? (
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gold hover:underline underline-offset-4"
                    >
                      {WHATSAPP_NUMBER}
                    </a>
                  ) : (
                    "Disponível mediante solicitação inicial por e-mail ou formulário."
                  )}
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-sm leading-6 text-muted">
              Informações fictícias e editáveis, destinadas exclusivamente a
              este projeto de portfólio.
            </p>
          </div>

          <div className="border border-navy/10 bg-white/40 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
