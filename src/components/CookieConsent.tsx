import { useEffect, useState } from "react";
import { setAnalyticsConsent } from "@/lib/analytics";

const STORAGE_KEY = "emev-labs-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem(STORAGE_KEY);

    if (savedPreference === "accepted" || savedPreference === "rejected") {
      setAnalyticsConsent(savedPreference);
      return;
    }

    setVisible(true);
  }, []);

  const savePreference = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setAnalyticsConsent(value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-6 md:max-w-md">
      <div className="border border-border bg-card text-card-foreground shadow-[0_20px_80px_hsl(0,0%,0%,0.18)]">
        <div className="p-5">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Privacidade
          </p>
          <p className="mt-3 text-sm leading-6 text-card-foreground/80">
            Usamos cookies para melhorar sua experiência e medir campanhas.
            Consulte nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="font-semibold text-primary hover:underline"
            >
              Política de Privacidade
            </a>
            .
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => savePreference("rejected")}
              className="border border-border px-4 py-2 font-mono text-xs font-bold tracking-widest text-card-foreground transition-colors duration-300 hover:bg-secondary"
            >
              RECUSAR
            </button>
            <button
              type="button"
              onClick={() => savePreference("accepted")}
              className="bg-primary px-4 py-2 font-mono text-xs font-bold tracking-widest text-primary-foreground transition-opacity duration-300 hover:opacity-90"
            >
              ACEITAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
