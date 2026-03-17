import { motion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";
import { useTheme } from "next-themes";

const PortfolioSection = () => {
  const { theme } = useTheme();
  
  // Only display this section when in dark mode (Lab mode)
  if (theme !== "dark") return null;

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.4em] text-primary mb-4 uppercase"
        >
          // PROVAS SOCIAIS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-semibold text-3xl md:text-5xl text-foreground mb-6 tracking-tight"
        >
          O Laboratório na Prática.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mb-16"
        >
          Conheça alguns dos produtos digitais arquitetados e desenvolvidos pelo nosso laboratório.
        </motion.p>

        {/* Portfolio Single Item */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative border border-border p-8 md:p-12 hover:border-primary/50 transition-colors duration-500 overflow-hidden bg-secondary/10"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20">
                  <Activity size={18} className="text-primary" />
                </div>
                <span className="font-mono text-xs tracking-widest text-primary">CASE REAL</span>
              </div>
              
              <h3 className="font-sans font-semibold text-3xl md:text-4xl text-foreground mb-4">
                Onde o Bloco Tá!
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-light mb-8">
                Plataforma web de alta disponibilidade desenvolvida para mapeamento em tempo real, suportando picos de dezenas de milhares de acessos simultâneos.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="font-mono text-[10px] tracking-widest text-secondary-foreground border border-border px-3 py-1.5">ALTA DISPONIBILIDADE</span>
                <span className="font-mono text-[10px] tracking-widest text-secondary-foreground border border-border px-3 py-1.5">MAPAS EM TEMPO REAL</span>
                <span className="font-mono text-[10px] tracking-widest text-secondary-foreground border border-border px-3 py-1.5">ESCALA MASSIVA</span>
              </div>
            </div>
            
            <a
              href="#"
              className="mt-4 md:mt-0 flex w-12 h-12 items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
              aria-label="Ver Case"
            >
              <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
