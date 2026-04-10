import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Agua = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar activePage="soluciones" />
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
        Soluciones técnicas
      </span>
      <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
        Gestión de Agua
      </h1>
      <p className="text-muted-foreground text-lg max-w-xl mb-8">
        Esta página está en construcción. Pronto encontrarás aquí toda la información
        sobre nuestros sistemas de tratamiento y gestión eficiente del agua.
      </p>
      <a
        href="/"
        className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:brightness-110 transition"
      >
        Volver al inicio
      </a>
    </div>
    <Footer />
  </div>
);

export default Agua;
