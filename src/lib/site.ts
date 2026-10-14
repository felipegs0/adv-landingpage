export const firm = {
  name: "Almeida & Vasconcelos",
  shortName: "A&V",
  subtitle: "Advocacia",
  email: "contato@exemplo.almeidavasconcelos.dev",
  phone: "(00) 0000-0000",
  address: "Endereço demonstrativo — substituir antes de uso comercial",
  businessHours: "Segunda a sexta-feira, das 09h às 18h",
} as const;

/**
 * Número de WhatsApp no formato internacional, apenas dígitos.
 * Exemplo: "5511999999999". Deixe vazio neste projeto demonstrativo.
 */
export const WHATSAPP_NUMBER = "";

export const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#atuacao", label: "Áreas de atuação" },
  { href: "#escritorio", label: "O escritório" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#duvidas", label: "Dúvidas frequentes" },
  { href: "#contato", label: "Contato" },
] as const;

export const practiceAreas = [
  {
    title: "Direito Civil",
    description:
      "Orientação jurídica em questões contratuais, obrigações, proteção patrimonial e responsabilidade civil.",
    topics: [
      "Elaboração, análise e revisão de instrumentos contratuais",
      "Responsabilidade civil e reparação de danos",
      "Resolução preventiva e consensual de disputas patrimoniais",
      "Questões de posse, propriedade e relações locatícias",
    ],
  },
  {
    title: "Direito Empresarial",
    description:
      "Assessoria jurídica para sociedades empresárias, contratos comerciais e prevenção de passivos legais.",
    topics: [
      "Estruturação e revisão de contratos empresariais e parcerias",
      "Apoio a rotinas societárias e governança preventiva",
      "Mediação e mitigação de controvérsias entre sócios",
      "Consultoria contínua para segurança operacional do negócio",
    ],
  },
  {
    title: "Direito de Família e Sucessões",
    description:
      "Condução técnica e sensível de questões familiares, planejamento sucessório e partilha de bens.",
    topics: [
      "Inventários judiciais e procedimentos extrajudiciais em cartório",
      "Planejamento sucessório e organização do patrimônio familiar",
      "Divórcio consensual, partilha de bens e acordos familiares",
      "Pactos antenupciais e definição de regime de bens",
    ],
  },
  {
    title: "Direito do Trabalho",
    description:
      "Orientação preventiva e representação em relações trabalhistas, análise de riscos e obrigações legais.",
    topics: [
      "Consultoria preventiva em contratos e rotinas de trabalho",
      "Auditoria jurídica trabalhista para mitigação de passivos",
      "Acompanhamento em processos administrativos e judiciais",
      "Negociação coletiva e acordos individuais de trabalho",
    ],
  },
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Compreensão da demanda",
    description:
      "Escuta atenta do contexto, dos documentos disponíveis e das particularidades apresentadas pelo cliente.",
  },
  {
    number: "02",
    title: "Análise e orientação jurídica",
    description:
      "Estudo criterioso da situação e apresentação de orientação clara sobre os caminhos juridicamente cabíveis.",
  },
  {
    number: "03",
    title: "Acompanhamento responsável",
    description:
      "Comunicação objetiva ao longo do andamento, com organização e respeito aos limites de cada caso.",
  },
] as const;

export const faqItems = [
  {
    question: "Como funciona a primeira conversa ou consulta?",
    answer:
      "O atendimento inicial é dedicado a compreender detalhadamente a situação apresentada, analisar os fatos e documentos preliminares e verificar a viabilidade da atuação jurídica. A partir desse diagnóstico, apresentamos as alternativas jurídicas disponíveis com total transparência.",
  },
  {
    question: "O atendimento pode ser realizado de forma remota ou digital?",
    answer:
      "Sim. Disponibilizamos atendimento por videoconferência com agendamento prévio, além de canais digitais seguros para troca de mensagens e envio de documentos. Isso proporciona agilidade e comodidade a clientes de diferentes localidades, sem abrir mão da proximidade.",
  },
  {
    question: "Quais documentos são necessários para a análise preliminar?",
    answer:
      "Recomendamos que você reúna seus documentos de identificação pessoal e os registros pertinentes ao caso — como contratos, notificações, trocas de e-mail ou certidões. Na consulta inicial, orientamos com precisão se haverá necessidade de documentos complementares.",
  },
  {
    question: "Como são definidos e formalizados os honorários?",
    answer:
      "Nossos honorários são estabelecidos de forma transparente e condizente com a complexidade da matéria, a urgência e o tempo estimado de dedicação, sempre alinhados aos parâmetros éticos da Tabela da OAB e devidamente formalizados em contrato prévio.",
  },
  {
    question: "O envio de mensagem pelo formulário gera contratação imediata?",
    answer:
      "Não. O envio do formulário consiste em uma solicitação preliminar de contato e análise inicial da demanda. A contratação só ocorre após alinhamento mútuo, apresentação de proposta de honorários e assinatura do competente contrato de prestação de serviços advocatícios.",
  },
] as const;

export function whatsappUrl(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
