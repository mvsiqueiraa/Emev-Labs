import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const Counter = ({ target, suffix = "", prefix = "", label }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref}>
      <p className="font-sans font-semibold text-5xl md:text-7xl lg:text-8xl text-secondary-foreground tabular-nums tracking-tight">
        {prefix}
        {count.toLocaleString("pt-BR")}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mt-3 uppercase">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-32 md:py-44 px-6 md:px-10 bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.4em] text-primary mb-20"
        >
          // NÚMEROS
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Counter target={75000} prefix="+" label="Usuários impactados" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Counter target={100} suffix="%" label="Mobile-First" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
