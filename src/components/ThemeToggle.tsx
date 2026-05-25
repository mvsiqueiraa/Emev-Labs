import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="a11y-focus relative w-14 h-8 flex items-center bg-secondary-foreground rounded-full p-1 transition-colors duration-300"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
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
