'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { COACH_DETAILS } from '../data/coachingData';

interface CoachProfileProps {
  onOpenConsultation: () => void;
}

export const CoachProfile: React.FC<CoachProfileProps> = ({ onOpenConsultation }) => {
  return (
    <section id="meet-coach" className="py-14 sm:py-20 bg-[#FAFCFB] border-t border-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Meet Your Coach
          </h2>
        </div>

        {/* Coach Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-md mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            {/* Coach Picture */}
            <div className="sm:col-span-5 text-center">
              <div className="relative inline-block mx-auto">
                <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border-4 border-white bg-slate-900">
                  <img
                    src={COACH_DETAILS.avatarImg}
                    alt="Coach Asif Ali Raza"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-3 -right-2 bg-[#00BD68] text-white px-3 py-1 rounded-lg text-xs font-semibold shadow flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISSA & INFS</span>
                </div>
              </div>
            </div>

            {/* Coach Exact Content */}
            <div className="sm:col-span-7 space-y-4">
              {/* Exact user requested copy */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-[#F8FCFA] p-5 sm:p-6 rounded-2xl border border-emerald-100">
                {COACH_DETAILS.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer group"
                >
                  <span>Book Consultation with Asif</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Asif,%20I%20want%20to%20know%20more%20about%20your%20coaching%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-emerald-300 text-emerald-800 hover:bg-emerald-50 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Bottom (CTA Button) */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>Start Your Transformation Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
