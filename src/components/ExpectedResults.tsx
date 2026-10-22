"use client";

import React from 'react';
import { TrendingUp, Apple, ShieldCheck, ArrowRight } from 'lucide-react';
import { EXPECTED_RESULTS, EXPECTED_RESULTS_HEADING, EXPECTED_RESULTS_CTA } from '../data/coachingData';

interface ExpectedResultsProps {
  onOpenConsultation: () => void;
}

export const ExpectedResults: React.FC<ExpectedResultsProps> = ({ onOpenConsultation }) => {
  const iconMap = [TrendingUp, Apple, ShieldCheck];

  return (
    <section id="results" className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
            {EXPECTED_RESULTS_HEADING}
          </h2>
        </div>

        {/* 3 Outcome Cards - Exact Ditio Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {EXPECTED_RESULTS.map((res, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={res.id}
                className="bg-[#EDFAF4] rounded-2xl p-7 sm:p-8 border-2 border-emerald-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center justify-center min-h-[160px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-[#00BD68] flex items-center justify-center mb-4 shadow-xs border border-emerald-200">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg sm:text-xl leading-snug">
                  {res.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* (CTA Button) */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{EXPECTED_RESULTS_CTA}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
