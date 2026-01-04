import { ArrowLeft, Shield, Target, Users, Leaf, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaGestao = () => {
  const principios = [
    {
      icon: Shield,
      title: "Qualidade",
      description: "Garantir a excelência em todos os processos, desde a coleta até a entrega dos produtos recondicionados.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Promover práticas ambientalmente responsáveis, reduzindo o impacto ambiental e incentivando a economia circular.",
    },
    {
      icon: Users,
      title: "Segurança",
      description: "Assegurar um ambiente de trabalho seguro e saudável para todos os colaboradores e parceiros.",
    },
    {
      icon: Target,
      title: "Melhoria Contínua",
      description: "Buscar constantemente a evolução dos processos, produtos e serviços oferecidos.",
    },
    {
      icon: Award,
      title: "Conformidade Legal",
      description: "Cumprir todas as leis, normas e regulamentos aplicáveis às nossas atividades.",
    },
  ];

  const compromissos = [
    "Atender às necessidades e expectativas dos clientes com produtos de qualidade",
    "Prevenir a poluição e reduzir os impactos ambientais das operações",
    "Promover a saúde e segurança ocupacional de todos os colaboradores",
    "Capacitar e desenvolver continuamente nossa equipe",
    "Manter relacionamento ético e transparente com todas as partes interessadas",
    "Contribuir para o desenvolvimento sustentável da comunidade local",
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Política de <span className="text-accent">Gestão</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Conheça os princípios e valores que orientam nossas operações e nosso compromisso com a qualidade, 
            segurança e sustentabilidade.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20 mb-12">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-muted-foreground leading-relaxed">
              A JR Ramos está comprometida em oferecer soluções inovadoras em economia circular, 
              transformando resíduos industriais em recursos valiosos. Nossa política de gestão 
              integrada abrange qualidade, meio ambiente, saúde e segurança ocupacional, 
              garantindo operações responsáveis e sustentáveis.
            </p>
          </div>

          {/* Princípios */}
          <h2 className="font-display text-2xl font-bold mb-8">Princípios Fundamentais</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {principios.map((principio, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <principio.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{principio.title}</h3>
                <p className="text-muted-foreground text-sm">{principio.description}</p>
              </div>
            ))}
          </div>

          {/* Compromissos */}
          <h2 className="font-display text-2xl font-bold mb-8">Nossos Compromissos</h2>
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border mb-12">
            <ul className="space-y-4">
              {compromissos.map((compromisso, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{compromisso}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificações */}
          <div className="bg-muted rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-xl font-bold mb-4">Certificações e Licenças</h2>
            <p className="text-muted-foreground mb-4">
              A JR Ramos opera em conformidade com as principais normas e regulamentações 
              ambientais, possuindo todas as licenças necessárias para suas atividades.
            </p>
            <p className="text-sm text-muted-foreground">
              Para mais informações sobre nossas certificações, entre em contato conosco.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PoliticaGestao;
