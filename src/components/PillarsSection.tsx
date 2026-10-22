"use client";

import React from 'react';
import { UtensilsCrossed, Dumbbell, MessageCircle, Flame, ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../data/coachingData';

interface PillarsSectionProps {
  onOpenConsultation: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenConsultation }) => {
  const iconMap = [UtensilsCrossed, Dumbbell, MessageCircle, Flame];

  return (
    <section id="pillars" className="py-14 sm:py-20 bg-[#FAFCFB] border-t border-b border-emerald-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            {PILLARS_DATA.heading}
          </h2>
        </div>

        {/* 4 Cards Grid with Exact Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PILLARS_DATA.items.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BD68] text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-base sm:text-lg font-semibold text-slate-800 leading-relaxed">
                    {item.text}
                  </p>
                </div>
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
            <span>{PILLARS_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
