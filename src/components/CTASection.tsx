import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.4em] text-primary mb-12"
        >
          // PRÓXIMO PASSO
        </motion.p>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.05]"
          >
            Pronto para parar de
            <br />
            <span className="text-primary text-glow">perder clientes?</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14"
        >
          <a
            href="https://wa.me/5593991599172?text=Quero modernizar minha empresa!"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-primary text-primary-foreground font-mono text-sm font-bold tracking-widest px-10 py-5 transition-all duration-300 hover:gap-6 hover:shadow-[0_0_80px_hsl(105,18%,40%,0.3)]"
          >
            FALAR COM A EMEV LABS
            <ArrowUpRight
              size={18}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
