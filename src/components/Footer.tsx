'use client';

import React, { useState } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { HERO_DATA, BRAND_DATA } from '../data/coachingData';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#0A101D] text-slate-300 pt-10 pb-20 sm:pb-24 border-t border-slate-800 text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            {/* Brand info */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#00BD68] text-white flex items-center justify-center font-bold text-base">
                  A
                </div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {HERO_DATA.brandTitle}
                </span>
              </div>
              <p className="text-slate-400 text-xs flex items-center justify-center sm:justify-start gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISSA & INFS Certified Coaching by Asif Ali Raza</span>
              </p>
            </div>

            {/* Quick links & WhatsApp */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium">
              <a href="#transformations" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Success Stories
              </a>
              <span className="text-slate-700">•</span>
              <a href="#pillars" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Benefits
              </a>
              <span className="text-slate-700">•</span>
              <a href="#meet-coach" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Meet Coach Asif
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`https://wa.me/${BRAND_DATA.whatsappPhone}?text=Hi%20Asif,%20I%20have%20a%20question`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* High-Contrast Disclaimer & Working Legal Links */}
          <div className="pt-6 text-center space-y-3">
            {/* Legal Links */}
            <div className="flex items-center justify-center gap-4 text-xs font-medium text-slate-400">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-emerald-400 transition-colors underline underline-offset-4 cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-emerald-400 transition-colors underline underline-offset-4 cursor-pointer"
              >
                Coaching Terms & Conditions
              </button>
            </div>

            {/* High Contrast Health Disclaimer */}
            <p className="text-slate-300 text-xs sm:text-xs max-w-3xl mx-auto leading-relaxed">
              Medical Disclaimer: The coaching programmes provided by Get Fit With Asif are educational and consultative in nature. Please consult your physician or healthcare provider before starting any exercise or nutrition programme. Results vary depending on your starting point, consistency, training history, sleep, stress and individual health status. No specific amount of weight loss or physical transformation is guaranteed.
            </p>

            <p className="text-slate-400 text-xs pt-1">
              © {new Date().getFullYear()} Get Fit With Asif. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Accessible Working Legal Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType}
      />
    </>
  );
};