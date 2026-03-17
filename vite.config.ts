import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // ou "@vitejs/plugin-react" se der erro
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));