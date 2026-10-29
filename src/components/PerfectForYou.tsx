"use client";

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PERFECT_FOR_YOU_DATA } from '../data/coachingData';

interface PerfectForYouProps {
  onOpenConsultation: () => void;
}

export const PerfectForYou: React.FC<PerfectForYouProps> = ({ onOpenConsultation }) => {
  return (
    <section id="perfect-for-you" className="py-12 sm:py-18 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Programme Fit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {PERFECT_FOR_YOU_DATA.heading}
          </h2>
        </div>

        {/* 5 Points Cards in existing Checkmark Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {PERFECT_FOR_YOU_DATA.items.map((text, idx) => (
            <div
              key={idx}
              className={`bg-[#F8FCFA] rounded-2xl p-5 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors flex items-start gap-3.5 ${
                idx === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-[#00BD68] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Primary CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{PERFECT_FOR_YOU_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};