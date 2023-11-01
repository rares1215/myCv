import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for the built files
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Allow Vite to automatically handle chunk splitting
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Specify dependencies to include in the bundle
  },
});
