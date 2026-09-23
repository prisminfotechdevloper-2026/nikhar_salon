'use client';

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { REVIEWS } from '@/data/home';

function subscribeDesktopMedia(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mql = window.matchMedia('(min-width: 768px)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getDesktopSnapshot(): boolean {
  return typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false;
}

function getServerDesktopSnapshot(): boolean {
  return false;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const isDesktop = useSyncExternalStore(
    subscribeDesktopMedia,
    getDesktopSnapshot,
    getServerDesktopSnapshot
  );

  const visibleCards = isDesktop ? 3 : 1;
  const maxIndex = Math.max(0, REVIEWS.length - visibleCards);

  // Next / Previous Navigation
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNextRef = useRef(handleNext);
  useEffect(() => {
    handleNextRef.current = handleNext;
  });

  // Auto-play interval (4.5s) with pause on hover & respect prefers-reduced-motion
  useEffect(() => {
    if (isPaused) return;
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) return;
    } catch {}

    const timer = setInterval(() => {
      handleNextRef.current();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 bg-[#F5F2ED] dark:bg-[#141619] border-b border-[#E5E0D8] dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 size-[450px] rounded-full bg-[#BA9D6A]/[0.05] blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Row with Title & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#8C734B] dark:text-[#BA9D6A] uppercase font-sans">
                TESTIMONIALS
              </span>
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#181A1C] dark:text-white font-normal leading-tight">
              Trusted by Kota&apos;s Gentlemen
            </h2>
            <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] leading-relaxed">
              Real experiences from clients who rely on Nikhar Salon for precision barbering, beard styling, and revitalizing skin treatments.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs text-[#7D776D] dark:text-[#A6A29A] font-sans tracking-wider hidden sm:inline">
              <span className="text-[#181A1C] dark:text-white font-semibold tabular-nums">0{currentIndex + 1}</span> / 0{maxIndex + 1}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="size-10 rounded-full border border-[#D9D4CB] dark:border-white/20 bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#8C734B] dark:hover:text-[#BA9D6A] flex items-center justify-center transition-colors duration-200 active:scale-95 cursor-pointer shadow-xs"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="size-10 rounded-full border border-[#D9D4CB] dark:border-white/20 bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#8C734B] dark:hover:text-[#BA9D6A] flex items-center justify-center transition-colors duration-200 active:scale-95 cursor-pointer shadow-xs"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Track */}
        <div 
          className="overflow-hidden relative -mx-2 sm:-mx-3 [--cards-per-view:1] md:[--cards-per-view:3]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(-1 * ${currentIndex} * (100% / var(--cards-per-view, 1))))`,
            }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="w-full md:w-1/3 shrink-0 p-2 sm:p-3 flex"
              >
                <div className="w-full bg-white dark:bg-[#181A1C] border border-[#E5E0D8] dark:border-white/[0.08] hover:border-[#BA9D6A]/60 rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-[border-color,box-shadow] duration-300 shadow-xs hover:shadow-md dark:shadow-xl group relative overflow-hidden">
                  {/* Decorative Background Watermark Quote */}
                  <Quote 
                    size={72} 
                    className="absolute -right-2 -bottom-2 text-black/[0.02] dark:text-white/[0.02] pointer-events-none group-hover:text-[#BA9D6A]/[0.06] transition-colors" 
                  />

                  {/* Top: Stars & Quote Icon */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1 text-[#BA9D6A]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="#BA9D6A" className="text-[#BA9D6A]" />
                        ))}
                        <span className="text-[11px] font-semibold text-[#8C734B] dark:text-[#BA9D6A] ml-1.5 font-sans">5.0</span>
                      </div>
                      <div className="size-7 rounded-full bg-[#BA9D6A]/10 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center">
                        <Quote size={13} className="fill-current" />
                      </div>
                    </div>

                    {/* Feedback Quote */}
                    <blockquote className="font-serif-title text-sm sm:text-base text-[#181A1C] dark:text-white/90 leading-relaxed italic line-clamp-4 min-h-[4.5rem]">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                  </div>

                  {/* Bottom: Client Profile */}
                  <div className="pt-5 mt-5 border-t border-[#EAE5DC] dark:border-white/[0.07] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative size-11 rounded-full overflow-hidden border-2 border-[#BA9D6A] shrink-0 shadow-xs">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-serif-title text-base text-[#181A1C] dark:text-white font-medium truncate">
                          {review.name}
                        </h4>
                        <p className="text-[11px] text-[#8C734B] dark:text-[#BA9D6A] font-semibold tracking-wide truncate">
                          {review.service}
                        </p>
                        <p className="text-[10px] text-[#7D776D] dark:text-[#A6A29A] flex items-center gap-1 truncate mt-0.5">
                          <MapPin size={10} className="shrink-0 text-[#BA9D6A]" />
                          <span className="truncate">{review.location}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 bg-[#BA9D6A]'
                  : 'w-2 bg-[#D9D4CB] dark:bg-white/20 hover:bg-[#BA9D6A]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
