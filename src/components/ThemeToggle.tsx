import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 flex items-center bg-secondary-foreground rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 bg-background rounded-full shadow-sm transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-primary" />
        ) : (
          <Sun size={14} className="text-primary" />
        )}
      </div>
    </button>
  );
}
