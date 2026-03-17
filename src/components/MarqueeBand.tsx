import { motion } from "framer-motion";

const MarqueeBand = () => {
  const items = [
    "LANDING PAGES",
    "AUTOMAÇÃO",
    "APPS SOB MEDIDA",
    "WHATSAPP BOTS",
    "SITES RÁPIDOS",
    "UI/UX DESIGN",
    "INTEGRAÇÃO API",
    "CONSULTORIA TECH",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="border-y border-border py-5 overflow-hidden bg-primary">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-sans font-semibold text-sm md:text-base tracking-[0.3em] text-primary-foreground mx-8 flex items-center gap-8"
          >
            {item}
            <span className="w-1.5 h-1.5 bg-primary-foreground/40 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
