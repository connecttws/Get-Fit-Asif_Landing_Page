"use client";

import React from 'react';
import { TrendingUp, Apple, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { EXPECTED_RESULTS_DATA } from '../data/coachingData';

interface ExpectedResultsProps {
  onOpenConsultation: () => void;
}

export const ExpectedResults: React.FC<ExpectedResultsProps> = ({ onOpenConsultation }) => {
  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Apple,
    ShieldCheck,
  };

  return (
    <section id="results" className="py-12 sm:py-18 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Real Expectations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {EXPECTED_RESULTS_DATA.heading}
          </h2>
        </div>

        {/* 3 Outcome Cards - Compact and Comfortable Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {EXPECTED_RESULTS_DATA.items.map((res) => {
            const Icon = iconMap[res.icon] || ShieldCheck;
            return (
              <div
                key={res.id}
                className="bg-[#EDFAF4] rounded-2xl p-6 sm:p-7 border border-emerald-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-[#00BD68] flex items-center justify-center mb-4 shadow-xs border border-emerald-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-2 leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {res.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Readable Disclaimer Note Below the Cards */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            {EXPECTED_RESULTS_DATA.disclaimer}
          </p>
        </div>

        {/* Section Primary CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{EXPECTED_RESULTS_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};