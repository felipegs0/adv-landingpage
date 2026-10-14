import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/Logo";
import { firm, navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Logo inverted />
          <p className="mt-6 max-w-[38ch] text-sm leading-6 text-cream/65">
            Assessoria jurídica pautada por rigor técnico, discrição institucional e
            atendimento próximo às particularidades de cada cliente.
          </p>
          <p className="mt-4 text-xs leading-5 text-cream/45">
            Este site tem caráter exclusivamente institucional e informativo,
            observando as normas éticas de publicidade da OAB.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-[0.68rem] tracking-[0.24em] uppercase text-gold">Navegação</p>
          <ul className="mt-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.68rem] tracking-[0.24em] uppercase text-gold">Contato</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li>
              <a
                href={`mailto:${firm.email}`}
                className="transition-colors hover:text-gold hover:underline underline-offset-4"
              >
                {firm.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${firm.phone.replace(/\D/g, "")}`}
                className="transition-colors hover:text-gold hover:underline underline-offset-4"
              >
                {firm.phone}
              </a>
            </li>
            <li className="text-cream/65">{firm.businessHours}</li>
            <li className="text-cream/65">{firm.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-8 text-xs leading-5 text-cream/50 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p id="privacidade" className="max-w-[62ch]">
            Aviso de privacidade: projeto demonstrativo de portfólio. Não há coleta,
            armazenamento ou comercialização de dados pessoais neste sítio, em respeito à LGPD.
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-gold/80">
              Projeto demonstrativo com informações fictícias.
            </span>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 text-xs text-cream/70 transition-colors hover:text-gold"
              aria-label="Voltar ao início da página"
            >
              Voltar ao topo
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
