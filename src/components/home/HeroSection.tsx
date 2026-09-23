'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/data/home';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Hero Carousel Auto Slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
      className="relative isolate min-h-[520px] max-h-[82dvh] sm:max-h-none sm:min-h-[100dvh] w-full flex flex-col justify-between pt-16 pb-3 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-10 overflow-hidden select-none border-b border-[#E5E0D8] dark:border-white/[0.08]"
    >
      {/* Background Image Carousel with Atmospheric Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Clean Cinematic Dark Overlays for Readability & Contrast */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/30 to-black/90 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50 z-10" />
      </div>

      {/* Hero Center Content - snug fit on mobile */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-3.5 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center my-auto py-1 sm:py-4">
        {/* Gold Pill Badge with Vertical Accent Lines */}
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 animate-in fade-in duration-500">
          <div className="h-2.5 sm:h-3.5 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[9px] sm:text-[11.5px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-[#BA9D6A] uppercase font-sans">
            {HERO_SLIDES[currentSlide].subtitle}
          </span>
          <div className="h-2.5 sm:h-3.5 w-[2px] bg-[#BA9D6A]" />
        </div>

        {/* Grand Heading */}
        <h1 className="font-serif-title text-[26px] sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-[-0.03em] text-white leading-[1.12] sm:leading-[1.05] max-w-4xl drop-shadow-xl transition-opacity duration-500 px-1">
          {HERO_SLIDES[currentSlide].title}
        </h1>

        {/* Subtext */}
        <p className="mt-2 sm:mt-4 max-w-xl sm:max-w-2xl text-[12px] sm:text-base md:text-lg font-normal leading-relaxed text-white/90 drop-shadow px-2 sm:px-0">
          {HERO_SLIDES[currentSlide].desc}
        </p>

        {/* Primary Action Buttons: Mobile compact layout, Desktop row */}
        <div className="w-full max-w-xs sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-7">
          {/* 1. Primary CTA: Book Slot Now */}
          <Link
            href="/book-appointment"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] hover:brightness-110 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-[0.08em] sm:tracking-[0.1em] text-[#141619] uppercase transition-[transform,filter] duration-200 shadow-md shadow-[#BA9D6A]/30 cursor-pointer active:scale-95"
          >
            <Calendar className="size-3.5 sm:size-4 text-[#141619]" />
            <span>Book Slot Now</span>
            <ArrowRight className="size-3.5 sm:size-4 text-[#141619] group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary actions: 2 side-by-side columns on mobile */}
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-4">
            {/* 2. Secondary CTA: Watch Salon Experience */}
            <button
              type="button"
              onClick={() => {
                document.getElementById('craftsmanship-experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-1.5 sm:gap-2.5 rounded-full border border-white/20 bg-black/45 hover:bg-white/[0.12] hover:border-[#BA9D6A] px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-white transition-colors backdrop-blur-md cursor-pointer shadow-md active:scale-95 text-center"
            >
              <div className="size-5 sm:size-6 rounded-full bg-[#BA9D6A] text-[#0E1012] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs shrink-0">
                <Play size={10} fill="currentColor" className="ml-0.5" />
              </div>
              <span className="group-hover:text-[#BA9D6A] transition-colors truncate">Watch Salon</span>
            </button>

            {/* 3. Concierge: WhatsApp Direct */}
            <a
              href="https://wa.me/919784711323?text=Hello%20Nikhar%20Salon!%20I%20would%20like%20to%20book%20a%20grooming%20slot."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-black/45 hover:bg-white/[0.12] hover:border-[#25D366] px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-white transition-[border-color,transform] backdrop-blur-md cursor-pointer shadow-md hover:scale-105 active:scale-95 text-center"
            >
              <WhatsAppIcon size={16} variant="authentic" />
              <span className="group-hover:text-[#25D366] transition-colors truncate">
                WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Luxury Trust Micro-Badges - clean single/two compact rows */}
        <div className="mt-3.5 sm:mt-7 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 sm:gap-6 text-[10px] sm:text-xs text-white/80 tracking-wider">
          <div className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#BA9D6A]" />
            <span className="font-medium">100% Undetectable Hairline</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#BA9D6A]" />
            <span className="font-medium">Zero-Wait Chair Booking</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#BA9D6A]" />
            <span className="font-medium">Master Hair & Beard Artisans</span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Carousel Controls */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-12 mt-2 sm:mt-6 pt-1 sm:pt-0">
        <div className="flex items-center justify-between text-xs tracking-widest text-white/80">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-3 sm:h-4 w-[1px] bg-[#BA9D6A]" />
            <span className="text-[9px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 whitespace-nowrap">
              SCROLL TO DISCOVER
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#BA9D6A] font-medium">
            <span>LUXURY GROOMING</span>
            <span>•</span>
            <span>KOTA, RAJASTHAN</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Interactive slide indicators */}
            <div className="flex items-center gap-1 sm:gap-1.5 mr-1 sm:mr-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-1 sm:h-1.5 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-5 sm:w-7 bg-[#BA9D6A]'
                      : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <span className="font-sans text-[10px] sm:text-xs tracking-wider text-white/90 tabular-nums">
              0{currentSlide + 1} <span className="text-[#BA9D6A] mx-0.5 sm:mx-1">—</span> 0{HERO_SLIDES.length}
            </span>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/35 bg-black/40 backdrop-blur-md text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] active:scale-90 transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={13} className="sm:hidden" />
                <ChevronLeft size={16} className="hidden sm:block" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/35 bg-black/40 backdrop-blur-md text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] active:scale-90 transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={13} className="sm:hidden" />
                <ChevronRight size={16} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

