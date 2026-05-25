import { useState } from "react";
import { Accessibility, Contrast, Link2, Minus, Plus, X } from "lucide-react";
import { useAccessibility, type FontSizePreference } from "./AccessibilityProvider";

const fontOptions: FontSizePreference[] = ["default", "large", "larger", "maximum"];
const fontLabels = {
  default: "Padrão",
  large: "Grande",
  larger: "Maior",
  maximum: "200%",
};

const AccessibilityPanel = () => {
  const [open, setOpen] = useState(false);
  const { announce, preferences, setPreference } = useAccessibility();

  const setToggle = (
    key: "highContrast" | "reduceMotion" | "underlineLinks",
    label: string,
  ) => {
    const enabled = !preferences[key];
    setPreference(key, enabled);
    announce(`${label} ${enabled ? "ativado" : "desativado"}.`);
  };

  const changeFontSize = (direction: -1 | 1) => {
    const currentIndex = fontOptions.indexOf(preferences.fontSize);
    const nextIndex = Math.min(
      fontOptions.length - 1,
      Math.max(0, currentIndex + direction),
    );
    const next = fontOptions[nextIndex];
    setPreference("fontSize", next);
    announce(`Tamanho do texto: ${fontLabels[next]}.`);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[70]">
      {open && (
        <section
          id="painel-acessibilidade"
          aria-label="Preferências de acessibilidade"
          className="mb-3 w-[min(21rem,calc(100vw-2.5rem))] border border-border bg-card p-4 text-card-foreground shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="font-mono text-xs font-bold tracking-widest">
              ACESSIBILIDADE
            </h2>
            <button
              type="button"
              aria-label="Fechar painel de acessibilidade"
              className="a11y-focus flex h-9 w-9 items-center justify-center text-card-foreground"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <div className="border-b border-border pb-4">
            <p className="mb-3 text-sm font-medium">Tamanho do texto</p>
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                aria-label="Diminuir tamanho do texto"
                className="a11y-focus flex h-11 w-11 items-center justify-center border border-border"
                onClick={() => changeFontSize(-1)}
              >
                <Minus size={18} />
              </button>
              <span className="font-mono text-xs font-bold tracking-widest">
                {fontLabels[preferences.fontSize]}
              </span>
              <button
                type="button"
                aria-label="Aumentar tamanho do texto"
                className="a11y-focus flex h-11 w-11 items-center justify-center border border-border"
                onClick={() => changeFontSize(1)}
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              aria-pressed={preferences.highContrast}
              className="a11y-focus flex w-full items-center justify-between border border-border px-3 py-3 text-sm"
              onClick={() => setToggle("highContrast", "Alto contraste")}
            >
              <span className="flex items-center gap-3">
                <Contrast size={17} />
                Alto contraste
              </span>
              <span>{preferences.highContrast ? "Ativo" : "Inativo"}</span>
            </button>
            <button
              type="button"
              aria-pressed={preferences.reduceMotion}
              className="a11y-focus flex w-full items-center justify-between border border-border px-3 py-3 text-sm"
              onClick={() => setToggle("reduceMotion", "Reduzir movimento")}
            >
              <span>Reduzir movimento</span>
              <span>{preferences.reduceMotion ? "Ativo" : "Inativo"}</span>
            </button>
            <button
              type="button"
              aria-pressed={preferences.underlineLinks}
              className="a11y-focus flex w-full items-center justify-between border border-border px-3 py-3 text-sm"
              onClick={() => setToggle("underlineLinks", "Sublinhar links")}
            >
              <span className="flex items-center gap-3">
                <Link2 size={17} />
                Sublinhar links
              </span>
              <span>{preferences.underlineLinks ? "Ativo" : "Inativo"}</span>
            </button>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls="painel-acessibilidade"
        aria-label={open ? "Fechar opções de acessibilidade" : "Abrir opções de acessibilidade"}
        className="a11y-focus flex h-12 w-12 items-center justify-center bg-card text-card-foreground shadow-lg"
        onClick={() => setOpen((current) => !current)}
      >
        <Accessibility size={22} />
      </button>
    </div>
  );
};

export default AccessibilityPanel;
