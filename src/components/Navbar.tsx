"use client";

import React from 'react';
import { ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/coachingData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Coach Badge */}
        <a href="#" className="flex items-center gap-3 focus:outline-none group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BD68] to-[#00924e] flex items-center justify-center text-white font-black text-xl shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors uppercase">
                {HERO_DATA.brandTitle}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                ISSA & INFS
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              {HERO_DATA.certification}
            </p>
          </div>
        </a>

        {/* Center Nav Links for Landing Page */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#transformations" className="hover:text-emerald-700 transition-colors">Success Stories</a>
          <a href="#pillars" className="hover:text-emerald-700 transition-colors">Your Plan</a>
          <a href="#perfect-for-you" className="hover:text-emerald-700 transition-colors">Who It's For</a>
          <a href="#journey" className="hover:text-emerald-700 transition-colors">90-Day Journey</a>
          <a href="#results" className="hover:text-emerald-700 transition-colors">Expected Results</a>
          <a href="#meet-coach" className="hover:text-emerald-700 transition-colors">Meet Coach</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919876543210?text=Hi%20Coach%20Asif,%20I%20am%20interested%20in%20your%2090-Day%20Fitness%20Coaching%20Plan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Chat</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] active:scale-95 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Enroll Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};
