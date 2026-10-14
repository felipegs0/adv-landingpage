import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101c2c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Almeida & Vasconcelos Advocacia | Assessoria Jurídica Estratégica",
  description:
    "Landing page institucional de advocacia. Orientação em Direito Civil, Empresarial, Família e Sucessões e Direito do Trabalho com rigor técnico e discrição.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Almeida & Vasconcelos Advocacia",
    description:
      "Assessoria jurídica estratégica, proximidade no atendimento e relações de confiança.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body
        className="min-h-full bg-cream font-sans text-navy"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
