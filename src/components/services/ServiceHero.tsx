'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';

export interface ServiceHeroCard {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  icon: 'scissors' | 'beard' | 'facial' | 'spa' | 'patch' | 'scrub' | 'maintenance' | 'color' | 'champi';
  anchorCategory?: string;
}

const HERO_SERVICES: ServiceHeroCard[] = [
  {
    id: 'haircut',
    number: '01',
    category: 'HAIR SERVICES',
    title: 'Hair Cut & Style',
    subtitle: 'Classic cuts to modern styles — crafted for you.',
    image: '/images/services-hero/hero-card-haircut.jpg',
    icon: 'scissors',
    anchorCategory: 'hair',
  },
  {
    id: 'beard',
    number: '02',
    category: 'BEARD CARE',
    title: 'Beard & Shave',
    subtitle: 'Sharp looks. Clean lines. Total grooming.',
    image: '/images/services-hero/hero-card-beard.jpg',
    icon: 'beard',
    anchorCategory: 'beard',
  },
  {
    id: 'facial',
    number: '03',
    category: 'SKIN CARE',
    title: 'Facials',
    subtitle: 'Refresh your skin. Reveal your natural glow.',
    image: '/images/services-hero/hero-card-facial.jpg',
    icon: 'facial',
    anchorCategory: 'skin',
  },
  {
    id: 'spa',
    number: '04',
    category: 'HAIR TREATMENTS',
    title: 'Hair Treatments',
    subtitle: 'Healthy hair. Stronger roots. Longer shine.',
    image: '/images/services-hero/hero-card-spa.jpg',
    icon: 'spa',
    anchorCategory: 'spa',
  },
  {
    id: 'hair-patch',
    number: '05',
    category: 'HAIR REPLACEMENT',
    title: 'Hair Patch System',
    subtitle: '100% natural human hair with invisible hairline.',
    image: '/images/services-hero/hero-card-patch.jpg',
    icon: 'patch',
    anchorCategory: 'hair-patch',
  },
  {
    id: 'scrub',
    number: '06',
    category: 'DE-TAN & PEEL',
    title: 'Facial Scrub & De-Tan',
    subtitle: 'Deep pore exfoliation & sun tan revival therapy.',
    image: '/images/services-hero/hero-card-scrub.jpg',
    icon: 'scrub',
    anchorCategory: 'skin',
  },
  {
    id: 'patch-service',
    number: '07',
    category: 'PATCH MAINTENANCE',
    title: 'Patch Service & Refit',
    subtitle: 'Hygienic scalp cleansing, re-taping & restyling.',
    image: '/images/services-hero/hero-card-service.jpg',
    icon: 'maintenance',
    anchorCategory: 'hair-patch',
  },
  {
    id: 'color',
    number: '08',
    category: 'COLOR & STYLE',
    title: 'Hair Color & Streaks',
    subtitle: 'Ammonia-free tones & natural grey blending.',
    image: '/images/services-hero/hero-card-color.jpg',
    icon: 'color',
    anchorCategory: 'hair',
  },
  {
    id: 'champi',
    number: '09',
    category: 'RELAXATION SPA',
    title: 'Ayurvedic Champi',
    subtitle: 'Warm herbal oil massage for total relaxation.',
    image: '/images/services-hero/hero-card-champi.jpg',
    icon: 'champi',
    anchorCategory: 'spa',
  },
];

// Duplicate cards for seamless infinite right-to-left loop without rewinding
const EXTENDED_SERVICES = [...HERO_SERVICES, ...HERO_SERVICES];

