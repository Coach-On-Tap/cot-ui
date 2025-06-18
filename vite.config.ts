import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.stories.*", "**/*.test.*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "@/components": path.resolve(__dirname, "./components"),
      "@/templates": path.resolve(__dirname, "./templates"),
      "@/types": path.resolve(__dirname, "./types"),
      "@/constants": path.resolve(__dirname, "./contstants"),
      "@/public": path.resolve(__dirname, "./public"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AdminPortalComponents",
      formats: ["es", "umd"],
      fileName: (format) => `admin-portal.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
        },
      },
    },
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: "./postcss.config.mjs",
  },
});
