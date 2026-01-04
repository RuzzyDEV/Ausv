import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "5571999838990";
const WHATSAPP_MESSAGE = "Olá! Gostaria de falar com um consultor da JR Ramos.";

const CTA = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/20 border border-whatsapp/30 mb-6">
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
            <span className="text-sm font-medium text-whatsapp">Atendemos todo o Brasil</span>
          </span>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto para transformar{" "}
            <span className="text-gradient-gold">resíduos em valor</span>?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Nossos analistas comerciais estão prontos para ajudar sua empresa com as melhores 
            soluções em gestão de resíduos e economia circular.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="xl"
              asChild
              className="w-full sm:w-auto group"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar com Consultor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="tel:+5571999838990">
                <Phone className="w-5 h-5" />
                (71) 99983-8990
              </a>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-muted-foreground text-sm mt-8">
            ✓ Atendimento personalizado &nbsp;•&nbsp; ✓ Soluções sob medida &nbsp;•&nbsp; ✓ Conformidade garantida
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
