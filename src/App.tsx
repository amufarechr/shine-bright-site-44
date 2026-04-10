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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/soluciones/climatizacion" element={<Climatizacion />} />
          <Route path="/soluciones/energia" element={<Energia />} />
          <Route path="/soluciones/agua" element={<Agua />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
