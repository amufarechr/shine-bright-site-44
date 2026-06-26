import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-foco.svg";
import { empresa } from "@/data/siteData";
import { useNavigate, useLocation } from "react-router-dom";

// href = ruta propia con landing | anchor = sección del Home (sin landing)
const footerLinks: { label: string; href?: string; anchor?: string }[] = [
  { label: "Soluciones técnicas", anchor: "soluciones" },
  { label: "Consultoría",         href: "/consultoria" },
  { label: "Casos de éxito",      href: "/casos" },
  { label: "Contacto",            anchor: "contacto" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLink = (link: typeof footerLinks[number]) => {
    if (link.href) {
      navigate(link.href);
      return;
    }
    if (link.anchor) {
      if (location.pathname === "/") {
        // Ya estamos en el Home: scroll directo
        document.getElementById(link.anchor)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navegamos al Home y dejamos que el hash haga el scroll
        navigate(`/#${link.anchor}`);
      }
    }
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
                key={link.label}
                onClick={() => handleLink(link)}
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
              { icon: Phone, text: empresa.telefono, href: empresa.whatsappHref },
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
            <div className="flex items-start gap-3">
              <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5">
                  <span className="text-sm leading-none mt-px">🇵🇪</span>
                  <span className="text-white/60 text-sm">{empresa.direccionPeru}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-sm leading-none mt-px">🇲🇽</span>
                  <span className="text-white/60 text-sm">{empresa.direccionMexico}</span>
                </div>
              </div>
            </div>
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
