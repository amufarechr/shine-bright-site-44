import { useNavigate } from "react-router-dom";
import evapImg from "../../assets/climatizacion/evaporativo.jpg";
import fanImg from "../../assets/climatizacion/ventilacion.jpg";
import heatImg from "../../assets/climatizacion/calefaccion.jpg";
import ctrlImg from "../../assets/climatizacion/control.jpg";
import logoBigAssFans from "../../assets/marcas/bigassfans.jpeg";
import logoPortacool from "../../assets/marcas/portacool.svg";
import logoBiocool from "../../assets/marcas/biocool.jpeg";
import logoSrp from "../../assets/marcas/srp.jpeg";

const marcas = [
  { nombre: "Big Ass Fans", logo: logoBigAssFans, url: "https://www.bigassfans.com", bg: "bg-white" },
  { nombre: "Portacool", logo: logoPortacool, url: "https://www.portacool.com", bg: "bg-white" },
  { nombre: "BioCool", logo: logoBiocool, url: "https://biocool.info/", bg: "bg-[#4a4a4a]" },
  { nombre: "SRP", logo: logoSrp, url: "https://www.superiorradiant.com/", bg: "bg-white" },
];

interface Solucion {
  title: string;
  description: string;
  brand?: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
  href?: string;
}

const soluciones: Solucion[] = [
  {
    title: "Enfriamiento evaporativo",
    description: "Control térmico eficiente para grandes volúmenes industriales.",
    brand:
      "Representantes y distribuidores exclusivos de Big Ass Fans, PortaCool, BioCool y otras marcas líderes globales.",
    imageSrc: evapImg,
    imageAlt: "Enfriamiento evaporativo en planta industrial",
    imageLeft: true,
    href: "/soluciones/climatizacion/evaporativo",
  },
  {
    title: "Ventilación industrial de gran volumen",
    description: "Distribución de aire para estabilidad operativa en planta.",
    brand: "Representantes exclusivos de los ventiladores industriales Big Ass Fans.",
    imageSrc: fanImg,
    imageAlt: "Ventiladores industriales de techo en nave industrial",
    imageLeft: false,
  },
  {
    title: "Sistemas de calefacción radiante y eléctrica",
    description: "Calefacción eficiente en ambientes industriales, agrícolas y comerciales.",
    brand:
      "Distribuidores regionales de sistemas de calefacción industrial Superior Radiant Products (SRP) y Big Ass Fans.",
    imageSrc: heatImg,
    imageAlt: "Sistemas de calefacción radiante infrarroja en nave industrial",
    imageLeft: true,
    href: "/soluciones/climatizacion/calefaccion",
  },
  {
    title: "Control ambiental y automatización",
    description: "Ajuste dinámico según condiciones reales de operación en planta.",
    imageSrc: ctrlImg,
    imageAlt: "Panel de control ambiental industrial",
    imageLeft: false,
  },
];

interface SolucionesSectionProps {}

export default function SolucionesSection({}: SolucionesSectionProps) {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f7f7f4] py-20">
      {/* Header */}
      <div className="text-center px-16 mb-14">
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3.5">
          Soluciones
        </p>
        <h2 className="text-[32px] font-bold leading-[1.2] text-gray-900">
          Tecnologías que implementamos
        </h2>
      </div>

      {/* Cards al 75%, centradas */}
      <div className="flex flex-col gap-5 items-center px-16">
        {soluciones.map((sol) => (
          <div
            key={sol.title}
            className="w-3/4 grid grid-cols-2 rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            style={{ direction: sol.imageLeft ? "ltr" : "rtl" }}
          >
            {/* Imagen — clickeable si hay href */}
            <div
              className={`relative min-h-[280px] overflow-hidden group${sol.href ? " cursor-pointer" : ""}`}
              style={{ direction: "ltr" }}
              onClick={() => sol.href && navigate(sol.href)}
            >
              <img
                src={sol.imageSrc}
                alt={sol.imageAlt}
                className={`w-full h-full object-cover absolute inset-0 transition-transform duration-500${sol.href ? " group-hover:scale-105" : ""}`}
              />
            </div>

            {/* Texto */}
            <div
              className="bg-white flex flex-col justify-center px-12 py-11"
              style={{ direction: "ltr" }}
            >
              <h3
                className={`text-[28px] font-bold text-gray-900 leading-[1.2] mb-4${sol.href ? " cursor-pointer hover:text-primary transition-colors" : ""}`}
                onClick={() => sol.href && navigate(sol.href)}
              >
                {sol.title}
              </h3>
              <p className="text-base leading-[1.7] text-gray-500">{sol.description}</p>
              {sol.brand && (
                <p className="text-[13px] leading-relaxed text-[#2ebd6b] font-medium mt-3.5 pt-3.5 border-t border-gray-200">
                  {sol.brand}
                </p>
              )}
              {sol.href && (
                <button
                  onClick={() => navigate(sol.href!)}
                  className="mt-4 text-primary text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver más sobre esta tecnología →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Marcas estratégicas */}
      <div className="text-center mt-20 px-16">
        <p className="text-lg font-semibold text-gray-700 mb-8">
          Somos distribuidores estratégicos de reconocidas marcas de climatización industrial
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {marcas.map((marca) => (
            <a
              key={marca.nombre}
              href={marca.url}
              target="_blank"
              rel="noopener noreferrer"
              title={marca.nombre}
              className={`${marca.bg} rounded-lg px-5 py-3 flex items-center justify-center h-16 w-36 hover:opacity-80 transition-opacity duration-200 border border-border`}
            >
              <img
                src={marca.logo}
                alt={marca.nombre}
                className="max-h-10 max-w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
