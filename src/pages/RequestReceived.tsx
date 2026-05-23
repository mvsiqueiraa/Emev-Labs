import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO, { SITE_URL } from "@/components/SEO";

const WHATSAPP_URL =
  "https://wa.me/5593991599172?text=Olá! Gostaria de solicitar um orçamento para um projeto.";

const RequestReceived = () => {
  return (
    <div className="relative min-h-screen bg-background noise-bg">
      <SEO
        title="Solicitação recebida | Emev Labs"
        description="Solicitação de orçamento recebida pela Emev Labs. Continue pelo WhatsApp para enviar os detalhes do projeto."
        canonical={`${SITE_URL}/solicitacao-recebida`}
      />
      <Navbar />
      <main className="min-h-screen px-6 md:px-10 pt-32 pb-24 flex items-center">
        <section className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] text-primary uppercase mb-8">
            <CheckCircle2 size={18} />
            // ORÇAMENTO
          </div>

          <h1 className="font-sans font-semibold text-4xl md:text-6xl tracking-tight text-foreground leading-tight">
            Solicitação recebida.
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/80">
            Obrigado pelo interesse na Emev Labs. Para concluir o pedido de
            orçamento, continue pelo WhatsApp e envie os detalhes do projeto.
          </p>

          <div className="mt-12 flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-conversion="whatsapp-lead"
              data-conversion-location="request-received"
              className="group inline-flex items-center justify-center gap-4 bg-primary text-primary-foreground font-mono text-sm font-bold tracking-widest px-8 py-5 transition-all duration-300 hover:gap-6 hover:shadow-[0_0_80px_hsl(105,18%,40%,0.3)]"
            >
              CONTINUAR NO WHATSAPP
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestReceived;
