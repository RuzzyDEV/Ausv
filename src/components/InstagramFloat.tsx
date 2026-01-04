import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/jr_ramos_ltda_/";

const InstagramFloat = () => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-28 right-6 z-50 group"
      aria-label="Siga no Instagram"
    >
      <div className="relative">
        {/* Button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite_0.5s]">
          <Instagram className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card rounded-lg shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium text-foreground">Siga-nos!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-card border-r border-b border-border rotate-[-45deg]" />
        </div>
      </div>
    </a>
  );
};

export default InstagramFloat;
