"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface JourneyTimelineProps {
  onOpenConsultation: () => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onOpenConsultation }) => {
  return (
    <section id="journey" className="py-14 sm:py-20 bg-[#EDFAF4] border-t border-b border-emerald-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Your 90-Day Journey: <span className="text-[#00BD68]">Simple, Clear, Effective</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal">
            Here’s Exactly What Happens After You Enroll
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="space-y-6 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#00BD68] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm shadow-emerald-500/30">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wide">
                MEET YOUR COACH
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-normal mt-0.5">
                Share goals, preferences & health history
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#00BD68] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm shadow-emerald-500/30 mt-1">
              2
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  WITHIN 72 HOURS
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wide">
                  GET YOUR PLAN
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FCFA] border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-[#00BD68] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    First 1:1 consultation call
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FCFA] border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-[#00BD68] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Receive personalized meal plan
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FCFA] border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-[#00BD68] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Get custom workout routine
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#00BD68] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm shadow-emerald-500/30 mt-1">
              3
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  WEEK 1-12
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wide">
                  TRANSFORM
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
                <div className="p-4 rounded-xl bg-[#F8FCFA] border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 text-emerald-900">
                      Week 1-2: Build Foundation
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Learn the basics, form habits, track progress
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FCFA] border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 text-emerald-900">
                      Week 3-6: See Results
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Visible changes, adjusted plans, stay motivated
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FCFA] border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 text-emerald-900">
                      Week 7-10: Break Plateaus
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Master routines, fine-tune nutrition, keep progressing
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FCFA] border border-emerald-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 text-emerald-900">
                      Week 11-12: Lock It In
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Sustainable habits, maintenance strategies, celebrate success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* (CTA Button) */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>Begin Your 90-Day Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
