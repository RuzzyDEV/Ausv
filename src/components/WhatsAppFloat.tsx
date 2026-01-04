import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5571999838990";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre os serviços da JR Ramos.";

const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-whatsapp animate-[pulse_3s_ease-in-out_infinite]">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card rounded-lg shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium text-foreground">Fale Conosco!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-card border-r border-b border-border rotate-[-45deg]" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
