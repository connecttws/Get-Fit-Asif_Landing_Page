"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TRANSFORMATION_DATA } from '../data/coachingData';

interface TransformationsProps {
  onOpenConsultation: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenConsultation }) => {
  const { heading, ctaText, featuredStory, stories } = TRANSFORMATION_DATA;

  return (
    <section id="transformations" className="py-12 sm:py-20 bg-white border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Proven Client Results
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            Real transformations achieved with personalized nutrition and consistent coaching guidance.
          </p>
        </div>

        {/* 1. Featured Transformation Frame (Clean Showcase Frame) */}
        <div className="max-w-lg mx-auto mb-12 sm:mb-16">
          <div className="bg-gradient-to-b from-[#EDFAF4] to-white rounded-3xl p-3 sm:p-4 border-2 border-emerald-300 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-[#00BD68]" />
                Featured Transformation
              </span>
              <span className="text-xs font-bold text-[#00924E] bg-white px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                Real Client Result
              </span>
            </div>

            {/* Pure Image Frame - Crisp, Square & Uncropped */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 aspect-square">
              <img
                src={featuredStory.image}
                alt="Featured Client Transformation Result"
                className="w-full h-full object-cover block"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 2. Supporting Testimonial Frames (Only Clean Frames) */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              More Client Transformations
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Consistent habits and practical coaching that deliver sustainable body changes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-5xl mx-auto">
            {stories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-3 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
              >
                {/* Pure Frame - Displays Complete Square Graphic */}
                <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-900 aspect-square">
                  <img
                    src={story.image}
                    alt={`${story.name} Transformation Frame`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 block"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Primary CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};