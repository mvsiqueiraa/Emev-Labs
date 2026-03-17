import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Layout, Bot, Smartphone, ArrowUpRight, Cpu, Network, Briefcase } from "lucide-react";

const lightServices = [
  {
    id: "01",
    icon: Layout,
    title: "Landing Pages de Alta Performance",
    description:
      "Sites ultra-rápidos, otimizados para SEO e conversão. Cada pixel pensado para transformar visitantes em clientes pagantes.",
    tags: ["REACT", "NEXT.JS", "PERFORMANCE"],
  },
  {
    id: "02",
    icon: Bot,
    title: "Automações de Negócio",
    description:
      "Chatbots inteligentes, fluxos de WhatsApp e integrações que eliminam trabalho manual. Sua empresa funcionando 24/7.",
    tags: ["WHATSAPP API", "N8N", "IA"],
  },
  {
    id: "03",
    icon: Smartphone,
    title: "Aplicativos Sob Medida",
    description:
      "Apps web e mobile construídos do zero para resolver o problema específico do seu negócio. Sem templates, sem gambiarra.",
    tags: ["REACT NATIVE", "PWA", "API REST"],
  },
];

const darkServices = [
  {
    id: "01",
    icon: Cpu,
    title: "Engenharia de Software",
    description:
      "Arquitetura e desenvolvimento de sistemas web e plataformas sob medida, focados em alta performance e escalabilidade estruturada.",
    tags: ["ARCHITECTURE", "SCALABILITY", "CLOUD"],
  },
  {
    id: "02",
    icon: Network,
    title: "Inteligência Artificial",
    description:
      "Integração de modelos de IA e machine learning para automatizar processos complexos, gerar insights e criar produtos mais inteligentes.",
    tags: ["MACHINE LEARNING", "LLMs", "AUTOMATION"],
  },
  {
    id: "03",
    icon: Briefcase,
    title: "Produtos Digitais (Venture Building)",
    description:
      "Idealização, design, desenvolvimento e lançamento de aplicativos e soluções próprias (SaaS) voltadas para o mercado B2B e B2C.",
    tags: ["SAAS", "VENTURES", "B2B/B2C"],
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  
  const isDark = theme === "dark";
  const services = isDark ? darkServices : lightServices;

  return (
    <section className="pt-16 pb-32 md:pt-24 md:pb-44">
      <div className="px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.4em] text-primary mb-4 uppercase"
        >
          // {isDark ? "FRENTES DE PESQUISA" : "SERVIÇOS"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans font-semibold text-3xl md:text-4xl text-foreground mb-16 tracking-tight"
        >
          O que construímos.
        </motion.h2>
      </div>

      <div className="border-t border-border">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group border-b border-border cursor-pointer"
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="px-6 md:px-10 py-8 md:py-10 flex items-start md:items-center justify-between gap-6 transition-all duration-500 hover:bg-secondary/50">
              <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1">
                {/* Number */}
                <span className="font-mono text-xs text-muted-foreground w-8 pt-1 md:pt-0">
                  {service.id}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <service.icon
                    size={18}
                    className="text-muted-foreground group-hover:text-secondary-foreground transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-foreground group-hover:text-secondary-foreground transition-colors duration-300">
                    {service.title}
                  </h3>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-muted-foreground text-sm max-w-lg leading-relaxed font-light">
                          {service.description}
                        </p>
                        <div className="flex gap-3 mt-4">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-widest text-primary/70 border border-primary/20 px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-secondary-foreground group-hover:rotate-45 transition-all duration-300 mt-1 md:mt-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
