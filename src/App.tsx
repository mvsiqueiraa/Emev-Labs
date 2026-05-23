import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import CookieConsent from "./components/CookieConsent";
import {
  attachWhatsAppLeadTracking,
  initializeAnalyticsConsent,
} from "./lib/analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RequestReceived from "./pages/RequestReceived";
import TermsOfUse from "./pages/TermsOfUse";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initializeAnalyticsConsent();
    attachWhatsAppLeadTracking();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/solicitacao-recebida" element={<RequestReceived />} />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
