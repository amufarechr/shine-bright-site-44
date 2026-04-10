import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const solucionesItems = [
  { label: "Climatización Industrial", href: "/soluciones/climatizacion" },
  { label: "Gestión Energética", href: "/soluciones/energia" },
  { label: "Gestión de Agua", href: "/soluciones/agua" },
];

const navItems = [
  { label: "Consultoría", id: "consultoria", href: "/consultoria" },
  { label: "Sectores", id: "sectores" },
  { label: "Casos de éxito", id: "casos" },
  { label: "Contacto", id: "contacto" },
];

interface NavbarProps {
  activePage?: "home" | "soluciones" | "consultoria";
}

const Navbar = ({ activePage }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item: { id: string; href?: string }) => {
    setOpen(false);
    // If item has a dedicated route (like Consultoría), navigate there
    if (item.href) {
      navigate(item.href);
      return;
    }
    // If on home, scroll to section
    if (isHome) {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home with hash
      navigate(`/#${item.id}`);
    }
  };

  const navBg = scrolled
    ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
    : "bg-transparent border-b border-transparent";

  const textColor = scrolled ? "text-foreground" : "text-white";
  const mutedTextColor = scrolled ? "text-muted-foreground" : "text-white/70";
  const activeColor = "text-primary font-semibold";

  const isSolucionesActive = activePage === "soluciones";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => { navigate("/"); setOpen(false); }} className="flex items-center gap-2">
          <img src={logo} alt="SW Ingeniería" className="h-[120px]" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Soluciones dropdown */}
          <div className="relative group">
            <button
              className={`text-sm transition-colors font-medium flex items-center gap-1 ${
                isSolucionesActive ? activeColor : `${mutedTextColor} hover:text-primary`
              }`}
            >
              Soluciones técnicas <span className="text-[9px] opacity-60">▾</span>
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block pt-2 z-50">
            <div className="bg-white border border-gray-200 rounded-xl p-1.5 min-w-[210px] shadow-lg">
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

          {/* Other nav items */}
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-sm transition-colors font-medium ${
                  isActive ? activeColor : `${mutedTextColor} hover:text-primary`
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick({ id: "contacto" })}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition glow-box"
          >
            Solicita diagnóstico gratuito
          </button>
        </div>

        {/* Mobile toggle */}
        <button className={`md:hidden ${textColor}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {/* Soluciones section */}
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Soluciones técnicas</p>
              {solucionesItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => { navigate(item.href); setOpen(false); }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left font-medium pl-3"
                >
                  {item.label}
                </button>
              ))}

              {/* Other items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-left font-medium transition-colors ${
                    activePage === item.id ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick({ id: "contacto" })}
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
