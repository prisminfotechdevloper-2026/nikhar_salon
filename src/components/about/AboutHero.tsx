'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, Play, Scissors } from 'lucide-react';

export default function AboutHero() {
  return (
    <section id="story" className="relative overflow-hidden rounded-3xl border border-[#E5E0D8] bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 xl:p-12 transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#121417] shadow-sm dark:shadow-2xl">
      {/* Background Decorative Arcs (Bottom Left & Bottom Right) */}
      <svg
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 text-[#BA9D6A]/20 dark:text-[#BA9D6A]/10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="0" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
        <circle cx="0" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      <svg
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 text-[#BA9D6A]/15 dark:text-[#BA9D6A]/10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Main Grid: Left Ribbon + Content Area + Stats Column + Right Graphic Area */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-8 xl:gap-10 items-stretch">
        {/* ========================================================================= */}
        {/* 1. FAR LEFT VERTICAL RIBBON (ABOUT / NIKHAR)                             */}
        {/* ========================================================================= */}
        <div className="hidden xl:flex flex-col items-center justify-center gap-4 pr-7 border-r border-[#E5E0D8] dark:border-white/[0.08] shrink-0 select-none">
          <span className="h-1.5 w-1.5 rounded-full bg-[#BA9D6A]" />
          <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-[#7D776D] dark:text-[#A6A29A] [writing-mode:vertical-rl] rotate-180">
            ABOUT / NIKHAR
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#BA9D6A]" />
        </div>

        {/* Mobile / Tablet Horizontal Tag (Visible below XL) */}
        <div className="flex xl:hidden items-center gap-2 text-[#7D776D] dark:text-[#A6A29A] font-mono text-[10px] uppercase tracking-[0.22em]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#BA9D6A]" />
          <span>ABOUT / NIKHAR</span>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN STORY CONTENT (Left Side)                                        */}
        {/* ========================================================================= */}
        <div className="flex-1 space-y-5 lg:space-y-6 max-w-xl">
          {/* Eyebrow with extending line */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.24em] text-[#8C734B] dark:text-[#BA9D6A]">
              MORE THAN A SALON
            </span>
            <div className="h-[1px] w-14 sm:w-20 bg-[#D9D4CB] dark:bg-white/20" />
          </div>

          {/* Grand Headline */}
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] leading-[1.08] text-[#181A1C] dark:text-white font-normal">
            Where Grooming <br />
            Becomes{' '}
            <span className="italic font-serif text-[#8C734B] dark:text-[#BA9D6A]">
              Personal.
            </span>
          </h1>

          {/* Descriptive Body */}
          <p className="text-xs sm:text-[13px] md:text-sm text-[#555047] dark:text-[#A6A29A] leading-relaxed max-w-md">
            At Nikhar Salon, we believe grooming is not just about appearance, it&apos;s about confidence, self-care and expressing your unique style. Our expert team is here to help you look and feel your best, every single day.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary Gold CTA */}
            <Link
              href="/book-appointment"
              className="gold-gradient inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 text-xs sm:text-[12px] font-bold tracking-wider uppercase text-[#0E1012] shadow-md shadow-[#BA9D6A]/20 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
            >
              <Calendar size={14} className="text-[#0E1012]" />
              <span>Book Appointment</span>
              <ArrowRight size={14} className="text-[#0E1012]" />
            </Link>

            {/* Secondary Circle Play CTA */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 text-xs sm:text-[12px] font-semibold text-[#181A1C] dark:text-white hover:text-[#BA9D6A] transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D4CB] bg-white text-[#181A1C] shadow-2xs group-hover:border-[#BA9D6A] group-hover:text-[#BA9D6A] group-hover:scale-105 transition-all dark:border-white/20 dark:bg-white/[0.06] dark:text-white">
                <Play size={11} className="ml-0.5 fill-current text-[#BA9D6A]" />
              </span>
              <span className="border-b border-transparent group-hover:border-[#BA9D6A] transition-all">
                Explore Services
              </span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-[#7D776D] group-hover:text-[#BA9D6A]" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MIDDLE STATS COLUMN (Separated by Vertical Border)                    */}
        {/* ========================================================================= */}
        <div className="border-t lg:border-t-0 lg:border-l border-[#E5E0D8] dark:border-white/[0.08] pt-6 lg:pt-0 lg:pl-7 xl:pl-8 flex flex-row lg:flex-col justify-between lg:justify-center gap-6 lg:gap-7 shrink-0">
          {/* Stat 1 */}
          <div className="space-y-0.5">
            <span className="font-serif-title text-2xl sm:text-3xl lg:text-[34px] text-[#181A1C] dark:text-white font-medium block">
              10+
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#7D776D] dark:text-[#A6A29A] font-medium leading-tight block">
              Years<br className="hidden sm:inline" /> of Experience
            </span>
          </div>

          <div className="hidden lg:block h-[1px] w-20 bg-[#E5E0D8] dark:bg-white/[0.08]" />

          {/* Stat 2 */}
          <div className="space-y-0.5">
            <span className="font-serif-title text-2xl sm:text-3xl lg:text-[34px] text-[#181A1C] dark:text-white font-medium block">
              500+
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#7D776D] dark:text-[#A6A29A] font-medium leading-tight block">
              Happy<br className="hidden sm:inline" /> Clients
            </span>
          </div>

          <div className="hidden lg:block h-[1px] w-20 bg-[#E5E0D8] dark:bg-white/[0.08]" />

          {/* Stat 3 */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-serif-title text-2xl sm:text-3xl lg:text-[34px] text-[#181A1C] dark:text-white font-medium">
                5.0
              </span>
              <span className="text-[#BA9D6A] text-base sm:text-lg">★</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-[#7D776D] dark:text-[#A6A29A] font-medium leading-tight block">
              Average<br className="hidden sm:inline" /> Rating
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. RIGHT ARCHITECTURAL LINE-ART GRAPHIC & INDEX NAVIGATION               */}
        {/* ========================================================================= */}
        <div className="border-t lg:border-t-0 lg:border-l border-[#E5E0D8] dark:border-white/[0.08] pt-6 lg:pt-0 lg:pl-7 xl:pl-8 flex-1 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] relative">
          {/* Top Row: Arch Line Art & Header Tag */}
          <div className="flex items-start justify-between">
            {/* Center-Left Arch Wireframe Graphic */}
            <div className="relative w-36 sm:w-44 h-52 sm:h-60 select-none">
              <svg
                viewBox="0 0 160 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#BA9D6A]/50 dark:text-[#BA9D6A]/35"
                aria-hidden="true"
              >
                {/* Outer Arch Dome */}
                <path
                  d="M 20 220 V 90 A 60 60 0 0 1 140 90 V 220"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                {/* Inner Arch Dome */}
                <path
                  d="M 35 220 V 105 A 45 45 0 0 1 125 105 V 220"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />
                {/* Vertical Center Axis Line */}
                <line x1="80" y1="10" x2="80" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="140" x2="80" y2="220" stroke="currentColor" strokeWidth="1" />

                {/* Top Diamond Emblem */}
                <polygon points="80,24 84,32 80,40 76,32" fill="#BA9D6A" />

                {/* Central Circle around Scissors */}
                <circle cx="80" cy="105" r="32" stroke="currentColor" strokeWidth="0.8" />
              </svg>

              {/* Gold Scissors in the center of the arch */}
              <div className="absolute top-[82px] left-[58px] sm:top-[96px] sm:left-[70px] -translate-x-1/2 -translate-y-1/2">
                <Scissors className="h-8 w-8 sm:h-9 sm:w-9 text-[#8C734B] dark:text-[#BA9D6A] transform -rotate-45" />
              </div>
            </div>

            {/* Top Right Studio Tag & Index 01 */}
            <div className="text-right space-y-4">
              <span className="font-mono text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.24em] text-[#7D776D] dark:text-[#A6A29A] leading-tight block">
                PREMIUM<br />HAIR &amp; BEAUTY<br />STUDIO
              </span>

              {/* Big Watermark Index Number */}
              <span className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-[#181A1C]/20 dark:text-white/20 font-light block select-none">
                01
              </span>

              {/* Index Navigation Items */}
              <div className="space-y-1.5 text-right font-sans">
                <a
                  href="#story"
                  className="flex items-center justify-end gap-2 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C734B] dark:text-[#BA9D6A]"
                >
                  <span className="text-[9.5px] font-mono opacity-80">01</span>
                  <span>Our Story</span>
                </a>
                <a
                  href="#founder"
                  className="flex items-center justify-end gap-2 text-[10.5px] sm:text-[11px] font-medium uppercase tracking-wider text-[#7D776D] hover:text-[#8C734B] dark:text-[#A6A29A] dark:hover:text-[#BA9D6A] transition-colors"
                >
                  <span className="text-[9.5px] font-mono opacity-70">02</span>
                  <span>Our Values</span>
                </a>
                <a
                  href="#team"
                  className="flex items-center justify-end gap-2 text-[10.5px] sm:text-[11px] font-medium uppercase tracking-wider text-[#7D776D] hover:text-[#8C734B] dark:text-[#A6A29A] dark:hover:text-[#BA9D6A] transition-colors"
                >
                  <span className="text-[9.5px] font-mono opacity-70">03</span>
                  <span>Why Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Right Handwritten Script with Underline */}
          <div className="mt-4 sm:mt-6 text-right select-none">
            <div className="inline-block transform -rotate-3 sm:-rotate-6 origin-right">
              <span className="font-script text-2xl sm:text-3xl md:text-[32px] text-[#8C734B] dark:text-[#BA9D6A] font-semibold leading-none block">
                Your Style,
              </span>
              <span className="font-script text-2xl sm:text-3xl md:text-[32px] text-[#8C734B] dark:text-[#BA9D6A] font-semibold leading-none block relative">
                Our Expertise
                {/* Hand-drawn Underline Stroke */}
                <svg
                  className="absolute -bottom-1.5 left-0 right-0 w-full h-2 text-[#8C734B] dark:text-[#BA9D6A]"
                  viewBox="0 0 100 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 4 Q 50 7 98 2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
