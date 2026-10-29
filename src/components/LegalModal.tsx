'use client';

import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00BD68] text-white flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {type === 'privacy' ? 'Privacy Policy' : 'Coaching Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-400">Get Fit With Asif • Coach Asif Ali Raza</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-900">Last updated: October 2026</p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Information We Collect</h4>
              <p>
                When you book a consultation or submit an inquiry with Get Fit With Asif, we collect information you voluntarily provide, including your full name, WhatsApp phone number, email address, fitness objectives, dietary preferences, and current physical activity levels.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. How We Use Your Information</h4>
              <p>
                Your personal details are used solely to assess your fitness readiness, schedule your consultation call, provide tailored nutrition and exercise recommendations, and communicate via WhatsApp or email regarding your coaching journey.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. Confidentiality and Protection</h4>
              <p>
                We value your privacy. We never sell, rent, or lease your personal information to third-party marketing agencies. All client records and progress updates are treated with strict confidentiality.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">4. Data Security</h4>
              <p>
                We implement reasonable administrative and technical security measures to maintain the safety of your personal information when you enter, submit, or access your personal data.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">5. Contacting Us</h4>
              <p>
                For questions regarding this privacy policy, you may reach out directly to Coach Asif Ali Raza via WhatsApp at +91 98765 43210.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900">Last updated: October 2026</p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">1. Nature of Coaching</h4>
              <p>
                Get Fit With Asif provides consultative online fitness, nutrition, and lifestyle mentoring. Coaching includes custom workout recommendations, dietary structure, regular check-in reviews, and ongoing habit support.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">2. Medical Clearance and Client Responsibility</h4>
              <p>
                Fitness and nutrition guidance is not a substitute for professional medical advice, diagnosis, or clinical treatment. Clients are advised to obtain medical clearance from a qualified physician prior to starting any exercise or dietary regimen. You assume full voluntary responsibility for your physical health and execution.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">3. No Guaranteed Outcomes</h4>
              <p>
                Results vary depending on your starting point, consistency, training history, sleep, stress, and individual health status. No specific amount of weight loss, muscle gain, or physical transformation is guaranteed.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">4. Consultation and Communication</h4>
              <p>
                Consultation calls and ongoing coaching communication are delivered through scheduled audio/video calls and WhatsApp messaging. Active client participation and open communication are required for optimal guidance.
              </p>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">5. Intellectual Property</h4>
              <p>
                Custom training routines, nutrition meal formats, and educational coaching materials shared during the coaching tenure are for your personal use only and may not be redistributed without prior written consent.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
