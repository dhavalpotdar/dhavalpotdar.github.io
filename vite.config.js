import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Let PostCSS handle the Tailwind integration, don't configure it here
});