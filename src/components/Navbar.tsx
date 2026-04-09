import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Soluciones", id: "soluciones" },
  { label: "Consultoría", id: "consultoria" },
  { label: "Sectores", id: "sectores" },
  { label: "Casos de éxito", id: "casos" },
  { label: "Contacto", id: "contacto" },
];

const solucionesItems = [
  { label: "Climatización Industrial", href: "/soluciones/climatizacion" },
  { label: "Gestión Energética", href: "/soluciones/energia" },
  { label: "Gestión de Agua", href: "/soluciones/agua" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navBg = scrolled
    ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
    : "bg-transparent border-b border-transparent";

  const textColor = scrolled ? "text-foreground" : "text-white";
  const mutedTextColor = scrolled ? "text-muted-foreground" : "text-white/70";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={logo} alt="SW Ingeniería" className="h-[120px]" />
        </button>

        <div className="hidden lg:flex items-center gap-8">
  {/* Soluciones — dropdown */}
  <div className="relative group">
    <button className={`text-sm ${mutedTextColor} hover:text-primary transition-colors font-medium flex items-center gap-1`}>
      Soluciones <span className="text-[9px] opacity-60">▾</span>
    </button>
    <div className="absolute top-[calc(100%+12px)] left-0 hidden group-hover:block bg-white border border-gray-200 rounded-xl p-1.5 min-w-[210px] shadow-lg z-50">
      {solucionesItems.map((item) => (
        <button
          key={item.href}
          onClick={() => { navigate(item.href); setOpen(false); }}
          className="block w-full text-left px-3.5 py-2.5 text-[13px] font-medium text-gray-800 rounded-lg whitespace-nowrap hover:bg-gray-100 hover:text-primary transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>

  {/* Resto de navItems (sin Soluciones) */}
  {navItems.filter(item => item.id !== "soluciones").map((item) => (
    <button
      key={item.id}
      onClick={() => scrollTo(item.id)}
      className={`text-sm ${mutedTextColor} hover:text-primary transition-colors font-medium`}
    >
      {item.label}
    </button>
  ))}

  <button
    onClick={() => scrollTo("contacto")}
    className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition glow-box"
  >
    Solicita diagnóstico gratuito
  </button>
</div>

        <button className={`lg:hidden ${textColor}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
            {/* Soluciones expandido en mobile */}
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Soluciones</p>
              {solucionesItems.map((item) => (
              <button
                key={item.href}
                onClick={() => { navigate(item.href); setOpen(false); }}
                className="text-muted-foreground hover:text-primary transition-colors text-left font-medium pl-3"
                >
                {item.label}
                </button>
            ))}

            {/* Resto de items (sin Soluciones) */}
            {navItems.filter(item => item.id !== "soluciones").map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors text-left font-medium"
              >
                {item.label}
              </button>
            ))}

          <button
              onClick={() => scrollTo("contacto")}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold w-fit glow-box"
            >
              Solicita diagnóstico gratuito
            </button>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
