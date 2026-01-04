import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Localização
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Onde Estamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar e conhecer nossa estrutura completa para atender suas necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Polo Empresarial Gov. César Borges<br />
                    Av. José Agostinho Paiva, 251<br />
                    Santa Terezinha, Dias d'Ávila - BA<br />
                    CEP: 42850-000
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                    <p>Segunda a Quinta: 07:00 - 17:00</p>
                    <p>Sexta: 07:00 - 16:00</p>
                    <p>Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contato</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    (71) 99983-8990<br />
                    WhatsApp disponível
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg h-full min-h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=JR+Ramos,Dias+d'Ávila,BA,Brazil&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização JR Ramos - Dias d'Ávila, BA"
              />
              
              {/* Overlay com botão */}
              <a
                href="https://maps.app.goo.gl/MNT2zqyWXCyBhCdMA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
