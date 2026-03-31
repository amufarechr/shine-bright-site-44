const Footer = () => (
  <footer className="border-t border-border px-6 py-10 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-heading text-lg font-bold">
        <span className="text-gradient">SW</span> Ingeniería
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} SW Ingeniería. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
