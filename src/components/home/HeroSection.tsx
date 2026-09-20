'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Scissors, ArrowRight, Play, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { HERO_SLIDES } from '@/data/home';
import VideoTourModal from '@/components/VideoTourModal';
import AppointmentModal from '@/components/AppointmentModal';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Quick Booking Widget state
  const [quickService, setQuickService] = useState('Haircut & Styling');
  const [quickDate, setQuickDate] = useState('');
  const [quickStylist, setQuickStylist] = useState('Master Stylist');

  // Hero Carousel Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <section className="relative isolate min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-10 overflow-hidden select-none border-b border-[#E5E0D8] dark:border-white/[0.08]">
        {/* Background Image Carousel with Atmospheric Gradient Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
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

          {/* Clean Cinematic Dark Overlays (Zero hazy/milky bottom washout) */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/85 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45 z-10" />
        </div>

        {/* Hero Center Content */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center my-auto pt-4 sm:pt-6">
          {/* Amaia-style Gold Pill Badge with Vertical Accent Lines */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 animate-in fade-in duration-500">
            <div className="h-3 sm:h-3.5 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase font-sans">
              {HERO_SLIDES[currentSlide].subtitle}
            </span>
            <div className="h-3 sm:h-3.5 w-[2px] bg-[#BA9D6A]" />
          </div>

          {/* Grand Heading in DM Serif Display */}
          <h1 className="font-serif-title text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-[-0.03em] text-white leading-[1.1] sm:leading-[1.05] max-w-4xl drop-shadow-lg transition-all duration-500">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Subtext */}
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base md:text-lg font-normal leading-relaxed text-white/90 drop-shadow px-2 sm:px-0">
            {HERO_SLIDES[currentSlide].desc}
          </p>

          {/* ===================================================================== */}
          {/* AMAIA-STYLE QUICK APPOINTMENT / FILTER WIDGET */}
          {/* ===================================================================== */}
          <div className="w-full max-w-4xl mt-6 sm:mt-8">
            <div className="w-full rounded-2xl md:rounded-3xl bg-[#F5F2ED] dark:bg-[#141619]/95 backdrop-blur-xl p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#E5E0D8] dark:border-[#BA9D6A]/30 transition-colors duration-300">
              <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-3 md:gap-4 items-end text-left">
                {/* 1. Service Picker */}
                <div className="relative lg:col-span-4">
                  <label className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] mb-1 sm:mb-1.5 pl-1">
                    Signature Service
                  </label>
                  <div className="relative">
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full rounded-xl border border-[#D9D4CB] dark:border-white/[0.1] bg-[#ECE8E1]/80 dark:bg-[#181A1C] hover:bg-[#ECE8E1] hover:border-[#BA9D6A]/60 dark:hover:border-[#BA9D6A]/50 px-3.5 py-2.5 sm:py-3 text-xs md:text-sm font-medium text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer pr-9"
                    >
                      <option value="Non-Surgical Hair Patch System" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white font-semibold">★ Non-Surgical Hair Patch (Primary)</option>
                      <option value="Hair Patch Service & Maintenance" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Hair Patch Servicing (₹499)</option>
                      <option value="Haircut & Styling" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Executive Haircut & Styling (₹350)</option>
                      <option value="Beard Grooming" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Royal Beard Sculpting (₹200)</option>
                      <option value="Facial Care" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Charcoal Detox Facial (₹800)</option>
                      <option value="Hair Treatment" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Keratin Hair Spa (₹950)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8C734B] dark:text-[#BA9D6A]">
                      <Scissors size={14} />
                    </div>
                  </div>
                </div>

                {/* 2. Barber / Stylist */}
                <div className="relative lg:col-span-3">
                  <label className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] mb-1 sm:mb-1.5 pl-1">
                    Master Stylist
                  </label>
                  <div className="relative">
                    <select
                      value={quickStylist}
                      onChange={(e) => setQuickStylist(e.target.value)}
                      className="w-full rounded-xl border border-[#D9D4CB] dark:border-white/[0.1] bg-[#ECE8E1]/80 dark:bg-[#181A1C] hover:bg-[#ECE8E1] hover:border-[#BA9D6A]/60 dark:hover:border-[#BA9D6A]/50 px-3.5 py-2.5 sm:py-3 text-xs md:text-sm font-medium text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer pr-9"
                    >
                      <option value="Any Master Stylist" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Any Master Stylist</option>
                      <option value="Firoz Khan" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Firoz Khan (Owner / Founder)</option>
                      <option value="Rahul Verma" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Rahul Verma (Beard)</option>
                      <option value="Sameer Khan" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Sameer Khan (Skin)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8C734B] dark:text-[#BA9D6A]">
                      <User size={14} />
                    </div>
                  </div>
                </div>

                {/* 3. Preferred Date */}
                <div className="relative lg:col-span-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#7D776D] dark:text-[#A6A29A] mb-1 sm:mb-1.5 pl-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full rounded-xl border border-[#D9D4CB] dark:border-white/[0.1] bg-[#ECE8E1]/80 dark:bg-[#181A1C] hover:border-[#BA9D6A]/60 dark:hover:border-[#BA9D6A]/50 px-3 py-2.5 sm:py-3 text-xs md:text-sm font-medium text-[#181A1C] dark:text-white focus:outline-none focus:border-[#BA9D6A] cursor-pointer"
                  />
                </div>

                {/* 4. Action Button */}
                <div className="lg:col-span-3 sm:col-span-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] hover:brightness-105 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.1em] text-[#141619] uppercase transition-all duration-200 shadow-md shadow-[#BA9D6A]/25 cursor-pointer active:scale-98"
                  >
                    <span>Reserve Slot</span>
                    <ArrowRight className="h-4 w-4 text-[#141619] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Buttons: Watch Video & Real WhatsApp Concierge */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/45 hover:bg-white/[0.1] hover:border-[#BA9D6A] px-4.5 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all backdrop-blur-md cursor-pointer shadow-md active:scale-95"
            >
              <div className="h-6 w-6 rounded-full bg-[#BA9D6A] text-[#0E1012] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Play size={11} fill="currentColor" className="ml-0.5" />
              </div>
              <span className="group-hover:text-[#BA9D6A] transition-colors">Watch Salon Experience</span>
            </button>

            <a
              href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20would%20like%20to%20inquire%20about%20a%20grooming%20appointment."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/45 hover:bg-white/[0.1] hover:border-[#BA9D6A] px-4.5 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all backdrop-blur-md cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon size={20} variant="authentic" />
              <span className="group-hover:text-[#BA9D6A] transition-colors">
                WhatsApp Concierge
              </span>
            </a>
          </div>
        </div>

        {/* Hero Bottom Bar: Scroll Indicator & Carousel Controls (Amaia Reference) */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 mt-4 sm:mt-6">
          <div className="flex items-center justify-between text-xs tracking-widest text-white/80">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-3.5 sm:h-4 w-[1px] bg-[#BA9D6A]" />
              <span className="text-[9.5px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 whitespace-nowrap">
                SCROLL TO DISCOVER
              </span>
            </div>

            <div className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-[#BA9D6A] font-medium">
              LUXURY GROOMING • KOTA, RAJASTHAN
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <span className="font-sans text-[11px] sm:text-xs tracking-wider text-white/90 tabular-nums">
                0{currentSlide + 1} <span className="text-[#BA9D6A] mx-0.5 sm:mx-1">—</span> 0{HERO_SLIDES.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/35 bg-black/40 backdrop-blur-md text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] active:scale-90 transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/35 bg-black/40 backdrop-blur-md text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] active:scale-90 transition-all cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Modal Dialog */}
      <VideoTourModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      {/* Interactive Booking Modal Dialog (Triggered from Quick Widget) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-2xl">
            <AppointmentModal 
              defaultService={quickService} 
              onClose={() => setIsBookingModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </>
  );
}
