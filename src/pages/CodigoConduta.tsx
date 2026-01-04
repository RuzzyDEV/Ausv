import { ArrowLeft, Heart, Shield, Users, Scale, AlertTriangle, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const CodigoConduta = () => {
  const valores = [
    {
      icon: Heart,
      title: "Integridade",
      description: "Agir com honestidade, transparência e ética em todas as relações profissionais e comerciais.",
    },
    {
      icon: Users,
      title: "Respeito",
      description: "Tratar todos com dignidade, valorizando a diversidade e promovendo um ambiente inclusivo.",
    },
    {
      icon: Shield,
      title: "Responsabilidade",
      description: "Assumir a responsabilidade por nossas ações e seus impactos na sociedade e no meio ambiente.",
    },
    {
      icon: Scale,
      title: "Justiça",
      description: "Garantir tratamento justo e imparcial em todas as decisões e processos da empresa.",
    },
    {
      icon: HandHeart,
      title: "Compromisso Social",
      description: "Contribuir para o bem-estar da comunidade e para o desenvolvimento sustentável.",
    },
  ];

  const diretrizes = [
    {
      title: "Ambiente de Trabalho",
      items: [
        "Manter um ambiente de trabalho seguro, saudável e respeitoso",
        "Não tolerar qualquer forma de assédio, discriminação ou intimidação",
        "Promover a comunicação aberta e o trabalho em equipe",
        "Respeitar a privacidade e os dados pessoais de colaboradores e clientes",
      ],
    },
    {
      title: "Relações Comerciais",
      items: [
        "Conduzir negócios de forma ética e transparente",
        "Cumprir contratos e acordos estabelecidos",
        "Não participar de práticas anticoncorrenciais",
        "Manter confidencialidade sobre informações sensíveis",
      ],
    },
    {
      title: "Responsabilidade Ambiental",
      items: [
        "Cumprir todas as leis e regulamentos ambientais",
        "Minimizar o impacto ambiental das operações",
        "Promover a economia circular e o uso eficiente de recursos",
        "Incentivar práticas sustentáveis entre colaboradores e parceiros",
      ],
    },
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
            Código de <span className="text-accent">Conduta</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Nosso código de conduta estabelece os padrões éticos e comportamentais que guiam 
            todas as nossas ações e decisões.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20 mb-12">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4">Nosso Compromisso Ético</h2>
            <p className="text-muted-foreground leading-relaxed">
              Na JR Ramos, acreditamos que o sucesso empresarial deve estar alinhado com práticas 
              éticas e responsáveis. Este código de conduta reflete nossos valores e orienta o 
              comportamento de todos os colaboradores, parceiros e fornecedores.
            </p>
          </div>

          {/* Valores */}
          <h2 className="font-display text-2xl font-bold mb-8">Nossos Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <valor.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{valor.title}</h3>
                <p className="text-muted-foreground text-sm">{valor.description}</p>
              </div>
            ))}
          </div>

          {/* Diretrizes */}
          <h2 className="font-display text-2xl font-bold mb-8">Diretrizes de Conduta</h2>
          <div className="space-y-6 mb-12">
            {diretrizes.map((diretriz, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border"
              >
                <h3 className="font-display font-bold text-lg mb-4">{diretriz.title}</h3>
                <ul className="space-y-3">
                  {diretriz.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Canal de Denúncias */}
          <div className="bg-muted rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold mb-2">Canal de Comunicação</h2>
                <p className="text-muted-foreground mb-4">
                  Caso presencie ou tenha conhecimento de qualquer violação a este código de conduta, 
                  entre em contato através dos nossos canais oficiais. Garantimos confidencialidade 
                  e não retaliação.
                </p>
                <p className="text-sm text-muted-foreground">
                  E-mail: contato@jrramos.com.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CodigoConduta;
