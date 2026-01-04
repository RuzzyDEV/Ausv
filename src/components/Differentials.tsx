import { Target, Eye, Heart, Sparkles, Shield, Zap, Users, Leaf } from "lucide-react";

const values = [
  { icon: Heart, title: "Gestão Humanizada", description: "A essência da nossa liderança e cultura" },
  { icon: Sparkles, title: "Circularidade e Inovação", description: "Transformar resíduos em valor com inteligência" },
  { icon: Shield, title: "Ética e Transparência", description: "Base de todas as nossas relações" },
  { icon: Zap, title: "Eficiência Inteligente", description: "Rapidez, qualidade e adaptabilidade" },
  { icon: Leaf, title: "Sustentabilidade e ESG", description: "Compromisso com o planeta e pessoas" },
  { icon: Users, title: "Colaboração", description: "Trabalhamos juntos como donos" },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="service-card">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transformar a gestão de resíduos em estratégia de valor, oferecendo soluções circulares 
              personalizadas que unem inovação, eficiência operacional e impacto socioambiental positivo. 
              Garantir aos clientes conformidade, segurança e credibilidade.
            </p>
          </div>

          <div className="service-card">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Redefinir a forma como o Brasil enxerga e pratica a economia circular. Até 2030, consolidar 
              a JR Ramos como a principal referência nacional em soluções circulares inteligentes, 
              inspirando empresas a transformar resíduos em ativos estratégicos.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Nossos Valores
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            O que nos <span className="text-gradient">move</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="service-card text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 mx-auto">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
