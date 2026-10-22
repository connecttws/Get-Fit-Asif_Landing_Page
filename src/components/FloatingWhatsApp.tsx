import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Coach%20Asif,%20I%20have%20a%20question%20about%20your%2090-Day%20Coaching%20Plan!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Coach Asif on WhatsApp"
      className="fixed bottom-30 sm:bottom-24 right-4 sm:right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-900/30 flex items-center gap-2 group transition-all"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold font-sans">
        Chat with Coach Asif
      </span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </a>
  );
};
