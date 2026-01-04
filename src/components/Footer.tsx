import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const WHATSAPP_NUMBER = "5571999838990";

const Footer = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1.5 flex items-center justify-center border border-primary/30">
                <img 
                  src={logoIcon} 
                  alt="JR Ramos" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">
                  <span className="text-accent">JR</span>
                  <span className="text-foreground"> Ramos</span>
                </h3>
                <p className="text-sm text-muted-foreground">Economia Circular</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos resíduos em oportunidades desde 2012. Soluções circulares 
              personalizadas que unem inovação, eficiência e impacto socioambiental positivo.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/jr_ramos_ltda_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-whatsapp/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+5571999838990" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (71) 99983-8990
                </a>
              </li>
              <li>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:comercial@jrramos.com.br" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  comercial@jrramos.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Localização</h4>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm">
                Polo Empresarial Governador César Borges<br />
                Av. José Agostinho Paiva, 251<br />
                Santa Terezinha, Dias d'Ávila - BA<br />
                CEP: 42850-000
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} JR Ramos. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <Link to="/orcamento" className="text-muted-foreground hover:text-foreground transition-colors">
              Orçamento
            </Link>
            <Link to="/politica-de-gestao" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Gestão
            </Link>
            <Link to="/codigo-de-conduta" className="text-muted-foreground hover:text-foreground transition-colors">
              Código de Conduta
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
