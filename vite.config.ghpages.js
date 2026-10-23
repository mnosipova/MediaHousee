import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Для GitHub Pages нужен base path = имя репозитория
const base = process.env.GITHUB_PAGES === 'true' ? '/MediaHousee/' : '/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
