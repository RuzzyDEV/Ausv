import { LucideIcon, MessageCircle } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  whatsappMessage: string;
}

const WHATSAPP_NUMBER = "5571999838990";

const ServiceCard = ({ icon: Icon, title, description, whatsappMessage }: ServiceCardProps) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="service-card group cursor-pointer block"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-2 text-whatsapp font-semibold text-sm group-hover:gap-3 transition-all">
        <MessageCircle className="w-4 h-4" />
        <span>Solicitar Orçamento</span>
        <svg 
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default ServiceCard;
