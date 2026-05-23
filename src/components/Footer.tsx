import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Logo size={24} />

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#como-funciona" className="hover:text-foreground transition-colors">
              Cómo funciona
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
            <a
              href="https://crm.usegrowthcore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              CRM
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GrowthCore · Hecho con IA 🇨🇱
          </p>
        </div>
      </div>
    </footer>
  );
}