export default function ServiceHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mobile-first default: exactly 1 card visible on initial load
  const [visibleCount, setVisibleCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [bookingService, setBookingService] = useState<string | null>(null);
  const [enableTransition, setEnableTransition] = useState(true);

  // Drag & Touch support
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const hasMovedRef = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalOriginalCards = HERO_SERVICES.length; // 9 cards
  const gap = 16; // 16px gap between cards

  // Dynamically calculate visible cards count based on viewport breakpoints
  // Mobile (<768px): 1 card
  // Tablet (768px–1023px): 2 cards
  // Desktop (1024px+): 3 cards
  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;
      if (vw < 768) {
        setVisibleCount(1); // Mobile: 1 card
      } else if (vw < 1024) {
        setVisibleCount(2); // Tablet: 2 cards
      } else {
        setVisibleCount(3); // Desktop: 3 cards
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Advance next (right-to-left scroll one by one)
  const nextSlide = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Advance prev (left-to-right scroll)
  const prevSlide = useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalOriginalCards - 1;
      }
      return prev - 1;
    });
  }, [totalOriginalCards]);

  // Handle seamless wrap-around when sliding reaches the end of the extended list
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginalCards) {
      // Instantly reset to the identical position in the first set without animation
      setEnableTransition(false);
      setCurrentIndex(currentIndex % totalOriginalCards);
    }
  };

  // Auto-scroll right to left one by one every 3.5 seconds
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    hasMovedRef.current = false;
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
    setEnableTransition(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStartX;
    if (Math.abs(diff) > 6) {
      hasMovedRef.current = true;
    }
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setEnableTransition(true);

    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    hasMovedRef.current = false;
    setDragStartX(e.clientX);
    setDragOffset(0);
    setEnableTransition(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 6) {
      hasMovedRef.current = true;
    }
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setEnableTransition(true);

    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setDragOffset(0);
  };

  // Scroll smoothly to full services menu with fixed navbar offset
  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById('services-menu');
    if (menuEl) {
      const topOffset = menuEl.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  // Dynamic CSS translation based on current visibleCount:
  // Mobile (1 card): -100% per card step
  // Tablet (2 cards): -(100% + 16px) / 2 per card step
  // Desktop (3 cards): -(100% + 16px) / 3 per card step
  const transformStyle = visibleCount === 1
    ? `translate3d(calc(-${currentIndex} * 100% - ${currentIndex * gap}px + ${dragOffset}px), 0, 0)`
    : visibleCount === 2
    ? `translate3d(calc(-${currentIndex} * (100% + ${gap}px) / 2 + ${dragOffset}px), 0, 0)`
    : `translate3d(calc(-${currentIndex} * (100% + ${gap}px) / 3 + ${dragOffset}px), 0, 0)`;

  // Active service index for pagination and indicators (0-8)
  const activeNormalizedIndex = currentIndex % totalOriginalCards;

  return (
    <section className="relative w-full overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 transition-colors duration-300">
      {/* Background Subtle Ambient Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Radial Ambient Gold Glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#BA9D6A]/[0.08] dark:bg-[#BA9D6A]/[0.05] blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] rounded-full bg-[#BA9D6A]/[0.07] dark:bg-[#BA9D6A]/[0.04] blur-[150px]" />

        {/* Elegant Botanical / Luxury Contour Watermark Lines */}
        <svg
          className="absolute -right-12 -bottom-12 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 opacity-25 dark:opacity-10 text-[#8C734B] dark:text-[#BA9D6A]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        >
          <path d="M100 190 C120 140, 160 120, 190 100 C140 100, 120 60, 100 10 C80 60, 60 100, 10 100 C60 120, 80 140, 100 190 Z" />
          <circle cx="100" cy="100" r="70" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="relative max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Main Grid: Left Editorial Column + Right 9-Card Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">

          {/* =========================================================================
              LEFT COLUMN: Editorial Typography, Stats & Explore CTA
              ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-5 sm:space-y-6 pr-0 lg:pr-2 z-10">
            {/* Eyebrow with horizontal accent bar */}
            <div className="inline-flex items-center gap-3">
              <span className="text-[10.5px] sm:text-[11px] uppercase font-bold tracking-[0.28em] text-[#8C734B] dark:text-[#BA9D6A] font-sans">
                OUR SERVICES
              </span>
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#BA9D6A]" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-[40px] xl:text-[50px] font-normal leading-[1.12] text-[#181A1C] dark:text-white tracking-tight">
              More Than Just <br />
              <span className="italic font-serif-luxury text-[#8C734B] dark:text-[#C2A774] font-normal">
                A Haircut.
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#555047] dark:text-[#A6A29A] text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              At Nikhar Salon, we offer a complete range of grooming and beauty services designed to enhance your style,
              boost your confidence, and bring out the best version of you.
            </p>

            {/* Stats Metrics Row */}
            <div className="pt-2 pb-1 border-y border-[#E5E0D8] dark:border-white/[0.08] py-3.5 sm:py-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-[#E5E0D8] dark:divide-white/[0.08]">
                {/* Metric 1 */}
                <div className="text-left">
                  <div className="font-serif-title text-xl sm:text-2xl lg:text-3xl text-[#181A1C] dark:text-white font-normal">
                    6<span className="text-[#8C734B] dark:text-[#BA9D6A] text-base sm:text-xl">+</span>
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] text-[#7D776D] dark:text-[#A6A29A] uppercase tracking-wider mt-0.5 font-medium leading-tight">
                    Service Categories
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="pl-2.5 sm:pl-3.5 text-left">
                  <div className="font-serif-title text-xl sm:text-2xl lg:text-3xl text-[#181A1C] dark:text-white font-normal">
                    25<span className="text-[#8C734B] dark:text-[#BA9D6A] text-base sm:text-xl">+</span>
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] text-[#7D776D] dark:text-[#A6A29A] uppercase tracking-wider mt-0.5 font-medium leading-tight">
                    Expert Stylists
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="pl-2.5 sm:pl-3.5 text-left">
                  <div className="font-serif-title text-xl sm:text-2xl lg:text-3xl text-[#181A1C] dark:text-white font-normal">
                    100<span className="text-[#8C734B] dark:text-[#BA9D6A] text-base sm:text-xl">%</span>
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] text-[#7D776D] dark:text-[#A6A29A] uppercase tracking-wider mt-0.5 font-medium leading-tight">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Explore CTA Button with Circle Arrow */}
            <div className="pt-1.5 flex items-center gap-4">
              <button
                onClick={handleExploreClick}
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider text-[#181A1C] dark:text-white hover:text-[#8C734B] dark:hover:text-[#BA9D6A] transition-colors cursor-pointer select-none"
              >
                {/* Circular Arrow Button Icon */}
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D9D4CB] dark:border-white/20 flex items-center justify-center group-hover:border-[#BA9D6A] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="font-medium">Explore All Services</span>
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 9-Card Carousel Contained Within Right Width
              - Mobile (<768px): 100% full width, single card at a time from frame 0
              - Tablet (md: 768–1023px): 2 cards
              - Desktop (lg: 1024px+): 3 cards
              - Pure CSS responsive sizing guarantees ZERO layout flash on reload
              ========================================================================= */}
          <div
            className="lg:col-span-7 xl:col-span-8 min-w-0 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              if (isDragging) handleMouseUp();
            }}
          >
            {/* Outer wrapper with flex for cards + optional wide screen editorial banner */}
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-4 2xl:gap-6">
              {/* Cards Container with overflow-hidden */}
              <div
                ref={containerRef}
                className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {/* Sliding Track */}
                <div
                  className="flex"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: transformStyle,
                    transition: enableTransition && !isDragging
                      ? 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1)'
                      : 'none',
                    gap: `${gap}px`,
                  }}
                >
                  {EXTENDED_SERVICES.map((card, idx) => {
                    const originalIdx = idx % totalOriginalCards;
                    const isActive = originalIdx === activeNormalizedIndex;

                    return (
                      <div
                        key={`${card.id}-${idx}`}
                        className={`group relative flex flex-col justify-between rounded-[20px] overflow-hidden transition-[border-color,box-shadow,background-color] duration-300 w-full min-w-full flex-[0_0_100%] md:min-w-0 md:w-[calc((100%-16px)/2)] md:flex-[0_0_calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)] lg:flex-[0_0_calc((100%-32px)/3)] ${
                          /* Dark mode styles */
                          'dark:bg-[#15171A] ' +
                          (isActive
                            ? 'dark:border dark:border-[#BA9D6A] dark:shadow-[0_4px_24px_rgba(186,157,106,0.22)] '
                            : 'dark:border dark:border-white/[0.08] dark:hover:border-[#BA9D6A]/50 ') +
                          /* Light mode styles */
                          'bg-white ' +
                          (isActive
                            ? 'border border-[#BA9D6A] shadow-[0_8px_26px_rgba(186,157,106,0.18)] '
                            : 'border border-[#E5E0D8] hover:border-[#BA9D6A]/60 shadow-[0_6px_20px_rgba(0,0,0,0.04)] ')
                        }`}
                      >
                        {/* Top Image Section: Proportional, sleek height on all devices */}
                        <div className="relative h-[200px] sm:h-[215px] md:h-[170px] lg:h-[185px] xl:h-[195px] w-full overflow-hidden bg-[#ECE8E1] dark:bg-[#1C1F23]">
                          {/* Image */}
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={idx < 4}
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />

                          {/* Card Top Left Number (01, 02, etc.) */}
                          <div className="absolute top-3 left-3.5 z-10">
                            <span className="font-serif-title text-xs sm:text-sm font-normal tracking-widest text-[#BA9D6A] dark:text-[#C2A774] drop-shadow-sm">
                              {card.number}
                            </span>
                          </div>

                          {/* Left Rotated Vertical Category Label */}
                          <div className="absolute top-9 left-3.5 z-10 [writing-mode:vertical-lr] rotate-180">
                            <span className="text-[8px] sm:text-[8.5px] uppercase tracking-[0.24em] font-semibold text-white/80 dark:text-white/70 drop-shadow-md whitespace-nowrap">
                              {card.category}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Content Area: Compact, clean, and balanced */}
                        <div className="p-3.5 sm:p-4 pt-2.5 sm:pt-3 flex flex-col justify-between flex-grow">
                          <div className="space-y-1">
                            <h3 className="font-serif-title text-[14.5px] sm:text-[15.5px] lg:text-base font-normal text-[#181A1C] dark:text-white group-hover:text-[#8C734B] dark:group-hover:text-[#BA9D6A] transition-colors leading-snug">
                              {card.title}
                            </h3>
                            <p className="text-[11px] sm:text-[11.5px] text-[#555047] dark:text-[#A6A29A] leading-snug line-clamp-2">
                              {card.subtitle}
                            </p>
                          </div>

                          {/* Card Footer: Action Arrow Button */}
                          <div className="pt-2.5 sm:pt-3 flex items-center justify-between border-t border-[#E5E0D8]/60 dark:border-white/[0.06] mt-2.5">
                            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-semibold text-[#8C734B] dark:text-[#BA9D6A]">
                              Book Service
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!hasMovedRef.current) {
                                  setBookingService(card.title);
                                }
                              }}
                              className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full border border-[#D9D4CB] dark:border-white/15 bg-[#FAF8F5] dark:bg-[#1C1F23] flex items-center justify-center text-[#181A1C] dark:text-white group-hover:bg-[#BA9D6A] group-hover:border-[#BA9D6A] group-hover:text-[#0E1012] group-hover:scale-105 transition-all duration-300 shadow-xs cursor-pointer"
                              aria-label={`Book ${card.title}`}
                            >
                              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side Editorial Promo for Wide 2XL screens */}
              <div className="hidden 2xl:flex flex-col justify-between shrink-0 w-32 py-3 px-1 space-y-3">
                <div className="space-y-2.5">
                  {/* Editorial Tagline */}
                  <p className="font-serif-title text-sm leading-tight text-[#181A1C] dark:text-white font-normal">
                    Because <br />
                    <span className="italic font-serif-luxury text-[#8C734B] dark:text-[#C2A774]">
                      You Deserve
                    </span> <br />
                    the Best.
                  </p>

                  <div className="text-[8.5px] uppercase tracking-[0.2em] font-semibold text-[#7D776D] dark:text-[#A6A29A] leading-tight">
                    PREMIUM SERVICES <br /> FOR YOU
                  </div>
                </div>

                {/* Circular Forward Slider Button */}
                <button
                  type="button"
                  onClick={nextSlide}
                  className="group w-9 h-9 rounded-full border border-[#D9D4CB] dark:border-white/20 bg-white dark:bg-[#141619] flex items-center justify-center text-[#181A1C] dark:text-white hover:bg-[#BA9D6A] hover:border-[#BA9D6A] hover:text-[#0E1012] hover:scale-105 transition-all duration-300 shadow-xs cursor-pointer"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Bottom Slider Navigation & Pagination Row */}
            <div className="mt-4 sm:mt-5 flex items-center justify-between px-1">
              {/* Pagination Dots & Step Indicator */}
              <div className="flex items-center gap-2">
                <span className="font-serif-title text-xs font-semibold text-[#8C734B] dark:text-[#BA9D6A]">
                  {String(activeNormalizedIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-[#7D776D] dark:text-white/30">/</span>
                <span className="text-xs text-[#7D776D] dark:text-white/40">
                  {String(totalOriginalCards).padStart(2, '0')}
                </span>

                {/* Dots indicator (all 9 services) */}
                <div className="hidden sm:flex items-center gap-1.5 ml-3">
                  {HERO_SERVICES.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => {
                        setEnableTransition(true);
                        setCurrentIndex(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeNormalizedIndex === i
                          ? 'w-5 bg-[#BA9D6A]'
                          : 'w-1.5 bg-[#D9D4CB] dark:bg-white/20 hover:bg-[#BA9D6A]/50'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next Circular Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-[#D9D4CB] dark:border-white/20 bg-white dark:bg-[#141619] flex items-center justify-center text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] transition-all cursor-pointer shadow-2xs active:scale-95"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-[#D9D4CB] dark:border-white/20 bg-white dark:bg-[#141619] flex items-center justify-center text-[#181A1C] dark:text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] transition-all cursor-pointer shadow-2xs active:scale-95"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Ultra-Premium Appointment Modal Dialog */}
      {bookingService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm sm:backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setBookingService(null)}
        >
          <div
            className="relative w-full sm:w-[96vw] max-w-6xl xl:max-w-7xl h-[96vh] sm:h-[92vh] flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.85)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <AppointmentModal
              defaultService={bookingService}
              onClose={() => setBookingService(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}