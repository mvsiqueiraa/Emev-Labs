import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAccessibility } from "./AccessibilityProvider";

const pageLabels: Record<string, string> = {
  "/": "Página inicial",
  "/politica-de-privacidade": "Política de Privacidade",
  "/solicitacao-recebida": "Solicitação recebida",
  "/termos-de-uso": "Termos de Uso",
};

const RouteAccessibility = () => {
  const { pathname } = useLocation();
  const { announce } = useAccessibility();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const main = document.getElementById("conteudo-principal");
    main?.focus();
    announce(`${pageLabels[pathname] ?? "Página"} carregada.`);
  }, [announce, pathname]);

  return null;
};

export default RouteAccessibility;
