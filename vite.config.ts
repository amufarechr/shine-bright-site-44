import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { createRequire } from "module";
import { componentTagger } from "lovable-tagger";

const _require = createRequire(import.meta.url);
const vitePrerender = _require("vite-plugin-prerender");
const { PuppeteerRenderer } = vitePrerender;

/**
 * Extrae automáticamente todas las rutas estáticas de App.tsx.
 * Excluye rutas dinámicas (:param) y el catch-all (*).
 * Así el prerenderer siempre está sincronizado con App.tsx
 * sin ningún paso manual al agregar páginas nuevas.
 */
function getRoutesFromApp(): string[] {
  const src = fs.readFileSync(
    path.resolve(__dirname, "./src/App.tsx"),
    "utf-8"
  );
  const matches = [...src.matchAll(/path="([^"*:][^"]*)"/g)];
  const routes = matches.map((m) => m[1]).filter(Boolean);
  if (!routes.includes("/")) routes.unshift("/");
  return [...new Set(routes)];
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const routes = isProd ? getRoutesFromApp() : [];

  if (isProd) {
    console.log(`\n[prerender] ${routes.length} rutas detectadas:\n`, routes.join("\n "), "\n");
  }

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: { overlay: false },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      isProd && vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        renderer: new PuppeteerRenderer({
          renderAfterDocumentEvent: "render-complete",
          renderAfterTime: 2500,
          headless: true,
          // Forzar el Chrome descargado por Puppeteer v25 (ignora el Chrome antiguo
          // bundleado en @prerenderer/renderer-puppeteer que no funciona en Vercel)
          executablePath: process.env.PUPPETEER_EXECUTABLE_PATH ||
            "/vercel/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome",
          args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
            "--no-first-run",
            "--no-zygote",
            "--single-process",
          ],
        }),
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
  };
});
