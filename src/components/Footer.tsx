import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HERO_DATA } from '../data/coachingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A101D] text-slate-400 pt-12 pb-24 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#00BD68] text-white flex items-center justify-center font-bold text-base">
                A
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {HERO_DATA.brandTitle}
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              ISSA & INFS Certified Coaching by Asif Ali Raza
            </p>
          </div>

          {/* Quick links & WhatsApp */}
          <div className="flex items-center gap-4 text-xs">
            <a href="#transformations" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Success Stories
            </a>
            <span className="text-slate-700">•</span>
            <a href="#meet-coach" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Meet Coach Asif
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://wa.me/919876543210?text=Hi%20Asif,%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 text-center text-[11px] text-slate-500 space-y-2">
          <p>
            The coaching programs provided are designed for fitness and health transformation. Consult your physician before starting any exercise or diet program.
          </p>
          <p>© {new Date().getFullYear()} Get Fit With Asif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
