import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      aria-label="Navegação principal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="a11y-focus group flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Logo da Emev Labs"
            className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="hidden sm:inline font-mono text-sm font-bold tracking-[0.3em] text-foreground group-hover:text-primary transition-colors duration-300">
            EMEV LABS
          </span>
        </Link>

        <span className="hidden md:block font-mono text-xs text-muted-foreground tracking-widest">
          {time} — BRT
        </span>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/solicitacao-recebida?origem=navbar"
            data-conversion="quote-request"
            data-conversion-location="navbar"
            className="a11y-focus group flex items-center gap-2 font-mono text-xs font-bold tracking-widest bg-primary text-primary-foreground px-5 py-2.5 hover:gap-3 transition-all duration-300 hover:shadow-[0_0_40px_hsl(105,18%,40%,0.3)]"
          >
            <span className="hidden sm:inline">ORÇAMENTO</span>
            <ArrowUpRight
              size={14}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
