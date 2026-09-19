'use client';

import { useState } from 'react';
import { Play, X, Sparkles, Volume2, ShieldCheck } from 'lucide-react';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoTourModal({ isOpen, onClose }: VideoTourModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#141619] border border-[#BA9D6A]/40 rounded-2xl md:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden z-10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0E1012]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#BA9D6A] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#BA9D6A] uppercase font-sans">
              Nikhar Salon • The Cinematic Experience
            </span>
          </div>

          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full border border-white/10 hover:border-[#BA9D6A] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/g2JdF8U5Tnk?autoplay=1&mute=0&rel=0&modestbranding=1"
            title="Nikhar Salon Luxury Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer info bar */}
        <div className="p-4 sm:p-5 bg-[#0E1012] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5 text-[#BA9D6A]">
              <Sparkles size={14} /> Master Barber Craftsmanship
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={14} className="text-[#BA9D6A]" /> 100% Sanitized & VIP Hospitality
            </span>
          </div>

          <a
            href="/book-appointment"
            onClick={onClose}
            className="gold-gradient text-[#0E1012] font-semibold text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-full transition-transform hover:scale-105"
          >
            Reserve Your Experience
          </a>
        </div>
      </div>
    </div>
  );
}
