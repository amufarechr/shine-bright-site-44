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
import CalefaccionPage from "./components/calefaccion/CalefaccionPage.tsx";
import VentilacionPage from "./components/ventilacion/VentilacionPage.tsx";
import ArticuloEnfriamientoEvaporativo from "./pages/ArticuloEnfriamientoEvaporativo.tsx";
import Articulos from "./pages/Articulos.tsx";
import ArticuloAgroindustria from "./pages/ArticuloAgroindustria.tsx";
import ArticuloAlmacenes from "./pages/ArticuloAlmacenes.tsx";
import ArticuloOsmosis from "./pages/ArticuloOsmosis.tsx";
import ArticuloAguaSinRed from "./pages/ArticuloAguaSinRed.tsx";
import ArticuloFacturaElectrica from "./pages/ArticuloFacturaElectrica.tsx";
import ArticuloMonitoreoEnergetico from "./pages/ArticuloMonitoreoEnergetico.tsx";
import ArticuloSolarIndustrial from "./pages/ArticuloSolarIndustrial.tsx";
import ArticulosClimatizacion from "./pages/ArticulosClimatizacion.tsx";
import ArticulosEnergia from "./pages/ArticulosEnergia.tsx";
import ArticulosAgua from "./pages/ArticulosAgua.tsx";
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
          <Route path="/soluciones/climatizacion/calefaccion" element={<CalefaccionPage />} />
          <Route path="/soluciones/climatizacion/ventilacion" element={<VentilacionPage />} />
          <Route path="/soluciones/energia" element={<Energia />} />
          <Route path="/soluciones/agua" element={<Agua />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/articulos/climatizacion" element={<ArticulosClimatizacion />} />
          <Route path="/articulos/energia" element={<ArticulosEnergia />} />
          <Route path="/articulos/agua" element={<ArticulosAgua />} />
          <Route path="/articulos/enfriamiento-evaporativo" element={<ArticuloEnfriamientoEvaporativo />} />
          <Route path="/articulos/enfriamiento-evaporativo-agroindustria" element={<ArticuloAgroindustria />} />
          <Route path="/articulos/enfriamiento-evaporativo-almacenes" element={<ArticuloAlmacenes />} />
          <Route path="/articulos/osmosis-inversa" element={<ArticuloOsmosis />} />
          <Route path="/articulos/agua-sin-red-hidrica" element={<ArticuloAguaSinRed />} />
          <Route path="/articulos/reducir-factura-electrica-industrial" element={<ArticuloFacturaElectrica />} />
          <Route path="/articulos/monitoreo-energetico-industrial" element={<ArticuloMonitoreoEnergetico />} />
          <Route path="/articulos/energia-solar-industrial" element={<ArticuloSolarIndustrial />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

