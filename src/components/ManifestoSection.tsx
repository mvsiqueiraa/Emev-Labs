import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const ManifestoSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const lightLines = [
    { text: "Esqueça os termos difíceis e as promessas mágicas.", highlight: false },
    { text: "Seu negócio precisa do básico que funciona.", highlight: true },
    { text: "Vender mais e atender melhor.", highlight: false },
  ];

  const darkLines = [
    { text: "Não somos apenas uma fábrica de código.", highlight: false },
    { text: "Somos um laboratório de inovação.", highlight: true },
  ];

  const lines = isDark ? darkLines : lightLines;

  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.4em] text-primary mb-16"
        >
          // {isDark ? "SOBRE O LAB" : "MANIFESTO"}
        </motion.p>

        <div className="space-y-4 md:space-y-6">
          {lines.map((line, i) => (
            <div key={`${isDark ? 'dark' : 'light'}-${i}`} className="overflow-visible">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`font-sans font-semibold text-3xl md:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.1] tracking-tight ${
                  line.highlight ? "text-primary text-glow" : "text-foreground"
                }`}
              >
                {line.text}
              </motion.p>
            </div>
          ))}
        </div>

        {isDark && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl font-light"
          >
            Nascemos com o propósito de testar limites e construir tecnologia de ponta a partir da Amazônia para o mundo. Atuamos de forma independente para ter a liberdade de explorar novas arquiteturas, integrar IA de forma nativa e desenvolver produtos digitais que resolvem problemas reais com eficiência e design impecável.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ManifestoSection;
