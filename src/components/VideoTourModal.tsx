'use client';

import { useState, useEffect } from 'react';
import { X, ShieldCheck, Volume2, Play } from 'lucide-react';
import Link from 'next/link';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
  videoTitle?: string;
}

export default function VideoTourModal({
  isOpen,
  onClose,
  videoId = 'fW_n6b6fLhQ', // High-definition luxury grooming tour
  videoTitle = 'Nikhar Salon • The Cinematic Experience',
}: VideoTourModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Modal Dialog Box with Viewport-Constrained Height */}
      <div 
        data-lenis-prevent
        className="relative w-full max-w-3xl md:max-w-4xl max-h-[90vh] bg-[#141619] border border-[#BA9D6A]/50 rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col my-auto transition-opacity duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 border-b border-white/[0.08] bg-[#0E1012] shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#BA9D6A] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-[#BA9D6A] uppercase font-sans line-clamp-1">
              {videoTitle}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/15 bg-white/[0.05] hover:border-[#BA9D6A] hover:bg-white/[0.1] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Close video tour"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Player Container - Height-Constrained for Desktop & Mobile */}
        <div className="relative w-full aspect-video max-h-[56vh] sm:max-h-[62vh] bg-black shrink flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full object-contain"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`}
            title="Nikhar Salon Luxury Experience"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer info bar */}
        <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-[#0E1012] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 text-white/80 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-[#BA9D6A] font-semibold">
              Master Barber Craftsmanship
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-[#A6A29A]">
              <ShieldCheck size={14} className="text-[#BA9D6A]" /> 100% Sanitized & VIP Hospitality
            </span>
          </div>

          <Link
            href="/book-appointment"
            onClick={onClose}
            className="w-full sm:w-auto text-center gold-gradient text-[#0E1012] font-bold text-[10.5px] sm:text-[11px] tracking-[0.12em] uppercase px-4 sm:px-5 py-2 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-xs"
          >
            Reserve Your Experience
          </Link>
        </div>
      </div>
    </div>
  );
}
