import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-foco.svg";

const footerLinks = [
  { label: "Soluciones técnicas", id: "soluciones" },
  { label: "Consultoría", id: "consultoria" },
  { label: "Casos de éxito", id: "casos" },
  { label: "Contacto", id: "contacto" },
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="dark-banner px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex flex-col items-center">
            <img src={logo} alt="SW Ingeniería" className="h-16 mb-3" />
            <p className="text-white/60 text-sm leading-snug text-center max-w-[200px]">
              Soluciones integrales en eficiencia operativa para la industria.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">Navegación</h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/60 text-sm hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">Contacto</h4>
          <div className="space-y-3">
            {[
              { icon: Mail, text: "aplicaciones@swingenieria.com", href: "mailto:aplicaciones@swingenieria.com" },
              { icon: Phone, text: "+51 922330784", href: "https://wa.me/51922330784?text=Hola%2C%20visit%C3%A9%20swingenieria.com%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20soluciones." },
              { icon: MapPin, text: "Oficina Central: Calle Alcanfores 1245 Miraflores, Lima, Perú", href: undefined },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="text-primary shrink-0" size={16} />
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="text-white/60 text-sm hover:text-primary transition-colors">{item.text}</a>
                ) : (
                  <span className="text-white/60 text-sm">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6">
        <p className="text-white/40 text-xs text-center">
          © {new Date().getFullYear()} SW Ingeniería. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
