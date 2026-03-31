import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = ["Servicios", "Nosotros", "Contacto"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="font-heading text-xl font-bold tracking-tight">
          <span className="text-gradient">SW</span>{" "}
          <span className="text-foreground">Ingeniería</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:brightness-110 transition"
          >
            Cotizar
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors text-left font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contacto")}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold w-fit"
              >
                Cotizar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
