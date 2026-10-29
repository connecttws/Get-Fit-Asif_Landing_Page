"use client";

import React from 'react';
import { ShieldCheck, MessageCircle, PhoneCall } from 'lucide-react';
import { HERO_DATA, BRAND_DATA } from '../data/coachingData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Logo & Coach Badge */}
        <a href="#" className="flex items-center gap-2.5 focus:outline-none group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#00BD68] to-[#00924e] flex items-center justify-center text-white font-black text-base sm:text-lg shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold tracking-tight text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors uppercase">
                {HERO_DATA.brandTitle}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                ISSA & INFS
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden md:block leading-none">
              {HERO_DATA.certification}
            </p>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#transformations" className="hover:text-emerald-700 transition-colors">Success Stories</a>
          <a href="#pillars" className="hover:text-emerald-700 transition-colors">Coaching Benefits</a>
          <a href="#perfect-for-you" className="hover:text-emerald-700 transition-colors">Who It's For</a>
          <a href="#journey" className="hover:text-emerald-700 transition-colors">12-Week Journey</a>
          <a href="#results" className="hover:text-emerald-700 transition-colors">Expected Results</a>
          <a href="#meet-coach" className="hover:text-emerald-700 transition-colors">Meet Coach</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={`https://wa.me/${BRAND_DATA.whatsappPhone}?text=Hi%20Coach%20Asif,%20I%20have%20a%20question%20about%20your%2012-Week%20Fitness%20Coaching%20Programme`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 px-3 py-2 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Standardised Header Button: "Book a Call" */}
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] active:scale-95 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm shadow-emerald-600/25 transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book a Call</span>
          </button>
        </div>
      </div>
    </header>
  );
};