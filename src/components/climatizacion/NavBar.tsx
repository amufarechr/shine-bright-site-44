import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.svg";

interface NavBarProps {
  activeSection?: "soluciones" | "consultoria" | "sectores" | "casos" | "contacto";
}

const soluciones = [
  { label: "Climatización Industrial", href: "/soluciones/climatizacion" },
  { label: "Gestión Energética", href: "/soluciones/energia" },
  { label: "Gestión de Agua", href: "/soluciones/agua" },
];

const links = [
  { label: "Soluciones", key: "soluciones", href: "/soluciones", dropdown: soluciones },
  { label: "Consultoría", key: "consultoria", href: "/consultoria" },
  { label: "Sectores", key: "sectores", href: "/sectores" },
  { label: "Casos de éxito", key: "casos", href: "/casos" },
  { label: "Contacto", key: "contacto", href: "/contacto" },
];

export default function NavBar({ activeSection }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center px-10 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-sm shadow-[0_1px_0_#e5e7eb] h-[72px]"
          : "bg-transparent h-[88px]"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center flex-shrink-0 mr-16 cursor-pointer">
        <img
          src={logoImg}
          alt="SW Ingeniería"
          className={`w-auto object-contain transition-all duration-300 ${
            scrolled ? "h-[52px]" : "h-[64px]"
          }`}
        />
      </a>

      {/* Links */}
      <div className="flex items-center flex-1 gap-0">
        {links.map((link) => {
          const isActive = activeSection === link.key;
          const isOpen = openDropdown === link.key;

          return (
            <div
              key={link.key}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm rounded-md whitespace-nowrap transition-colors duration-200 font-medium ${
                  scrolled
                    ? isActive
                      ? "text-[#2ebd6b] font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                    : isActive
                    ? "text-white font-semibold"
                    : "text-white/88 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {link.dropdown && (
                  <span
                    className={`text-[9px] opacity-65 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-[-4px] left-4 right-4 h-[2px] bg-[#2ebd6b] rounded-full" />
                )}
              </a>

              {/* Dropdown */}
              {link.dropdown && isOpen && (
                <div className="absolute top-[calc(100%+12px)] left-0 bg-white border border-gray-200 rounded-xl p-1.5 min-w-[210px] z-50 shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3.5 py-2.5 text-[13px] font-medium text-gray-800 rounded-lg whitespace-nowrap hover:bg-gray-100 hover:text-[#2ebd6b] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button className="flex-shrink-0 px-5 py-2.5 bg-[#2ebd6b] hover:bg-[#1a9e54] text-white text-sm font-semibold rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer border-none">
        Solicita diagnóstico gratuito
      </button>
    </nav>
  );
}
