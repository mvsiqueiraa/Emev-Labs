import { setAnalyticsConsent } from "@/lib/analytics";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccessibility } from "./AccessibilityProvider";

const STORAGE_KEY = "emev-labs-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY),
  );
  const { announce } = useAccessibility();

  useEffect(() => {
    const savedPreference = localStorage.getItem(STORAGE_KEY);

    if (savedPreference === "accepted" || savedPreference === "rejected") {
      setAnalyticsConsent(savedPreference);
    }
  }, []);

  const savePreference = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setAnalyticsConsent(value);
    setVisible(false);
    announce(
      value === "accepted"
        ? "Cookies aceitos. Preferência salva."
        : "Cookies recusados. Preferência salva.",
    );
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-[60] md:bottom-4 md:left-auto md:right-6 md:max-w-md">
      <section
        aria-label="Preferências de cookies"
        className="border border-border bg-card text-card-foreground shadow-[0_20px_80px_hsl(0,0%,0%,0.18)]"
      >
        <div className="p-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Privacidade
          </p>
          <p className="mt-3 text-sm leading-6 text-card-foreground/80">
            Usamos cookies para melhorar sua experiência e medir campanhas.
            Consulte nossa{" "}
            <Link
              to="/politica-de-privacidade"
              className="a11y-focus font-semibold text-primary hover:underline"
            >
              Política de Privacidade
            </Link>
            .
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => savePreference("rejected")}
              className="a11y-focus border border-border px-4 py-2 font-mono text-xs font-bold tracking-widest text-card-foreground transition-colors duration-300 hover:bg-secondary"
            >
              RECUSAR
            </button>
            <button
              type="button"
              onClick={() => savePreference("accepted")}
              className="a11y-focus bg-primary px-4 py-2 font-mono text-xs font-bold tracking-widest text-primary-foreground transition-opacity duration-300 hover:opacity-90"
            >
              ACEITAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookieConsent;
