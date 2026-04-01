import { useState } from "react";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <img src={logo} alt="SW Ingeniería" className="h-10" />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
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

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
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
