'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { COACH_DETAILS, BRAND_DATA } from '../data/coachingData';

interface CoachProfileProps {
  onOpenConsultation: () => void;
}

export const CoachProfile: React.FC<CoachProfileProps> = ({ onOpenConsultation }) => {
  return (
    <section id="meet-coach" className="py-12 sm:py-18 bg-[#FAFCFB] border-t border-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Your Dedicated Mentor
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {COACH_DETAILS.heading}
          </h2>
        </div>

        {/* Coach Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-emerald-200 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-7 sm:gap-8 items-center">
            {/* Coach Picture */}
            <div className="sm:col-span-5 text-center">
              <div className="relative inline-block mx-auto">
                <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-md border-4 border-white bg-slate-900">
                  <img
                    src={COACH_DETAILS.avatarImg}
                    alt="Coach Asif Ali Raza"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-2 bg-[#00BD68] text-white px-3 py-1 rounded-lg text-xs font-bold shadow flex items-center gap-1.5 border border-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISSA & INFS</span>
                </div>
              </div>
            </div>

            {/* Coach Details & Bio */}
            <div className="sm:col-span-7 space-y-4">
              <div className="bg-[#F8FCFA] p-5 sm:p-6 rounded-2xl border border-emerald-100 space-y-3">
                {COACH_DETAILS.bioParagraphs.map((paragraph: string, idx: number) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                {/* Primary Button */}
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/25 transition-all cursor-pointer group"
                >
                  <span>{COACH_DETAILS.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Button: WhatsApp */}
                <a
                  href={`https://wa.me/${BRAND_DATA.whatsappPhone}?text=Hi%20Asif,%20I%20have%20a%20question%20about%20your%2012-Week%20Coaching%20Programme`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-emerald-300 text-emerald-800 hover:bg-emerald-50 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{COACH_DETAILS.secondaryCtaText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};