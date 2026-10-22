"use client";

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PERFECT_FOR_YOU_ITEMS, PERFECT_FOR_YOU_HEADING, PERFECT_FOR_YOU_CTA } from '../data/coachingData';

interface PerfectForYouProps {
  onOpenConsultation: () => void;
}

export const PerfectForYou: React.FC<PerfectForYouProps> = ({ onOpenConsultation }) => {
  return (
    <section id="perfect-for-you" className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            {PERFECT_FOR_YOU_HEADING}
          </h2>
        </div>

        {/* 6 Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {PERFECT_FOR_YOU_ITEMS.map((text, idx) => (
            <div
              key={idx}
              className="bg-[#F8FCFA] rounded-2xl p-5 border border-emerald-100 shadow-2xs hover:border-emerald-300 transition-colors flex items-start gap-3.5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00BD68] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* (CTA Button) */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{PERFECT_FOR_YOU_CTA}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
