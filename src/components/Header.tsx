import { Phone, Menu, MapPin, Wrench, Info, MessageCircle, X, FileText, Shield, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Serviços", href: "#servicos", icon: Wrench },
    { label: "Sobre", href: "#sobre", icon: Info },
    { label: "Diferenciais", href: "#diferenciais", icon: MessageCircle },
    { label: "Localização", href: "#localizacao", icon: MapPin },
  ];

  const pageLinks = [
    { label: "Orçamento", to: "/orcamento", icon: FileText },
    { label: "Política de Gestão", to: "/politica-de-gestao", icon: Shield },
    { label: "Código de Conduta", to: "/codigo-de-conduta", icon: BookOpen },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1 flex items-center justify-center border border-primary/30">
              <img 
                src={logoIcon} 
                alt="JR Ramos" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className="font-display font-bold text-base sm:text-lg md:text-xl">
                <span className="text-accent">JR</span>
                <span className="text-foreground"> Ramos</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5">Economia Circular</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <a href="tel:+5571999838990" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(71) 99983-8990</span>
            </a>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu de navegação"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleMenuItemClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleMenuItemClick}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Contato</span>
              </a>
              
              {/* Separator */}
              <div className="border-t border-border my-2" />
              <p className="px-4 py-2 text-xs text-muted-foreground font-medium uppercase tracking-wide">Páginas</p>
              
              {pageLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={handleMenuItemClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
              
              <a
                href="tel:+5571999838990"
                onClick={handleMenuItemClick}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted/50 transition-colors border-t border-border mt-2 pt-4"
              >
                <Phone className="w-5 h-5 text-whatsapp" />
                <span className="font-medium">(71) 99983-8990</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
