"use client";

import React from 'react';
import {
  UtensilsCrossed,
  Dumbbell,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { PILLARS_DATA } from '../data/coachingData';

interface PillarsSectionProps {
  onOpenConsultation: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenConsultation }) => {
  const iconMap: Record<string, React.ElementType> = {
    UtensilsCrossed,
    Dumbbell,
    PhoneCall,
    MessageCircle,
    ShieldCheck,
  };

  return (
    <section id="pillars" className="py-12 sm:py-18 bg-[#FAFCFB] border-t border-b border-emerald-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            The Complete Coaching Experience
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {PILLARS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {PILLARS_DATA.intro}
          </p>
        </div>

        {/* 5 Cards Grid Using Existing Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {PILLARS_DATA.items.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            const isLastOnLarge = index === 4;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4 ${
                  isLastOnLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BD68] text-white flex items-center justify-center shrink-0 shadow-xs shadow-emerald-600/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{PILLARS_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};