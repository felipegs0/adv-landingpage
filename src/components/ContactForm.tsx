"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail, RotateCcw } from "lucide-react";
import { firm, whatsappUrl } from "@/lib/site";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 0 || digits.length >= 10;
}

export function ContactForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [draft, setDraft] = useState("");
  const [draftSubject, setDraftSubject] = useState("");

  const wa = whatsappUrl(draft);
  const mailtoHref = draft
    ? `mailto:${firm.email}?subject=${encodeURIComponent(
        draftSubject ? `Contato: ${draftSubject}` : "Contato institucional - Almeida & Vasconcelos",
      )}&body=${encodeURIComponent(draft)}`
    : null;

  function validate(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent");
    const next: FieldErrors = {};

    if (name.length < 2) {
      next.name = "Por favor, informe seu nome completo.";
    }
    if (!isValidEmail(email)) {
      next.email = "Por favor, informe um endereço de e-mail válido.";
    }
    if (!isValidPhone(phone)) {
      next.phone = "Informe um telefone válido com DDD (ex: 11 99999-9999) ou deixe em branco.";
    }
    if (message.length < 12) {
      next.message = "Por favor, descreva brevemente a demanda em pelo menos algumas palavras.";
    }
    if (!consent) {
      next.consent = "É necessário aceitar os termos de contato para prosseguir.";
    }

    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);

    const firstErrorKey = Object.keys(nextErrors)[0];
    if (firstErrorKey) {
      setStatus("idle");
      const targetElement = form.elements.namedItem(firstErrorKey);
      if (targetElement instanceof HTMLElement) {
        targetElement.focus();
      }
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const composed = [
      `Olá, meu nome é ${name}.`,
      `E-mail de contato: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      subject ? `Área de interesse: ${subject}` : null,
      "",
      "Mensagem:",
      message,
      "",
      "---",
      "Mensagem formatada a partir do formulário de contato do site.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    setDraft(composed);
    setDraftSubject(subject);
    setStatus("success");
  }

  function handleReset() {
    formRef.current?.reset();
    setErrors({});
    setStatus("idle");
    setDraft("");
    setDraftSubject("");
  }

  const fieldClass =
    "mt-2 w-full border border-navy/15 bg-cream px-4 py-3 text-base sm:text-[0.95rem] text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={`${formId}-note`}
    >
      <p id={`${formId}-note`} className="text-sm leading-6 text-muted">
        Formulário demonstrativo de contato. Não envie documentos confidenciais,
        números de processo protegidos por segredo de justiça ou dados bancários.
      </p>

      <div>
        <label
          htmlFor={`${formId}-name`}
          className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-navy"
        >
          Nome completo <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          className={fieldClass}
          placeholder="Ex.: Carolina Silva"
        />
        {errors.name ? (
          <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-red-800" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-navy"
          >
            E-mail institucional / pessoal{" "}
            <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={fieldClass}
            placeholder="nome@dominio.com.br"
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-navy"
          >
            Telefone <span className="tracking-normal text-muted">(opcional)</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={fieldClass}
            placeholder="(11) 90000-0000"
          />
          {errors.phone ? (
            <p id={`${formId}-phone-error`} className="mt-1.5 text-sm text-red-800" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor={`${formId}-subject`}
          className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-navy"
        >
          Área de interesse <span className="tracking-normal text-muted">(opcional)</span>
        </label>
        <select
          id={`${formId}-subject`}
          name="subject"
          defaultValue=""
          className={`${fieldClass} cursor-pointer`}
        >
          <option value="">Selecione uma área jurídica (opcional)</option>
          <option value="Direito Civil">Direito Civil</option>
          <option value="Direito Empresarial">Direito Empresarial</option>
          <option value="Direito de Família e Sucessões">Direito de Família e Sucessões</option>
          <option value="Direito do Trabalho">Direito do Trabalho</option>
          <option value="Outra demanda jurídica">Outra demanda jurídica</option>
        </select>
      </div>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-navy"
        >
          Breve descrição da demanda{" "}
          <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={`${fieldClass} min-h-28 resize-y`}
          placeholder="Apresente um resumo geral dos fatos para análise preliminar de viabilidade..."
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-red-800" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer text-xs leading-5 text-muted">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy/20 text-navy accent-navy focus:ring-gold"
          />
          <span>
            Declaro que li as orientações acima e concordo com o envio destas informações
            para fins exclusivos de contato preliminar institucional, em conformidade com a LGPD.
          </span>
        </label>
        {errors.consent ? (
          <p id={`${formId}-consent-error`} className="mt-1.5 text-sm text-red-800" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center bg-navy px-6 text-[0.78rem] font-medium tracking-[0.14em] uppercase text-cream transition-colors hover:bg-navy-soft active:bg-navy sm:w-auto"
        >
          Enviar mensagem
          <ArrowRight size={15} className="ml-2" aria-hidden="true" />
        </button>
      </div>

      <div aria-live="polite" className="min-h-6 pt-1">
        {status === "success" ? (
          <div className="border border-gold/50 bg-gold/10 p-5 text-sm leading-6 text-navy">
            <div className="flex items-center gap-2 font-medium text-navy">
              <CheckCircle2 size={18} className="text-gold" aria-hidden="true" />
              <span>Dados validados com sucesso.</span>
            </div>
            <p className="mt-2 text-muted">
              Por ser um projeto demonstrativo de portfólio, os dados não foram gravados
              em banco de dados externo. Você pode utilizar os canais abaixo para encaminhar sua mensagem:
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {mailtoHref ? (
                <a
                  href={mailtoHref}
                  className="inline-flex min-h-10 items-center gap-2 border border-navy bg-navy px-4 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-cream transition-colors hover:bg-navy-soft"
                >
                  <Mail size={15} aria-hidden="true" />
                  Abrir no seu e-mail
                </a>
              ) : null}

              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 border border-gold bg-transparent px-4 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-navy transition-colors hover:bg-gold hover:text-navy"
                >
                  Encaminhar pelo WhatsApp
                </a>
              ) : null}

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-10 items-center gap-2 border border-navy/20 bg-cream px-4 text-[0.75rem] font-medium tracking-[0.12em] uppercase text-navy transition-colors hover:border-navy"
              >
                <RotateCcw size={14} aria-hidden="true" />
                Nova mensagem
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
}
