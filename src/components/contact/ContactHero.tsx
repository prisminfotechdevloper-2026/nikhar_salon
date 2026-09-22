'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Mail, ArrowRight, Play } from 'lucide-react';
import VideoTourModal from '@/components/VideoTourModal';

export default function ContactHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-[#090A0C] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden font-sans border-b border-[#BA9D6A]/20 select-none">
        {/* Decorative Luxury Background Glows & Circular Arc Geometry */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#BA9D6A]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#BA9D6A]/[0.05] blur-3xl" />

        {/* Ambient Gold Geometric Rings (matching reference image) */}
        <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[420px] h-[420px] lg:w-[580px] lg:h-[580px] rounded-full border border-[#BA9D6A]/15 opacity-60" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] rounded-full border border-[#BA9D6A]/20 opacity-70" />
        <div className="pointer-events-none absolute -left-20 top-1/3 w-64 h-64 rounded-full border border-[#BA9D6A]/10" />

        {/* Outer Section Layout Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-center">
            
            {/* =========================================================================
                LEFT COLUMN: Header, Description, Micro Info Pills & Action Buttons
                ========================================================================= */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-7 z-10">
              {/* Tag + Horizontal Gold Line */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#C2A774] uppercase font-bold">
                  GET IN TOUCH
                </span>
                <div className="w-12 h-[1.5px] bg-[#BA9D6A]/70" />
              </div>

              {/* Main Display Heading */}
              <div className="space-y-1">
                <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-[54px] font-normal text-white leading-[1.12]">
                  We&apos;re Here
                </h1>
                <h2 className="font-serif-title italic text-4xl sm:text-5xl lg:text-[54px] font-normal gold-gradient-text leading-[1.12]">
                  To Help You
                </h2>
              </div>

              {/* Description Body Text */}
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
                Have a question, need assistance, or want to book an appointment? Our team at Nikhar Salon is always ready to help you look and feel your best. Reach out to us — we&apos;d love to hear from you.
              </p>

              {/* Direct Micro Info Pills (Call Us, Visit Us, Email Us) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                {/* Call Item */}
                <a
                  href="tel:+919784711323"
                  className="flex items-center gap-2 group transition-transform hover:-translate-y-0.5"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#BA9D6A]/40 bg-white/[0.03] flex items-center justify-center text-[#BA9D6A] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors shrink-0">
                    <Phone size={13} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] uppercase tracking-wider text-neutral-400 font-medium">Call Us</span>
                    <span className="block text-[10.5px] sm:text-[11px] font-semibold text-white/90 truncate group-hover:text-[#BA9D6A] transition-colors">
                      +91 97847 11323
                    </span>
                  </div>
                </a>

                {/* Visit Item */}
                <a
                  href="https://maps.google.com/?q=Nikhar+Salon+Vigyan+Nagar+Kota"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 group transition-transform hover:-translate-y-0.5"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#BA9D6A]/40 bg-white/[0.03] flex items-center justify-center text-[#BA9D6A] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors shrink-0">
                    <MapPin size={13} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] uppercase tracking-wider text-neutral-400 font-medium">Visit Us</span>
                    <span className="block text-[10.5px] sm:text-[11px] font-semibold text-white/90 truncate group-hover:text-[#BA9D6A] transition-colors">
                      Vigyan Nagar, Kota
                    </span>
                  </div>
                </a>

                {/* Email Item */}
                <a
                  href="mailto:Fk055163@gmail.com"
                  className="flex items-center gap-2 group transition-transform hover:-translate-y-0.5"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#BA9D6A]/40 bg-white/[0.03] flex items-center justify-center text-[#BA9D6A] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-colors shrink-0">
                    <Mail size={13} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] uppercase tracking-wider text-neutral-400 font-medium">Email Us</span>
                    <span className="block text-[10.5px] sm:text-[11px] font-semibold text-white/90 truncate group-hover:text-[#BA9D6A] transition-colors">
                      Fk055163@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Action Buttons: Get Directions & Watch Studio Tour */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="https://maps.google.com/?q=Nikhar+Salon+Vigyan+Nagar+Kota"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md shadow-[#BA9D6A]/20 hover:brightness-105 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  Get Directions <ArrowRight size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 text-xs text-white/90 hover:text-[#BA9D6A] transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full border border-white/25 bg-white/[0.04] flex items-center justify-center text-white group-hover:border-[#BA9D6A] group-hover:bg-[#BA9D6A] group-hover:text-[#0E1012] transition-all">
                    <Play size={12} className="ml-0.5 fill-current" />
                  </div>
                  <span className="font-medium tracking-wide border-b border-white/30 group-hover:border-[#BA9D6A] pb-0.5">
                    Watch Our Studio
                  </span>
                </button>
              </div>
            </div>

            {/* =========================================================================
                CENTER COLUMN: Featured Luxury Salon Roman Arch Showcase
                ========================================================================= */}
            <div className="lg:col-span-4 flex justify-center relative z-10 py-4 lg:py-0">
              {/* Decorative Geometric Star Accent at left arch apex */}
              <div className="absolute -left-3 sm:-left-5 top-1/4 -translate-y-1/2 z-20 pointer-events-none text-[#BA9D6A] opacity-90 animate-pulse">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>

              {/* Arch Frame Container */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[300px] xl:max-w-[330px]">
                <div className="relative aspect-[3/4.2] rounded-t-[140px] sm:rounded-t-[170px] rounded-b-2xl overflow-hidden border border-[#BA9D6A]/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#141619] group">
                  <Image
                    src="/images/contact/contact.png"
                    alt="Nikhar Salon Luxury Interior & Styling Ambience"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 330px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Dark Vignette & Gold Rim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Floating Handwritten Luxury Script Accent */}
                <div className="absolute -bottom-4 right-[-14px] sm:right-[-20px] z-20 pointer-events-none select-none">
                  <span className="font-script text-2xl sm:text-3xl text-[#E8D4B0] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] block -rotate-6 tracking-wide">
                    Your Beauty Our Priority
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                RIGHT COLUMN: Glassmorphism Contact Info Card & Stay Connected Vertical Tab
                ========================================================================= */}
            <div className="lg:col-span-3 relative flex items-center gap-4 z-10">
              {/* Glass Card */}
              <div className="w-full bg-[#121417]/90 backdrop-blur-md border border-white/[0.1] rounded-2xl p-5 sm:p-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                {/* Header */}
                <span className="block text-[10.5px] font-sans tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A] font-bold uppercase">
                  CONTACT INFO
                </span>

                {/* Info List */}
                <div className="space-y-3.5">
                  {/* Phone Item */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#BA9D6A] shrink-0 mt-0.5">
                      <Phone size={13} />
                    </div>
                    <div className="space-y-0.5">
                      <a
                        href="tel:+919784711323"
                        className="text-xs sm:text-sm text-white font-medium hover:text-[#BA9D6A] transition-colors block"
                      >
                        +91 97847 11323
                      </a>
                      <p className="text-[10.5px] text-neutral-400">
                        Mon - Sun: 9:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Address Item */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#BA9D6A] shrink-0 mt-0.5">
                      <MapPin size={13} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs sm:text-sm text-white font-medium leading-snug">
                        Shop No. 9, Vigyan Nagar
                      </p>
                      <p className="text-[10.5px] text-neutral-400">
                        Kota, Rajasthan - 324005
                      </p>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#BA9D6A] shrink-0 mt-0.5">
                      <Mail size={13} />
                    </div>
                    <div className="space-y-0.5">
                      <a
                        href="mailto:Fk055163@gmail.com"
                        className="text-xs sm:text-sm text-white font-medium hover:text-[#BA9D6A] transition-colors block break-all"
                      >
                        Fk055163@gmail.com
                      </a>
                      <p className="text-[10.5px] text-neutral-400">
                        We&apos;ll reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/[0.08]" />

                {/* Follow Us Social Section */}
                <div className="space-y-2 pt-1">
                  <span className="block text-[10px] tracking-[0.2em] text-neutral-400 font-bold uppercase">
                    FOLLOW US
                  </span>
                  <div className="flex items-center gap-2.5">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/nikhar__mens_parlour?stkn=Z3FmZmwyaG9tb3do&utm_source=qr"
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 w-8 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/80 hover:text-[#0E1012] hover:bg-[#BA9D6A] hover:border-[#BA9D6A] transition-all cursor-pointer"
                      aria-label="Instagram"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 w-8 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/80 hover:text-[#0E1012] hover:bg-[#BA9D6A] hover:border-[#BA9D6A] transition-all cursor-pointer"
                      aria-label="YouTube"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical Side Accent Text: STAY CONNECTED (Visible on Desktop) */}
              <div className="hidden xl:flex flex-col items-center gap-3 shrink-0 py-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C2A774] font-semibold [writing-mode:vertical-rl] rotate-180">
                  STAY CONNECTED
                </span>
                <div className="w-[1px] h-12 bg-[#BA9D6A]/50" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Studio Tour Modal Dialog */}
      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
