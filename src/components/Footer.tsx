import { Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border" aria-label="Rodapé">
      <div className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Logo da Emev Labs"
            className="h-4 w-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            EMEV LABS © 2026
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            Feito com código de verdade.
          </span>
          <Link
            to="/termos-de-uso"
            className="a11y-focus font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Termos de Uso
          </Link>
          <Link
            to="/politica-de-privacidade"
            className="a11y-focus font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Privacidade
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/solicitacao-recebida?origem=footer"
            data-conversion="quote-request"
            data-conversion-location="footer"
            className="a11y-focus text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Solicitar orçamento"
          >
            <MessageCircle size={16} />
          </Link>
          <a
            href="https://www.linkedin.com/in/marcos-vinicius-dos-s-siqueira/"
            target="_blank"
            rel="noopener noreferrer"
            className="a11y-focus text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Perfil da Emev Labs no LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
