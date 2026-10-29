"use client";

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/coachingData';
import { VslPlayer } from './VslPlayer';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF8F2] via-[#F4FAF7] to-white pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Brand & Coach Certification - Reduced size as brand is visible in header */}
        <div className="inline-flex items-center justify-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {HERO_DATA.brandTitle}
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            {HERO_DATA.certification}
          </span>
        </div>

        {/* 12-Week Coaching Line Directly Above the Headline */}
        <div className="mb-3">
          <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#009e56] bg-emerald-100/60 border border-emerald-200 px-3.5 py-1 rounded-full">
            {HERO_DATA.superHeadline}
          </span>
        </div>

        {/* Main Headline - Maximum Visual Importance */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-tight mb-4">
          Lose Fat <span className="text-[#00BD68]">|</span> Build Muscle <span className="text-[#00BD68]">|</span> Become Your Best Self.
        </h1>

        {/* Supporting text below the headline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal mb-6 sm:mb-8">
          {HERO_DATA.supportingText}
        </p>

        {/* VSL Video Container - Moved up directly below the headline and supporting copy */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <VslPlayer onOpenConsultation={onOpenConsultation} />
        </div>

        {/* Primary CTA Button & Supporting Note - Placed downside below the VSL video */}
        <div className="flex flex-col items-center justify-center gap-2.5">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl shadow-lg shadow-emerald-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer group"
          >
            <span>{HERO_DATA.ctaText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          {/* Supporting line directly below the button */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium text-center px-2">
            {HERO_DATA.ctaNote}
          </p>
        </div>
      </div>
    </section>
  );
};