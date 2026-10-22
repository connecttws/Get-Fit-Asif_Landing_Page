'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenConsultation: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#00BD68] shadow-[0_-8px_25px_rgba(0,0,0,0.10)] py-3 px-4 sm:px-6 transition-all">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left Info */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#00BD68] text-white flex items-center justify-center font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Get Fit With Asif
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00BD68]" />
                <span>ISSA & INFS Certified Coaching</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Asif,%20I%20want%20to%20know%20more%20about%20your%20coaching%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat</span>
          </a>
        </div>

        {/* Right CTA Button */}
        <div className="w-full sm:w-auto flex items-center gap-3 justify-end">
          <a
            href="https://wa.me/919876543210?text=Hi%20Asif,%20I%20want%20to%20know%20more%20about%20your%20coaching%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2.5 rounded-xl border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Coach</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-md shadow-emerald-600/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
