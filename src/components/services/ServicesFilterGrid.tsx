'use client';

import { useState, useMemo } from 'react';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { BadgeCheck, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

const CATEGORIES = [
  { id: 'All', label: 'All Offerings' },
  { id: 'HairPatch', label: 'Hair Patch & Systems' },
  { id: 'Haircut', label: 'Haircuts & Styling' },
  { id: 'Beard', label: 'Beard & Shave' },
  { id: 'Facial', label: 'Skin & Facials' },
  { id: 'Spa', label: 'Hair Spa & Keratin' },
];

const TAGS = ['PRIMARY SERVICE', 'ROYAL CRAFT', 'EXECUTIVE', 'SPA THERAPY', 'CLASSIC', 'PREMIUM'];

export default function ServicesFilterGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return servicesData;
    if (activeCategory === 'HairPatch') return servicesData.filter((s) => s.category === 'hair-patch');
    if (activeCategory === 'Haircut') return servicesData.filter((s) => s.category === 'hair');
    if (activeCategory === 'Beard') return servicesData.filter((s) => s.category === 'beard');
    if (activeCategory === 'Facial') return servicesData.filter((s) => s.category === 'skin');
    if (activeCategory === 'Spa') return servicesData.filter((s) => s.category === 'spa');
    return servicesData;
  }, [activeCategory]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <section className="space-y-8 sm:space-y-10 pt-4">
      {/* ========================================================================= */}
      {/* 1. TOP LIVE METADATA STRIP (Matching About Page Standard)                 */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D8] dark:border-white/[0.08] pb-3.5 text-left">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A]">
            NIKHAR SALON KOTA • FULL GROOMING DIRECTORY
          </span>
          <span className="hidden sm:inline text-black/20 dark:text-white/20">•</span>
          <span className="hidden sm:inline font-mono text-[10px] text-[#7D776D] dark:text-[#A6A29A]">
            {servicesData.length} BESPOKE SALON OFFERINGS
          </span>
        </div> 

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E0D8] bg-white/80 px-2.5 py-0.5 text-[10px] font-medium text-[#555047] backdrop-blur-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-[#A6A29A]">
            <BadgeCheck size={13} className="text-[#8C734B] dark:text-[#BA9D6A]" />
            <span>Transparent Fixed Pricing • Zero Hidden Fees</span>
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. LUXURY EDITORIAL 2-COLUMN SPLIT HEADER (Amaia / About Style)           */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 items-end text-left">
        {/* Left Column: Title & Subtitle */}
        <div className="lg:col-span-7 space-y-2.5 text-left">
          <div className="inline-flex items-center gap-2">
            <div className="h-2.5 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A] font-sans">
              THE COMPLETE SALON DIRECTORY
            </span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.14] text-[#181A1C] dark:text-white">
            Explore All Offerings &amp;{' '}
            <span className="italic font-serif text-[#8C734B] dark:text-[#BA9D6A]">
              Pricing
            </span>
          </h2>
        </div>

        {/* Right Column: Lead Description & Trust Badges */}
        <div className="lg:col-span-5 space-y-3.5 text-left">
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#555047] dark:text-[#A6A29A] border-l-2 border-[#BA9D6A]/50 pl-3.5">
            Every precision haircut, royal beard sculpt, detox facial, and non-surgical hair patch installation is executed with hospital-grade hygiene and artisanal dedication. Filter below to discover transparent pricing and session durations.
          </p>

          {/* Micro Trust Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
              <CheckCircle2 size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
              <span>Zero Rush Guarantee</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
              <ShieldCheck size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
              <span>Hospital-Grade Sterilization</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-[10px] font-semibold text-[#181A1C] shadow-2xs border border-[#E5E0D8] dark:border-white/10 dark:bg-white/[0.05] dark:text-white">
              <Clock size={11} className="text-[#8C734B] dark:text-[#BA9D6A]" />
              <span>Zero Waiting Time</span>
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CATEGORY FILTER CONTROLS & DYNAMIC META ROW                            */}
      {/* ========================================================================= */}
      <div className="space-y-3 pt-2">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none sm:flex-wrap">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'All'
              ? servicesData.length
              : servicesData.filter((s) => {
                  if (cat.id === 'HairPatch') return s.category === 'hair-patch';
                  if (cat.id === 'Haircut') return s.category === 'hair';
                  if (cat.id === 'Beard') return s.category === 'beard';
                  if (cat.id === 'Facial') return s.category === 'skin';
                  if (cat.id === 'Spa') return s.category === 'spa';
                  return false;
                }).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#BA9D6A] text-[#0E1012] shadow-sm font-bold ring-1 ring-[#BA9D6A]'
                    : 'border border-[#D9D4CB] dark:border-white/10 bg-white dark:bg-[#181A1C] text-[#555047] dark:text-white/75 hover:border-[#BA9D6A]/50 hover:text-[#181A1C] dark:hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? 'bg-[#0E1012]/15 text-[#0E1012]'
                      : 'bg-[#EAE6DF] dark:bg-white/10 text-[#7D776D] dark:text-white/50'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Filter Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#7D776D] dark:text-[#A6A29A] pt-2 border-t border-[#E5E0D8]/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
             <span>
              Showing <strong className="text-[#181A1C] dark:text-white font-semibold">{filtered.length}</strong> offerings in{' '}
              <strong className="text-[#8C734B] dark:text-[#BA9D6A] font-semibold">{activeCategoryObj.label}</strong>
            </span>
          </div>
          <span className="text-[11px] text-[#7D776D] dark:text-white/40">
            Transparent pricing • All consultations included
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. SERVICES GRID                                                          */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((s, index) => (
          <ServiceCard
            key={s.id}
            service={s}
            tag={TAGS[index % TAGS.length]}
          />
        ))}
      </div>
    </section>
  );
}
