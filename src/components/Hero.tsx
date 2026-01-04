import { MessageCircle, Phone, Recycle, Leaf, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "5571999838990";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da JR Ramos.";

const Hero = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated Particles/Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Recycle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Economia Circular & ESG</span>
          </div>

          {/* Main Title */}
          <h1 className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Soluções em</span>
            <br />
            <span className="text-gradient">Gestão de Resíduos</span>
            <br />
            <span className="text-foreground">para o</span>{" "}
            <span className="text-gradient-gold">Ramo Industrial</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Transformamos resíduos em oportunidades. A <strong className="text-foreground">JR Ramos</strong> oferece 
            soluções circulares personalizadas que unem inovação, eficiência operacional e impacto 
            socioambiental positivo para sua empresa.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="whatsapp" 
              size="xl"
              asChild
              className="group"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Fale com um Consultor
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              asChild
            >
              <a href="tel:+5571999838990">
                <Phone className="w-5 h-5" />
                (71) 99983-8990
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">+1 Milhão Kg</p>
                <p className="text-sm text-muted-foreground">Resíduos em Movimento</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">ESG</p>
                <p className="text-sm text-muted-foreground">Práticas Alinhadas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">Desde 2012</p>
                <p className="text-sm text-muted-foreground">No Mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
