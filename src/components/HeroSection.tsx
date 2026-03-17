import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";

const words = ["RESOLVE.", "ESCALA.", "CONVERTE.", "FUNCIONA."];
const darkWords = ["INTELIGENTES.", "EFICIENTES.", "ESCALÁVEIS.", "ROBUSTOS."];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const activeWords = isDark ? darkWords : words;

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % activeWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeWords.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pt-28 px-6 md:px-10"
      >
        <p className="font-mono text-xs tracking-[0.4em] text-muted-foreground uppercase">
          {isDark ? "LABORATÓRIO DE SOFTWARE — 2026" : "LABORATÓRIO DE SOFTWARE — 2026"}
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center px-6 md:px-10">
        <div className="w-full">
          {/* Massive headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className={`font-sans font-600 leading-[0.9] tracking-[-0.04em] text-foreground ${isDark ? "text-[clamp(1.5rem,7vw,6.5rem)]" : "text-[clamp(2.5rem,10vw,9rem)]"
                }`}
            >
              {isDark ? "TRANSFORMANDO IDEIAS COMPLEXAS" : "TECNOLOGIA"}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className={`font-sans font-600 leading-[0.9] tracking-[-0.04em] text-foreground ${isDark ? "text-[clamp(1.5rem,7vw,6.5rem)]" : "text-[clamp(2.5rem,10vw,9rem)]"
                }`}
            >
              {isDark ? "EM PRODUTOS DIGITAIS " : "QUE "}
              <span className="text-primary text-glow inline-block min-w-[3ch]">
                {activeWords[wordIndex]}
              </span>
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
              {isDark
                ? "A Emev Labs é um laboratório independente de tecnologia. Unimos engenharia de software robusta e inteligência artificial para criar soluções que escalam e geram impacto real."
                : "Esqueça o hype. Criamos sites, apps e automações que fazem sua empresa vender mais."}
            </p>

            <a
              href="https://wa.me/5593991599172?text=Quero modernizar minha empresa!"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 font-mono text-sm tracking-widest text-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary group-hover:w-20 transition-all duration-500" />
              {isDark ? "VEM COM A GENTE?" : "INICIAR PROJETO"}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="pb-10 px-6 md:px-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Large background number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
        <span className="font-sans font-bold text-[20rem] md:text-[35rem] leading-none text-foreground/[0.02]">
          EL
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
