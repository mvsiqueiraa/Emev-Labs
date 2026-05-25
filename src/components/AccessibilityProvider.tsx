import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";

type FontSizePreference = "default" | "large" | "larger" | "maximum";

type AccessibilityPreferences = {
  fontSize: FontSizePreference;
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
};

type AccessibilityContextValue = {
  announce: (message: string) => void;
  prefersReducedMotion: boolean;
  preferences: AccessibilityPreferences;
  setPreference: <K extends keyof AccessibilityPreferences>(
    key: K,
    value: AccessibilityPreferences[K],
  ) => void;
};

const STORAGE_KEY = "emev-labs-accessibility";

const defaultPreferences: AccessibilityPreferences = {
  fontSize: "default",
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const readPreferences = () => {
  if (typeof window === "undefined") {
    return defaultPreferences;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultPreferences;
  }

  try {
    return { ...defaultPreferences, ...JSON.parse(saved) };
  } catch {
    return defaultPreferences;
  }
};

const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(readPreferences);
  const [announcement, setAnnouncement] = useState("");
  const systemReducedMotion = useReducedMotion();
  const prefersReducedMotion = Boolean(systemReducedMotion || preferences.reduceMotion);
  const announce = useCallback((message: string) => {
    setAnnouncement("");
    window.setTimeout(() => setAnnouncement(message), 10);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.a11yFont = preferences.fontSize;
    root.dataset.a11yContrast = String(preferences.highContrast);
    root.dataset.a11yLinks = String(preferences.underlineLinks);
    root.dataset.a11yMotion = prefersReducedMotion ? "reduce" : "full";
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences, prefersReducedMotion]);

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      announce,
      prefersReducedMotion,
      preferences,
      setPreference: (key, value) => {
        setPreferences((current) => ({ ...current, [key]: value }));
      },
    }),
    [announce, preferences, prefersReducedMotion],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
        {children}
      </MotionConfig>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </AccessibilityContext.Provider>
  );
};

const useAccessibility = () => {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }

  return context;
};

export default AccessibilityProvider;
// The provider and its consumer hook intentionally share the same context module.
// eslint-disable-next-line react-refresh/only-export-components
export { useAccessibility, type FontSizePreference };
