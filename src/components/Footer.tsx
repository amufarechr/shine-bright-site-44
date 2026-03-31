import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border px-6 py-10 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="SW Ingeniería" className="h-10" />
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} SW Ingeniería. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
