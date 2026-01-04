import { 
  Recycle, 
  Warehouse, 
  ShoppingCart,
  Car,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_NUMBER = "5571999838990";

const serviceCategories = [
  {
    icon: Recycle,
    title: "Gestão e Valorização de Resíduos",
    color: "from-primary to-accent",
    items: [
      "Revitalização de resíduos",
      "Coprocessamento",
      "Descaracterização de produtos",
      "Coleta e transporte de resíduo classe 1 (perigoso)",
      "Coleta e transporte de resíduo classe 2 (não perigoso)"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços de GESTÃO E VALORIZAÇÃO DE RESÍDUOS da JR Ramos."
  },
  {
    icon: Warehouse,
    title: "Armazenagem e Distribuição",
    color: "from-accent to-primary",
    items: [
      "Sistema de controle de produtos",
      "Monitoramento da cadeia logística",
      "Transporte dedicado e fracionado",
      "Roteirização"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços de ARMAZENAGEM E DISTRIBUIÇÃO da JR Ramos."
  },
  {
    icon: ShoppingCart,
    title: "Comercialização",
    color: "from-secondary to-accent",
    items: [
      "Pallets de madeira e plástico",
      "Container 1000L (IBC)",
      "Bombonas de plástico",
      "Tambores de ferro",
      "Chapatex e Folha separadora",
      "Papelão, Kraft e Plástico",
      "Sucata metálica"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre os produtos de COMERCIALIZAÇÃO da JR Ramos."
  },
  {
    icon: Car,
    title: "Locação",
    color: "from-primary to-secondary",
    items: [
      "Automóveis",
      "Caminhões",
      "Máquinas",
      "Equipamentos"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços de LOCAÇÃO da JR Ramos."
  }
];

const Services = () => {
  const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça nossos serviços e{" "}
            <span className="text-gradient">entre em contato!</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Teremos prazer em atender sua empresa com as melhores soluções em economia circular
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative p-6 md:p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    asChild
                  >
                    <a 
                      href={getWhatsAppUrl(category.whatsappMessage)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
