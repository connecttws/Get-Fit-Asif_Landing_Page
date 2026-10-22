"use client";

import React, { useState } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { TRANSFORMATION_STORIES } from '../data/coachingData';

interface TransformationsProps {
  onOpenConsultation: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenConsultation }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const activeStory = TRANSFORMATION_STORIES[activeStoryIndex];

  return (
    <section id="transformations" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Real People, Real Results - Success Stories That Motivate
          </h2>
        </div>

        {/* Featured Interactive Comparison */}
        <div className="bg-[#EDFAF4] rounded-3xl p-5 sm:p-8 border border-emerald-200 shadow-md mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Split Screen Image Slider */}
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg select-none border-2 border-white">
                <img
                  src={activeStory.afterImg}
                  alt={`${activeStory.name} After`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white font-bold text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                  After: {activeStory.afterStats}
                </div>

                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={activeStory.beforeImg}
                    alt={`${activeStory.name} Before`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900 text-white font-bold text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                    Before: {activeStory.beforeStats}
                  </div>
                </div>

                {/* Slider Divider Handle */}
                <div
                  className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-7 h-7 rounded-full bg-white text-emerald-700 shadow flex items-center justify-center -ml-3 border-2 border-emerald-500">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>

                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Drag before and after"
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mt-2 px-1">
                <span>◀ Drag left for After</span>
                <span className="text-emerald-800">Drag Slider</span>
                <span>Drag right for Before ▶</span>
              </div>
            </div>

            {/* Story Details */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-600 text-white font-bold text-xs px-2.5 py-0.5 rounded-md">
                    {activeStory.duration}
                  </span>
                  <span className="bg-white border border-emerald-300 text-emerald-900 font-semibold text-xs px-2 py-0.5 rounded-md">
                    {activeStory.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {activeStory.name}, {activeStory.age}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{activeStory.profession}</p>

                <div className="p-3 bg-white rounded-xl border border-emerald-100 mb-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">Weight Lost:</span>
                  <span className="text-xl font-bold text-[#00BD68]">{activeStory.weightLoss}</span>
                </div>

                <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed pl-3 border-l-2 border-[#00BD68]">
                  "{activeStory.quote}"
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="mt-4 pt-3 border-t border-emerald-200/80 grid grid-cols-4 gap-1.5">
                {TRANSFORMATION_STORIES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveStoryIndex(idx);
                      setSliderPos(50);
                    }}
                    className={`py-1.5 px-1 rounded-lg text-center text-xs transition-colors cursor-pointer border ${
                      activeStoryIndex === idx
                        ? 'bg-[#00BD68] text-white border-emerald-600 font-bold'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-emerald-50'
                    }`}
                  >
                    <div className="truncate text-[11px]">{s.name.split(' ')[0]}</div>
                    <div className="text-[10px] font-semibold">{s.weightLoss}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Transformation Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {TRANSFORMATION_STORIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={item.afterImg}
                  alt={`${item.name} Result`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#00BD68] text-white text-[11px] font-bold px-2 py-0.5 rounded shadow">
                  {item.weightLoss}
                </span>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-[11px] text-slate-500">{item.profession}</p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span>{item.duration}</span>
                  <span className="font-semibold text-emerald-700">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section (CTA Button) */}
        <div className="text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group"
          >
            <span>Start Your 90-Day Transformation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
