type ConsentValue = "accepted" | "rejected";

const GTM_ID = import.meta.env.VITE_GTM_ID;
const GOOGLE_TAG_ID = import.meta.env.VITE_GOOGLE_TAG_ID;
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;
const GOOGLE_ADS_CONVERSION_LABEL = import.meta.env
  .VITE_GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __emevAnalyticsLoaded?: boolean;
    __emevWhatsAppTracking?: boolean;
  }
}

const hasDirectGoogleTag = Boolean(
  GOOGLE_TAG_ID || GA_MEASUREMENT_ID || GOOGLE_ADS_ID,
);
const hasGoogleConfig = Boolean(GTM_ID || hasDirectGoogleTag);

const ensureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };
};

const appendScript = (id: string, src: string) => {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
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

const loadGoogleTagManager = () => {
  if (!GTM_ID) {
    return;
  }

  window.dataLayer?.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  appendScript(
    "emev-google-tag-manager",
    `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
  );
};

const loadDirectGoogleTags = () => {
  if (!hasDirectGoogleTag) {
    return;
  }

  const primaryTagId = GOOGLE_TAG_ID || GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  appendScript(
    "emev-google-tag",
    `https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`,
  );

  window.gtag?.("js", new Date());

  if (GOOGLE_TAG_ID) {
    window.gtag?.("config", GOOGLE_TAG_ID);
    return;
  }

  if (GA_MEASUREMENT_ID) {
    window.gtag?.("config", GA_MEASUREMENT_ID);
  }

  if (GOOGLE_ADS_ID) {
    window.gtag?.("config", GOOGLE_ADS_ID);
  }
};

export const initializeAnalyticsConsent = () => {
  if (!hasGoogleConfig || typeof window === "undefined") {
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
  if (!hasGoogleConfig || typeof window === "undefined") {
    return;
  }

  applyConsent(value);

  if (value === "accepted" && !window.__emevAnalyticsLoaded) {
    loadGoogleTagManager();
    loadDirectGoogleTags();
    window.__emevAnalyticsLoaded = true;
  }
};

export const trackWhatsAppLead = (location?: string, href?: string) => {
  if (!hasGoogleConfig || typeof window === "undefined") {
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

export const attachWhatsAppLeadTracking = () => {
  if (typeof window === "undefined" || window.__emevWhatsAppTracking) {
    return;
  }

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest<HTMLAnchorElement>(
      'a[data-conversion="whatsapp-lead"]',
    );

    if (!link) {
      return;
    }

    trackWhatsAppLead(
      link.dataset.conversionLocation,
      link.href,
    );
  });

  window.__emevWhatsAppTracking = true;
};
