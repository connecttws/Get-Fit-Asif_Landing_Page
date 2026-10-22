"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_DATA } from '../data/coachingData';
import { VslPlayer } from './VslPlayer';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF8F2] via-[#F4FAF7] to-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Brand / Coach Name */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase mb-2">
          {HERO_DATA.brandTitle}
        </h1>

        {/* Coach Certification - Clean text line */}
        <p className="text-sm sm:text-base font-bold text-slate-700 tracking-wide uppercase mb-3">
          {HERO_DATA.certification}
        </p>

        {/* Subtagline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#00BD68] tracking-tight mb-8">
          {HERO_DATA.tagline}
        </h2>

        {/* [VSL video] */}
        <div className="my-6 sm:my-8 max-w-3xl mx-auto">
          <VslPlayer onOpenConsultation={onOpenConsultation} />
        </div>

        {/* (CTA Button) */}
        <div className="pt-2">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-2xl shadow-lg shadow-emerald-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
          >
            <span>{HERO_DATA.ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
