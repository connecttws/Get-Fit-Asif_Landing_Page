"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JOURNEY_DATA } from '../data/coachingData';

interface JourneyTimelineProps {
  onOpenConsultation: () => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onOpenConsultation }) => {
  return (
    <section id="journey" className="py-12 sm:py-18 bg-[#EDFAF4] border-t border-b border-emerald-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-emerald-200 shadow-2xs inline-block mb-3">
            Structured Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {JOURNEY_DATA.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium">
            {JOURNEY_DATA.subheading}
          </p>
        </div>

        {/* 3 Step Cards - Compact & Clean Layout */}
        <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-100 shadow-xs flex items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00BD68] text-white flex items-center justify-center font-black text-lg shrink-0 shadow-xs shadow-emerald-500/30">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                {JOURNEY_DATA.steps[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {JOURNEY_DATA.steps[0].description}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-100 shadow-xs flex items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00BD68] text-white flex items-center justify-center font-black text-lg shrink-0 shadow-xs shadow-emerald-500/30 mt-0.5">
              2
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {JOURNEY_DATA.steps[1].timingLabel}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                {JOURNEY_DATA.steps[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {JOURNEY_DATA.steps[1].description}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-100 shadow-xs flex items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#00BD68] text-white flex items-center justify-center font-black text-lg shrink-0 shadow-xs shadow-emerald-500/30 mt-0.5">
              3
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {JOURNEY_DATA.steps[2].timingLabel}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                {JOURNEY_DATA.steps[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-3">
                {JOURNEY_DATA.steps[2].description}
              </p>

              {/* Supporting Points - Process Focused (No fixed milestone promises) */}
              {JOURNEY_DATA.steps[2].supportingPoints && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1">
                  {JOURNEY_DATA.steps[2].supportingPoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FCFA] border border-emerald-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00BD68] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section Primary CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{JOURNEY_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};