"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  Video
} from 'lucide-react';
import { VIDEO_TESTIMONIALS_DATA } from '../data/coachingData';

interface VideoTestimonialsProps {
  onOpenConsultation: () => void;
}

export const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ onOpenConsultation }) => {
  const { heading, subheading, ctaText, ctaNote, videos } = VIDEO_TESTIMONIALS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update current slide index on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const item = container.querySelector('.snap-item') as HTMLElement | null;
    const itemWidth = item?.offsetWidth || 340;
    const gap = 24; // gap-6
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setCurrentIndex(Math.min(Math.max(index, 0), videos.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [videos.length]);

  const scrollToSlide = (idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const item = container.querySelector('.snap-item') as HTMLElement | null;
    const itemWidth = item?.offsetWidth || 340;
    const gap = 24;
    container.scrollTo({
      left: idx * (itemWidth + gap),
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    scrollToSlide(Math.max(currentIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToSlide(Math.min(currentIndex + 1, videos.length - 1));
  };

  return (
    <section id="video-testimonials" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/70 border border-emerald-500/30 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Client Video Stories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium">
            {subheading}
          </p>
        </div>

        {/* Carousel Navigation Subtitle / Counter */}
        <div className="flex items-center justify-center gap-2 max-w-6xl mx-auto mb-6 px-2 text-center">
          <span className="text-xs sm:text-sm font-semibold text-slate-300">
            Story <span className="text-emerald-400 font-bold">{currentIndex + 1}</span> of {videos.length}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-400">
            Click play on any reel to watch directly
          </span>
        </div>

        {/* Carousel Container with Side Arrows (Desktop Only) */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop-Only Left Arrow Button (On the side) */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous video story"
            className={`hidden lg:flex absolute -left-5 xl:-left-7 top-[280px] -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all cursor-pointer shadow-2xl backdrop-blur-md ${
              currentIndex === 0
                ? 'border-slate-800/60 bg-slate-900/60 text-slate-600 cursor-not-allowed opacity-25'
                : 'border-slate-700 bg-slate-800/95 hover:bg-emerald-600 hover:border-emerald-500 text-white hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Desktop-Only Right Arrow Button (On the side) */}
          <button
            onClick={handleNext}
            disabled={currentIndex === videos.length - 1}
            aria-label="Next video story"
            className={`hidden lg:flex absolute -right-5 xl:-right-7 top-[280px] -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center border transition-all cursor-pointer shadow-2xl backdrop-blur-md ${
              currentIndex === videos.length - 1
                ? 'border-slate-800/60 bg-slate-900/60 text-slate-600 cursor-not-allowed opacity-25'
                : 'border-slate-700 bg-slate-800/95 hover:bg-emerald-600 hover:border-emerald-500 text-white hover:scale-110'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Track - Direct 1-Click Play Frames */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar px-2 sm:px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {videos.map((item) => (
            <div
              key={item.id}
              className="snap-item snap-center shrink-0 w-[310px] sm:w-[340px] md:w-[350px] flex flex-col"
            >
              {/* Phone Mockup Frame with Live Embed */}
              <div className="relative bg-slate-950 border-[5px] sm:border-[6px] border-slate-800 rounded-[2.25rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden h-[560px] sm:h-[600px] flex flex-col group ring-1 ring-white/10 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-950/40">
                {/* Top Phone Speaker / Camera Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 shadow-inner flex items-center justify-center pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-slate-950/90 mr-4" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                </div>

                {/* Direct 1-Click Play Instagram Reel Iframe */}
                <div className="relative w-full h-full bg-black flex flex-col">
                  <iframe
                    src={item.embedUrl}
                    className="w-full h-full border-0 bg-black pt-7"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    title={`${item.name} Client Video Story`}
                  />
                </div>
              </div>

              {/* Story Details Card Below Phone Frame */}
              <div className="mt-3.5 bg-slate-800/70 border border-slate-700/70 rounded-2xl p-4 shadow-md flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-400/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.result}
                    </span>
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
                      title="View original on Instagram"
                    >
                      <Video className="w-3 h-3 text-pink-400" />
                      <span>Reel</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-emerald-400/90 font-medium mb-1.5">
                    {item.profession}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    "{item.highlight}"
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-10">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Jump to video ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-[#00BD68]'
                  : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Section Primary CTA */}
        <div className="text-center pt-2 max-w-lg mx-auto">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00BD68] to-[#009e56] hover:from-[#00c874] hover:to-[#00a85d] text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all cursor-pointer group w-full sm:w-auto"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-2.5 text-xs text-slate-400">
            {ctaNote}
          </p>
        </div>
      </div>
    </section>
  );
};
