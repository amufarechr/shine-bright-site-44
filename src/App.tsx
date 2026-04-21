import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Consultoria from "./pages/Consultoria.tsx";
import NotFound from "./pages/NotFound.tsx";
import Climatizacion from "./pages/Climatizacion.tsx";
import Energia from "./pages/Energia.tsx";
import Agua from "./pages/Agua.tsx";
import Evaporativo from "./pages/Evaporativo.tsx";
import ArticuloEnfriamientoEvaporativo from "./pages/ArticuloEnfriamientoEvaporativo.tsx";
import Articulos from "./pages/Articulos.tsx";
import ArticuloAgroindustria from "./pages/ArticuloAgroindustria.tsx";
import ArticuloAlmacenes from "./pages/ArticuloAlmacenes.tsx";
import Casos from "./pages/Casos.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/soluciones/climatizacion" element={<Climatizacion />} />
          <Route path="/soluciones/climatizacion/evaporativo" element={<Evaporativo />} />
          <Route path="/soluciones/energia" element={<Energia />} />
          <Route path="/soluciones/agua" element={<Agua />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/articulos/enfriamiento-evaporativo" element={<ArticuloEnfriamientoEvaporativo />} />
          <Route path="/articulos/enfriamiento-evaporativo-agroindustria" element={<ArticuloAgroindustria />} />
          <Route path="/articulos/enfriamiento-evaporativo-almacenes" element={<ArticuloAlmacenes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
