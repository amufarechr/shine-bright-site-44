import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics";

inject();

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Notifica al prerenderer (vite-plugin-prerender) que React terminó de montar.
// En producción normal esto es un no-op; solo lo usa el headless browser del build.
if (typeof document !== "undefined") {
  // Usamos requestAnimationFrame para esperar al primer paint real
  requestAnimationFrame(() => {
    document.dispatchEvent(new Event("render-complete"));
  });
}
