type ConsentValue = "accepted" | "rejected";

const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;
const GOOGLE_ADS_CONVERSION_LABEL = import.meta.env
  .VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __emevWhatsAppTracking?: boolean;
  }
}

const ensureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
};

const applyConsent = (value: ConsentValue) => {
  ensureDataLayer();

  const granted = value === "accepted" ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    ad_personalization: granted,
    ad_storage: granted,
    ad_user_data: granted,
    analytics_storage: granted,
  });

  window.dataLayer?.push({
    event: "cookie_consent_update",
    cookie_consent: value,
  });
};

export const initializeAnalyticsConsent = () => {
  if (typeof window === "undefined") {
    return;
  }

  ensureDataLayer();

  window.gtag?.("consent", "default", {
    ad_personalization: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
};

export const setAnalyticsConsent = (value: ConsentValue) => {
  if (typeof window === "undefined") {
    return;
  }

  applyConsent(value);
};

export const trackWhatsAppLead = (location?: string, href?: string) => {
  if (typeof window === "undefined") {
    return;
  }

  ensureDataLayer();

  window.dataLayer?.push({
    event: "whatsapp_lead",
    conversion_location: location,
    link_url: href,
  });

  window.gtag?.("event", "whatsapp_lead", {
    conversion_location: location,
    link_url: href,
  });

  if (GOOGLE_ADS_ID && GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      event_category: "lead",
      event_label: location,
    });
  }
};

export const trackQuoteRequest = (location?: string, href?: string) => {
  if (typeof window === "undefined") {
    return;
  }

  ensureDataLayer();

  window.dataLayer?.push({
    event: "quote_request",
    conversion_location: location,
    link_url: href,
  });

  window.gtag?.("event", "quote_request", {
    conversion_location: location,
    link_url: href,
  });
};

export const attachWhatsAppLeadTracking = () => {
  if (typeof window === "undefined" || window.__emevWhatsAppTracking) {
    return;
  }

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const leadLink = target.closest<HTMLAnchorElement>(
      'a[data-conversion="whatsapp-lead"]',
    );

    if (leadLink) {
      trackWhatsAppLead(
        leadLink.dataset.conversionLocation,
        leadLink.href,
      );
      return;
    }

    const quoteLink = target.closest<HTMLAnchorElement>(
      'a[data-conversion="quote-request"]',
    );

    if (!quoteLink) {
      return;
    }

    trackQuoteRequest(
      quoteLink.dataset.conversionLocation,
      quoteLink.href,
    );
  });

  window.__emevWhatsAppTracking = true;
};
