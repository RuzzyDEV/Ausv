import { Check, Recycle, MapPin, Calendar } from "lucide-react";

const features = [
  "Gestão humanizada e compromisso com resultados reais",
  "Tecnologias aplicadas e práticas alinhadas ao ESG",
  "Amplos espaços de armazenagem estratégica",
  "Equipe especializada para atuar dentro da sua empresa",
  "Processos ágeis, seguros e rastreáveis",
  "Soluções circulares personalizadas"
];

const stats = [
  { icon: Recycle, value: "+1M Kg", label: "Resíduos em Movimento" },
  { icon: Calendar, value: "2012", label: "Ano de Fundação" },
  { icon: MapPin, value: "Brasil", label: "Atendimento Nacional" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transformando{" "}
              <span className="text-gradient">resíduos</span>{" "}
              em{" "}
              <span className="text-gradient-gold">oportunidades</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A JR Ramos nasceu em 2012 com a ousadia de transformar resíduos em oportunidades 
              e criar valor onde muitos enxergam apenas descarte.
            </p>
            <p className="text-muted-foreground mb-8">
              De um início no setor industrial, crescemos para ser referência em <strong className="text-foreground">gestão circular 
              de materiais</strong>, armazenagem estratégica e reaproveitamento inteligente. Coletamos, organizamos, 
              reformamos, higienizamos e recolocamos no mercado pallets, IBCs, tambores, metais, papelão e plásticos.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li 
                  key={feature}
                  className="flex items-center gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="service-card flex items-center gap-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
