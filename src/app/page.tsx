import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Office } from "@/components/Office";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Presentation } from "@/components/Presentation";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-cream focus:px-4 focus:py-2 focus:text-navy"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Presentation />
        <PracticeAreas />
        <Office />
        <Approach />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
