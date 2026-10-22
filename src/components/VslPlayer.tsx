"use client";

import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VslPlayerProps {
  onOpenConsultation?: () => void;
}

export const VslPlayer: React.FC<VslPlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 border-emerald-100 bg-slate-950 relative aspect-video group">
      {/* Video / Thumbnail Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-95"></div>
      </div>

      {/* Main Center Area: Play Button Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            aria-label="Play video"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00BD68] hover:bg-[#00c874] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
          >
            <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
          </button>
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-slate-950/60 backdrop-blur-xs transition-all">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-emerald-400" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(false)}
                className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                aria-label="Pause video"
              >
                <Pause className="w-6 h-6 fill-white" />
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 px-2">
              <span className="font-medium text-emerald-400">Preview Playing</span>
              <button
                onClick={() => setIsPlaying(false)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
