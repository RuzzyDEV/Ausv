import { ArrowLeft, Send, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const WHATSAPP_NUMBER = "5571999838990";

const Orcamento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.nome}%0A*Empresa:* ${formData.empresa}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A%0A*Mensagem:*%0A${formData.mensagem}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

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
            Solicitar <span className="text-accent">Orçamento</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Preencha o formulário abaixo e nossa equipe entrará em contato para oferecer a melhor solução para sua empresa.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
            <h2 className="font-display text-xl font-bold mb-6">Dados para contato</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome completo *</label>
                <Input
                  required
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <Input
                  placeholder="Nome da empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail *</label>
                  <Input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone *</label>
                  <Input
                    type="tel"
                    required
                    placeholder="(71) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem *</label>
                <Textarea
                  required
                  placeholder="Descreva quais produtos ou serviços você precisa..."
                  rows={5}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold mb-4">Outras formas de contato</h2>
              <p className="text-muted-foreground mb-6">
                Prefere falar diretamente conosco? Entre em contato pelos canais abaixo:
              </p>
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-whatsapp/10 rounded-xl border border-whatsapp/20 hover:bg-whatsapp/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(71) 99983-8990</p>
                  </div>
                </a>
                <a 
                  href="tel:+5571999838990"
                  className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-sm text-muted-foreground">(71) 99983-8990</p>
                  </div>
                </a>
                <a 
                  href="mailto:comercial@jrramos.com.br"
                  className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border hover:bg-muted/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">comercial@jrramos.com.br</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-display font-bold text-lg mb-2">Resposta Rápida</h3>
              <p className="text-muted-foreground text-sm">
                Nossa equipe comercial responde em até 24 horas úteis. Para urgências, 
                entre em contato pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Orcamento;
