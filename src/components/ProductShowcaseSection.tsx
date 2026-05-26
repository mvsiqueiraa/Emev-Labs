import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAccessibility } from "./AccessibilityProvider";

const ProductShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { prefersReducedMotion } = useAccessibility();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section ref={sectionRef} aria-labelledby="product-showcase-title" className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex min-h-[42rem] items-end overflow-hidden bg-[#172016] md:min-h-[clamp(34rem,68svh,48rem)]"
      >
        <motion.img
          src="/emev-product-dashboard.jpg"
          width={1672}
          height={940}
          loading="lazy"
          decoding="async"
          alt="Notebook exibindo uma interface de dashboard para monitoramento de sistemas digitais"
          className="absolute inset-0 h-full w-full object-cover object-[42%_center] md:object-center"
          style={prefersReducedMotion ? undefined : { y: imageY, scale: 1.045 }}
        />

        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mt-auto w-full border-t border-white/20 bg-black/40 backdrop-blur-[2px]">
          <div className="flex flex-col gap-7 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-10 md:py-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-bold text-white/80">
                // PRODUTOS DIGITAIS
              </p>
              <h2
                id="product-showcase-title"
                className="mt-4 max-w-2xl font-sans text-3xl font-semibold leading-tight text-white md:text-5xl"
              >
                Interfaces construídas para operar, analisar e escalar.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                Dashboards, sistemas e automações sob medida para transformar
                fluxo de trabalho em resultado.
              </p>
            </div>

            <Link
              to="/solicitacao-recebida?origem=showcase"
              data-conversion="quote-request"
              data-conversion-location="showcase"
              className="a11y-focus group inline-flex shrink-0 items-center gap-4 border border-white/55 px-6 py-4 font-mono text-xs font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[#253620]"
            >
              CONSTRUIR UMA SOLUÇÃO
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcaseSection;
