'use client';

import { useEffect, useRef } from 'react';
import { X, ShieldCheck } from 'lucide-react';
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
  videoTitle = 'Nikhar Mens Parlour • The Cinematic Experience',
}: VideoTourModalProps) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-5 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 hidden sm:block" 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Modal Dialog Box - Mobile Full-Height & Desktop Centered Card */}
      <div 
        data-lenis-prevent
        className="relative w-full h-[100dvh] sm:h-auto max-w-full sm:max-w-3xl md:max-w-4xl sm:max-h-[90vh] bg-[#141619] border-0 sm:border border-[#BA9D6A]/50 rounded-none sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col my-auto transition-opacity duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-white/[0.08] bg-[#0E1012] shrink-0 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] sm:pt-3.5">
          <div className="flex items-center gap-2 pr-2 overflow-hidden">
            <span className="size-2 rounded-full bg-[#BA9D6A] shrink-0 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.15em] text-[#BA9D6A] uppercase font-sans truncate">
              {videoTitle}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full border border-white/15 bg-white/[0.08] hover:border-[#BA9D6A] hover:bg-white/[0.15] text-white/90 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 active:scale-95"
            aria-label="Close video tour"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Container - Mobile Full-Height Flex & Desktop Aspect Video */}
        <div className="relative w-full flex-1 sm:flex-initial sm:aspect-video sm:max-h-[62vh] bg-black flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full object-contain"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer info bar */}
        <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-[#0E1012] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs shrink-0 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] sm:pb-3">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-4 text-white/80 text-[10.5px] sm:text-xs w-full sm:w-auto">
            <span className="flex items-center gap-1.5 text-[#BA9D6A] font-semibold">
              Master Barber Craftsmanship
            </span>
            <span className="inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-[#A6A29A]">
              <ShieldCheck size={13} className="text-[#BA9D6A]" /> 100% Sanitized & VIP
            </span>
          </div>

          <Link
            href="/book-appointment"
            onClick={onClose}
            className="w-full sm:w-auto text-center gold-gradient text-[#0E1012] font-bold text-[11px] sm:text-xs tracking-[0.12em] uppercase px-5 py-2.5 sm:py-2 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Reserve Your Experience
          </Link>
        </div>
      </div>
    </div>
  );
}
