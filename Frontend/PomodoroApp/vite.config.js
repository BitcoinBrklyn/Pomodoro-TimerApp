import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Set the base path to './' to prevent adding a leading slash
  plugins: [react()],
});
