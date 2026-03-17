import { Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="Emev Labs Icon" className="h-4 w-4 opacity-50 hover:opacity-100 transition-opacity duration-300" />
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            EMEV LABS © 2026
          </span>
        </div>

        <span className="font-mono text-xs text-muted-foreground">
          Feito com código de verdade.
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5593991599172"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-vinicius-dos-s-siqueira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
