'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, MessageCircle, Sparkles, Phone, User, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConsultationFormData } from '../types';
import { BRAND_DATA } from '../data/coachingData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
  initialWeight?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialGoal = 'fat_loss',
  initialWeight = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    whatsappNumber: '',
    email: '',
    primaryGoal: initialGoal === 'muscle_gain' ? 'Build Muscle' : 'Sustainable Fat Loss',
    dietPreference: 'Vegetarian',
    workoutPreference: 'Home Workout (Minimal Equipment)',
    currentWeight: initialWeight || '',
    targetWeight: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Coach Asif! I would like to book a consultation for the 12-Week Coaching Programme.\n\nName: ${formData.fullName}\nGoal: ${formData.primaryGoal}\nDiet: ${formData.dietPreference}\nWorkout: ${formData.workoutPreference}\nCurrent Weight: ${formData.currentWeight || 'N/A'}\nTarget Weight: ${formData.targetWeight || 'N/A'}`
  );

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00BD68] to-[#00924e] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-emerald-100 bg-white/20 px-2.5 py-0.5 rounded-full">
              Get Fit With Asif • 12-Week Coaching
            </span>
            <h3 className="text-xl sm:text-2xl font-black mt-1 tracking-tight">
              Book a Consultation
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8">
          {!isSubmitted ? (
            <div>
              {/* Stepper Progress */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                {[
                  { num: 1, label: 'Your Goals' },
                  { num: 2, label: 'Preferences' },
                  { num: 3, label: 'Contact Details' },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step >= s.num
                          ? 'bg-[#00BD68] text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {s.num}
                    </div>
                    <span
                      className={`text-xs font-semibold hidden sm:inline ${
                        step >= s.num ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <form id="consultation-form" onSubmit={handleSubmit}>
                {/* Hidden inputs to preserve earlier step data for CRM lead tracker */}
                <input type="hidden" name="primaryGoal" value={formData.primaryGoal} />
                <input type="hidden" name="dietPreference" value={formData.dietPreference} />
                <input type="hidden" name="workoutPreference" value={formData.workoutPreference} />
                <input type="hidden" name="currentWeight" value={formData.currentWeight} />
                <input type="hidden" name="targetWeight" value={formData.targetWeight} />

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-2">
                        What is your primary fitness goal?
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Sustainable Fat Loss',
                          'Build Muscle',
                          'Routine Consistency & Energy',
                          'Health & Habit Building',
                        ].map((g) => (
                          <button
                            type="button"
                            key={g}
                            onClick={() => setFormData({ ...formData, primaryGoal: g })}
                            className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                              formData.primaryGoal === g
                                ? 'bg-emerald-50 border-[#00BD68] text-emerald-950 ring-2 ring-emerald-500/20'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Current Weight (kg)
                        </label>
                        <input
                          type="text"
                          name="step1_currentWeight"
                          placeholder="e.g. 82"
                          value={formData.currentWeight}
                          onChange={(e) => setFormData({ ...formData, currentWeight: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-medium focus:outline-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Target Weight (kg)
                        </label>
                        <input
                          type="text"
                          name="step1_targetWeight"
                          placeholder="e.g. 70"
                          value={formData.targetWeight}
                          onChange={(e) => setFormData({ ...formData, targetWeight: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm font-medium focus:outline-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-2">
                        Your Food and Dietary Preference:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Vegetarian', 'Eggetarian', 'Non-Vegetarian', 'Vegan', 'Jain Diet'].map((d) => (
                          <button
                            type="button"
                            key={d}
                            onClick={() => setFormData({ ...formData, dietPreference: d })}
                            className={`p-2.5 text-center rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                              formData.dietPreference === d
                                ? 'bg-emerald-50 border-[#00BD68] text-emerald-950 ring-2 ring-emerald-500/20'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="text-xs font-bold text-slate-700 block mb-2">
                        Workout Setting Preference:
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Home Workout (Minimal Equipment)',
                          'Gym Workout (Full Equipment)',
                          'Travel and Flexible Routine',
                          'Beginner Movement and Walks',
                        ].map((w) => (
                          <button
                            type="button"
                            key={w}
                            onClick={() => setFormData({ ...formData, workoutPreference: w })}
                            className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                              formData.workoutPreference === w
                                ? 'bg-emerald-50 border-[#00BD68] text-emerald-950 ring-2 ring-emerald-500/20'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-sm font-medium focus:outline-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        WhatsApp Number * (For Consultation Call and Plan Review)
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.whatsappNumber}
                          onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-sm font-medium focus:outline-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          placeholder="e.g. rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2.5 text-sm font-medium focus:outline-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#00BD68] shrink-0" />
                      <span>Your phone number is strictly confidential. Coach Asif connects personally.</span>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-[#00BD68] hover:bg-[#00a85d] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md cursor-pointer transition-all"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#00924e] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-500/30 cursor-pointer transition-all"
                    >
                      <span>Confirm & Book Consultation</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Submission Success View - Booking Confirmation Received */
            <div className="text-center py-4 sm:py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00BD68] flex items-center justify-center mx-auto mb-4 shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Consultation Request Received, {formData.fullName || 'Champion'}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Your fitness questionnaire has been received. Coach Asif has your goal ({formData.primaryGoal}) on file and is ready to assess whether the 12-week programme is the right fit for your schedule.
              </p>

              {/* Direct WhatsApp Launch Button */}
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 mb-6 text-left">
                <div className="text-xs font-bold text-emerald-950 mb-1">
                  Connect Directly with Coach Asif:
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Click below to open WhatsApp with your assessment pre-filled:
                </p>

                <a
                  href={`https://wa.me/${BRAND_DATA.whatsappPhone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00BD68] hover:bg-[#00a85d] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md cursor-pointer transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Open WhatsApp Consultation Chat</span>
                </a>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer underline"
              >
                Close and Return to Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};