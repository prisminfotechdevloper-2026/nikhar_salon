'use client';

import { TRANSFORMATION_METRICS } from '@/data/transformations';
import { ShieldCheck, Award, Clock } from 'lucide-react';

export default function TransformationsHero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#F5F2ED] dark:bg-[#0A0C0E] border-b border-[#E5E0D8] dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      {/* Subtle Ambient Gold Glow in Background */}
      <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-[#BA9D6A]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-[#BA9D6A]/[0.05] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Top Metadata Strip */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#8C734B] dark:text-[#BA9D6A] uppercase mb-4 sm:mb-6">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#BA9D6A] animate-pulse" />
            NIKHAR SALON KOTA
          </span>
          <span className="text-black/25 dark:text-white/20">•</span>
          <span>VERIFIED CLIENT CASE STUDIES</span>
          <span className="text-black/25 dark:text-white/20">•</span>
          <span className="text-[#555047] dark:text-white/60">PROOF OF CRAFT</span>
        </div>

        {/* 2-Column Luxury Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl text-[#181A1C] dark:text-white font-normal tracking-tight leading-[1.08]">
              Every Transformation Tells a Story of{' '}
              <span className="bg-gradient-to-r from-[#BA9D6A] via-[#D8BE8A] to-[#BA9D6A] bg-clip-text text-transparent italic font-normal">
                Confidence
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5 space-y-4 text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] leading-relaxed">
            <p>
              Explore real before-and-after results, candid client challenges, and precision techniques crafted by Master Firoz Khan and our senior stylists in Vigyan Nagar, Kota.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-[#181A1C] dark:text-white font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/5 dark:border-white/10">
                <ShieldCheck size={13} className="text-[#BA9D6A]" /> 100% Real Clients
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/5 dark:border-white/10">
                <Award size={13} className="text-[#BA9D6A]" /> Zero Editing / Honest Angles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/5 dark:border-white/10">
                <Clock size={13} className="text-[#BA9D6A]" /> Instant Results
              </span>
            </div>
          </div>
        </div>

        {/* 4 Trust Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 pt-2">
          {TRANSFORMATION_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121416] border border-[#E5E0D8] dark:border-white/[0.08] shadow-2xs group hover:border-[#BA9D6A]/50 transition-[border-color,box-shadow] duration-300"
            >
              <div className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#181A1C] dark:text-white tracking-tight mb-1 group-hover:text-[#BA9D6A] transition-colors">
                {metric.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[#181A1C] dark:text-white uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#7D776D] dark:text-white/50 mt-0.5 font-sans">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
