import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/myCv/", // Set the base URL for your website
  build: {
    outDir: "dist", // Output directory for the built files
    assetsInlineLimit: 0,
  },
});
